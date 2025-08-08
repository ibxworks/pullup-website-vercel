import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import Link from "next/link"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Download Section */}
              <div className="md:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold">Get Pull Up</h3>
                <p className="text-gray-300 text-lg"></p>

                {/* App Store Button */}
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="bg-black border border-gray-600 rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="text-2xl">📱</div>
                    <div>
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="bg-white p-4 rounded-lg">
                    <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                      <div className="text-center text-gray-500 text-xs">
                        <div className="text-2xl mb-1">📱</div>
                        <div>QR Code</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Product</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="hover:text-white transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/updates" className="hover:text-white transition-colors">
                      Updates
                    </Link>
                  </li>
                  <li>
                    <Link href="/cornell" className="hover:text-white transition-colors">
                      For Cornell
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company & Support Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center font-bold text-lg text-white leading-tight">
                    <div>PULL</div>
                    <div>UP</div>
                  </div>
                  <span className="text-gray-400">© 2024 Pull Up. All rights reserved.</span>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
