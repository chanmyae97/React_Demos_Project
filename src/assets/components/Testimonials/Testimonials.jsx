import { useState } from "react";
//import "./style.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      context: "Encourages pursuing passion in work.",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      context: "A reminder to live in the moment.",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
      context: "Highlights resilience and persistence.",
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
      context: "Encourages seeing challenges as opportunities.",
    },
    {
      quote:
        "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
      context: "Emphasizes taking responsibility for happiness.",
    },
    {
      quote:
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha",
      context: "Stresses mindfulness and living in the now.",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
      context: "Motivates persistence and patience.",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      context: "Encourages self-belief and confidence.",
    },
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      context: "Inspires taking control of one's destiny.",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
      context: "Encourages taking risks and seizing opportunities.",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length + 1) % testimonials.length
    );
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>

      <div className="testimonials-author">
        -{testimonials[currentIndex].author}
      </div>
      <div className="testimonials-context">
        "{testimonials[currentIndex].context}"
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}></button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
