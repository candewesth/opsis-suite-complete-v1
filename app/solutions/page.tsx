'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function SolutionsPage() {
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
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
              <div className="nav-logo-container">
                <div className="nav-logo"></div>
              </div>
              <div className="nav-brand">Opsis Suite</div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/solutions" className="text-emerald-600 font-semibold">
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
      <section className="py-20 px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight leading-tight fade-in">
            Enterprise Solutions for Complete Business Control
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-normal leading-relaxed fade-in">
            Discover our comprehensive suite of integrated management solutions designed specifically for modern construction companies and equipment-heavy businesses.
          </p>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* OPSIS WAREHOUSE */}
            <div className="solution-detail bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-5xl text-white shadow-lg">
                  📦
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Opsis Warehouse</h2>
                  <p className="text-lg text-emerald-600 font-semibold">Complete Inventory Management</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Transform your warehouse operations with our comprehensive inventory management system designed specifically for construction companies and equipment-heavy businesses.
              </p>

              <div className="space-y-6 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-time Equipment Tracking</h4>
                      <p className="text-gray-600 text-sm">Monitor location and status instantly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Automated Workflows</h4>
                      <p className="text-gray-600 text-sm">Streamlined request processing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Multi-role Access</h4>
                      <p className="text-gray-600 text-sm">5 permission levels for teams</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mobile Interface</h4>
                      <p className="text-gray-600 text-sm">Field-ready mobile access</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Reporting</h4>
                      <p className="text-gray-600 text-sm">Comprehensive analytics dashboard</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Maintenance Scheduling</h4>
                      <p className="text-gray-600 text-sm">Automated maintenance alerts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/pricing" 
                  className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
                >
                  View Pricing
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-emerald-500 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* OPSIS TIMESYNC */}
            <div className="solution-detail bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-5xl text-white shadow-lg">
                  ⚡
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Opsis TimeSync</h2>
                  <p className="text-lg text-cyan-600 font-semibold">Time Management & Scheduling</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Optimize your workforce productivity with intelligent scheduling and time tracking solutions designed for field teams and project-based work.
              </p>

              <div className="space-y-6 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Smart Scheduling</h4>
                      <p className="text-gray-600 text-sm">AI-powered shift optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mobile Time Tracking</h4>
                      <p className="text-gray-600 text-sm">GPS-enabled clock in/out</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Project Allocation</h4>
                      <p className="text-gray-600 text-sm">Time tracking by project</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Overtime Management</h4>
                      <p className="text-gray-600 text-sm">Automated overtime calculations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Payroll Integration</h4>
                      <p className="text-gray-600 text-sm">Seamless payroll connectivity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Productivity Analytics</h4>
                      <p className="text-gray-600 text-sm">Team performance insights</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/pricing" 
                  className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-colors"
                >
                  View Pricing
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-cyan-500 text-cyan-600 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* OPSIS HR */}
            <div className="solution-detail bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-5xl text-white shadow-lg">
                  👥
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Opsis HR</h2>
                  <p className="text-lg text-purple-600 font-semibold">Human Resources Management</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Comprehensive HR solutions designed to manage your growing workforce with automated processes and compliance tracking for construction industry requirements.
              </p>

              <div className="space-y-6 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Employee Management</h4>
                      <p className="text-gray-600 text-sm">Complete employee lifecycle</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance Tracking</h4>
                      <p className="text-gray-600 text-sm">Goal setting and reviews</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Benefits Administration</h4>
                      <p className="text-gray-600 text-sm">Health, insurance, and benefits</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Compliance Monitoring</h4>
                      <p className="text-gray-600 text-sm">Safety and regulatory compliance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Training Management</h4>
                      <p className="text-gray-600 text-sm">Skills development tracking</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Document Management</h4>
                      <p className="text-gray-600 text-sm">Secure document storage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/pricing" 
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  View Pricing
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* OPSIS FINANCE */}
            <div className="solution-detail bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-5xl text-white shadow-lg">
                  💰
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Opsis Finance</h2>
                  <p className="text-lg text-orange-600 font-semibold">Financial Management & Analytics</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Take control of your financial operations with advanced budgeting, expense tracking, and financial analytics designed for construction project management.
              </p>

              <div className="space-y-6 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Budget Management</h4>
                      <p className="text-gray-600 text-sm">Project budget planning and tracking</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expense Tracking</h4>
                      <p className="text-gray-600 text-sm">Real-time expense monitoring</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Financial Reporting</h4>
                      <p className="text-gray-600 text-sm">Comprehensive financial dashboards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cost Analysis</h4>
                      <p className="text-gray-600 text-sm">Project profitability analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">ROI Optimization</h4>
                      <p className="text-gray-600 text-sm">Investment return tracking</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Integration Ready</h4>
                      <p className="text-gray-600 text-sm">Connect with accounting systems</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/pricing" 
                  className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  View Pricing
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION SECTION */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 fade-in">Integrated Solutions That Work Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto fade-in">
            Our modular approach allows you to start with one solution and expand as your business grows, with seamless data flow between all modules.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 fade-in">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Integration</h3>
              <p className="text-gray-600">All modules share data automatically, eliminating duplicate entry and ensuring consistency across your operations.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Growth</h3>
              <p className="text-gray-600">Start with the modules you need today and add more as your business expands, with no disruption to existing workflows.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Single Dashboard</h3>
              <p className="text-gray-600">Monitor all aspects of your business from one unified dashboard with real-time insights and actionable analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-8 bg-gradient-to-r from-gray-700 to-gray-600 text-white text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business Operations?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Choose the solutions that fit your needs and start optimizing your operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Schedule a Demo
            </Link>
            <Link 
              href="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-700 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                <li><Link href="/doc" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Opsis Suite. All rights reserved. | Enterprise Management Platform v1.0.0</p>
          </div>
        </div>
      </footer>

      {/* STYLES */}
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
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
