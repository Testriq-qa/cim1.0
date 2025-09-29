import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Cinute InfoMedia',
  description: 'Cookie Policy for Cinute InfoMedia - Learn about how we use cookies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-gray-600">Last Updated: September 28, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            This Cookie Policy explains what cookies are, how Cinute InfoMedia ("we," "our," or "us") uses them on our website (cinuteinfomedia.com), and your choices regarding cookies. By using our website, you consent to the use of cookies in accordance with this policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. What are Cookies?</h2>
          <p className="text-gray-700 mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="text-gray-700 mb-4">We use cookies for the following purposes:</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a. Essential Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies are strictly necessary to provide you with services available through our website and to enable you to use some of its features. Without these cookies, we cannot provide the services you have asked for, such as accessing secure areas or remembering items in a shopping cart. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b. Analytics and Performance Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily. We use Google Analytics for this purpose. These cookies collect information in an aggregated form and do not directly identify you.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c. Functionality Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies enable our website to remember choices you make (e.g., your username, language, or the region you are in) and provide enhanced, more personal features. They may also be used to provide services you have asked for, such as watching a video or commenting on a blog. The information these cookies collect may be anonymized, and they cannot track your browsing activity on other websites.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">d. Marketing and Advertising Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns. They are usually placed by advertising networks with our permission. They remember that you have visited a website and this information is shared with other organizations such as advertisers. This means that after you have been to our website, you may see advertisements about our services elsewhere on the Internet.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Third-Party Cookies</h2>
          <p className="text-gray-700 mb-4">
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These third parties may include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Google Analytics:</strong> For website analytics and performance tracking.</li>
            <li><strong>Google Ads/Meta Ads:</strong> For advertising and remarketing purposes.</li>
            <li><strong>Social Media Platforms:</strong> For integration with social media features (e.g., sharing content).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Choices Regarding Cookies</h2>
          <p className="text-gray-700 mb-4">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a. Cookie Consent Tool</h3>
          <p className="text-gray-700 mb-4">
            Our website may feature a cookie consent banner or tool that allows you to manage your preferences for different categories of cookies (e.g., essential, analytics, marketing) upon your first visit or at any time through a dedicated link.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b. Browser Settings</h3>
          <p className="text-gray-700 mb-4">
            Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Cookie settings guide</a></li>
            <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Cookie settings guide</a></li>
            <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40c9-9322-d604-cf548d2dcd62" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Cookie settings guide</a></li>
            <li><strong>Apple Safari:</strong> <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Cookie settings guide</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c. Opt-out Links</h3>
          <p className="text-gray-700 mb-4">
            For some third-party advertising networks, you can opt out of their targeted advertising by visiting:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>DAA Opt-Out Page:</strong> <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a></li>
            <li><strong>NAI Opt-Out Page:</strong> <a href="http://optout.networkadvertising.org/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a></li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Changes to This Cookie Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date. You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Cookie Policy, please contact us:
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

