'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // Animaciones de entrada
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* NAVIGATION BAR */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section - Exacto como en Wix */}
            <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
              <div className="nav-logo-container">
                <div className="nav-logo"></div>
              </div>
              <div className="nav-brand">Opsis Suite</div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/solutions" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Solutions
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Link 
              href="/login" 
              className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Access Workspace
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-30 animate-float"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight leading-tight fade-in">
            Complete Enterprise Visibility
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-normal leading-relaxed fade-in">
            Streamline operations, optimize workflows, and gain total control over your business with our integrated management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
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
      <section className="py-20 px-8 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Powerful Solutions for Modern Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated modules designed to optimize every aspect of your operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Opsis Warehouse */}
            <div className="solution-card group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden fade-in">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500 rounded-t-3xl"></div>
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                📦
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Opsis Warehouse</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete inventory management with real-time tracking and automated workflows.
              </p>
              <ul className="text-left space-y-3 text-gray-700 mb-6">
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

            {/* Opsis TimeSync */}
            <div className="solution-card group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden fade-in">
              <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500 rounded-t-3xl"></div>
              <div className="w-20 h-20 bg-cyan-500 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Opsis TimeSync</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Employee scheduling and time synchronization management for optimal productivity.
              </p>
              <ul className="text-left space-y-3 text-gray-700 mb-6">
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

            {/* Opsis HR */}
            <div className="solution-card group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden fade-in">
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-600 rounded-t-3xl"></div>
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                👥
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Opsis HR</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive human resources management for growing organizations.
              </p>
              <ul className="text-left space-y-3 text-gray-700 mb-6">
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

            {/* Opsis Finance */}
            <div className="solution-card group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden fade-in">
              <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500 rounded-t-3xl"></div>
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                💰
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Opsis Finance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Financial tracking and budget control with advanced analytics capabilities.
              </p>
              <ul className="text-left space-y-3 text-gray-700 mb-6">
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
      <section className="py-16 px-8 bg-gradient-to-r from-gray-700 to-gray-600 text-white text-center">
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
      <section className="py-20 px-8 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto fade-in">
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

      {/* FOOTER - Exacto como en las capturas */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/solutions" className="hover:text-white transition-colors">Warehouse Management</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Time Synchronization</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Human Resources</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Financial Management</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Opsis Suite. All rights reserved. | Enterprise Management Platform v1.0.0</p>
          </div>
        </div>
      </footer>

      {/* STYLES - Incluyendo el logo exacto */}
      <style jsx>{`
        .nav-logo-container {
          position: relative;
          width: 54px;
          height: 54px;
          border-radius: 14px;
          padding: 2px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd, #00d2d3, #ff9f43, #10ac84, #ee5a6f, #ff6b6b);
          background-size: 400% 400%;
          animation: gradientShift 4s ease-in-out infinite;
        }

        .nav-logo-container:hover {
          animation-duration: 1s;
        }

        .nav-logo {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #495057, #6c757d);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
          font-weight: 300;
          box-shadow: 0 4px 15px rgba(73, 80, 87, 0.2);
          position: relative;
          z-index: 2;
          overflow: hidden;
        }

        .nav-logo::after {
          content: '◉';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          color: white;
          animation: winkEye 4s ease-in-out infinite;
        }

        .nav-logo:hover::after {
          animation: winkEye 0.8s ease-in-out infinite;
        }

        @keyframes winkEye {
          0%, 85% { 
            content: '◉'; 
            transform: translate(-50%, -50%) scaleY(1); 
          }
          88% { 
            content: '◉'; 
            transform: translate(-50%, -50%) scaleY(0.1); 
          }
          92% { 
            content: '◉'; 
            transform: translate(-50%, -50%) scaleY(1); 
          }
          94% { 
            content: '◉'; 
            transform: translate(-50%, -50%) scaleY(0.1); 
          }
          97% { 
            content: '◉'; 
            transform: translate(-50%, -50%) scaleY(1); 
          }
          100% { 
            content: '◉'; 
            transform: translate(-50%, -50%) scaleY(1); 
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }

        .nav-brand {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #495057, #6c757d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .bg-radial-gradient {
          background: radial-gradient(circle at 30% 70%, rgba(108, 117, 125, 0.08) 0%, transparent 50%), 
                      radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -10px) rotate(1deg); }
          66% { transform: translate(-5px, 5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  )
}
