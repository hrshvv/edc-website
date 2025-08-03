import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeToggle />
    </>
  );
}

export default App;
