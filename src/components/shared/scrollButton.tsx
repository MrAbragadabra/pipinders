'use client'
import { ChevronUp } from 'lucide-react'
import { useState, useEffect } from "react";

interface Props {
	className?: string
}

export const ScrollButton: React.FC<Props> = ({className}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Показать кнопку, когда пользователь прокручивает страницу вниз
  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-lime-700 text-white p-3 rounded-full shadow-md hover:bg-lime-600 transition duration-300"
        >
          <ChevronUp size={32} color="#ffffff" strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
