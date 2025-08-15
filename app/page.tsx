export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center animate-pulse">
              <span className="text-white text-xl font-bold">◉</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Opsis Suite</h1>
              <p className="text-sm text-gray-600">Warehouse Management</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Professional Warehouse Management
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500"> Made Simple</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your inventory, equipment tracking, and team management with our enterprise-grade SaaS platform built for construction companies.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-emerald-500 text-white rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-all transform hover:-translate-y-1">
              🚀 Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-emerald-500 hover:text-emerald-500 transition-colors">
              💰 View Pricing
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">0+</div>
              <div className="text-gray-600">Active Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">0+</div>
              <div className="text-gray-600">Equipment Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">0+</div>
              <div className="text-gray-600">Loans Processed</div>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600">Built specifically for construction companies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Warehouse Management</h3>
            <p className="text-gray-600 mb-4">Complete inventory tracking and equipment loans</p>
            <div className="text-emerald-500 font-semibold">Starting at $49/mo</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg opacity-60">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">HR Management</h3>
            <p className="text-gray-600 mb-4">Employee records and payroll integration</p>
            <div className="text-orange-500 font-semibold">Q2 2025</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg opacity-60">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Time Sync</h3>
            <p className="text-gray-600 mb-4">Project time tracking and scheduling</p>
            <div className="text-orange-500 font-semibold">Q3 2025</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg opacity-60">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Finance Suite</h3>
            <p className="text-gray-600 mb-4">Invoicing and financial reporting</p>
            <div className="text-orange-500 font-semibold">Q4 2025</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-500 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Warehouse?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join construction companies already using Opsis Suite
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-500 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">
            🚀 Start Your Free Trial
          </button>
          <div className="mt-4 text-emerald-100 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">◉</span>
            </div>
            <span className="text-xl font-bold">Opsis Suite</span>
          </div>
          <p className="text-gray-400 mb-4">Professional Warehouse Management for Construction Companies</p>
          <div className="text-gray-500 text-sm">
            © 2025 Opsis Suite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
