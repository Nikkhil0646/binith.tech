// src/components/ButtonsSection.js
import React, { useState } from "react";
import Modal from "./Modal";
import "./ButtonSection.css";

const ButtonsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [extraContent, setExtraContent] = useState(null);

  const openModal = (title, content, extra = null) => {
    setModalTitle(title);
    setModalContent(content);
    setExtraContent(extra);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalTitle("");
    setModalContent("");
    setExtraContent(null);
  };

  return (
    <div className="buttons-section">
      {/* My Blog - Includes Articles and Extra Button */}
      <button
        className="blog-btn"
        onClick={() =>
          openModal(
            "My Blog",
            "Explore my latest blog posts!",
            <>
              <ul className="blog-list">
                <li>🚀 How I Built My Portfolio</li>
                <li>🛠️ Tools I Use for Development</li>
                <li>🎨 My Approach to UI/UX Design</li>
              </ul>
              <button className="view-more-btn">View More Blogs</button>
            </>
          )
        }
      >
        My Blog
      </button>

      {/* My Gear */}
      <button
        className="gear-btn"
        onClick={() =>
          openModal(
            "My Gear",
            "Here are some of my favorite tools & gadgets!",
            <>
              <ul className="gear-list">
                <li>💻 MacBook Pro M2</li>
                <li>⌨️ Keychron K6 Keyboard</li>
                <li>🎧 Sony WH-1000XM5 Headphones</li>
              </ul>
            </>
          )
        }
      >
        My Gear
      </button>

      {/* Contact Me */}
      <button
        className="contact-btn"
        onClick={() =>
          openModal(
            "Contact Me",
            "Reach out via email or social media!",
            <>
              <button className="contact-btn">📩 Email Me</button>
              <button className="contact-btn">🔗 LinkedIn</button>
            </>
          )
        }
      >
        Contact Me
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalTitle}
        content={modalContent}
        extraContent={extraContent}
      />
    </div>
  );
};

export default ButtonsSection;
