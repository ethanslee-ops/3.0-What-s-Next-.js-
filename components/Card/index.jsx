// Card/index.jsx (Updated)
'use client'; // Required for Framer Motion hooks in Next.js 13+
import React from "react";
import styles from './style.module.scss'
import { motion, useTransform } from 'framer-motion'; // 👈 Import from framer-motion
import Image from "next/image";

// Update component props to receive animation values
export default function Card({title, src, link, color, i, progress, range, targetScale}) {
    // Map the main scroll progress (0 to 1) to the scale range for this specific card
    const scale = useTransform(progress, range, [1, targetScale]); 
    
    return (
        // 1. A container to manage the spacing and stickiness
        <div className={styles.cardContainer}>
             {/* 2. The motion.div for the card animation */}
            <motion.div 
                className={styles.card}
                // Apply the scale and background color
                style={{
                    backgroundColor: color, 
                    scale,
                    // Staggered 'sticky' position: The top offset makes each card stick lower down
                    top: `calc(-5vh + ${i * 25}px)` 
                }}
            >
                <a 
                    href={link} // Use the link prop for the URL
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" 
                    className={styles.cardLink} // Use a class for styling
                ></a>
                <div className={styles.body}>
                    <div className={styles.imageContainer}>
                        <Image
                            // Assuming images are in the public directory
                            src={`/${src}`} 
                            alt={title}
                            fill={true} // Makes the image fill the parent container
                            priority={true} 
                        />
                    </div>
                    <h2>{title}</h2>
                    {/* Add your project details here */}
                </div>
            </motion.div>
        </div>
    )
}