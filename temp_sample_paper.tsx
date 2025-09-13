export default function SamplePaperPage() {
  return (
    <div className="paper-container">
      <h1 className="paper-title">SkyPath: Neural Navigation for Autonomous Drones</h1>
      <p className="paper-subtitle">Real-Time Obstacle Avoidance in Complex 3D Environments</p>
      
      <div className="paper-authors">
        <span className="author">
          <a href="#">Dr. Alexandra Chen</a>
          <sup className="author-equal">*</sup>
        </span>
        <span className="author">
          <a href="#">Dr. Yuki Tanaka</a>
          <sup className="author-equal">*</sup>
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
        <a hCode</a>
       ref="#" className="paper-link"> <a href="#" className="paper-link">Dataset</a>
        <a href="#" className="paper-link">Video</a>
      </div>

      <div className="paper-section paper-abstract">
        <h2>Abstract</h2>
        <p>
          We present SkyPath, a novel neural navigation system for autonomous drones operating in complex 3D environments. 
          Our method combines deep reinforcement learning with real-time sensor fusion to enable robust navigation in dynamic, 
          cluttered spaces. The system processes multi-modal sensor data including LiDAR, cameras, and IMU readings through 
          a transformer-based architecture that learns spatial representations and predicts safe trajectories.
        </p>
        <p>
          SkyPath demonstrates superior performance compared to traditional path planning algorithms, achieving 94% success rate 
          in complex indoor environments and 91% in outdoor scenarios with dynamic obstacles. The system operates at 30 Hz 
          on standard drone hardware and shows excellent generalization across different environments without retraining.
        </p>
      </div>

      <div className="paper-section">
        <h2>Overview Video</h2>
        <div className="paper-video">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="paper-section">
        <h2>Method</h2>
        <h3>Architecture Overview</h3>
        <p>
          Our SkyPath system consists of three main components: (1) a multi-modal sensor fusion module that processes 
          heterogeneous sensor data, (2) a transformer-based spatial reasoning network that learns environment representations, 
          and (3) a trajectory optimization module that generates smooth, collision-free paths in real-time.
        </p>
        
        <div className="paper-figure">
          <img 
            src="https://via.placeholder.com/700x400/0096ff/ffffff?text=System+Architecture" 
            alt="SkyPath Architecture" 
          />
          <div className="paper-figure-caption">
            <strong>Figure 1:</strong> SkyPath system architecture showing the multi-modal sensor fusion, 
            transformer-based spatial reasoning, and trajectory optimization components.
          </div>
        </div>

        <h3>Sensor Fusion</h3>
        <p>
          The sensor fusion module combines data from multiple sources: a 360° LiDAR scanner providing precise distance 
          measurements, stereo cameras for visual feature extraction, and an IMU for motion estimtion. Each sensor stream 
          is processed athrough dedicated encoder networks before being fused in a shared latent space.
        </p>

        <h3>Spatial Reasoning Network</h3>
        <p>
          We employ a custom transformer architecture adapted for 3D spatial reasoning. The network processes point cloud 
          data and visual features through multi-head attention mechanisms, learning to focus on relevant spatial features 
          for navigation decisions. The architecture includes positional encodings for 3D coordinates and temporal attention 
          for motion prediction.
        </p>
      </div>

      <div className="paper-section">
        <h2>Results</h2>
        <h3>Quantitative Evaluation</h3>
        <p>
          We evaluate SkyPath on a comprehensive dataset of 500 indoor and outdoor navigation scenarios, comparing against 
          state-of-the-art baseline methods including RRT*, A*, and recent learning-based approaches.
        </p>

        <div className="paper-results-grid">
          <div className="paper-result-item">
            <img 
              src="https://via.placeholder.com/200x150/0096ff/ffffff?text=Indoor+Results" 
              alt="Indoor Results" 
            />
            <h4>Indoor Navigation</h4>
            <p>94% success rate in complex indoor environments with dynamic obstacles</p>
          </div>
          <div className="paper-result-item">
            <img 
              src="https://via.placeholder.com/200x150/00d4ff/ffffff?text=Outdoor+Results" 
              alt="Outdoor Results" 
            />
            <h4>Outdoor Navigation</h4>
            <p>91% success rate in outdoor scenarios with varying weather conditions</p>
          </div>
          <div className="paper-result-item">
            <img 
              src="https://via.placeholder.com/200x150/0066cc/ffffff?text=Speed+Results" 
              alt="Speed Results" 
            />
            <h4>Real-Time Performance</h4>
            <p>30 Hz operation on standard drone hardware with 12ms average latency</p>
          </div>
          <div className="paper-result-item">
            <img 
              src="https://via.placeholder.com/200x150/0088ff/ffffff?text=Generalization" 
              alt="Generalization" 
            />
            <h4>Generalization</h4>
            <p>Zero-shot transfer to new environments with 87% maintained performance</p>
          </div>
        </div>

        <h3>Qualitative Analysis</h3>
        <p>
          SkyPath demonstrates remarkable adaptability in diverse scenarios. The system successfully navigates through 
          narrow corridors, avoids moving obstacles, and maintains stable flight in windy conditions. The learned 
          representations show clear understanding of 3D spatial relationships and obstacle boundaries.
        </p>
      </div>

      <div className="paper-section">
        <h2>Limitations & Future Work</h2>
        <p>
          While SkyPath shows excellent performance in most scenarios, we identify several areas for improvement. 
          The system occasionally struggles with highly reflective surfaces that interfere with LiDAR readings. 
          Future work will ocus on incorporting radar sfaensors and developing more robust sensor fusion techniques.
        </p>
        <p>
          We are also exploring the integration of semantic understanding to enable higher-level navigation goals, 
          such as "find the nearest landing zone" or "avoid restricted airspace areas."
        </p>
      </div>

      <div className="paper-section">
        <h2>Citation</h2>
        <div className="paper-bibtex">
{`@inproceedings{chen2025skypath,
    title={SkyPath: Neural Navigation for Autonomous Drones},
    author={Alexandra Chen and Yuki Tanaka and Marcus Rodriguez and Sarah Okonkwo},
    year={2025},
    booktitle={International Conference on Robotics and Automation (ICRA)},
    pages={1234--1241},
    organization={IEEE}
}`}
        </div>
      </div>

      <div className="paper-section">
        <h2>Acknowledgments</h2>
        <p>
          We thank our colleagues at ∂Path Labs for their invaluable feedback and support. This work was supported 
          by grants from the National Science Foundation and the Department of Defense. Special thanks to our 
          beta testing pilots and the drone racing community for providing real-world validation scenarios.
        </p>
        <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          * Equal contribution
        </p>
      </div>
    </div>
  );
}
