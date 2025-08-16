'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // SIMPLE NOTIFICATION SYSTEM
    function showNotification(message: string, type?: string) {
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
        card.addEventListener('click', function(this: HTMLElement) {
          const title = this.querySelector('.solution-title')?.textContent || '';
          showNotification(`Learn more about ${title} in our Solutions page!`, 'info');
          
          setTimeout(() => {
            window.open('/solutions', '_top');
          }, 1500);
        });
      });
    }

    setupFadeInAnimations();
    setupSolutionCards();
    (window as any).showNotification = showNotification;
  }, [])

  return (
    <div>
      {/* NAVIGATION BAR */}
      <nav style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        padding: '8px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '56px',
            width: '100%'
          }}>
            {/* Logo Section */}
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}>
              <div style={{
                position: 'relative',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                padding: '2px',
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd, #00d2d3, #ff9f43, #10ac84, #ee5a6f, #ff6b6b)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #495057, #6c757d)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  color: 'white',
                  fontWeight: '300',
                  boxShadow: '0 2px 8px rgba(73, 80, 87, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  ◉
                </div>
              </div>
              <div style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #495057, #6c757d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                userSelect: 'none'
              }}>
                Opsis Suite
              </div>
            </Link>

            {/* Navigation Links */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flex: 1,
              justifyContent: 'center'
            }}>
              <Link href="/" style={{ color: '#20c997', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', padding: '0.5rem 1rem', borderRadius: '8px' }}>Home</Link>
              <Link href="/solutions" style={{ color: '#495057', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem', padding: '0.5rem 1rem', borderRadius: '8px' }}>Solutions</Link>
              <Link href="/features" style={{ color: '#495057', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem', padding: '0.5rem 1rem', borderRadius: '8px' }}>Features</Link>
              <Link href="/pricing" style={{ color: '#495057', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem', padding: '0.5rem 1rem', borderRadius: '8px' }}>Pricing</Link>
              <Link href="/contact" style={{ color: '#495057', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem', padding: '0.5rem 1rem', borderRadius: '8px' }}>Contact</Link>
            </div>

            {/* CTA Button */}
            <Link 
              href="/login"
              style={{
                background: 'linear-gradient(135deg, #495057, #6c757d)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '16px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(-2px)';
                target.style.boxShadow = '0 8px 25px rgba(73, 80, 87, 0.3)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = 'none';
              }}
            >
              Access Workspace
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        padding: '5rem 2rem 4rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #1d1d1f, #495057)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-2px',
            lineHeight: '1.1'
          }}>
            Complete Enterprise Visibility
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#6c757d',
            marginBottom: '3rem',
            fontWeight: '400',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Streamline operations, optimize workflows, and gain total control over your business with our integrated management platform.
          </p>
          <div style={{ marginTop: '2rem' }}>
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
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(-3px)';
                target.style.boxShadow = '0 15px 40px rgba(73, 80, 87, 0.3)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = 'none';
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
                const target = e.target as HTMLElement;
                target.style.background = '#495057';
                target.style.color = 'white';
                target.style.transform = 'translateY(-3px)';
                target.style.boxShadow = '0 15px 40px rgba(73, 80, 87, 0.3)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'transparent';
                target.style.color = '#495057';
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = 'none';
              }}
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section style={{ padding: '3rem 2rem', background: 'white' }} id="solutions">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              color: '#1d1d1f',
              marginBottom: '1rem',
              letterSpacing: '-1px'
            }}>
              Powerful Solutions for Modern Business
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#6c757d',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Integrated modules designed to optimize every aspect of your operations
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Solution Cards */}
            <div className="solution-card fade-in" style={{
              background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
              border: '1px solid rgba(210, 210, 215, 0.3)',
              borderRadius: '24px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#20c997',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                color: 'white',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}>
                📦
              </div>
              <h3 className="solution-title" style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1d1d1f',
                marginBottom: '1rem'
              }}>
                Opsis Warehouse
              </h3>
              <p style={{
                color: '#6c757d',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                Complete inventory management with real-time tracking and automated workflows.
              </p>
              <ul style={{ listStyle: 'none', textAlign: 'left', margin: 0, padding: 0 }}>
                <li style={{ color: '#495057', marginBottom: '0.6rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '0.95rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#20c997', fontWeight: 'bold' }}>✓</span>
                  Real-time equipment tracking
                </li>
                <li style={{ color: '#495057', marginBottom: '0.6rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '0.95rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#20c997', fontWeight: 'bold' }}>✓</span>
                  Automated request processing
                </li>
                <li style={{ color: '#495057', marginBottom: '0.6rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '0.95rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#20c997', fontWeight: 'bold' }}>✓</span>
                  Mobile-optimized interface
                </li>
                <li style={{ color: '#495057', marginBottom: '0.6rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '0.95rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#20c997', fontWeight: 'bold' }}>✓</span>
                  Advanced reporting & analytics
                </li>
                <li style={{ color: '#495057', marginBottom: '0.6rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '0.95rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#20c997', fontWeight: 'bold' }}>✓</span>
                  Inspection workflows
                </li>
              </ul>
            </div>
            {/* Repeat for other solution cards with different colors */}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{
        padding: '2rem 2rem',
        background: 'linear-gradient(135deg, #495057, #6c757d)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ padding: '1.5rem 1rem' }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>99.9%</div>
            <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>System Uptime</div>
          </div>
          <div style={{ padding: '1.5rem 1rem' }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>500+</div>
            <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>Companies Served</div>
          </div>
          <div style={{ padding: '1.5rem 1rem' }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>2.5M</div>
            <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>Transactions</div>
          </div>
          <div style={{ padding: '1.5rem 1rem' }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>24/7</div>
            <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>Support</div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '2rem 2rem',
        background: '#f8f9fa',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1d1d1f',
            marginBottom: '1.5rem'
          }}>
            Ready to Transform Your Operations?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#6c757d',
            marginBottom: '1.5rem'
          }}>
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
              const target = e.target as HTMLElement;
              target.style.transform = 'translateY(-3px)';
              target.style.boxShadow = '0 15px 40px rgba(73, 80, 87, 0.3)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = 'none';
            }}
          >
            Access Workspace
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#1d1d1f',
        color: 'white',
        padding: '4rem 0 2rem',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#f8f9fa', marginBottom: '1.5rem' }}>Solutions</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/solutions" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Warehouse Management</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/solutions" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Time Synchronization</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/solutions" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Human Resources</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/solutions" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Financial Management</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#f8f9fa', marginBottom: '1.5rem' }}>Company</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/about" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>About Us</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/contact" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/careers" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Careers</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/support" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Support</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#f8f9fa', marginBottom: '1.5rem' }}>Platform</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/features" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Features</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/pricing" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Pricing</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/security" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Security</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/login" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Login</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#f8f9fa', marginBottom: '1.5rem' }}>Legal</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/privacy" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Privacy Policy</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/terms" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Terms of Service</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/doc" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Documentation</Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/compliance" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '0.95rem' }}>Compliance</Link>
                </li>
              </ul>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #495057',
            paddingTop: '2rem',
            textAlign: 'center'
          }}>
            <p style={{ color: '#adb5bd', fontSize: '0.9rem', margin: 0 }}>
              &copy; 2025 Opsis Suite. All rights reserved. | Enterprise Management Platform v1.0.0
            </p>
          </div>
        </div>
      </footer>

      {/* NOTIFICATION */}
      <div id="notification" style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        background: 'linear-gradient(135deg, #20c997, #17a2b8)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(32, 201, 151, 0.3)',
        transform: 'translateY(-100px)',
        opacity: 0,
        transition: 'all 0.3s ease',
        zIndex: 1001
      }}></div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
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

        .notification.show {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }

        .solution-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          background: white;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          line-height: 1.6;
          color: #1d1d1f;
        }

        @media (max-width: 768px) {
          nav div:nth-child(2) {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
