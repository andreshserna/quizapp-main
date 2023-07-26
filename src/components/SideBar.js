// SideBar.js

import React from 'react';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://avatars.githubusercontent.com/u/110627648?v=4" alt="Mi foto de perfil" />
        <h4>Andres Hernandez</h4>
        <h5>Developer</h5>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/andres-hernandez-serna-front-end-developer/" target="_blank" rel="noreferrer">
            <iconify-icon className="social-icons" icon="line-md:linkedin" width="60" height="60"></iconify-icon>
          </a>
          <a href="https://www.github.com/andreshserna" target="_blank" rel="noreferrer">
            <iconify-icon icon="line-md:github-loop" width="60" height="60"></iconify-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
