import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GradientBlurShowcaseProps {
  images: string[];
  altText?: string;
  imageFit?: 'contain' | 'cover';
  imagePosition?: string;
}

/**
 * Cinematic image showcase with layered blur effect.
 * Hero image on top with progressively blurred layers beneath creating depth.
 * Static - no parallax or floating animations.
 */
const GradientBlurShowcase = ({
  images,
  altText = 'Project showcase',
  imageFit = 'cover',
  imagePosition = 'center',
}: GradientBlurShowcaseProps) => {
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

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-gray-800"
    >
      {/* Background gradient for depth effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />

      {/* Soft full-bleed backdrop keeps narrow media from leaving hard empty bands */}
      {mainImage && imageFit === 'contain' && (
        <motion.img
          src={mainImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Main image - centered with proportions preserved */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {mainImage && (
          <motion.img
            src={mainImage}
            alt={altText}
            className={
              imageFit === 'cover'
                ? 'h-full w-full object-cover'
                : 'h-full max-w-full object-contain'
            }
            style={{ objectPosition: imagePosition }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </div>



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
