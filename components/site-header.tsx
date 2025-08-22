import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SiteHeader() {
  return (
    <header
      className="flex items-center justify-between px-6 py-4 border-b"
      style={{ backgroundColor: "#171717", borderBottomColor: "#1F1F1F" }}
    >
      {/* Logo and Left Navigation */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/header_pulluplogo.png?height=40&width=80&text=PULL+UP+LOGO"
            alt="Pull Up Logo"
            width={96}
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        {/* Left Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300 font-medium">
            Home
          </Link>
          <a href="#features" className="text-white hover:text-gray-300 font-medium">
            Features
          </a>
          <a href="#updates" className="text-white hover:text-gray-300 font-medium">
            Updates
          </a>
        </nav>
      </div>

      {/* Right Navigation */}
      <div className="flex items-center space-x-6">
        <a href="#cornell-section" className="text-white hover:text-gray-300 font-medium">
          For Cornell
        </a>
        <Button
          asChild
          className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-lg font-medium"
          style={{ backgroundColor: "#171717" }}
        >
          <a href="https://apps.apple.com/us/app/pullup-by-ibx/id6749258771" target="_blank" rel="noopener noreferrer">
            Get App
          </a>
        </Button>
      </div>
    </header>
  )
}
