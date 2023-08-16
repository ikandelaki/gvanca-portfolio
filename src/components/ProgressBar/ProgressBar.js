import { useContext, useEffect, useRef } from 'react';
import Star from '../../icons/star.svg';
import StarDark from '../../icons/star-dark.svg';
import { ThemeContext } from '../App/App';

function ProgressBar() {
  const { darkTheme } = useContext(ThemeContext);

  const starRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      // Maximum scroll distance of the page
      const maxScrollDistance = document.body.scrollHeight - window.innerHeight;
      
      // Maximum movement distance for the star within its parent
      const maxStarMove = starRef.current.parentElement.offsetHeight - starRef.current.offsetHeight;

      // Calculate proportionally how much the star should move relative to the page scroll
      const starMove = (window.scrollY / maxScrollDistance) * maxStarMove;

      // Set the new top value for the star
      starRef.current.style.top = `${starMove}px`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className="ProgressBar">
      <div className="ProgressBar-Line"></div>
      <div className="ProgressBar-Star" ref={starRef}>
        <img src={darkTheme ? StarDark : Star} />
      </div>
    </div>
  );
}

export default ProgressBar;
