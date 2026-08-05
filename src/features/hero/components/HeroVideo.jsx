import React, { useRef, useEffect } from 'react';
import videoSrc from '../../../assets/Desktop Assets/Hero/Hero Video.mp4';
import heroBgImg from '../../../assets/Desktop Assets/BG/BC-Hero.png';

export default function HeroVideo({ onVideoEnded, isVideoEnded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && !isVideoEnded) {
      videoRef.current.play().catch((err) => {
        // Ignore React 18 StrictMode mount interruptions (AbortError)
        if (err.name === 'AbortError') return;
        console.warn('Autoplay prevented by browser policy:', err);
        setTimeout(onVideoEnded, 1000);
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
