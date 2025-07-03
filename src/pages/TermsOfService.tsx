
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Scale, FileText, AlertTriangle, CheckCircle, XCircle, Gavel } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Last updated: January 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service ("Terms") govern your use of TEKPULSE SOFTWARES' website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                Use of Services
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Permitted Use</h3>
                  <p className="text-gray-600">
                    You may use our services for lawful business purposes in accordance with these Terms. You agree to use our services responsibly and in compliance with all applicable laws and regulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">User Accounts</h3>
                  <p className="text-gray-600">
                    When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-600" />
                Prohibited Activities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  Using our services for any unlawful purpose or in violation of any regulations
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  Attempting to gain unauthorized access to our systems or data
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  Transmitting viruses, malware, or other harmful code
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  Interfering with or disrupting our services or servers
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  Copying, modifying, or distributing our proprietary content without permission
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our services and their original content, features, and functionality are owned by TEKPULSE SOFTWARES and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to provide reliable and uninterrupted service, but we cannot guarantee that our services will always be available or error-free. We reserve the right to:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Modify or discontinue our services at any time
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Perform maintenance and updates that may temporarily affect service availability
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Suspend or terminate your access for violation of these Terms
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, TEKPULSE SOFTWARES shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  If you purchase any of our paid services, you agree to pay all fees and charges as described in our pricing. All payments are due in advance and are non-refundable unless otherwise specified.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to change our pricing at any time. Price changes will be communicated to you with reasonable advance notice.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Gavel className="w-6 h-6 text-blue-600" />
                Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Kenya.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by posting the new Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
