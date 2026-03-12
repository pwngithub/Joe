export default function App() {
  const featuredProjects = [
    {
      title: 'Plourde Furniture Campaigns',
      description:
        'Retail marketing campaigns featuring promotional graphics, seasonal ads, product spotlights, and paid social content designed to increase reach and engagement.',
      highlights: ['882K+ campaign views', '88.5K+ viewers reached', '2.3K+ content interactions'],
    },
    {
      title: 'UMPI Athletics Promotions',
      description:
        'Game-day graphics, athlete highlights, event promotions, and social media assets created for 8+ NCAA athletic programs.',
      highlights: ['8+ athletic programs supported', 'Multi-platform social content', 'Brand-consistent visual design'],
    },
    {
      title: 'Brand & Graphic Design Work',
      description:
        'Custom graphics for apparel, signage, decals, and promotional materials created for retail and local business clients.',
      highlights: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand-focused design'],
    },
  ];

  const skills = [
    'Digital Marketing',
    'Social Media Strategy',
    'Paid Social Advertising',
    'Content Creation',
    'Graphic Design',
    'Brand Development',
    'Campaign Performance',
    'Adobe Photoshop',
    'Adobe Illustrator',
  ];

  return (
    <div className="site">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Marketing Portfolio</p>
            <h1>Joseph Michaud</h1>
            <p className="lede">
              Marketing professional focused on digital campaigns, social media growth,
              and graphic design. This portfolio highlights campaign work, creative assets,
              and measurable results across retail, athletics, and brand marketing.
            </p>
            <div className="button-row">
              <a href="mailto:jjmichaud15@gmail.com" className="btn btn-dark">Contact Joe</a>
              <a href="#featured-work" className="btn btn-light">View Featured Work</a>
            </div>
          </div>

          <div className="stats-card">
            <p className="stats-label">Campaign Impact</p>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">882K+</div>
                <div className="stat-text">Campaign Views</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">88.5K+</div>
                <div className="stat-text">Viewers Reached</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">2.3K+</div>
                <div className="stat-text">Interactions</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">200%+</div>
                <div className="stat-text">Growth in Reach</div>
              </div>
            </div>
            <div className="focus-card">
              <p className="focus-title">Core Focus</p>
              <p>
                Blending strategy, design, and performance to create marketing that looks strong and delivers results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-work" className="section">
        <div className="container">
          <p className="eyebrow">Featured Work</p>
          <h2>Selected projects and campaign work</h2>
          <p className="section-copy">
            A curated selection of marketing projects that demonstrate campaign strategy, visual branding, and audience engagement.
          </p>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.highlights.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">About</p>
            <h2>Marketing, design, and measurable growth</h2>
          </div>
          <div>
            <p className="section-copy">
              Joe brings together business marketing knowledge and graphic design execution to create campaigns that are visually compelling and performance-driven. His experience spans retail promotions, athletics marketing, paid and organic social campaigns, and branded creative production for local businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Skills</p>
            <h2>Core capabilities</h2>
          </div>
          <div className="tag-row">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="footer-cta">
        <div className="container footer-grid">
          <div>
            <p className="eyebrow eyebrow-dark">Let's Connect</p>
            <h2>Looking for a marketing role or freelance opportunity</h2>
            <p className="footer-copy">
              Available for marketing, social media, and creative roles with a focus on campaign growth, branding, and digital content.
            </p>
          </div>
          <a href="mailto:jjmichaud15@gmail.com" className="btn btn-white">Email Joe</a>
        </div>
      </section>
    </div>
  );
}
