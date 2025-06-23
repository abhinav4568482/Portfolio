import { useEffect, useState } from 'react';

function useTypingEffect(
  words: string[],
  typingSpeed: number = 120,
  pause: number = 1200
): string {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, typingSpeed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, pause]);

  return displayed;
}

export default useTypingEffect; 