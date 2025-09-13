import { researchAreas, publications } from '@/data';

export default function ResearchPage() {
  // Group publications by category
  const publicationsByCategory = {
    perception: publications.filter(pub => pub.category === 'perception'),
    ground: publications.filter(pub => pub.category === 'ground'),
    ml: publications.filter(pub => pub.category === 'ml')
  };

  return (
    <div>
      {/* Main Research Areas */}
      <section className="projects" style={{ paddingTop: '180px' }}>
        <div className="section-header">// Core Research Areas</div>
        <div className="projects-grid">
          {researchAreas.map((area) => (
            <div key={area.id} className="project-item">
              <div className="project-name">{area.name}</div>
              <div className="project-type">{area.type}</div>
              <div className="project-description">
                {area.description}
              </div>
              <div className="project-links">
                {area.links.paper && (
                  <a href={area.links.paper} className="project-link">
                    {area.name.includes('AERIAL') ? 'SkyPath Paper' : 
                     area.name.includes('MULTI-AGENT') ? 'SwarmPath Paper' : 
                     'NeuralPath Paper'}
                  </a>
                )}
                {area.links.demo && (
                  <a href={area.links.demo} className="project-link">
                    {area.links.simulation ? 'Simulation' : 
                     area.name.includes('NEURAL') ? 'Interactive Demo' : 'Live Demo'}
                  </a>
                )}
                {area.links.code && (
                  <a href={area.links.code} className="project-link">Code</a>
                )}
                {area.links.dataset && (
                  <a href={area.links.dataset} className="project-link">Dataset</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications & Other Research */}
      <section className="publications" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">// Recent Publications & Research</div>
          <div className="publications-grid">
            <div className="publication-category">
              <h3>Perception & Sensing</h3>
              <div className="publication-list">
                {publicationsByCategory.perception.map((pub) => (
                  <div key={pub.id} className="publication-item">
                    <span className="pub-title">{pub.title}</span>
                    <span className="pub-venue">{pub.venue} {pub.year}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="publication-category">
              <h3>Ground Robotics</h3>
              <div className="publication-list">
                {publicationsByCategory.ground.map((pub) => (
                  <div key={pub.id} className="publication-item">
                    <span className="pub-title">{pub.title}</span>
                    <span className="pub-venue">{pub.venue} {pub.year}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="publication-category">
              <h3>Machine Learning</h3>
              <div className="publication-list">
                {publicationsByCategory.ml.map((pub) => (
                  <div key={pub.id} className="publication-item">
                    <span className="pub-title">{pub.title}</span>
                    <span className="pub-venue">{pub.venue} {pub.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="view-all-link">
            <a href="/publications" className="cta-link">View All Publications →</a>
          </div>
        </div>
      </section>
    </div>
  );
}