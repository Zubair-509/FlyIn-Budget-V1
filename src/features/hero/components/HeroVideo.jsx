import React, { useRef, useEffect } from 'react';
import videoSrc from '../../../assets/0729.mp4';
import heroBgImg from '../../../assets/BC-Hero.png';

export default function HeroVideo({ onVideoEnded, isVideoEnded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && !isVideoEnded) {
      videoRef.current.play().catch(err => {
        console.warn('Autoplay prevented or interrupted:', err);
        setTimeout(onVideoEnded, 300);
      });
    }
  }, [onVideoEnded, isVideoEnded]);

  return (
    <div className="video-container">
      {/* Static Background Image (Rendered eagerly as main hero background) */}
      <img
        src={heroBgImg}
        alt="Hero Background"
        className="hero-bg-image"
        loading="eager"
      />

      {/* Video Layer — Only mounted in DOM if intro has not been completed */}
      {!isVideoEnded && (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnded}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="video-overlay"></div>
    </div>
  );
}
