'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // SIMPLE NOTIFICATION SYSTEM
    function showNotification(message, type) {
      const notification = document.getElementById('notification');
      if (notification) {
        notification.textContent = message;
        notification.className = 'notification ' + (type || 'info');
        notification.classList.add('show');

        setTimeout(() => {
          notification.classList.remove('show');
        }, 3000);
      }
    }

    // FADE IN ANIMATIONS
    function setupFadeInAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
      });
    }

    // SOLUTION CARD INTERACTIONS
    function setupSolutionCards() {
      const cards = document.querySelectorAll('.solution-card');
      cards.forEach(card => {
        card.addEventListener('click', function() {
          const title = this.querySelector('.solution-title').textContent;
          showNotification(`Learn more about ${title} in our Solutions page!`, 'info');
          
          // Optional: Navigate to solutions page after notification
          setTimeout(() => {
            window.open('/solutions', '_top');
          }, 1500);
        });
      });
    }

    console.log('🏠 Opsis Suite Landing Content - Optimized');
    console.log('✅ No header/footer - Content only');
    console.log('✅ Fade-in animations');
    console.log('✅ Solution card interactions');
    
    // Setup features
    setupFadeInAnimations();
    setupSolutionCards();

    // Make functions available globally for click handlers
    window.showNotification = showNotification;
  }, [])

  return (
    <div className="page-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Complete Enterprise Visibility</h1>
          <p className="hero-subtitle">
            Streamline operations, optimize workflows, and gain total control over your business with our integrated management platform.
          </p>
          <div className="hero-cta">
            <Link 
              href="/login"
              style={{
                background: 'linear-gradient(135deg, #495057, #6c757d)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '16px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                margin: '0 0.5rem',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)'
                e.target.style.boxShadow = '0 15px 40px rgba(73, 80, 87, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              Access Workspace
            </Link>
            <Link 
              href="/solutions"
              style={{
                background: 'transparent',
                color: '#495057',
                border: '2px solid #495057',
                padding: '1rem 2rem',
                borderRadius: '16px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                margin: '0 0.5rem',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#495057'
                e.target.style.color = 'white'
                e.target.style.transform = 'translateY(-3px)'
                e.target.style.boxShadow = '0 15px 40px rgba(73, 80, 87, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = '#495057'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="solutions-section" id="solutions">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Powerful Solutions for Modern Business</h2>
            <p className="section-subtitle">
              Integrated modules designed to optimize every aspect of your operations
            </p>
          </div>
          <div className="solutions-grid">
            <div className="solution-card warehouse-card fade-in">
              <div className="solution-icon">📦</div>
              <h3 className="solution-title">Opsis Warehouse</h3>
              <p className="solution-description">
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
            <div className="solution-card timesync-card fade-in">
              <div className="solution-icon">⚡</div>
              <h3 className="solution-title">Opsis TimeSync</h3>
              <p className="solution-description">
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
            <div className="solution-card hr-card fade-in">
              <div className="solution-icon">👥</div>
              <h3 className="solution-title">Opsis HR</h3>
              <p className="solution-description">
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
            <div className="solution-card finance-card fade-in">
              <div className="solution-icon">💰</div>
              <h3 className="solution-title">Opsis Finance</h3>
              <p className="solution-description">
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
      <section className="stats-section" id="features">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item fade-in">
              <div className="stat-number" data-count="99.9">99.9%</div>
              <div className="stat-label">System Uptime</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number" data-count="500">500+</div>
              <div className="stat-label">Companies Served</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number" data-count="2.5">2.5M</div>
              <div className="stat-label">Transactions</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number" data-count="24">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your Operations?</h2>
          <p className="cta-subtitle">
            Join hundreds of companies already using Opsis to streamline their business operations.
          </p>
          <Link 
            href="/login"
            style={{
              background: 'linear-gradient(135deg, #495057, #6c757d)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '16px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 15px 40px rgba(73, 80, 87, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            Access Workspace
          </Link>
        </div>
      </section>

      {/* NOTIFICATION */}
      <div className="notification" id="notification"></div>

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
          background: transparent;
          color: #1d1d1f;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          height: auto;
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
          background: radial-gradient(circle at 30% 70%, rgba(108, 117, 125, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
          animation: subtleFloat 20s ease-in-out infinite;
        }

        @keyframes subtleFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -10px) rotate(1deg); }
          66% { transform: translate(-5px, 5px) rotate(-1deg); }
        }

        .hero-container {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #1d1d1f, #495057);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          margin-bottom: 3rem;
          font-weight: 400;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta {
          margin-top: 2rem;
        }

        .hero-btn {
          background: linear-gradient(135deg, #495057, #6c757d);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 0.5rem;
          text-decoration: none;
          display: inline-block;
        }

        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(73, 80, 87, 0.3);
        }

        .hero-btn.secondary {
          background: transparent;
          color: #495057;
          border: 2px solid #495057;
        }

        .hero-btn.secondary:hover {
          background: #495057;
          color: white;
        }

        /* SOLUTIONS SECTION */
        .solutions-section {
          padding: 3rem 2rem;
          background: white;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }

        .section-subtitle {
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
          background: linear-gradient(135deg, #f8f9fa, #ffffff);
          border: 1px solid rgba(210, 210, 215, 0.3);
          border-radius: 24px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .solution-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-color);
          border-radius: 24px 24px 0 0;
        }

        .solution-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          background: white;
        }

        .solution-icon {
          width: 80px;
          height: 80px;
          background: var(--card-color);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          margin: 0 auto 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .solution-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 1rem;
        }

        .solution-description {
          color: #6c757d;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .solution-features {
          list-style: none;
          text-align: left;
        }

        .solution-features li {
          color: #495057;
          margin-bottom: 0.6rem;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.95rem;
        }

        .solution-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--card-color);
          font-weight: bold;
        }

        .warehouse-card { --card-color: #20c997; }
        .timesync-card { --card-color: #0dcaf0; }
        .hr-card { --card-color: #6610f2; }
        .finance-card { --card-color: #fd7e14; }

        /* STATS SECTION */
        .stats-section {
          padding: 2rem 2rem;
          background: linear-gradient(135deg, #495057, #6c757d);
          color: white;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-item {
          padding: 1.5rem 1rem;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .stat-label {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        /* CTA SECTION */
        .cta-section {
          padding: 2rem 2rem;
          background: #f8f9fa;
          text-align: center;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 1.5rem;
        }

        .cta-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin-bottom: 1.5rem;
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

        .notification.error {
          background: linear-gradient(135deg, #dc3545, #c82333);
          box-shadow: 0 4px 20px rgba(220, 53, 69, 0.3);
        }

        .notification.info {
          background: linear-gradient(135deg, #0dcaf0, #0ea5e9);
          box-shadow: 0 4px 20px rgba(13, 202, 240, 0.3);
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
          .hero-section { padding: 4rem 1.5rem 3rem; }
          .hero-title { font-size: 2rem; line-height: 1.2; margin-bottom: 1rem; }
          .hero-subtitle { font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.5; }
          .hero-cta { margin-top: 1rem; }
          .hero-btn { display: block; margin: 0.8rem auto; padding: 1rem 2rem; font-size: 1rem; width: 100%; max-width: 280px; }
          .solutions-section { padding: 2.5rem 1.5rem; }
          .stats-section { padding: 1.5rem 1.5rem; }
          .cta-section { padding: 1.5rem 1.5rem; }
          .section-title { font-size: 2rem; }
          .cta-title { font-size: 2rem; }
          .section-header { margin-bottom: 1.5rem; }
        }

        @media (min-width: 768px) and (max-width: 1199px) {
          .hero-section { padding: 5.5rem 2rem 3.5rem; }
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1200px) {
          .hero-title { font-size: 3.5rem; }
          .section-title { font-size: 3rem; }
          .solutions-grid { grid-template-columns: repeat(4, 1fr); }
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </div>
  )
}
