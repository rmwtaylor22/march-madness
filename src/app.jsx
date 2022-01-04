import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router hook={useHashLocation}>
      <Seo />
      <header className="header">
      <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/profile">Profile</Link>
          <span className="divider">|</span>
          <Link href="/main">Main</Link>
        </div>
        <a
          className="btn--remix"
        >
          <img src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140" alt="" />
          Log out
        </a>
      </header>
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
      </footer>
    </Router>
  );
}
