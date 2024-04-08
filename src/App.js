import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      try {
        playSound(event.key.toLocaleUpperCase());
      } catch (error) {
        alert("Wrong Keys");
      }
    });
  });
  const drumpads = [
    {
      keyCode: 81,
      text: "Q",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector);
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className="drum-pads">
          {drumpads.map((drumpad) => (
            <div
              key={drumpad.link}
              onClick={() => {
                playSound(drumpad.text);
              }}
              className="drum-pad"
              id={drumpad.link}
            >
              {drumpad.text}
              <audio
                className="clip"
                id={drumpad.text}
                src={drumpad.link}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
