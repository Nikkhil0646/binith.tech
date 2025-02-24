// src/components/ButtonsSection.js
import React, { useState } from 'react';
import './ButtonSection.css';
import Modal from './Modal';

const ButtonsSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        // Optionally reset title and content if needed
        setModalTitle('');
        setModalContent('');
    };

    return (
        <div className="buttons-section">
            <button onClick={() => openModal('My Blog', 'Welcome to my blog! Here you can find articles and updates.')}>My Blog</button>
            <button onClick={() => openModal('My Gear', 'Here is a list of my favorite gear and tools.')}>My Gear</button>
            <button onClick={() => openModal('Contact Me', 'Feel free to reach out via email or social media!')}>Contact Me</button>

            <Modal isOpen={isOpen} onClose={closeModal} title={modalTitle} content={modalContent} />
        </div>
    );
};

export default ButtonsSection;
