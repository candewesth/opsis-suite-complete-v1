'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
  useEffect(() => {
    // Fade in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const showNotification = (message: string, type: string = 'info') => {
    // You can implement a toast notification system here later
    console.log(`${type}: ${message}`)
  }

  return (
    <div className="page-container">
      {/* Navigation - Added since you're removing Wix header */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center animate-pulse">
                <span className="text-white text-lg font-bold">◉</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Opsis Suite</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Home</Link>
              <Link href="/solutions" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Solutions</Link>
              <Link href="/features" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Features</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Contact</Link>
            </div>

            <Link 
              href="/login" 
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section py-20 px-8 text-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-30 animate-float"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight leading-tight">
            Complete Enterprise Visibility
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
            Streamline operations, optimize workflows, and gain total control over your business with our integrated management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/login" 
              className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Access Workspace
            </Link>
            <Link 
              href="/solutions" 
              className="border-2 border-gray-700 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="py-12 px-8 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Powerful Solutions for Modern Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated modules designed to optimize every aspect of your operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Warehouse Card */}
            <div className="solution-card group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500 rounded-t-3xl"></div>
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                📦
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Opsis Warehouse</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete inventory management with real-time tracking and automated workflows.
              </p>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  Real-time equipment tracking
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  Automated request processing
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  Mobile-optimized interface
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  Advanced reporting & analytics
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  Inspection workflows
                </li>
              </ul>
            </div>

            {/* TimeSync Card */}
            <div className="solution-card group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500 rounded-t-3xl"></div>
              <div className="w-20 h-20 bg-cyan-500 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Opsis TimeSync</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Employee scheduling and time synchronization management for optimal productivity.
              </p>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold mt-0.5">✓</span>
                  Smart shift scheduling
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold mt-0.5">✓</span>
                  Mobile time tracking
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold mt-0.5">✓</span>
                  Project time allocation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold mt-0.5">✓</span>
                  Overtime management
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 font-bold mt-0.5">✓</span>
                  Payroll integration ready
                </li>
              </ul>
            </div>

            {/* HR Card */}
            <div className="solution-card group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-600 rounded-t-3xl"></div>
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                👥
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Opsis HR</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive human resources management for growing organizations.
              </p>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  Employee management
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  Performance tracking
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  Benefits administration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  Compliance monitoring
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  Training management
                </li>
              </ul>
            </div>

            {/* Finance Card */}
            <div className="solution-card group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500 rounded-t-3xl"></div>
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                💰
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Opsis Finance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Financial tracking and budget control with advanced analytics capabilities.
              </p>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
                  Budget management
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
                  Expense tracking
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
                  Financial reporting
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
                  Cost analysis
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
                  ROI optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-8 px-8 bg-gradient-to-r from-gray-700 to-gray-600 text-white text-center" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-in">
              <div className="text-5xl font-extrabold mb-2">99.9%</div>
              <div className="text-xl text-gray-200 font-medium">System Uptime</div>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-extrabold mb-2">500+</div>
              <div className="text-xl text-gray-200 font-medium">Companies Served</div>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-extrabold mb-2">2.5M</div>
              <div className="text-xl text-gray-200 font-medium">Transactions</div>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-extrabold mb-2">24/7</div>
              <div className="text-xl text-gray-200 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-8 px-8 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies already using Opsis to streamline their business operations.
          </p>
          <Link 
            href="/login" 
            className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Access Workspace
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">◉</span>
                </div>
                <span className="text-xl font-bold">Opsis Suite</span>
              </div>
              <p className="text-gray-400">Professional warehouse management for construction companies.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Opsis Suite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
