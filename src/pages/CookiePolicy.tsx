
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Cookie, Settings, Eye, Shield, BarChart3, Users } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Cookie className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: January 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Cookie className="w-6 h-6 text-blue-600" />
                What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies help us enhance your browsing experience and provide personalized content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-blue-600" />
                How We Use Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TEKPULSE SOFTWARES uses cookies to improve your experience on our website. We use cookies for various purposes including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Remembering your preferences and settings
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Understanding how you use our website to improve functionality
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Providing personalized content and recommendations
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Ensuring security and preventing fraud
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Analyzing website traffic and usage patterns
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Essential Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-yellow-600" />
                    Functional Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and other customizations you've made to the website.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-600" />
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies are used to track visitors across websites to display relevant advertisements and measure the effectiveness of marketing campaigns. They help us provide you with more relevant content.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In addition to our own cookies, we may also use third-party cookies from trusted partners to enhance your experience:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Google Analytics for website traffic analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Social media platforms for content sharing
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Marketing platforms for targeted advertising
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  You have several options for managing cookies:
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Browser Settings</h3>
                  <p className="text-gray-600">
                    Most web browsers allow you to control cookies through their settings. You can usually find cookie controls in the "Privacy" or "Security" section of your browser's settings.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Cookie Consent Banner</h3>
                  <p className="text-gray-600">
                    When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept or reject.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Opt-Out Links</h3>
                  <p className="text-gray-600">
                    For third-party cookies, you can often opt out directly through the service provider's website or through industry opt-out tools.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                Different cookies have different lifespans:
              </p>
              <ul className="space-y-2 text-gray-600 mt-4">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Session cookies:</strong> Deleted when you close your browser
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <strong>Persistent cookies:</strong> Remain on your device for a set period or until you delete them
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-800 font-medium">TEKPULSE SOFTWARES</p>
                <p className="text-gray-600">Email: info@tekpulsesolutions.com</p>
                <p className="text-gray-600">Phone: +254798653043</p>
                <p className="text-gray-600">Address: 5th Floor, Norwich Union House, Moi Avenue, Nairobi, Kenya</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
