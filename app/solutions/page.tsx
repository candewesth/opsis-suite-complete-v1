'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SolutionsPage() {
  const [notification, setNotification] = useState({ show: false, message: '', type: 'info' })

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

  const showNotification = (message: string, type: string = 'info') => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'info' })
    }, 3000)
  }

  const handleDemoRequest = (solutionName: string) => {
    showNotification(`Demo request for ${solutionName} submitted!`, 'info')
  }

  return (
    <div className="page-container">
      {/* NAVIGATION BAR - MISMO EN TODAS LAS PÁGINAS */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                <div className="nav-logo-container">
                  <div className="nav-logo"></div>
                </div>
                <div className="nav-brand">Opsis Suite</div>
              </Link>
            </div>

            {/* Navigation Links - CENTRADOS */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
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
            </div>

            {/* CTA Button */}
            <div className="flex items-center">
              <Link href="/login" className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Access Workspace
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - EXACTO COMO WIX */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title fade-in">Enterprise Solutions</h1>
          <p className="hero-subtitle fade-in">
            Comprehensive business management tools designed to streamline operations, optimize workflows, and drive growth across every department of your organization.
          </p>
        </div>
      </section>

      {/* SOLUTIONS SECTION - EXACTO COMO WIX */}
      <section className="solutions-section">
        <div className="section-container">
          <div className="solutions-grid">
            
            {/* WAREHOUSE SOLUTION */}
            <div className="solution-card warehouse-card fade-in">
              <div className="solution-header">
                <div className="solution-icon">📦</div>
                <div className="solution-title-section">
                  <h2>Opsis Warehouse</h2>
                  <p className="solution-subtitle">Inventory & Equipment Management</p>
                </div>
              </div>
              <p className="solution-description">
                Complete inventory management system with real-time tracking, automated workflows, and comprehensive reporting. Perfect for managing equipment, supplies, and assets across multiple locations.
              </p>
              <ul className="solution-features">
                <li>Real-time equipment tracking and monitoring</li>
                <li>Automated request processing and approvals</li>
                <li>Mobile-optimized interface for field operations</li>
                <li>Advanced reporting and analytics dashboard</li>
                <li>Inspection workflows and compliance tracking</li>
                <li>Barcode/QR code scanning integration</li>
                <li>Multi-location inventory management</li>
                <li>Custom alerts and notifications</li>
              </ul>
              <div className="solution-cta">
                <button 
                  onClick={() => handleDemoRequest('Opsis Warehouse')} 
                  className="demo-btn"
                >
                  Request Demo
                </button>
              </div>
            </div>

            {/* TIMESYNC SOLUTION */}
            <div className="solution-card timesync-card fade-in">
              <div className="solution-header">
                <div className="solution-icon">⚡</div>
                <div className="solution-title-section">
                  <h2>Opsis TimeSync</h2>
                  <p className="solution-subtitle">Scheduling & Time Management</p>
                </div>
              </div>
              <p className="solution-description">
                Advanced employee scheduling and time synchronization platform that optimizes workforce productivity through intelligent scheduling, real-time tracking, and seamless payroll integration.
              </p>
              <ul className="solution-features">
                <li>Smart shift scheduling with AI optimization</li>
                <li>Mobile time tracking and clock in/out</li>
                <li>Project-based time allocation and tracking</li>
                <li>Overtime management and approval workflows</li>
                <li>Payroll system integration ready</li>
                <li>Employee availability management</li>
                <li>Schedule conflict detection and resolution</li>
                <li>Real-time labor cost tracking</li>
              </ul>
              <div className="solution-cta">
                <button 
                  onClick={() => handleDemoRequest('Opsis TimeSync')} 
                  className="demo-btn"
                >
                  Request Demo
                </button>
              </div>
            </div>

            {/* HR SOLUTION */}
            <div className="solution-card hr-card fade-in">
              <div className="solution-header">
                <div className="solution-icon">👥</div>
                <div className="solution-title-section">
                  <h2>Opsis HR</h2>
                  <p className="solution-subtitle">Human Resources Management</p>
                </div>
              </div>
              <p className="solution-description">
                Comprehensive human resources management platform that streamlines employee lifecycle management, performance tracking, and compliance monitoring for growing organizations.
              </p>
              <ul className="solution-features">
                <li>Complete employee profile management</li>
                <li>Performance tracking and review cycles</li>
                <li>Benefits administration and enrollment</li>
                <li>Compliance monitoring and reporting</li>
                <li>Training and development tracking</li>
                <li>Employee self-service portal</li>
                <li>Document management and storage</li>
                <li>Automated workflow approvals</li>
              </ul>
              <div className="solution-cta">
                <button 
                  onClick={() => handleDemoRequest('Opsis HR')} 
                  className="demo-btn"
                >
                  Request Demo
                </button>
              </div>
            </div>

            {/* FINANCE SOLUTION */}
            <div className="solution-card finance-card fade-in">
              <div className="solution-header">
                <div className="solution-icon">💰</div>
                <div className="solution-title-section">
                  <h2>Opsis Finance</h2>
                  <p className="solution-subtitle">Financial Management & Analytics</p>
                </div>
              </div>
              <p className="solution-description">
                Advanced financial tracking and budget control system with comprehensive analytics capabilities, designed to optimize costs, track ROI, and provide actionable financial insights.
              </p>
              <ul className="solution-features">
                <li>Comprehensive budget management and planning</li>
                <li>Automated expense tracking and categorization</li>
                <li>Advanced financial reporting and dashboards</li>
                <li>Cost analysis and optimization tools</li>
                <li>ROI tracking and performance metrics</li>
                <li>Invoice and payment processing</li>
                <li>Financial forecasting and projections</li>
                <li>Integration with accounting systems</li>
              </ul>
              <div className="solution-cta">
                <button 
                  onClick={() => handleDemoRequest('Opsis Finance')} 
                  className="demo-btn"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION - EXACTO COMO WIX */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title fade-in">Why Choose Opsis Suite?</h2>
          <div className="benefits-grid">
            <div className="benefit-item fade-in">
              <span className="benefit-icon">🚀</span>
              <h3 className="benefit-title">Rapid Implementation</h3>
              <p className="benefit-description">Get up and running in days, not months. Our streamlined setup process ensures quick deployment across your organization.</p>
            </div>
            <div className="benefit-item fade-in">
              <span className="benefit-icon">🔗</span>
              <h3 className="benefit-title">Seamless Integration</h3>
              <p className="benefit-description">Connect with your existing systems effortlessly. Our platform integrates with popular business tools and software.</p>
            </div>
            <div className="benefit-item fade-in">
              <span className="benefit-icon">📊</span>
              <h3 className="benefit-title">Real-time Analytics</h3>
              <p className="benefit-description">Make data-driven decisions with comprehensive dashboards and real-time reporting across all business functions.</p>
            </div>
            <div className="benefit-item fade-in">
              <span className="benefit-icon">🛡️</span>
              <h3 className="benefit-title">Enterprise Security</h3>
              <p className="benefit-description">Bank-level security with SOC 2 compliance, ensuring your business data is protected at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - EXACTO COMO WIX */}
      <section className="cta-section">
        <div className="cta-container fade-in">
          <h2 className="cta-title">Ready to Streamline Your Operations?</h2>
          <p className="cta-subtitle">Join hundreds of companies already using Opsis Suite to optimize their business processes and drive growth.</p>
          <div className="cta-buttons">
            {/* MISMO BOTÓN EN TODAS PARTES */}
            <Link href="/login" className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Start Free Trial
            </Link>
            <Link href="/contact" className="border-2 border-gray-700 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* NOTIFICATION */}
      {notification.show && (
        <div className={`notification ${notification.type} show`}>
          {notification.message}
        </div>
      )}

      {/* FOOTER - MISMO EN TODAS LAS PÁGINAS */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/solutions" className="hover:text-white transition-colors">Warehouse Management</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Time Synchronization</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Human Resources</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Financial Management</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-300">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
              </ul>
            </div>
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

      {/* STYLES - Exacto como el HTML de Wix establecido */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        
        .page-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          color: #1d1d1f;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          height: auto;
        }

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

        /* HERO SECTION */
        .hero-section {
          padding: 5rem 2rem 4rem;
          text-align: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(32, 201, 151, 0.1) 0%, transparent 50%), 
                      radial-gradient(circle at 80% 20%, rgba(13, 202, 240, 0.1) 0%, transparent 50%);
          animation: subtleFloat 25s ease-in-out infinite;
        }

        @keyframes subtleFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -10px) rotate(1deg); }
          66% { transform: translate(-10px, 10px) rotate(-1deg); }
        }

        .hero-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #1d1d1f, #495057);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #6c757d;
          margin-bottom: 3rem;
          font-weight: 400;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }

        /* SOLUTIONS SECTION */
        .solutions-section {
          padding: 4rem 2rem;
          background: white;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .solution-card {
          background: linear-gradient(135deg, #ffffff, #f8f9fa);
          border: 1px solid rgba(210, 210, 215, 0.3);
          border-radius: 32px;
          padding: 3rem 2.5rem;
          text-align: left;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          height: auto;
          min-height: 450px;
        }

        .solution-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(135deg, #20c997, #17a2b8);
          border-radius: 32px 32px 0 0;
        }

        .solution-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
          background: white;
        }

        .solution-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }

        .solution-icon {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #495057, #6c757d);
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          margin-right: 1.5rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }

        .solution-title-section h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #1d1d1f;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .solution-subtitle {
          color: #6c757d;
          font-size: 1rem;
          font-weight: 500;
        }

        .solution-description {
          color: #495057;
          margin-bottom: 2rem;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .solution-features {
          list-style: none;
          margin-bottom: 2.5rem;
        }

        .solution-features li {
          color: #495057;
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
          font-size: 1rem;
          line-height: 1.6;
        }

        .solution-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #20c997;
          font-weight: bold;
          font-size: 1.2rem;
          background: rgba(32, 201, 151, 0.1);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .solution-cta {
          margin-top: auto;
        }

        .demo-btn {
          background: linear-gradient(135deg, #495057, #6c757d);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 16px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          text-align: center;
        }

        .demo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(73, 80, 87, 0.3);
        }

        /* BENEFITS SECTION */
        .benefits-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #495057, #6c757d);
          color: white;
          text-align: center;
        }

        .benefits-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .benefits-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: white;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
        }

        .benefit-item {
          padding: 2rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .benefit-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .benefit-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .benefit-description {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        /* CTA SECTION */
        .cta-section {
          padding: 4rem 2rem;
          background: #f8f9fa;
          text-align: center;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 1.5rem;
        }

        .cta-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin-bottom: 2.5rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          background: linear-gradient(135deg, #495057, #6c757d);
          color: white;
          border: none;
          padding: 1.2rem 3rem;
          border-radius: 20px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(73, 80, 87, 0.3);
        }

        .cta-btn.secondary {
          background: transparent;
          color: #495057;
          border: 2px solid #495057;
        }

        .cta-btn.secondary:hover {
          background: #495057;
          color: white;
        }

        /* NOTIFICATION */
        .notification {
          position: fixed;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #20c997, #17a2b8);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(32, 201, 151, 0.3);
          transform: translateY(-100px);
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 1001;
        }

        .notification.show {
          transform: translateY(0);
          opacity: 1;
        }

        .notification.info {
          background: linear-gradient(135deg, #20c997, #17a2b8);
          box-shadow: 0 4px 20px rgba(32, 201, 151, 0.3);
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

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-section { padding: 4rem 1.5rem 3rem; }
          .hero-title { font-size: 2.5rem; margin-bottom: 1rem; }
          .hero-subtitle { font-size: 1.1rem; margin-bottom: 2rem; }
          .solutions-section { padding: 3rem 1.5rem; }
          .solutions-grid { grid-template-columns: 1fr; gap: 2rem; }
          .solution-card { min-height: auto; padding: 2rem 1.5rem; }
          .solution-header { flex-direction: column; text-align: center; }
          .solution-icon { margin-right: 0; margin-bottom: 1rem; }
          .solution-title-section h2 { font-size: 1.6rem; }
          .benefits-section { padding: 3rem 1.5rem; }
          .benefits-title { font-size: 2rem; }
          .cta-section { padding: 3rem 1.5rem; }
          .cta-title { font-size: 2rem; }
          .cta-buttons { flex-direction: column; align-items: center; }
          .cta-btn { width: 100%; max-width: 300px; }
        }

        @media (min-width: 768px) and (max-width: 1199px) {
          .hero-section { padding: 5rem 2rem 3.5rem; }
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
          .benefits-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1200px) {
          .hero-title { font-size: 4rem; }
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
          .benefits-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </div>
  )
}
