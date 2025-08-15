import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center animate-pulse">
                <span className="text-white text-lg font-bold">◉</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-800">Opsis Suite</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Solutions
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Link 
              href="/login" 
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Warehouse Management 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500"> Made Simple</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your inventory, equipment tracking, and team management with our enterprise-grade SaaS platform built specifically for construction companies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link 
                href="/login" 
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-white rounded-2xl font-semibold text-lg hover:bg-emerald-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                🚀 Start Free Trial
              </Link>
              <Link 
                href="/pricing" 
                className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold text-lg hover:border-emerald-500 hover:text-emerald-500 transition-colors"
              >
                💰 View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">0+</div>
                <div className="text-gray-600 font-medium">Active Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">0+</div>
                <div className="text-gray-600 font-medium">Equipment Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">0+</div>
                <div className="text-gray-600 font-medium">Loans Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Warehouse
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for construction companies and equipment-heavy businesses with real-world workflows in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Core Warehouse Module */}
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-8 border-2 border-emerald-100 hover:border-emerald-200 transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl mb-6">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Warehouse Management</h3>
              <p className="text-gray-600 mb-6">Complete inventory tracking, equipment loans, and maintenance scheduling with role-based permissions.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Real-time equipment status</li>
                <li>• Loan approval workflows</li>
                <li>• Maintenance alerts</li>
                <li>• Location tracking</li>
              </ul>
              <div className="text-emerald-600 font-bold text-lg">Starting at $49/mo</div>
            </div>

            {/* Future Modules */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-100 opacity-75 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Q2 2025
              </div>
              <div className="text-5xl mb-6">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">HR Management</h3>
              <p className="text-gray-600 mb-6">Employee records, payroll integration, and performance tracking for your construction teams.</p>
              <div className="text-purple-600 font-bold text-lg">Coming Soon</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border-2 border-orange-100 opacity-75 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Q3 2025
              </div>
              <div className="text-5xl mb-6">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Time Sync</h3>
              <p className="text-gray-600 mb-6">Project time tracking, scheduling, and productivity analytics for field teams.</p>
              <div className="text-orange-600 font-bold text-lg">Coming Soon</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-100 opacity-75 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Q4 2025
              </div>
              <div className="text-5xl mb-6">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Finance Suite</h3>
              <p className="text-gray-600 mb-6">Invoicing, expense tracking, and comprehensive financial reporting.</p>
              <div className="text-blue-600 font-bold text-lg">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How Opsis Suite Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes, not months. Our intuitive platform grows with your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sign Up & Setup</h3>
              <p className="text-gray-600">Create your company account and invite your team members with appropriate roles and permissions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Import Your Inventory</h3>
              <p className="text-gray-600">Add your equipment, tools, and materials to the system with detailed specifications and locations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manage & Track</h3>
              <p className="text-gray-600">Start processing loans, tracking locations, and managing your warehouse with real-time visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Construction Companies
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying about Opsis Suite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <div className="text-gray-600 mb-6 italic text-lg">
                "Opsis Suite transformed how we manage our equipment. We went from spreadsheets to a professional system overnight."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                  A
                </div>
                <div>
                  <div className="font-bold text-gray-900">Alex Rodriguez</div>
                  <div className="text-gray-600">CVE San Diego</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <div className="text-gray-600 mb-6 italic text-lg">
                "The loan approval system is genius. Our warehouse manager now has full control, and field teams know exactly what's available."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  M
                </div>
                <div>
                  <div className="font-bold text-gray-900">Maria Santos</div>
                  <div className="text-gray-600">Tech Corporation</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <div className="text-gray-600 mb-6 italic text-lg">
                "Finally, a system that understands construction workflows. The multi-role access is exactly what we needed."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  J
                </div>
                <div>
                  <div className="font-bold text-gray-900">John Smith</div>
                  <div className="text-gray-600">Construction LLC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Warehouse Management?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join construction companies already using Opsis Suite to streamline their operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/login" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-500 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              🚀 Start Your Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-emerald-500 transition-colors"
            >
              💬 Schedule Demo
            </Link>
          </div>
          <div className="mt-6 text-emerald-100">
            No credit card required • 30-day free trial • Cancel anytime
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">◉</span>
                </div>
                <span className="text-xl font-bold">Opsis Suite</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional warehouse management for construction companies. Streamline your operations with our enterprise-grade platform.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Sign In</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Opsis Suite. All rights reserved. Professional warehouse management for construction companies.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
