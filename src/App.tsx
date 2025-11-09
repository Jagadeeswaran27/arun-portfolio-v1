import { content } from "./data/content";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    content.slice(0, 3).forEach((imgSrc) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = imgSrc;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="root">
      {content.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Portfolio image ${index + 1}`}
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={index < 3 ? "high" : "low"}
        />
      ))}
    </div>
  );
}

export default App;
