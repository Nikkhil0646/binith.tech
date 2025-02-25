// src/components/ButtonsSection.js
import React, { useState } from "react";
import "./ButtonSection.css";
import Modal from "./Modal";

const ButtonsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "", extraContent: "" });

  // Define content for each button
  const modalData = {
    blog: {
      title: "My Blog",
      content: "Welcome to my blog! Here you can find articles and updates.",
      extraContent: (
        <div className="visit_blog_button">
          <button onClick={() => window.open("https://myblog.com", "_blank")}>Visit Blog</button>
        </div>
      ),
    },
    gear: {
      title: "My Gear",
      content: "Here is a list of my favorite gear and tools.",
      extraContent: (
        <ul>
          <li>MacBook Pro</li>
          <li>Logitech MX Master 3</li>
          <li>Mechanical Keyboard</li>
        </ul>
      ),
    },
    contact: {
      title: "Contact Me",
      content: "Feel free to reach out via email or social media!",
      extraContent: (
        <div>
          <button className = "mail" onClick={() => window.open("mailto:your-email@example.com")}>Email Me</button>
          <button onClick={() => window.open("https://linkedin.com/in/yourprofile", "_blank")}>
            LinkedIn
          </button>
        </div>
      ),
    },
  };

  // Function to open modal with specific content
  const openModal = (type) => {
    setModalContent(modalData[type]);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="buttons-section">
      <button onClick={() => openModal("blog")}>My Blog</button>
      <button onClick={() => openModal("gear")}>My Gear</button>
      <button onClick={() => openModal("contact")}>Contact Me</button>

      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} content={modalContent.content} extraContent={modalContent.extraContent} />
    </div>
  );
};

export default ButtonsSection;
