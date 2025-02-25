// src/components/SocialLinks.js
import React from 'react';
import './SocialLinks.css'

const SocialLinks = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="social-links">
      <button onClick={() => openLink("https://github.com/Nikkhil0646")}>GitHub</button>
      <button onClick={() => openLink("https://www.behance.net/binithkumar1")}>Behance</button>
      <button onClick={() => openLink("https://www.linkedin.com/in/binith-kumar")}>LinkedIn</button>
    </div>
  );
};

export default SocialLinks;


