import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cinute InfoMedia',
  description: 'Privacy Policy for Cinute InfoMedia - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: September 28, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Cinute InfoMedia ("we," "our," or "us") is committed to protecting the privacy of our clients, website visitors, and all individuals whose personal information we collect and process. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website, use our services, or interact with us.
          </p>

          <p className="text-gray-700 mb-8">
            By accessing our website or using our services, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please do not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect various types of information to provide and improve our services, including:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a. Personal Information</h3>
          <p className="text-gray-700 mb-4">
            This includes information that can be used to identify you directly or indirectly, such as:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Contact Information:</strong> Name, email address, phone number, company name, and mailing address.</li>
            <li><strong>Communication Data:</strong> Information you provide when you communicate with us, such as inquiries, feedback, or support requests.</li>
            <li><strong>Client Data:</strong> Information related to your projects and services with us, including project details, requirements, and communication history.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b. Non-Personal Information</h3>
          <p className="text-gray-700 mb-4">
            This includes information that cannot be used to identify you personally, such as:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, operating system, referral sources, pages viewed, and time spent on pages.</li>
            <li><strong>Technical Data:</strong> Device information, unique device identifiers, and other diagnostic data.</li>
            <li><strong>Aggregated Data:</strong> Statistical or demographic data derived from your personal information but not directly identifying you.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Collect Information</h2>
          <p className="text-gray-700 mb-4">We collect information through various methods:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Directly from You:</strong> When you fill out forms on our website (e.g., contact forms, request a quote forms), subscribe to our newsletter, communicate with us via email or phone, or engage us for services.</li>
            <li><strong>Automatically:</strong> As you navigate our website, we may use cookies, web beacons, and other tracking technologies to collect usage and technical data. This helps us improve your experience and analyze website performance.</li>
            <li><strong>From Third Parties:</strong> We may receive information from third-party partners, analytics providers, or social media platforms, consistent with their privacy policies.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>To Provide Services:</strong> To deliver our digital transformation, web development, brand identity, SEO, social media, performance ads, AI automation, AI chatbot, and support services.</li>
            <li><strong>To Communicate with You:</strong> To respond to your inquiries, provide customer support, send important updates, and deliver marketing communications (with your consent where required).</li>
            <li><strong>To Improve Our Website and Services:</strong> To analyze website usage, identify trends, troubleshoot issues, and enhance the functionality and user experience of our website and services.</li>
            <li><strong>For Marketing and Advertising:</strong> To personalize content, deliver targeted advertisements, and measure the effectiveness of our marketing campaigns.</li>
            <li><strong>For Legal and Compliance:</strong> To comply with legal obligations, enforce our terms and conditions, and protect our rights, privacy, safety, or property, and/or that of our affiliates, you, or other third parties.</li>
            <li><strong>For Security:</strong> To detect, prevent, and address technical issues, fraud, or security incidents.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Disclosure of Your Information</h2>
          <p className="text-gray-700 mb-4">We may share your information with third parties in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Service Providers:</strong> We may share information with third-party vendors, consultants, and other service providers who perform services on our behalf, such as hosting, analytics, marketing, and customer support. These service providers are obligated to protect your information and use it only for the purposes for which it was disclosed.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
            <li><strong>With Your Consent:</strong> We may disclose your information to other third parties with your explicit consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Data Protection Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location and applicable data protection laws (such as GDPR or CCPA), you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Right to Access:</strong> Request access to the personal information we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information.</li>
            <li><strong>Right to Erasure (Right to be Forgotten):</strong> Request the deletion of your personal information under certain conditions.</li>
            <li><strong>Right to Restrict Processing:</strong> Request that we limit the processing of your personal information under certain conditions.</li>
            <li><strong>Right to Data Portability:</strong> Request to receive your personal information in a structured, commonly used, and machine-readable format.</li>
            <li><strong>Right to Object:</strong> Object to the processing of your personal information under certain conditions.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time where we rely on consent to process your personal information.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            To exercise any of these rights, please contact us using the contact details provided below.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Third-Party Links</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to remove that information from our servers.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">Cinute InfoMedia</p>
            <p className="text-gray-700">Email: contact@cinuteinfomedia.com</p>
            <p className="text-gray-700">Phone: +91 7700 995 410</p>
            <p className="text-gray-700">Address: Office # 1, 2nd Floor, Ashley Towers, Kanakia Rd, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107</p>
          </div>
        </div>
      </div>
    </div>
  );
}
