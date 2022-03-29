import { useEffect, useState } from "react";

const ScrollTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    window.addEventListener(scroll, () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
         &#8679;
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
};

export default ScrollTop;