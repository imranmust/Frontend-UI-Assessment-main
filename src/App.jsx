import { useState } from 'react'
import '@awesome.me/webawesome/dist/styles/themes/default.css';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/card/card.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/badge/badge.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/divider/divider.js';
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const features = [
    {
      icon: 'rocket',
      title: 'Lightning Fast',
      description: 'Built with cutting-edge technology for blazing-fast performance and optimal user experience.'
    },
    {
      icon: 'shield',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures to keep your data safe and protected at all times.'
    },
    {
      icon: 'paint-brush',
      title: 'Beautiful Design',
      description: 'Stunning, modern interface designed with attention to every pixel and interaction.'
    },
    {
      icon: 'globe',
      title: 'Global Scale',
      description: 'Reach audiences worldwide with our globally distributed infrastructure and CDN.'
    },
    {
      icon: 'chart-line',
      title: 'Analytics Driven',
      description: 'Make data-driven decisions with powerful analytics and real-time insights.'
    },
    {
      icon: 'bolt',
      title: 'Instant Setup',
      description: 'Get started in minutes with our intuitive setup process and comprehensive documentation.'
    }
  ]

  const steps = [
    {
      number: '01',
      icon: 'user-plus',
      title: 'Create Account',
      description: 'Sign up in seconds with your email or social accounts. No credit card required.'
    },
    {
      number: '02',
      icon: 'sliders',
      title: 'Customize Setup',
      description: 'Configure your workspace with our intuitive setup wizard tailored to your needs.'
    },
    {
      number: '03',
      icon: 'upload',
      title: 'Import Data',
      description: 'Easily migrate your existing data with our seamless import tools and integrations.'
    },
    {
      number: '04',
      icon: 'users',
      title: 'Invite Team',
      description: 'Collaborate effortlessly by inviting team members and setting permissions.'
    },
    {
      number: '05',
      icon: 'rocket',
      title: 'Launch & Grow',
      description: 'Go live and watch your project thrive with our powerful platform features.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for individuals',
      features: ['5 Projects', '10GB Storage', 'Basic Support', 'API Access']
    },
    {
      name: 'Professional',
      price: '99',
      description: 'For growing teams',
      features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced API', 'Custom Domain'],
      featured: true
    },
    {
      name: 'Enterprise',
      price: '299',
      description: 'For large organizations',
      features: ['Unlimited Everything', '1TB Storage', '24/7 Support', 'White Label', 'Dedicated Manager', 'SLA']
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you! We'll contact you at ${email}`)
    setEmail('')
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <wa-icon name="rocket" className="logo-icon"></wa-icon>
              <span>NexaFlow</span>
            </div>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About</a>
              <wa-button variant="primary" size="medium">Get Started</wa-button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Build Something
              <span className="gradient-text"> Extraordinary</span>
            </h1>
            <p className="hero-subtitle">
              Transform your ideas into reality with our powerful platform. 
              Fast, secure, and incredibly easy to use.
            </p>
            <div className="hero-cta">
              <wa-button variant="primary" size="large">
                Start Free Trial
                <wa-icon name="arrow-right" slot="suffix"></wa-icon>
              </wa-button>
              <wa-button variant="default" size="large">Watch Demo</wa-button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat">
                <div className="stat-value">500ms</div>
                <div className="stat-label">Response Time</div>
              </div>
              <div className="stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everything You Need</h2>
            <p className="section-subtitle">
              Powerful features designed to help you succeed
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <wa-card key={index} className="feature-card">
                <div className="feature-icon">
                  <wa-icon name={feature.icon}></wa-icon>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </wa-card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="steps-background">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Get started in 5 simple steps
            </p>
          </div>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.number}</div>
                <button 
                  className="step-content"
                  popovertarget={`step-popover-${index}`}
                >
                  <div className="step-icon">
                    <wa-icon name={step.icon}></wa-icon>
                  </div>
                  <h3>{step.title}</h3>
                  <div className="step-trail"></div>
                </button>
                <div 
                  id={`step-popover-${index}`}
                  popover="auto"
                  className="step-popover"
                >
                  <div className="step-popover-content">
                    <div className="step-popover-header">
                      <div className="step-popover-icon">
                        <wa-icon name={step.icon}></wa-icon>
                      </div>
                      <h4>{step.title}</h4>
                    </div>
                    <p>{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the perfect plan for your needs
            </p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <wa-card key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && (
                  <wa-badge variant="brand" pill className="featured-badge">
                    Most Popular
                  </wa-badge>
                )}
                <div className="pricing-card-content">
                  <div className="pricing-card-header">
                    <h3>{plan.name}</h3>
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">{plan.price}</span>
                      <span className="period">/month</span>
                    </div>
                    <p className="plan-description">{plan.description}</p>
                  </div>
                  <wa-divider></wa-divider>
                  <ul className="features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <wa-icon name="check" className="check-icon"></wa-icon>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <wa-button 
                    variant={plan.featured ? 'primary' : 'default'} 
                    size="large" 
                    style={{width: '100%'}}
                  >
                    Get Started
                  </wa-button>
                </div>
              </wa-card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <wa-icon name="lightbulb" className="cta-icon"></wa-icon>
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of satisfied users and transform your workflow today.</p>
            <form onSubmit={handleSubmit} className="cta-form">
              <wa-input
                type="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                size="large"
                className="email-input"
              />
              <wa-button type="submit" variant="primary" size="large">
                Start Free Trial
              </wa-button>
            </form>
            <p className="cta-note">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <wa-icon name="rocket" className="logo-icon"></wa-icon>
                <span>NexaFlow</span>
              </div>
              <p>Building the future, one line of code at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#">Documentation</a>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="http://localhost:5173">Terms</a>
              <a href="#">Security</a>
            </div>
          </div>
          <wa-divider></wa-divider>
          <div className="footer-bottom">
            <p>© 2025 NexaFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
