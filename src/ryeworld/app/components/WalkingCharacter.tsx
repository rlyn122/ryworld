"use client";

import React, { useState, useEffect, useRef } from 'react';

type Section = 0 | 1 | 2 | 3; // Bottom, Right, Top, Left

const WalkingCharacter: React.FC = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [section, setSection] = useState<Section>(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [movingRight, setMovingRight] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const characterRef = useRef<HTMLDivElement>(null);

  // Sprite configuration
  const frameWidth = 250;
  const frameHeight = 184;
  const totalFramesPerDirection = 2;
  const spriteSheets = {
    idleLeft: 0,
    idleRight: 2,
    walkLeft: 1,
    walkRight: 3
  };
  
  // Ensure we only run client-side code
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Viewport dimensions state
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  // Resize and initial dimension handler
  useEffect(() => {
    // Only run on client
    if (!isClient) return;

    const calculateViewportDimensions = () => {
      const width = window.innerWidth - frameWidth;
      const height = window.innerHeight - frameHeight;
      setViewportWidth(width);
      setViewportHeight(height);
    };

    // Calculate initial dimensions
    calculateViewportDimensions();

    // Add resize listener
    window.addEventListener('resize', calculateViewportDimensions);
    return () => window.removeEventListener('resize', calculateViewportDimensions);
  }, [frameWidth, frameHeight, isClient]);

  // Movement logic
  useEffect(() => {
    // Only start movement if client-side and viewport dimensions are set
    if (!isClient || viewportWidth === 0 || viewportHeight === 0) return;

    const movementInterval = setInterval(() => {
      if (positionX % 4 === 0 || positionY % 4 === 0) {
        setCurrentFrame(current => (current + 1) % totalFramesPerDirection);
      }

      switch(section) {
        case 0: // Moving from bottom to right
          if (positionX < viewportWidth) {
            setPositionX(current => current + 2);
          } else {
            setSection(1);
            setPositionY(0);
            setMovingRight(true);
          }
          break;
          
        case 1: // Moving from right to top
          if (positionY < viewportHeight) {
            setPositionY(current => current + 2);
          } else {
            setSection(2);
            setPositionX(viewportWidth);
          }
          break;
          
        case 2: // Moving from top to left
          if (positionX > 0) {
            setPositionX(current => current - 2);
          } else {
            setSection(3);
            setPositionY(viewportHeight);
            setMovingRight(true);
          }
          break;
          
        case 3: // Moving from left to bottom
          if (positionY > 0) {
            setPositionY(current => current - 2);
          } else {
            setSection(0);
            setPositionX(0);
          }
          break;
      }
    }, 90);

    return () => clearInterval(movementInterval);
  }, [section, positionX, positionY, viewportWidth, viewportHeight, isClient]);

  // Rotation based on current section
  const getRotation = (): number => {
    switch(section) {
      case 0: return 0;     // Bottom
      case 1: return -90;   // Right
      case 2: return 180;   // Top
      case 3: return 90;    // Left
      default: return 0;
    }
  };

  // Don't render anything server-side
  if (!isClient) return null;

  return (
    <div 
      ref={characterRef}
      className="absolute"
      style={{
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        left: `${positionX}px`,
        bottom: `${positionY}px`,
        backgroundImage: 'url(/catsen/Cat_5.png)', // Update with your sprite path
        backgroundPosition: `-${(  movingRight 
          ? (currentFrame === 0 
            ? spriteSheets.idleRight 
            : spriteSheets.walkRight) 
          : (currentFrame === 0 
            ? spriteSheets.idleLeft 
            : spriteSheets.walkLeft)
          ) * frameWidth}px 0px`,
        backgroundSize: `${frameWidth * 4}px ${frameHeight}px`,
        transform: `rotate(${getRotation()}deg) scale(0.3)`,
        transition: 'transform 0.1s ease'
      }}
    />
  );
};

export default WalkingCharacter;