'use client'
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



function Animate({ children, duration,positionValue }: { duration: number, positionValue:string | "100%", children: React.ReactNode }) {
    const config = {
        visible: { opacity: 1, scale: 1, transition: { duration: `${duration}` }, x: 0, y: 0 },
        hidden: { opacity: 0, scale: 1, x: "0", y: `${positionValue}` },
    };
    const controls = useAnimation();
    const [ref, inView] = useInView();


    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={config}
        >
            {children}
        </motion.div>
    );
}

export default Animate;
