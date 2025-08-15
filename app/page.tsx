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
    <div className="page-container">
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
              <Link href="/" className="text-emerald-600 font-semibold">
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
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Button - MISMO EN TODOS LADOS */}
            <Link href="/login" className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Access Workspace
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - EXACTO COMO EN WIX */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title fade-in">
            Complete Enterprise Visibility
          </h1>
          <p className="hero-subtitle fade-in">
            Streamline operations, optimize workflows, and gain total control over your business with our integrated management platform.
          </p>
          <div className="hero-buttons fade-in">
            {/* MISMO BOTÓN EN TODOS LADOS */}
            <Link href="/login" className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Access Workspace
            </Link>
            <Link href="/solutions" className="border-2 border-gray-700 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION - EXACTO COMO EN WIX */}
      <section className="solutions-section" id="solutions">
        <div className="section-container">
          <div className="solutions-header fade-in">
            <h2 className="solutions-title">Powerful Solutions for Modern Business</h2>
            <p className="solutions-subtitle">
              Integrated modules designed to optimize every aspect of your operations
            </p>
          </div>
          
          <div className="solutions-grid">
            {/* Opsis Warehouse */}
            <div className="solution-card warehouse-card fade-in">
              <div className="solution-icon">📦</div>
              <h3 className="solution-card-title">Opsis Warehouse</h3>
              <p className="solution-card-description">
                Complete inventory management with real-time tracking and automated workflows.
              </p>
              <ul className="solution-features">
                <li>Real-time equipment tracking</li>
                <li>Automated request processing</li>
                <li>Mobile-optimized interface</li>
                <li>Advanced reporting & analytics</li>
                <li>Inspection workflows</li>
              </ul>
              <div className="solution-card-footer">
                {/* Removed pricing - clean design */}
              </div>
            </div>

            {/* Opsis TimeSync */}
            <div className="solution-card timesync-card fade-in">
              <div className="solution-icon">⚡</div>
              <h3 className="solution-card-title">Opsis TimeSync</h3>
              <p className="solution-card-description">
                Employee scheduling and time synchronization management for optimal productivity.
              </p>
              <ul className="solution-features">
                <li>Smart shift scheduling</li>
                <li>Mobile time tracking</li>
                <li>Project time allocation</li>
                <li>Overtime management</li>
                <li>Payroll integration ready</li>
              </ul>
              <div className="solution-card-footer">
                {/* Removed availability date - clean design */}
              </div>
            </div>

            {/* Opsis HR */}
            <div className="solution-card hr-card fade-in">
              <div className="solution-icon">👥</div>
              <h3 className="solution-card-title">Opsis HR</h3>
              <p className="solution-card-description">
                Comprehensive human resources management for growing organizations.
              </p>
              <ul className="solution-features">
                <li>Employee management</li>
                <li>Performance tracking</li>
                <li>Benefits administration</li>
                <li>Compliance monitoring</li>
                <li>Training management</li>
              </ul>
              <div className="solution-card-footer">
                {/* Removed availability date - clean design */}
              </div>
            </div>

            {/* Opsis Finance */}
            <div className="solution-card finance-card fade-in">
              <div className="solution-icon">💰</div>
              <h3 className="solution-card-title">Opsis Finance</h3>
              <p className="solution-card-description">
                Financial tracking and budget control with advanced analytics capabilities.
              </p>
              <ul className="solution-features">
                <li>Budget management</li>
                <li>Expense tracking</li>
                <li>Financial reporting</li>
                <li>Cost analysis</li>
                <li>ROI optimization</li>
              </ul>
              <div className="solution-card-footer">
                {/* Removed availability date - clean design */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - EXACTO COMO EN WIX */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item fade-in">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">System Uptime</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">500+</div>
              <div className="stat-label">Companies Served</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">2.5M</div>
              <div className="stat-label">Transactions</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - EXACTO COMO EN WIX */}
      <section className="cta-section">
        <div className="cta-container fade-in">
          <h2 className="cta-title">Ready to Transform Your Operations?</h2>
          <p className="cta-subtitle">
            Join hundreds of companies already using Opsis to streamline their business operations.
          </p>
          {/* MISMO BOTÓN EN TODOS LADOS */}
          <Link href="/login" className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Access Workspace
          </Link>
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

      {/* STYLES - EXACTO COMO EL HTML ORIGINAL DE WIX */}
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

        /* LOGO ANIMADO - EXACTO COMO WIX */
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

        /* HERO SECTION - EXACTO COMO WIX */
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
          background: radial-gradient(circle at 20% 80%, rgba(32, 201, 151, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(13, 202, 240, 0.1) 0%, transparent 50%);
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

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 640px) {
          .hero-buttons {
            flex-direction: row;
          }
        }

        /* SOLUTIONS SECTION - EXACTO COMO WIX */
        .solutions-section {
          padding: 4rem 2rem;
          background: white;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .solutions-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .solutions-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 1rem;
        }

        .solutions-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .solution-card {
          background: linear-gradient(135deg, #ffffff, #f8f9fa);
          border: 1px solid rgba(210, 210, 215, 0.3);
          border-radius: 32px;
          padding: 3rem 2.5rem;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          height: auto;
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

        .solution-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .solution-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 1rem;
        }

        .solution-card-description {
          color: #6c757d;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .solution-features {
          list-style: none;
          text-align: left;
          margin-bottom: 2rem;
        }

        .solution-features li {
          color: #495057;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.5;
        }

        .solution-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #20c997;
          font-weight: bold;
          background: rgba(32, 201, 151, 0.1);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        }

        .solution-card-footer {
          margin-top: auto;
          padding-top: 1rem;
        }

        .solution-price {
          color: #20c997;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .solution-availability {
          color: #fd7e14;
          font-weight: 600;
          font-size: 1rem;
        }

        /* STATS SECTION - EXACTO COMO WIX */
        .stats-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #495057, #6c757d);
          color: white;
          text-align: center;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: white;
        }

        .stat-label {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        /* CTA SECTION - EXACTO COMO WIX */
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

        /* FADE IN ANIMATIONS - EXACTO COMO WIX */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* RESPONSIVE - EXACTO COMO WIX */
        @media (max-width: 768px) {
          .hero-section { padding: 4rem 1.5rem 3rem; }
          .hero-title { font-size: 2.5rem; margin-bottom: 1rem; }
          .hero-subtitle { font-size: 1.1rem; margin-bottom: 2rem; }
          .solutions-section { padding: 3rem 1.5rem; }
          .solutions-title { font-size: 2rem; }
          .solution-card { padding: 2rem 1.5rem; }
          .stats-section { padding: 3rem 1.5rem; }
          .stat-number { font-size: 2.5rem; }
          .cta-section { padding: 3rem 1.5rem; }
          .cta-title { font-size: 2rem; }
        }

        @media (min-width: 1024px) {
          .hero-title { font-size: 4rem; }
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }

        @media (min-width: 1200px) {
          .solutions-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </div>
  )
}
