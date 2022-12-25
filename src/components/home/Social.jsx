import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/matheus-trinca"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5514999014372"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-whatsapp"></i>
      </a>
      <a
        href="https://github.com/MatheusTrinca"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
