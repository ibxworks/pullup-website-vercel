import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about Pull Up? We'd love to hear from you. Get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>

                {/* Email Addresses */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-blue-600 text-sm">✉</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">General Inquiries</h3>
                      <a
                        href="mailto:pullupapp2025@gmail.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        pullupapp2025@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-blue-600 text-sm">✉</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Technical Support</h3>
                      <a
                        href="mailto:admin@ibxworks.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        admin@ibxworks.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Built by IBX Section */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Built by IBX</h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-gray-600 text-sm">🏢</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Company</h3>
                      <p className="text-gray-600">IBX LLC</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-gray-600 text-sm">📍</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Mailing Address</h3>
                      <p className="text-gray-600">
                        418 Broadway Ste N<br />
                        Albany, NY 12207
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-gray-600 text-sm">🌐</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Website</h3>
                      <a
                        href="https://www.ibxworks.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        www.ibxworks.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">About Pull Up</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pull Up is the social media platform designed for showing up, not showing off. We're building the
                  future of spontaneous connections and meaningful gatherings.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you have feedback, feature requests, or just want to say hello, we'd love to hear from you.
                  Our team is dedicated to creating the best possible experience for our users.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    ← Back to Home
                  </Link>
                  <Link href="/features" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    View Features
                  </Link>
                  <Link href="/updates" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    Latest Updates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
