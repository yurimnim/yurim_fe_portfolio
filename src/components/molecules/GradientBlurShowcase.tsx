import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GradientBlurShowcaseProps {
  images: string[];
  altText?: string;
}

/**
 * Cinematic image showcase with layered blur effect.
 * Hero image on top with progressively blurred layers beneath creating depth.
 * Static - no parallax or floating animations.
 */
const GradientBlurShowcase = ({ images, altText = 'Project showcase' }: GradientBlurShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Use first image if available, otherwise use placeholder
  const mainImage = images?.[0] || '';

  // Blur intensities for layered effect
  const blurLayers = [
    { blur: 0, scale: 1, opacity: 1, zIndex: 30 },      // Hero (sharp)
    { blur: 12, scale: 1.02, opacity: 0.6, zIndex: 20 }, // Blur layer 1
    { blur: 24, scale: 1.04, opacity: 0.35, zIndex: 10 }, // Blur layer 2
    { blur: 40, scale: 1.06, opacity: 0.15, zIndex: 0 },  // Blur layer 3 (deep background)
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden group"
    >
      {/* Blur layer stack */}
      {blurLayers.map((layer, idx) => (
        <div
          key={`blur-${idx}`}
          className="absolute inset-0 overflow-hidden"
          style={{
            zIndex: layer.zIndex,
          }}
        >
          {mainImage && (
            <motion.img
              src={mainImage}
              alt={`${altText} - layer ${idx}`}
              className="w-full h-full object-cover"
              style={{
                filter: `blur(${layer.blur}px)`,
                transform: `scale(${layer.scale})`,
                opacity: layer.opacity,
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: layer.opacity } : { opacity: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            />
          )}
        </div>
      ))}



      {/* Fallback for missing images */}
      {!mainImage && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{altText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradientBlurShowcase;
