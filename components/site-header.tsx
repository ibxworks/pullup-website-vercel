import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
      {/* Logo and Left Navigation */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center font-bold text-xl text-gray-900 leading-tight">
          <div>PULL</div>
          <div>UP</div>
        </Link>

        {/* Left Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            Home
          </Link>
          <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
            Features
          </a>
          <a href="#updates" className="text-gray-600 hover:text-gray-900 font-medium">
            Updates
          </a>
        </nav>
      </div>

      {/* Right Navigation */}
      <div className="flex items-center space-x-6">
        <a href="#cornell-section" className="text-gray-600 hover:text-gray-900 font-medium">
          For Cornell
        </a>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
          <a href="https://cornellracing.org/" target="_blank" rel="noopener noreferrer">Get App</a>
        </Button>
      </div>
    </header>
  )
}
