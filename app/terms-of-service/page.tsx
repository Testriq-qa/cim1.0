import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Cinute InfoMedia',
  description: 'Terms of Service for Cinute InfoMedia - Learn about the terms and conditions for using our services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600">Last Updated: September 28, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Welcome to Cinute InfoMedia! These Terms of Service ("Terms") govern your access to and use of our website (cinuteinfomedia.com) and the services we provide, including but not limited to digital transformation, web development, brand identity, SEO, social media, performance ads, AI automation, AI chatbot, and support services (collectively, "Services").
          </p>

          <p className="text-gray-700 mb-8">
            By accessing or using our website and Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or Services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By using our Services, you affirm that you are of legal age to enter into this agreement or have obtained parental or guardian consent. You also agree to comply with all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Our Services</h2>
          <p className="text-gray-700 mb-4">
            Cinute InfoMedia provides a range of digital services designed to help businesses grow and transform their digital presence. Specific details regarding project scope, deliverables, timelines, and payment terms will be outlined in a separate service agreement or proposal between Cinute InfoMedia and the client.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Client Responsibilities</h2>
          <p className="text-gray-700 mb-4">As a client or user of our Services, you agree to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide accurate, complete, and up-to-date information as requested.</li>
            <li>Cooperate with Cinute InfoMedia in a timely and efficient manner to facilitate the provision of Services.</li>
            <li>Ensure that any content, materials, or intellectual property you provide to us for use in the Services (e.g., website content, logos, images) does not infringe upon the rights of any third party.</li>
            <li>Make timely payments for Services as agreed upon in your service agreement.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a. Cinute InfoMedia Intellectual Property</h3>
          <p className="text-gray-700 mb-4">
            All content on our website, including text, graphics, logos, images, software, and the compilation thereof, is the property of Cinute InfoMedia or its suppliers and protected by copyright and other intellectual property laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b. Client Intellectual Property</h3>
          <p className="text-gray-700 mb-4">
            Any intellectual property provided by the client to Cinute InfoMedia for the purpose of delivering the Services remains the property of the client. Upon full payment for Services, any custom work created by Cinute InfoMedia specifically for the client (e.g., website design, custom code, brand assets) will be transferred to the client, as specified in the service agreement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
          <p className="text-gray-700 mb-4">
            Payment terms for our Services will be detailed in the individual service agreement or proposal provided to each client. All invoices are due as per the agreed-upon schedule. Failure to make timely payments may result in the suspension or termination of Services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Confidentiality</h2>
          <p className="text-gray-700 mb-4">
            Both Cinute InfoMedia and the client agree to keep confidential all non-public information disclosed by one party to the other during the course of providing or receiving Services. This includes, but is not limited to, business plans, technical data, financial information, and client lists.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Disclaimers and Limitation of Liability</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a. Disclaimer of Warranties</h3>
          <p className="text-gray-700 mb-4">
            Our website and Services are provided on an "as is" and "as available" basis. Cinute InfoMedia makes no representations or warranties of any kind, express or implied, as to the operation of our website or the information, content, or materials included on our website. To the fullest extent permissible by applicable law, Cinute InfoMedia disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b. Limitation of Liability</h3>
          <p className="text-gray-700 mb-4">
            Cinute InfoMedia will not be liable for any damages of any kind arising from the use of our website or Services, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages. This includes, without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Indemnification</h2>
          <p className="text-gray-700 mb-4">
            You agree to indemnify, defend, and hold harmless Cinute InfoMedia, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses (including reasonable attorneys' fees) relating to or arising out of your use of or inability to use the website or Services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Cinute InfoMedia reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Cinute InfoMedia in asserting any available defenses.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Governing Law and Dispute Resolution</h2>
          <p className="text-gray-700 mb-4">
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>
          <p className="text-gray-700 mb-4">
            Any dispute arising out of or relating to these Terms or the Services shall be resolved through good faith negotiations between the parties. If the parties are unable to resolve the dispute, it shall be submitted to binding arbitration in Mumbai, Maharashtra, India, in accordance with the provisions of the Arbitration and Conciliation Act, 1996, or any statutory modification or re-enactment thereof.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p className="text-gray-700 mb-4">
            By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms, please contact us:
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

