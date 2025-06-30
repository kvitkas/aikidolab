import { useEffect, useRef, useCallback, useState } from "react";
import cherryBlossomImage from "@/images/ui/download.png";

interface Particle {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  angle: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  size: number;
  startTime: number;
  windOffset: number;
}

interface ParticleSystemConfig {
  maxParticles: number;
  spawnRate: number;
  gravity: number;
  windStrength: number;
  windFrequency: number;
  fadeSpeed: number;
  minSize: number;
  maxSize: number;
  minOpacity: number;
  maxOpacity: number;
  minSpeed: number;
  maxSpeed: number;
  rotationRange: number;
}

interface CherryBlossomBackgroundProps {
  enabled?: boolean;
}

export default function CherryBlossomBackground({
  enabled = true,
}: CherryBlossomBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const lastSpawnTime = useRef(0);
  const particleIdCounter = useRef(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Device-responsive particle system configuration
  const getConfig = useCallback((): ParticleSystemConfig => {
    const { width } = dimensionsRef.current;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;

    if (isMobile) {
      return {
        maxParticles: 15,
        spawnRate: 250,
        gravity: 0.015,
        windStrength: 0.3,
        windFrequency: 0.0008,
        fadeSpeed: 0.006,
        minSize: 12,
        maxSize: 20,
        minOpacity: 0.4,
        maxOpacity: 0.7,
        minSpeed: 0.3,
        maxSpeed: 1.2,
        rotationRange: 1.5,
      };
    } else if (isTablet) {
      return {
        maxParticles: 35,
        spawnRate: 180,
        gravity: 0.018,
        windStrength: 0.4,
        windFrequency: 0.0009,
        fadeSpeed: 0.007,
        minSize: 14,
        maxSize: 26,
        minOpacity: 0.35,
        maxOpacity: 0.75,
        minSpeed: 0.4,
        maxSpeed: 1.6,
        rotationRange: 2,
      };
    } else {
      return {
        maxParticles: 50,
        spawnRate: 150,
        gravity: 0.02,
        windStrength: 0.5,
        windFrequency: 0.001,
        fadeSpeed: 0.008,
        minSize: 16,
        maxSize: 32,
        minOpacity: 0.3,
        maxOpacity: 0.8,
        minSpeed: 0.5,
        maxSpeed: 2,
        rotationRange: 2.5,
      };
    }
  }, []);

  // Load cherry blossom image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      imageRef.current = img;
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.warn("Failed to load cherry blossom image");
      setImageLoaded(false);
    };
    img.src = cherryBlossomImage;
  }, []);

  // Utility function for random values
  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  // Create a new particle
  const createParticle = useCallback((): Particle => {
    const { width, height } = dimensionsRef.current;
    const config = getConfig();

    return {
      id: ++particleIdCounter.current,
      x: random(-50, width + 50),
      y: -50,
      velocityX: random(-0.2, 0.2),
      velocityY: random(config.minSpeed, config.maxSpeed),
      angle: random(0, Math.PI * 2),
      rotation: random(0, 360),
      rotationSpeed: random(-config.rotationRange, config.rotationRange),
      opacity: random(config.minOpacity, config.maxOpacity),
      size: random(config.minSize, config.maxSize),
      startTime: Date.now(),
      windOffset: random(0, Math.PI * 2),
    };
  }, [getConfig]);

  // Update particle physics
  const updateParticle = useCallback(
    (particle: Particle, currentTime: number): Particle => {
      const { height } = dimensionsRef.current;
      const config = getConfig();

      // Apply gravity
      const newVelocityY = particle.velocityY + config.gravity;

      // Apply wind (sine wave oscillation)
      const windForce =
        Math.sin(currentTime * config.windFrequency + particle.windOffset) *
        config.windStrength;
      const newVelocityX = particle.velocityX + windForce * 0.01;

      // Update position
      const newX = particle.x + newVelocityX;
      const newY = particle.y + newVelocityY;

      // Update rotation
      const newRotation = particle.rotation + particle.rotationSpeed;

      // Calculate opacity fade as particle approaches bottom
      const fadeZone = height * 0.8;
      let newOpacity = particle.opacity;

      if (newY > fadeZone) {
        const fadeProgress = (newY - fadeZone) / (height * 0.2);
        newOpacity = particle.opacity * (1 - fadeProgress * config.fadeSpeed);
      } else {
        // Natural opacity fade over time
        newOpacity = Math.max(0, particle.opacity - config.fadeSpeed * 0.1);
      }

      return {
        ...particle,
        x: newX,
        y: newY,
        velocityX: newVelocityX,
        velocityY: newVelocityY,
        rotation: newRotation,
        opacity: Math.max(0, newOpacity),
      };
    },
    [getConfig],
  );

  // Check if particle should be recycled
  const shouldRecycleParticle = useCallback((particle: Particle): boolean => {
    const { width, height } = dimensionsRef.current;

    return (
      particle.opacity <= 0.01 ||
      particle.y > height + 100 ||
      particle.x < -100 ||
      particle.x > width + 100
    );
  }, []);

  // Draw particle using the loaded image
  const drawParticle = useCallback(
    (ctx: CanvasRenderingContext2D, particle: Particle) => {
      if (!imageRef.current || !imageLoaded) return;

      ctx.save();

      // Set opacity
      ctx.globalAlpha = particle.opacity;

      // Move to particle position and rotate
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);

      // Draw the cherry blossom image
      const size = particle.size;
      try {
        ctx.drawImage(imageRef.current, -size / 2, -size / 2, size, size);
      } catch (error) {
        // Fallback to drawing a simple shape if image fails
        ctx.fillStyle = `rgba(255, 182, 193, ${particle.opacity})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, size / 2, size / 3, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    },
    [imageLoaded],
  );

  // Update canvas dimensions with proper DPI scaling
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Get actual display size
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Set canvas display size
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Set actual canvas size (accounting for device pixel ratio)
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Scale the context to ensure correct drawing operations
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    // Update dimensions reference
    dimensionsRef.current = { width, height };
  }, []);

  // Main animation loop
  const animate = useCallback(
    (currentTime: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || !imageLoaded || !enabled) {
        if (enabled) {
          animationRef.current = requestAnimationFrame(animate);
        }
        return;
      }

      const config = getConfig();
      const { width, height } = dimensionsRef.current;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Update existing particles
      particlesRef.current = particlesRef.current
        .map((particle) => updateParticle(particle, currentTime))
        .filter((particle) => !shouldRecycleParticle(particle));

      // Spawn new particles
      if (
        currentTime - lastSpawnTime.current > config.spawnRate &&
        particlesRef.current.length < config.maxParticles
      ) {
        particlesRef.current.push(createParticle());
        lastSpawnTime.current = currentTime;
      }

      // Draw all particles
      particlesRef.current.forEach((particle) => {
        drawParticle(ctx, particle);
      });

      animationRef.current = requestAnimationFrame(animate);
    },
    [
      imageLoaded,
      enabled,
      getConfig,
      updateParticle,
      shouldRecycleParticle,
      createParticle,
      drawParticle,
    ],
  );

  // Initialize and start animation
  useEffect(() => {
    updateCanvasSize();

    // Handle window resize with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateCanvasSize();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    // Start animation only when image is loaded and enabled
    if (imageLoaded && enabled) {
      animationRef.current = requestAnimationFrame(animate);
    } else if (!enabled) {
      // Clear canvas when disabled
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        const { width, height } = dimensionsRef.current;
        ctx.clearRect(0, 0, width, height);
      }
      // Clear particles array when disabled
      particlesRef.current = [];
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, updateCanvasSize, imageLoaded, enabled]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none will-change-transform"
      style={{
        zIndex: 1,
        isolation: "isolate",
        width: "100%",
        height: "100%",
      }}
    />
  );
}
