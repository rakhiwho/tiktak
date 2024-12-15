export const handleClick = (setAnimate) => {
    setAnimate(true);
    // Reset animation state to allow retriggering
    setTimeout(() => setAnimate(false), 1000); // Match animation duration
  };