import { content } from "./data/content";

function App() {
  return (
    <div className="root">
      {content.map((img, index) => (
        <img src={img} alt={`Portfolio image ${index + 1}`} loading="lazy" />
      ))}
    </div>
  );
}

export default App;
