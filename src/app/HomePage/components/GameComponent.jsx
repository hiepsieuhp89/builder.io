"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from './GameComponent.module.css';

// Sử dụng sprite từ Universal LPC Sprite Sheet Generator
const CHARACTER_SPRITE_URL = "https://sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator/spritesheets/male_walkcycle.png";
// hoặc
// const CHARACTER_SPRITE_URL = "https://raw.githubusercontent.com/jrconway3/Universal-LPC-spritesheet/master/sheet_all.png";

const GameComponent = () => {
  const [gameState, setGameState] = useState({
    level: 2,
    stamina: 10,
    staminaTimer: "02:31:11",
    xpLeft: 123,
    points: 100,
    multiplier: 0
  });

  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState('right');

  const handleClick = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const newX = ((e.clientX - container.left) / container.width) * 100;
    const newY = ((e.clientY - container.top) / container.height) * 100;
    
    setDirection(newX < position.x ? 'left' : 'right');
    setIsMoving(true);
    setPosition({ x: newX, y: newY });

    setTimeout(() => {
      setIsMoving(false);
    }, 300);
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex-[0.75] p-4 rounded-3xl w-[300px] mx-auto relative ${styles.gameContainer}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <div className="text-[#ffd700] text-lg font-pixel">Tuna</div>
          <div className="flex gap-1">
            <button className="w-5 h-5 bg-[#ffd700]"></button>
            <button className="w-5 h-5 bg-[#ffd700]"></button>
            <button className="w-5 h-5 bg-[#ffd700]"></button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div>
            {gameState.stamina}/10
            <div className="text-xs">Stamina</div>
            <div className="text-xs">{gameState.staminaTimer}</div>
          </div>
          <div className="text-right">
            LVL {gameState.level}
            <div className="w-24 h-1.5 bg-[#3a3a0d]">
              <div 
                className="h-full bg-[#ffd700]" 
                style={{width: `${(gameState.xpLeft/200)*100}%`}}
              ></div>
            </div>
            <div className="text-xs">{gameState.xpLeft}xp left</div>
          </div>
        </div>

        {/* Game Area */}
        <div 
          className={styles.gameArea}
          onClick={handleClick}
        >
          <div 
            className={styles.character}
            style={{
              position: 'absolute',
              left: `${position.x}%`,
              top: `${position.y}%`,
              width: '20px',
              height: '20px',
              backgroundColor: '#8b7355', // Màu nâu cho ô vuông
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.3s ease',
            }}
          />
        </div>

        {/* Bottom Stats */}
        <div className={styles.bottomNav}>
          <div className="flex justify-between text-[#ffd700] mb-2">
            <div className="text-xl font-pixel">{gameState.points} PTs</div>
            <div className="text-lg">{gameState.multiplier.toFixed(11)} Ξ</div>
          </div>

          <div className={styles.bottomButtons}>
            <button className="text-[#ffd700] text-xl">↑↓</button>
            <button className="text-[#ffd700] text-xl">🎒</button>
            <button className="text-[#ffd700] text-xl">🤖</button>
            <button className="text-[#ffd700] text-xl">🏆</button>
            <button className="text-[#ffd700] text-xl">🏅</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameComponent; 