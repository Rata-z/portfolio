"use client";
import React, { useEffect, useRef } from "react";
interface Props {
  backgroundColor?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}
interface Star {
  x: number;
  y: number;
}

function Canvas(props: Props) {
  const {
    backgroundColor = "rgba(0,0,0,1)",
    height = typeof window !== "undefined" ? window.innerHeight + 100 : 600,
    width = typeof window !== "undefined" ? window.innerWidth : 800,
  } = props;

  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const c = canvas.getContext("2d");

      if (c) {
        const gradient = c.createLinearGradient(
          window.innerWidth / 2,
          0,
          window.innerWidth / 2,
          window.innerHeight + 100
        );
        gradient.addColorStop(0, "black");
        gradient.addColorStop(1, "#00030d");
        let w = width;
        let h = height;

        const setCanvasExtents = () => {
          canvas.width = w;
          canvas.height = h;
        };

        setCanvasExtents();

        window.onresize = () => {
          setCanvasExtents();
        };

        const makeStars = (count: number) => {
          const out = [];
          for (let i = 0; i < count; i++) {
            const s = {
              x: Math.random() * w,
              y: Math.random() * h,
            };
            out.push(s);
          }
          return out;
        };

        let stars: Star[] = makeStars(w / 2);

        const clear = () => {
          c.fillStyle = gradient;
          c.fillRect(0, 0, canvas.width, canvas.height);
        };

        const putPixel = (x: number, y: number, brightness: number) => {
          const rgb = `rgba(255, 255, 255, ${brightness})`;
          c.fillStyle = rgb;
          c.fillRect(x, y, 1, 1);
        };

        const lightStars = () => {
          const count = stars.length;
          const newBrightStars: number[] = [];
          while (newBrightStars.length < 5) {
            const randomNumber = Math.floor(Math.random() * count) + 1;
            newBrightStars.push(randomNumber);
          }
          clear();
          for (var i = 0; i < count; i++) {
            const star = stars[i];
            newBrightStars.includes(i)
              ? putPixel(star.x, star.y, 1)
              : putPixel(star.x, star.y, 0.5);
          }
        };

        const init = () => {
          lightStars();
          requestAnimationFrame(tick);
        };

        const tick = () => {
          lightStars();

          requestAnimationFrame(tick);
        };

        requestAnimationFrame(init);

        // add window resize listener:
        window.addEventListener("resize", function () {
          w = window.innerWidth;
          h = window.innerHeight;
          setCanvasExtents();
          stars = makeStars(w / 2);
        });
      } else {
        console.error("Could not get 2d context from canvas element");
      }
    }

    return () => {
      window.onresize = null;
    };
  }, [backgroundColor]);

  return (
    <canvas
      className="absolute  "
      ref={ref}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </canvas>
  );
}

export default Canvas;
