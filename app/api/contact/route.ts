import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { name, email, service, message } = body;
    
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    await sendEmailNotification(body);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Contact form submission error:', error);
    let errorMessage = 'Internal server error';
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check your SMTP username and password.';
    } else if (error.code === 'ECONNREFUSED') {
      errorMessage = 'Could not connect to SMTP server. Please check host and port.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Connection to SMTP server timed out.';
    }
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Use this if you encounter issues with self-signed certs, but be cautious in production
    },
    // For port 587 with STARTTLS, secure should be false and requireTLS true
    // For Zoho Mail, this is often the correct configuration.
    requireTLS: process.env.SMTP_PORT === '587' ? true : false,
  });

  const mailOptions = {
    from: process.env.SMTP_USER, // Sender address
    to: 'contact@cinuteinfomedia.com', // Recipient address (your business email)
    subject: `New Contact Form Submission - ${data.service}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
