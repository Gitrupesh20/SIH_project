import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="showcase-container">
      <header className="showcase-header">
        <div className="logo"><img src='/images/logo1.png'alt='InkWell Insights' ></img></div>
        <nav className="showcase-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Collaboration</a>
          <a href="#" className="sign-in-btn">Sign In</a>
        </nav>
        <div className="hero">
          <h1>Effortless Faculty Publication Summaries for Academic Profiles</h1>
          <p>Supporting academic excellence with a rich repository of research and faculty profiles from leading institutions.</p>
        </div>
      </header>
<div className="faculty">
      <section className="faculty-records">
  <div className="faculty-info">
    <h3 className="faculty-view">view records</h3>
    <h2 className="faculty-title">Faculty records</h2>
    <p className="faculty-description">
      The scholars website makes it easy for university faculty to showcase their academic publications and records online. Custom profiles display each faculty member's name, research interests, and a list of their peer-reviewed papers, sorted by year and other filters.
    </p>
    <button className="view-projects-btn">See papers</button>
  </div>
</section>

<section className="profile-options">
  <div className="profile-item">
    <img src="/images/faculty.jpg" alt="Faculty Records" className="profile-image" />
    <h3>Custom profiles</h3>
    <p>The site allows each faculty member to have their own personalized page listing all of their academic publications and details. Standard or custom templates display the publications in a format designed by the faculty to match their preferences.</p>
  </div>
  <div className="profile-item">
    <img src="/images/filtering-options.jpg" alt="Filtering Options" className="profile-image" />
    <h3>Filtering options</h3>
    <p>Visitors can browse the faculty database using built-in filters to display publication records by year, title, author name, citations, journal name, and other sort options to best meet their research needs.</p>
  </div>
</section>
</div>
      <section className="faculty-profiles">
        <h2>Faculty profiles</h2>
        <p>Our website showcases detailed faculty publication records that can be filtered and exported based on various criteria.</p> 
        <Link to='/form'>
        <button className="view-projects-btn">See Profiles</button></Link>
        <div className="profile-grid">
          <div className="profile-card">
            <img src="/images/publications.jpg" alt="Publications" className="profile-card-image" />
            <h3>Publications</h3>
            <p>View publications by faculty and filter by various academic criteria.</p>
          </div>
          <div className="profile-card">
            <img src="/images/by-year.jpg" alt="By Year" className="profile-card-image" />
            <h3>By Year</h3>
            <p>Explore research projects by publication year.</p>
          </div>
          <div className="profile-card">
            <img src="/images/by-type.jpg" alt="By Type" className="profile-card-image" />
            <h3>By Type</h3>
            <p>Filter research work by type, from articles to papers, etc.</p>
          </div>
          <div className="profile-card">
            <img src="/images/customize.jpg" alt="Customize" className="profile-card-image" />
            <h3>Customize</h3>
            <p>Customize your view and personalize research insights for your specific needs.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Research Portal. All rights reserved.</p>
          <nav className="footer-nav">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Home;