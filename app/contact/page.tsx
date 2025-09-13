export default function ContactPage() {
  return (
    <div>
      {/* Contact Section */}
      <section className="about" style={{ paddingTop: '180px', borderTop: 'none' }}>
        <div className="section-header">// Get In Touch</div>
        <div>
          <h2 className="about-title">
            COLLABORATE WITH US ON<br/>
            THE FUTURE OF NAVIGATION
          </h2>
          <p className="about-text">
            Whether you're a researcher, industry partner, or potential collaborator, we'd love to hear from you. 
            Let's work together to advance the field of autonomous navigation.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="projects">
        <div className="section-header">// Contact & Follow Us</div>
        <div className="projects-grid">
          <div className="project-item">
            <div className="project-name">EMAIL</div>
            <div className="project-type">Primary Communication</div>
            <div className="project-description">
              For all inquiries including research collaborations, partnerships, career opportunities, 
              and general questions. We respond to all emails within 24 hours.
            </div>
            <div className="project-links">
              <a href="mailto:hello@dpathlabs.ai" className="project-link">hello@dpathlabs.ai</a>
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-name">X (TWITTER)</div>
            <div className="project-type">Latest Updates</div>
            <div className="project-description">
              Follow us for real-time updates on our research breakthroughs, publications, 
              conference presentations, and behind-the-scenes insights from our lab.
            </div>
            <div className="project-links">
              <a href="#" className="project-link">@dpathlabs</a>
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-name">DISCORD</div>
            <div className="project-type">Community & Discussion</div>
            <div className="project-description">
              Join our research community for technical discussions, Q&A sessions with our team, 
              and collaboration opportunities with fellow researchers and enthusiasts.
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Join Discord Server</a>
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-name">GITHUB</div>
            <div className="project-type">Open Source Code</div>
            <div className="project-description">
              Access our open-source implementations, datasets, and research tools. 
              Contribute to our projects or use our code as a starting point for your research.
            </div>
            <div className="project-links">
              <a href="#" className="project-link">github.com/dpathlabs</a>
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-name">CAREERS</div>
            <div className="project-type">Join Our Team</div>
            <div className="project-description">
              Looking for talented researchers, engineers, and scientists to join our mission. 
              We offer competitive packages and the opportunity to work on cutting-edge research.
            </div>
            <div className="project-links">
              <a href="mailto:careers@dpathlabs.ai" className="project-link">careers@dpathlabs.ai</a>
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-name">PARTNERSHIPS</div>
            <div className="project-type">Industry Collaboration</div>
            <div className="project-description">
              Partner with us for research collaborations, technology licensing, 
              or joint development projects in autonomous navigation systems.
            </div>
            <div className="project-links">
              <a href="mailto:partnerships@dpathlabs.ai" className="project-link">partnerships@dpathlabs.ai</a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="about" style={{ borderTop: '1px solid var(--border-secondary)' }}>
        <div className="section-header">// Location & Office Hours</div>
        <div>
          <h2 className="about-title">
            SILICON VALLEY<br/>
            RESEARCH HUB
          </h2>
          <p className="about-text">
            Our main research facility is located in Palo Alto, California, in the heart of Silicon Valley. 
            We maintain close relationships with Stanford University, UC Berkeley, and other leading 
            research institutions in the area.
          </p>
          <p className="about-text">
            Office hours: Monday-Friday, 9:00 AM - 6:00 PM PST<br/>
            We also maintain research partnerships with institutions worldwide and 
            welcome remote collaborations.
          </p>
          
          <div style={{ marginTop: '48px' }}>
            <div className="section-header">// Quick Response Times</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
              <span style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>Email: &lt; 24 hours</span>
              <span style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>Discord: Real-time</span>
              <span style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>Partnership Inquiries: &lt; 48 hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}