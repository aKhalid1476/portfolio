"use client";

import { useState, useEffect } from "react";

interface UseTypewriterOptions {
    speed?: number;
    startDelay?: number;
    start?: boolean;
}

export function useTypewriter(
    text: string,
    options: UseTypewriterOptions = {}
) {
    const { speed = 50, startDelay = 0, start = true } = options;
    const [displayedText, setDisplayedText] = useState("");
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Reset if text changes or start is false
        if (!start) {
            setDisplayedText("");
            setIsFinished(false);
            return;
        }

        // Check for reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery.matches) {
            setDisplayedText(text);
            setIsFinished(true);
            return;
        }

        let timeoutId: NodeJS.Timeout;
        let charIndex = 0;

        const animate = () => {
            if (charIndex < text.length) {
                setDisplayedText(text.slice(0, charIndex + 1));
                charIndex++;
                timeoutId = setTimeout(animate, speed + Math.random() * 20); // Add slight randomness for realism
            } else {
                setIsFinished(true);
            }
        };

        const startTimeout = setTimeout(() => {
            animate();
        }, startDelay);

        return () => {
            clearTimeout(startTimeout);
            clearTimeout(timeoutId);
        };
    }, [text, speed, startDelay, start]);

    return { displayedText, isFinished };
}
