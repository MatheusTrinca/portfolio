import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/matheus-trinca"
        className="home__social-icon"
        target="_blank"
      >
        <i className="bx bxl-linkedin"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5514999014372"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-whatsapp"></i>
      </a>
      <a
        href="https://github.com/MatheusTrinca"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
