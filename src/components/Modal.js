// src/components/Modal.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Modal.css'; // Ensure you have the appropriate styles

const modalVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 50 },
};

const Modal = ({ isOpen, onClose, title, content }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="modal-overlay"
                    onClick={onClose}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="modal-content"
                        variants={modalVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <button className="close-button" onClick={onClose}>X</button>
                        <h2>{title}</h2>
                        <div>{content}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
