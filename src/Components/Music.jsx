import React, { useState } from 'react';
import './Music.css';
import { FaMusic } from 'react-icons/fa';

function MusicPlayerButton({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="button-container">
    <button className="music-button" onClick={togglePlay}>
      {/* <FaMusic className="music-icon" /> */}
      {isPlaying ? 'Pause ' : 'Play '}
    </button>
  </div>
  );
}

export default MusicPlayerButton;
