import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from "./components/UseContextComponent";
function App() {
  return (
    <div>
      <h1>Use State</h1>
      <UseStateComponent />
      <hr />
      <h1>Use Effect</h1>
      <UseEffectComponent />
      <hr />
      <h1>Use Context</h1>
      <UseContextComponent />
    </div>
  );
}

export default App;
