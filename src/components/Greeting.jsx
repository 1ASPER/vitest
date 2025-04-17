import { useState } from "react";

export default function Greeting() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>Показать</button>
      {visible && <p>Привет, мир!</p>}
    </div>
  );
}