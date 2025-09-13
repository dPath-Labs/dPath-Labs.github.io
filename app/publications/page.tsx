'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { publications } from '@/data';
import { Publication } from '@/types';

const categoryMap: Record<string, string> = {
  aerial: 'Aerial Intelligence',
  swarm: 'Multi-Agent Systems',
  ml: 'Machine Learning',
  perception: 'Perception',
  ground: 'Ground Robotics'
};

export default function PublicationsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Group publications by year
  const publicationsByYear = useMemo(() => {
    const filtered = activeFilter === 'all' 
      ? publications 
      : publications.filter(pub => pub.category === activeFilter);

    return filtered.reduce((acc, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = [];
      }
      acc[pub.year].push(pub);
      return acc;
    }, {} as Record<number, Publication[]>);
  }, [activeFilter]);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalPublications = publications.length;
    const topTierVenues = new Set(publications.map(pub => pub.venue)).size;
    const bestPaperAwards = publications.filter(pub => pub.award).length;
    const years = new Set(publications.map(pub => pub.year));
    const yearsActive = Math.max(...Array.from(years)) - Math.min(...Array.from(years)) + 1;

    return {
      totalPublications,
      topTierVenues,
      bestPaperAwards,
      yearsActive
    };
  }, []);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const sortedYears = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a); // Sort descending (newest first)

  return (
    <section className="publications-page" style={{ paddingTop: '180px' }}>
      <div className="container">
        <div className="section-header">// All Publications</div>
        
        {/* Filter Controls */}
        <div className="publication-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          {Object.entries(categoryMap).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
              onClick={() => handleFilterClick(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="publications-list">
          {sortedYears.map(year => (
            <div key={year} className="publication-year">
              <h2>{year}</h2>
              <div className="year-publications">
                {publicationsByYear[year].map((pub) => (
                  <div key={pub.id} className="pub-entry" data-category={pub.category}>
                    <div className="pub-info">
                      {pub.link ? (
                        <Link href={pub.link} className="pub-title-link">
                          {pub.title}
                        </Link>
                      ) : (
                        <div className="pub-title">{pub.title}</div>
                      )}
                      <div className="pub-authors">
                        {pub.authors.join(', ')}
                      </div>
                      <div className="pub-venue">
                        {pub.venue} {pub.year}
                        {pub.award && ` - ${pub.award}`}
                      </div>
                    </div>
                    <div className="pub-tags">
                      {pub.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="publication-stats">
          <div className="stat-item">
            <div className="stat-number">{stats.totalPublications}</div>
            <div className="stat-label">Total Publications</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.topTierVenues}</div>
            <div className="stat-label">Top-Tier Venues</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.bestPaperAwards}</div>
            <div className="stat-label">Best Paper Awards</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.yearsActive}</div>
            <div className="stat-label">Years Active</div>
          </div>
        </div>
      </div>
    </section>
  );
}