import { content } from "./data/content";

function App() {
  return (
    <div className="root">
      {content.map((img, index) => (
        <img key={index} src={img} alt="" />
      ))}
    </div>
  );
}

export default App;
