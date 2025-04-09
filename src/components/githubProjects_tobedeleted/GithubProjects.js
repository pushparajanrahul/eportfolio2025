import React, { useState, useContext } from "react";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import GithubRepoCard from "../githubRepoCard/GithubRepoCard";
import "./GithubProjects.scss";

function GithubProjects({ repos }) {
  const { isDark } = useContext(StyleContext);
  const [showAll, setShowAll] = useState(false);

  // Fallback UI for error or empty results
  if (typeof repos === "string") {
    // Error fetching repos
    return (
      <div className="projects-error">
        <p className={isDark ? "dark-mode error-text" : "error-text"}>
          Unable to load projects from GitHub.
        </p>
      </div>
    );
  }
  if (Array.isArray(repos) && repos.length === 0) {
    // No repos to display
    return (
      <div className="projects-empty">
        <p className={isDark ? "dark-mode empty-text" : "empty-text"}>
          No projects to display.
        </p>
      </div>
    );
  }

  // Determine which repos to show initially and which remain hidden
  const initialCount = 6;
  const initialRepos = Array.isArray(repos) ? repos.slice(0, initialCount) : [];
  const remainingRepos = Array.isArray(repos) ? repos.slice(initialCount) : [];
  const visibleRepos = showAll ? repos : initialRepos;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        {/* Section Heading */}
        <div className="projects-header">
          <h1 className={isDark ? "dark-mode heading projects-heading" : "heading projects-heading"}>
            Projects
          </h1>
          {/* (Optional) subtitle or description can be added here for context */}
        </div>

        {/* Grid of repository cards (3 per row on large screens) */}
        <div className="repo-cards-div">
          {visibleRepos.map((repo) => (
            <GithubRepoCard key={repo.node.id} repo={repo} isDark={isDark} />
          ))}
        </div>

        {/* "More Projects" button to reveal remaining repos */}
        {!showAll && remainingRepos.length > 0 && (
          <div className="more-projects-btn-wrapper">
            <button className="btn more-projects-btn" onClick={() => setShowAll(true)}>
              More Projects
            </button>
          </div>
        )}
      </div>
    </Fade>
  );
}

export default GithubProjects;
