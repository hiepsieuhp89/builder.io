import React, { useEffect, useRef } from "react";

const ParticleEffect = ({ text }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = this.originX = x;
        this.y = this.originY = y;
        this.size = 2;
        this.color = color;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = 0.98;
        this.ease = 0.2;
      }
      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;
        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }
        this.x +=
          (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y +=
          (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      }
    }

    class Effect {
      constructor(width, height, context) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.text = text;
        this.textWidth;
        this.fontSize = 100;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.x;
        this.y;
        this.particles = [];
        this.gap = 2;
        this.mouse = {
          radius: 5000,
          x: 0,
          y: 0,
        };
        window.addEventListener("mousemove", (event) => {
          this.mouse.x = event.x;
          this.mouse.y = event.y;
        });

        window.addEventListener(
          "touchstart",
          (event) => {
            this.mouse.x = event.changedTouches[0].clientX;
            this.mouse.y = event.changedTouches[0].clientY;
          },
          false
        );

        window.addEventListener(
          "touchmove",
          (event) => {
            event.preventDefault();
            this.mouse.x = event.targetTouches[0].clientX;
            this.mouse.y = event.targetTouches[0].clientY;
          },
          false
        );

        window.addEventListener(
          "touchend",
          (event) => {
            event.preventDefault();
            this.mouse.x = 0;
            this.mouse.y = 0;
          },
          false
        );
      }

      init(context) {
        context.clearRect(0, 0, this.width, this.height);

        this.particles = [];
        context.font = this.fontSize + "px Helvetica";
        this.textWidth = context.measureText(this.text).width;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.x = this.centerX - this.textWidth / 2;
        this.y = this.centerY - this.fontSize / 2;

        const gradient = context.createLinearGradient(
          this.x,
          this.y,
          this.textWidth,
          this.fontSize
        );
        gradient.addColorStop(0, "red");
        gradient.addColorStop(1, "blue");
        context.fillStyle = gradient;
        context.fillText(this.text, this.x, this.y);
        const pixels = context.getImageData(0, 0, this.width, this.height).data;
        let index;

        for (let y = 0; y < this.height; y += this.gap) {
          for (let x = 0; x < this.width; x += this.gap) {
            index = (y * this.width + x) * 4;
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            const color = "rgb(" + red + "," + green + "," + blue + ")";
            const alpha = pixels[index + 3];
            if (alpha > 0) {
              this.particles.push(new Particle(this, x, y, color));
            }
          }
        }
        context.clearRect(0, 0, this.width, this.height);
      }

      update() {
        for (let i = 0; i < this.particles.length; i++) {
          this.particles[i].update();
        }
      }

      render(context) {
        context.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.particles.length; i++) {
          const p = this.particles[i];
          context.fillStyle = p.color;
          context.fillRect(p.x, p.y, p.size, p.size);
        }
      }
    }

    const effect = new Effect(canvas.width, canvas.height, ctx);
    effect.init(ctx);

    const animate = () => {
      effect.update();
      effect.render(ctx);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="absolute w-full">
      <canvas
        ref={canvasRef}
      />
    </div>
  );
};

export default ParticleEffect;
