import { teamMembers, advisors } from '@/data';

export default function TeamPage() {
  return (
    <div>
      {/* Core Team Section */}
      <section className="projects" style={{ paddingTop: '180px' }}>
        <div className="section-header">// Core Team</div>
        <div className="projects-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="project-item">
              <div className="team-member">
                <div className="member-photo">{member.initials}</div>
                <div className="member-info">
                  <div className="project-name">{member.name}</div>
                  <div className="project-type">{member.role}</div>
                  <div className="project-description">
                    {member.description}
                  </div>
                  <div className="project-links">
                    {member.links.publications && (
                      <a href={member.links.publications} className="project-link">
                        Publications
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a href={member.links.linkedin} className="project-link">
                        LinkedIn
                      </a>
                    )}
                    {member.links.github && (
                      <a href={member.links.github} className="project-link">
                        GitHub
                      </a>
                    )}
                    {member.links.twitter && (
                      <a href={member.links.twitter} className="project-link">
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Advisors Section */}
      <section className="projects">
        <div className="section-header">// Board of Advisors</div>
        <div className="projects-grid">
          {advisors.map((advisor) => (
            <div key={advisor.id} className="project-item">
              <div className="team-member">
                <div className="advisor-photo">{advisor.initials}</div>
                <div className="member-info">
                  <div className="project-name">{advisor.name}</div>
                  <div className="project-type">{advisor.role}</div>
                  <div className="project-description">
                    {advisor.description}
                  </div>
                  <div className="project-links">
                    {advisor.links.publications && (
                      <a href={advisor.links.publications} className="project-link">
                        Publications
                      </a>
                    )}
                    {advisor.links.linkedin && (
                      <a href={advisor.links.linkedin} className="project-link">
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}