'use client';

import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  delayStartup?: number;
}

export function TypingAnimation({
  text,
  duration = 200,
  className,
  style,
  delayStartup = 0,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [i, setI] = useState<number>(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setStarted(true);
    }, delayStartup);

    return () => clearTimeout(t);
  }, [delayStartup]);

  useEffect(() => {
    if (!started) return;

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text, started]);

  return (
    <p style={style} className={className}>
      {displayedText}
    </p>
  );
}
