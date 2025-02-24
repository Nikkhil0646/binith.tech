// src/components/Description.js
import React from 'react';
import './Description.css';
import download from'./download_button.png';

const Description = () => {
  const onButtonClick = () => {
    const pdfUrl = "Resume_FullStack.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume_FullStack.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="description">
      <p>
      "Artist by nature, I convert my creative designs into innovative web and mobile applications. Using tools like Figma, Illustrator and Blender, I blend artistry with technology, building interactive experiences with React, Three.js, Flutter, and Kotlin."
      </p>
      <button className='resume_button'  onClick={onButtonClick}>
      <img src={download} className='resume_download'/>Resume</button>
    </div>
  );
};

export default Description;
