export default function SamplePaperPage() {
  return (
    <div className="paper-container">
      <h1 className="paper-title">SkyPath: Neural Navigation for Autonomous Drones</h1>
      <p className="paper-subtitle">Real-Time Obstacle Avoidance in Complex 3D Environments</p>
      
      <div className="paper-authors">
        <span className="author">
          <a href="#">Dr. Alexandra Chen</a><sup className="author-equal">*</sup>
        </span>
        <span className="author">
          <a href="#">Dr. Yuki Tanaka</a><sup className="author-equal">*</sup>
        </span>
        <span className="author">
          <a href="#">Marcus Rodriguez</a>
        </span>
        <span className="author">
          <a href="#">Sarah Okonkwo</a>
        </span>
      </div>
      
      <div className="paper-institution">∂Path Labs</div>
      <div className="paper-venue">ICRA 2025 - Best Paper Award</div>
      
      <div className="paper-links">
        <a href="#" className="paper-link">Paper</a>
        <a href="#" className="paper-link">Code</a>
        <a href="#" className="paper-link">Dataset</a>
        <a href="#" className="paper-link">Video</a>
      </div>

      <div className="paper-section paper-abstract">
        <h2>Abstract</h2>
        <p>
          We present SkyPath, a novel neural navigation system for autonomous drones operating in complex 3D environments.
        </p>
      </div>

      <div className="paper-section">
        <h2>Method</h2>
        <p>
          Our system consists of three main components: sensor fusion, spatial reasoning, and trajectory optimization.
        </p>
      </div>

      <div className="paper-section">
        <h2>Results</h2>
        <p>
          SkyPath achieves 94% success rate in complex indoor environments.
        </p>
      </div>
    </div>
  );
}
