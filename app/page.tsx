// page.tsx (Updated)
'use client'; // Required for Framer Motion hooks in Next.js 13+
import Image from "next/image";
import styles from "./page.module.scss";
import {projects} from "../data";
import Card from "../components/Card";
import { useScroll } from 'framer-motion'; // 👈 Import useScroll
import { useRef } from 'react'; // 👈 Import useRef

export default function Home() {
    const container = useRef(null); // 👈 1. Create a ref
    const { scrollYProgress } = useScroll({ // 👈 2. Get scroll progress
        target: container,
        // Define when the scroll tracking starts and ends relative to the target container
        offset: ['start start', 'end end'] 
    });

    return (
        // 3. Assign the ref to your main element
        <main ref={container} className={styles.main}> 
            {
                projects.map( (project, i) => {
                    // 4. Calculate a unique target scale for each card
                    const targetScale = 1 - ( (projects.length - i) * 0.05); 
                    
                    return <Card 
                                key={`p_${i}`} 
                                {...project} 
                                i={i} // Pass index
                                progress={scrollYProgress} // Pass scroll progress MotionValue
                                range={[i * .25, 1]} // Define the scroll range for each card's animation
                                targetScale={targetScale} // Pass the calculated target scale
                            />
                })
            }
        </main>
    );
}
