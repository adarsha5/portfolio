import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const certificates = [
  "/certification/hii1.jpg",
  "/certification/hii2.jpg",
  "/certification/hii3.jpg",
  "/certification/hii4.jpg",
  "/certification/hii5.jpg",
  "/certification/hii6.jpg",
  "/certification/hii7.jpg",
  "/certification/hii8.jpg",
  "/certification/hii9.jpg",
  "/certification/hii10.jpg",
  "/certification/hii11.jpg",
  "/certification/hii12.jpg",
  "/certification/hii13.jpg",
  "/certification/hii14.jpg",
  "/certification/hii15.jpg",
  "/certification/hii16.jpg",
  "/certification/hii17.jpg",
  "/certification/hii18.jpg",
  "/certification/hii19.jpg",
];

export default function CertificationCarousel() {
  const autoplay = Autoplay({ delay: 2500, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);

  // 🔥 FIXED TYPE
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <motion.section
        id="certifications"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Certifications
        </h2>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex -mx-2">
            {certificates.map((img, idx) => (
              <div
                key={idx}
                className="embla__slide px-2 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_20%]"
              >
                <div
                  onClick={() => setSelectedImg(img)} // 🟢 FIXED
                  className="
                    bg-white dark:bg-gray-800 
                    rounded-lg shadow-md 
                    border border-gray-200 dark:border-gray-700 
                    overflow-hidden p-3 h-full 
                    flex items-center justify-center cursor-pointer
                  "
                >
                  <img
                    src={img}
                    alt={`cert-${idx}`}
                    className="w-full 
                             h-[28vh] sm:h-[32vh] md:h-[34vh] lg:h-[32vh] 
                             object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FULLSCREEN MODAL */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
