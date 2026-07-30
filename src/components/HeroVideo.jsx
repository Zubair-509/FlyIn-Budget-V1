import React, { useRef, useEffect } from 'react';
import videoSrc from '../assets/0729.mp4';
import heroBgImg from '../assets/BC-Hero.png';

export default function HeroVideo({ onVideoEnded, isVideoEnded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && !isVideoEnded) {
      videoRef.current.play().catch(err => {
        console.warn('Autoplay prevented or interrupted:', err);
        setTimeout(onVideoEnded, 1000);
      });
    }
  }, [onVideoEnded, isVideoEnded]);

  return (
    <div className="video-container">
      {/* Preloaded Static Background Image (Rendered eagerly behind video for zero-latency switch) */}
      <img
        src={heroBgImg}
        alt="Hero Background"
        className="hero-bg-image"
        loading="eager"
      />

      {/* Video Layer (Instantly hides on video end to expose BC-Hero.png underneath) */}
      <video
        ref={videoRef}
        className={`hero-video ${isVideoEnded ? 'is-hidden' : ''}`}
        autoPlay
        muted
        playsInline
        onEnded={onVideoEnded}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
}
