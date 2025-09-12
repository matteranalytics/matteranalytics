import Link from "next/link"
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
            <div className="text-left w-18 h-18 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/ma_logo.png"          // put your file in /public/logo.png
                alt="Matter Analytics logo"
                width={100}
                height={100}
                // className="object-contain"
              />
            </div>
            <span className="font-bold text-xl text-foreground text-white text-left">Matter Analytics</span>
          </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Transforming businesses through intelligent data solutions and cutting-edge AI/ML consulting services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">admin@matteranalytics.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Chicago, IL</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/approach"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Approach
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/portfolio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">AI Strategy</li>
              <li className="text-primary-foreground/80">Data Analytics</li>
              <li className="text-primary-foreground/80">ML Implementation</li>
              <li className="text-primary-foreground/80">Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">© 2025 Matter Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
