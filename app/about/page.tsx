export default function AboutPage() {
  return (
    <div>
      {/* About Section */}
      <section className="about" style={{ paddingTop: '180px', borderTop: 'none' }}>
        <div className="section-header">// About ∂Path Labs</div>
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
            unknown terrains, our technology enables machines to move with purpose, intelligence, and safety.
          </p>
          <p className="about-text">
            We believe in open science and collaborative research. All our findings, datasets, and 
            methodologies are shared with the global research community to accelerate progress in 
            autonomous systems.
          </p>
          
          <div style={{ marginTop: '60px' }}>
            <div className="section-header">// Core Technologies</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>COMPUTER_VISION</div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>MACHINE_LEARNING</div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>SIMULTANEOUS_LOCALIZATION_MAPPING</div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>PATH_PLANNING</div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>SENSOR_FUSION</div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>REAL_TIME_AI</div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>REINFORCEMENT_LEARNING</div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '14px', fontWeight: '500', transition: 'color 0.3s ease' }}>SWARM_INTELLIGENCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="projects">
        <div className="section-header">// Our Mission & Values</div>
        <div className="projects-grid">
          <div className="project-item">
            <div className="project-name">OPEN RESEARCH</div>
            <div className="project-type">Transparent & Collaborative</div>
            <div className="project-description">
              We believe in democratizing access to advanced navigation research. All our algorithms, 
              datasets, and findings are openly published to accelerate global progress in autonomous systems.
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-name">SAFETY FIRST</div>
            <div className="project-type">Ethical AI Development</div>
            <div className="project-description">
              Every system we design prioritizes safety, reliability, and robustness. We conduct extensive 
              testing and validation to ensure our navigation systems operate safely in real-world conditions.
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-name">INNOVATION</div>
            <div className="project-type">Breakthrough Technology</div>
            <div className="project-description">
              We push the boundaries of what's possible in autonomous navigation through novel algorithms, 
              advanced sensor integration, and cutting-edge AI architectures.
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-name">COLLABORATION</div>
            <div className="project-type">Global Partnership</div>
            <div className="project-description">
              We work closely with universities, industry partners, and research institutions worldwide 
              to tackle the most challenging problems in autonomous navigation.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}