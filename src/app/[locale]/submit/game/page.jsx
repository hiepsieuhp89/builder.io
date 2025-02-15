"use client";
import { styles } from "../../../../styles";
import { StarsCanvas } from "../../../HomePage/canvas";
import GameComponent from "../../../HomePage/components/GameComponent";

function GamePage() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div className={`${styles.paddingX} w-full flex items-center py-5`}>
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <a href="/" className="flex">
              <p className="text-white text-[18px] font-bold cursor-pointer flex ">
                Maverick Can &nbsp;
                <span className="sm:block hidden"> | Game Zone</span>
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-0">
        <GameComponent />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default GamePage; 