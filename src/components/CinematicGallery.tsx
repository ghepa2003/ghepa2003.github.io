import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: 'images/montagna.JPG', alt: 'Mountains', className: 'w-[60vw] md:w-[25vw] aspect-[3/4] object-cover' },
  { src: 'images/marocco.jpeg', alt: 'Marocco Trip', className: 'w-[55vw] md:w-[22vw] aspect-[4/5] object-cover' },
  { src: 'images/neve.jpeg', alt: 'Snow', className: 'w-[65vw] md:w-[28vw] aspect-[3/4] object-cover' },
  { src: 'images/aurora.jpeg', alt: 'Aurora Borealis', className: 'w-[50vw] md:w-[22vw] aspect-[4/5] object-cover' },
  { src: 'images/bikepacking.jpeg', alt: 'Bikepacking', className: 'w-[60vw] md:w-[25vw] aspect-[3/4] object-cover' },
  { src: 'images/laurea.jpeg', alt: 'Graduation', className: 'w-[55vw] md:w-[24vw] aspect-[4/5] object-cover' },
  { src: 'images/bici.jpeg', alt: 'Cycling', className: 'w-[65vw] md:w-[26vw] aspect-[3/4] object-cover' },
  { src: 'images/marathon.jpg', alt: 'Marathon', className: 'w-[80vw] md:w-[55vw] aspect-[16/9] object-cover' }
];

export const CinematicGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validImages = imagesRef.current.filter(Boolean);
      if (validImages.length === 0) return;

      // Distribute images across the entire screen space (alternating Left / Right)
      const layoutConfigs = [
        { left: '25%', top: '40%', rot: -3 }, // 0: Left
        { left: '75%', top: '60%', rot: 2 },  // 1: Right
        { left: '20%', top: '55%', rot: -1 }, // 2: Left
        { left: '80%', top: '35%', rot: 4 },  // 3: Right
        { left: '30%', top: '50%', rot: -2 }, // 4: Left
        { left: '70%', top: '45%', rot: 3 },  // 5: Right
        { left: '25%', top: '60%', rot: -4 }, // 6: Left
        { left: '50%', top: '50%', rot: 0 }   // 7: Center (Marathon)
      ];

      gsap.set(validImages, { 
        autoAlpha: (i) => (i < 2 ? 1 : 0), 
        scale: (i) => (i < 2 ? 1 : 0.8),
        xPercent: -50,
        yPercent: -50,
        top: (i) => layoutConfigs[i]?.top || '50%',
        left: (i) => layoutConfigs[i]?.left || '50%',
        rotation: (i) => layoutConfigs[i]?.rot || 0,
        zIndex: (i) => i 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=600%', // 6 transition steps
          pin: true,
          pinReparent: true,
          scrub: 1,
        }
      });

      // Elegant overlapping loop: at step k, image k fades out and image k+2 fades in.
      // This guarantees exactly 2 images are visible at all times, and the first 2 are visible BEFORE scrolling.
      for (let k = 0; k < validImages.length - 1; k++) {
        const time = k * 2.0;

        // Fade out image k
        tl.to(validImages[k], {
          autoAlpha: 0,
          scale: 1.05,
          duration: 1.5,
          ease: 'power2.inOut',
        }, time);

        // Fade in image k+2 (if it exists)
        if (k + 2 < validImages.length) {
          tl.to(validImages[k + 2], {
            autoAlpha: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
          }, time);
        }
      }
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-ivory">
      {images.map((img, idx) => (
        <img
          key={idx}
          ref={(el) => { 
            imagesRef.current[idx] = el; 
          }}
          src={`${import.meta.env.BASE_URL}${img.src}`}
          alt={img.alt}
          className={`absolute rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] will-change-transform ${img.className}`}
        />
      ))}
    </section>
  );
};
