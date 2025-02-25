// src/components/Modal.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css"; 

const Modal = ({ isOpen, onClose, title, content, extraContent }) => {
  const [height, setHeight] = useState(300); // Default modal height

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
            className="modal-sheet"
            style={{ height: `${height}px` }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Draggable Handle */}
            <motion.div 
              className="modal-handle"
              drag="y"
              dragConstraints={{ top: -200, bottom: 0 }} // Set drag limits
              onDrag={(event, info) => setHeight((prev) => Math.max(250, prev - info.delta.y))}
            />

            <div className="modal-header">
              <h2>{title}</h2>
              <button className="close-button" onClick={onClose}>X</button>
            </div>
            
            <div className="modal-body">
              <p>{content}</p>
              {extraContent && <div className="extra-content">{extraContent}</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
