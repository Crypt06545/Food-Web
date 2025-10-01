import { useState } from "react";
import { Bomb } from "lucide-react";

import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>This is a Button</Button>
      <h1>This is a heading</h1>
      <Navbar />
      <Bomb />
    </>
  );
}

export default App;
