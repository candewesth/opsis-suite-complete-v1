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
      {/* NAVIGATION BAR - CENTRADO */}
      <nav className="navigation-bar">
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo Section */}
            <Link href="/" className="logo-section">
              <div className="nav-logo-container">
                <div className="nav-logo"></div>
              </div>
              <div className="nav-brand">Opsis Suite</div>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="nav-links-desktop">
              <Link href="/" className="nav-link active">
                Home
              </Link>
              <Link href="/solutions" className="nav-link">
                Solutions
              </Link>
              <Link href="/features" className="nav-link">
                Features
              </Link>
              <Link href="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Link href="/login" className="nav-cta-button">
              Access Workspace
            </Link>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-button">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title fade-in">
            Complete Enterprise Visibility
          </h1>
          <p className="hero-subtitle fade-in">
            Streamline operations, optimize workflows, and gain total control over your business with our integrated management platform.
          </p>
          <div className="hero-buttons fade-in">
            <Link href="/login" className="hero-cta-primary">
              Access Workspace
            </Link>
            <Link href="/solutions" className="hero-cta-secondary">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
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
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
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

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container fade-in">
          <h2 className="cta-title">Ready to Transform Your Operations?</h2>
          <p className="cta-subtitle">
            Join hundreds of companies already using Opsis to streamline their business operations.
          </p>
          <Link href="/login" className="cta-button">
            Access Workspace
          </Link>
        </div>
      </section>

      {/* FOOTER - CENTRADO */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Solutions */}
            <div className="footer-column">
              <h3 className="footer-title">Solutions</h3>
              <ul className="footer-links">
                <li><Link href="/solutions" className="footer-link">Warehouse Management</Link></li>
                <li><Link href="/solutions" className="footer-link">Time Synchronization</Link></li>
                <li><Link href="/solutions" className="footer-link">Human Resources</Link></li>
                <li><Link href="/solutions" className="footer-link">Financial Management</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-column">
              <h3 className="footer-title">Company</h3>
              <ul className="footer-links">
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
                <li><Link href="/careers" className="footer-link">Careers</Link></li>
                <li><Link href="/support" className="footer-link">Support</Link></li>
              </ul>
            </div>

            {/* Platform */}
            <div className="footer-column">
              <h3 className="footer-title">Platform</h3>
              <ul className="footer-links">
                <li><Link href="/features" className="footer-link">Features</Link></li>
                <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
                <li><Link href="/security" className="footer-link">Security</Link></li>
                <li><Link href="/login" className="footer-link">Login</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-column">
              <h3 className="footer-title">Legal</h3>
              <ul className="footer-links">
                <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
                <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
                <li><Link href="/doc" className="footer-link">Documentation</Link></li>
                <li><Link href="/compliance" className="footer-link">Compliance</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; 2025 Opsis Suite. All rights reserved. | Enterprise Management Platform v1.0.0
            </p>
          </div>
        </div>
      </footer>

      {/* STYLES - CSS CORREGIDO PARA CENTRADO PERFECTO */}
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
          width: 100%;
        }

        /* NAVIGATION BAR - CENTRADO PERFECTO */
        .navigation-bar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          width: 100%;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .logo-section:hover {
          transform: scale(1.02);
        }

        /* LOGO ANIMADO - EXACTO COMO ESTABLECIDO */
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

        /* NAVIGATION LINKS - CENTRADOS */
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          color: #495057;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #20c997;
          background: rgba(32, 201, 151, 0.1);
        }

        .nav-link.active {
          color: #20c997;
          font-weight: 600;
        }

        .nav-cta-button {
          background: linear-gradient(135deg, #495057, #6c757d);
          color: white;
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(73, 80, 87, 0.2);
        }

        .nav-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(73, 80, 87, 0.3);
          background: linear-gradient(135deg, #3a3f44, #5a6268);
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #495057;
          cursor: pointer;
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

        .hero-cta-primary {
          background: linear-gradient(135deg, #495057, #6c757d);
          color: white;
          text-decoration: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(73, 80, 87, 0.2);
        }

        .hero-cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(73, 80, 87, 0.3);
          background: linear-gradient(135deg, #3a3f44, #5a6268);
        }

        .hero-cta-secondary {
          background: transparent;
          color: #495057;
          text-decoration: none;
          padding: 1rem 2rem;
          border: 2px solid #495057;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .hero-cta-secondary:hover {
          background: #495057;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(73, 80, 87, 0.2);
        }

        /* SOLUTIONS SECTION */
        .solutions-section {
          padding: 4rem 2rem;
          background: white;
        }

        .section-container {
          max-width: 1200px;
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
          text-align: center;
        }

        .solutions-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
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

        /* STATS SECTION */
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

        .cta-button {
          background: linear-gradient(135deg, #495057, #6c757d);
          color: white;
          text-decoration: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(73, 80, 87, 0.2);
          display: inline-block;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(73, 80, 87, 0.3);
          background: linear-gradient(135deg, #3a3f44, #5a6268);
        }

        /* FOOTER - CENTRADO PERFECTO */
        .footer {
          background: #1d1d1f;
          color: white;
          padding: 4rem 0 2rem;
          width: 100%;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .footer-column {
          text-align: left;
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #f8f9fa;
          margin-bottom: 1.5rem;
        }

        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-link {
          color: #adb5bd;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #20c997;
        }

        .footer-bottom {
          border-top: 1px solid #495057;
          padding-top: 2rem;
          text-align: center;
        }

        .footer-copyright {
          color: #adb5bd;
          font-size: 0.9rem;
          margin: 0;
        }

        /* FADE IN ANIMATIONS */
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
          .nav-links-desktop {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
          
          .nav-container {
            padding: 0 1rem;
          }
          
          .hero-section {
            padding: 4rem 1.5rem 3rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
          
          .solutions-section {
            padding: 3rem 1.5rem;
          }
          
          .solutions-title {
            font-size: 2rem;
          }
          
          .solution-card {
            padding: 2rem 1.5rem;
          }
          
          .stats-section {
            padding: 3rem 1.5rem;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
          
          .cta-section {
            padding: 3rem 1.5rem;
          }
          
          .cta-title {
            font-size: 2rem;
          }
          
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .footer {
            padding: 3rem 0 2rem;
          }
        }

        @media (min-width: 640px) {
          .hero-buttons {
            flex-direction: row;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4rem;
          }
          
          .nav-links-desktop {
            gap: 2.5rem;
          }
          
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 1200px) {
          .solutions-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* UTILITY CLASSES */
        .text-center {
          text-align: center;
        }
        
        .text-left {
          text-align: left;
        }
        
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        
        .w-full {
          width: 100%;
        }
      `}</style>
    </div>
  )
}
