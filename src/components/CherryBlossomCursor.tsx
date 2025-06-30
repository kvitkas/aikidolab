import { useEffect, useState, useRef, useCallback } from "react";
import cherryBlossomImage from "@/images/ui/download.png";

interface InteractiveBlossom {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  scale: number;
  life: number;
  birthTime: number;
  springTension: number;
  damping: number;
  velocityX: number;
  velocityY: number;
  hue: number;
  glowIntensity: number;
}

export default function CherryBlossomCursor() {
  const [blossoms, setBlossoms] = useState<InteractiveBlossom[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  const animationRef = useRef<number>();
  const lastInteractionTime = useRef(0);
  const blossomIdCounter = useRef(0);

  // Detect mobile and update dimensions
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const createBlossom = useCallback(
    (x: number, y: number, burst = false): InteractiveBlossom => {
      const isMobile = dimensions.width < 768;
      const size = isMobile ? 8 + Math.random() * 12 : 12 + Math.random() * 16;

      const angle = burst ? Math.random() * Math.PI * 2 : 0;
      const distance = burst ? 20 + Math.random() * 40 : 0;

      return {
        id: blossomIdCounter.current++,
        x,
        y,
        targetX: x + Math.cos(angle) * distance,
        targetY: y + Math.sin(angle) * distance,
        size,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4,
        opacity: 0.6 + Math.random() * 0.4,
        scale: burst ? 0.2 : 0.8,
        life: 1,
        birthTime: performance.now(),
        springTension: 0.05 + Math.random() * 0.05,
        damping: 0.8 + Math.random() * 0.15,
        velocityX: 0,
        velocityY: 0,
        hue: Math.random() * 40 - 20,
        glowIntensity: Math.random() * 0.5 + 0.3,
      };
    },
    [dimensions.width],
  );

  // Handle mouse/touch interactions
  useEffect(() => {
    const isMobile = dimensions.width < 768;
    const maxBlossoms = isMobile ? 12 : 20;

    const handleInteraction = (x: number, y: number, isStart = false) => {
      const currentTime = performance.now();
      setMousePos({ x, y });
      setIsInteracting(true);

      // Create burst effect on click/touch start
      if (isStart && currentTime - lastInteractionTime.current > 300) {
        setBlossoms((prev) => {
          const burstCount = isMobile ? 3 : 5;
          const newBlossoms = Array.from({ length: burstCount }, () =>
            createBlossom(x, y, true),
          );
          return [...prev, ...newBlossoms].slice(-maxBlossoms);
        });
        lastInteractionTime.current = currentTime;
      }

      // Create trailing blossoms occasionally
      if (Math.random() < (isMobile ? 0.03 : 0.05)) {
        setBlossoms((prev) => {
          const newBlossom = createBlossom(
            x + (Math.random() - 0.5) * 30,
            y + (Math.random() - 0.5) * 30,
          );
          return [...prev, newBlossom].slice(-maxBlossoms);
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleInteraction(e.clientX, e.clientY);
    };

    const handleMouseDown = (e: MouseEvent) => {
      handleInteraction(e.clientX, e.clientY, true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY, true);
      }
    };

    const handleInteractionEnd = () => {
      setIsInteracting(false);
    };

    // Add event listeners
    if (isMobile) {
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchend", handleInteractionEnd, {
        passive: true,
      });
    } else {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleInteractionEnd);
      window.addEventListener("mouseleave", handleInteractionEnd);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleInteractionEnd);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleInteractionEnd);
        window.removeEventListener("mouseleave", handleInteractionEnd);
      }
    };
  }, [createBlossom, dimensions.width]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setBlossoms(
        (prevBlossoms) =>
          prevBlossoms
            .map((blossom) => {
              const age = (performance.now() - blossom.birthTime) / 1000; // age in seconds
              const maxAge = 3; // 3 seconds lifespan

              // Calculate life remaining
              const life = Math.max(0, 1 - age / maxAge);
              if (life <= 0) return null; // Mark for removal

              // Spring physics for smooth movement
              const deltaX = blossom.targetX - blossom.x;
              const deltaY = blossom.targetY - blossom.y;

              const forceX = deltaX * blossom.springTension;
              const forceY = deltaY * blossom.springTension;

              const newVelocityX =
                (blossom.velocityX + forceX) * blossom.damping;
              const newVelocityY =
                (blossom.velocityY + forceY) * blossom.damping;

              // Add slight upward drift and gentle sway
              const drift = Math.sin(age * 2) * 0.5;
              const upwardForce = -0.3 * (1 - age / maxAge); // Float upward over time

              // Update position
              const newX = blossom.x + newVelocityX + drift;
              const newY = blossom.y + newVelocityY + upwardForce;

              // Update scale and opacity based on life
              const scale = blossom.scale + (1 - blossom.scale) * 0.05;
              const opacity = blossom.opacity * life;

              // Update glow intensity based on interaction
              const distanceToMouse = Math.sqrt(
                (mousePos.x - newX) ** 2 + (mousePos.y - newY) ** 2,
              );
              const glowBoost =
                isInteracting && distanceToMouse < 100 ? 0.5 : 0;

              return {
                ...blossom,
                x: newX,
                y: newY,
                velocityX: newVelocityX,
                velocityY: newVelocityY,
                rotation: blossom.rotation + blossom.rotationSpeed,
                scale,
                opacity,
                life,
                glowIntensity: Math.min(1, blossom.glowIntensity + glowBoost),
              };
            })
            .filter(Boolean) as InteractiveBlossom[], // Remove null entries
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, isInteracting]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: 20,
        isolation: "isolate",
      }}
    >
      {blossoms.map((blossom) => (
        <div
          key={blossom.id}
          className="absolute will-change-transform"
          style={{
            left: `${blossom.x - blossom.size / 2}px`,
            top: `${blossom.y - blossom.size / 2}px`,
            width: `${blossom.size}px`,
            height: `${blossom.size}px`,
            transform: `
              rotate(${blossom.rotation}deg)
              scale(${blossom.scale})
            `,
            opacity: blossom.opacity,
            filter: `
              hue-rotate(${blossom.hue}deg)
              brightness(${1 + blossom.glowIntensity * 0.3})
              drop-shadow(0 0 ${blossom.glowIntensity * 8}px rgba(255, 182, 193, ${blossom.glowIntensity * 0.6}))
            `,
          }}
        >
          <img
            src={cherryBlossomImage}
            alt=""
            className="w-full h-full object-contain select-none"
            draggable="false"
            style={{
              imageRendering: "auto",
              backfaceVisibility: "hidden",
            }}
          />

          {/* Particle glow effect */}
          {blossom.glowIntensity > 0.5 && (
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle, rgba(255, 192, 203, ${blossom.glowIntensity * 0.4}) 0%, transparent 60%)`,
                filter: "blur(3px)",
                transform: "scale(2)",
                animation: `pulse ${1 + Math.random()}s ease-in-out infinite alternate`,
              }}
            />
          )}
        </div>
      ))}

      {/* Add CSS animation for pulse effect */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.3;
            transform: scale(1.8);
          }
          100% {
            opacity: 0.7;
            transform: scale(2.2);
          }
        }
      `}</style>
    </div>
  );
}
