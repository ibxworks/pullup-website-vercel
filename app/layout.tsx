import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import Link from "next/link"
import Image from "next/image"

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
                  <a
                    href="https://apps.apple.com/us/app/pullup-by-ibx/id6749258771"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/footer_download.svg"
                      alt="Download on the App Store"
                      width={300}
                      height={100}
                      className="h-40 w-auto"
                    />
                  </a>

                  {/* QR Code */}
                  <div className="bg-white p-4 rounded-lg">
                    <Image
                      src="/footer_qrcode.png"
                      alt="QR Code to download Pull Up app"
                      width={96}
                      height={96}
                      className="w-24 h-24"
                    />
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
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact Us
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
                  <Image
                    src="/header_pulluplogo.png?height=40&width=80&text=PULL+UP+LOGO"
                    alt="Pull Up Logo"
                    width={80}
                    height={40}
                    className="h-10 w-auto"
                  />
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
