export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="home">
        {/* 3D Floating Objects */}
        <div className="floating-objects">
          <div className="floating-drone drone-1"></div>
          <div className="floating-drone drone-2"></div>
          <div className="floating-drone drone-3"></div>
          <div className="floating-robot robot-1"></div>
          <div className="floating-robot robot-2"></div>
          <div className="floating-robot robot-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-subtitle">// Welcome to ∂Path Labs</div>
            <h1 className="hero-title">
              INTELLIGENT<br/>
              <span className="highlight">NAVIGATION</span><br/>
              SYSTEMS
            </h1>
            <p className="hero-description">
              OUR MISSION IS TO BUILD AND DEMOCRATIZE<br/>
              ADVANCED NAVIGATIONAL INTELLIGENCE<br/>
              THROUGH OPEN RESEARCH
            </p>
            <p className="hero-description">
              AI RESEARCH LAB BUILDING AUTONOMOUS AGENTS<br/>
              FOR GROUND AND AERIAL PLATFORMS
            </p>
          </div>
          
          <div className="hero-visual">
            <div className="terminal-section">
              <div className="terminal-header">// Current Projects</div>
              <div className="terminal-content">
                <span className="green">JOIN US</span><br/>
                <span className="comment">/AERIAL-NAVIGATION</span><br/>
                &nbsp;&nbsp;<span className="comment">/</span><span className="green">PROJECT_SKYPATH</span>, <span className="blue">DEMO</span><br/>
                <span className="comment">/GROUND-NAVIGATION</span><br/>
                &nbsp;&nbsp;<span className="comment">/</span><span className="green">PROJECT_TERRAIN</span>, <span className="blue">DEMO</span><br/>
                <span className="comment">/MULTI-AGENT</span><br/>
                &nbsp;&nbsp;<span className="comment">/</span><span className="green">SWARM_NAV</span>, <span className="blue">RESEARCH</span><br/>
                <span className="comment">/SLAM</span><br/>
                &nbsp;&nbsp;<span className="comment">/</span><span className="green">REALTIME_MAPPING</span>, <span className="blue">DEMO</span><br/>
                <span className="comment">/PATHFINDING</span><br/>
                &nbsp;&nbsp;<span className="comment">/</span><span className="green">DYNAMIC_ROUTING</span>, <span className="blue">RESEARCH</span><br/>
                <span className="comment">/FOLLOW_US</span>
              </div>
            </div>
            
            <div className="wave-container">
              <div className="wave-line" style={{ top: '20%', animationDelay: '0s' }}></div>
              <div className="wave-line" style={{ top: '40%', animationDelay: '3s' }}></div>
              <div className="wave-line" style={{ top: '60%', animationDelay: '6s' }}></div>
              <div className="wave-line" style={{ top: '80%', animationDelay: '9s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" style={{ borderTop: 'none' }}>
        <div className="section-header">// What We Do</div>
        <div>
          <h2 className="about-title">
            BUILDING THE FUTURE OF<br/>
            AUTONOMOUS NAVIGATION
          </h2>
          <p className="about-text">
            At ∂Path Labs, we are pushing the boundaries of what's possible in autonomous navigation. 
            Our research combines cutting-edge computer vision, machine learning, and robotics to create 
            intelligent agents that can navigate any environment with unprecedented precision and adaptability.
          </p>
          <p className="about-text">
            From urban delivery drones navigating complex cityscapes to exploration rovers charting 
            unknown terrains, our systems enable autonomous agents to understand their world and make 
            intelligent decisions in real-time.
          </p>

          {/* Tech Stack */}
          <div style={{ marginTop: '48px' }}>
            <div className="section-header">// Core Technologies</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
              <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: '500', transition: 'color 0.3s ease' }}>Deep Learning</span>
              <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: '500', transition: 'color 0.3s ease' }}>Computer Vision</span>
              <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: '500', transition: 'color 0.3s ease' }}>Sensor Fusion</span>
              <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: '500', transition: 'color 0.3s ease' }}>SLAM</span>
              <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: '500', transition: 'color 0.3s ease' }}>Multi-Agent Systems</span>
              <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: '500', transition: 'color 0.3s ease' }}>Reinforcement Learning</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}