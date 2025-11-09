import { useEffect, useRef, useState } from "react";
import { content } from "./data/content";

function App() {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleImages((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { rootMargin: "100px" }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const imageRef = (el: HTMLDivElement | null) => {
    if (el && observerRef.current) {
      observerRef.current.observe(el);
    }
  };

  return (
    <div className="root">
      {content.map((img, index) => (
        <div
          key={index}
          ref={(el) => imageRef(el)}
          data-index={index}
          className="image-container"
        >
          {visibleImages.includes(index) && (
            <img
              src={img}
              alt={`Portfolio image ${index + 1}`}
              loading="lazy"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
