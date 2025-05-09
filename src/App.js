import "./App.css";
import NumberFlow, { continuous, NumberFlowGroup } from "@number-flow/react";
import { useState } from "react";

function App() {
  const [productsSold, setProductsSold] = useState(0);
  const [smootherSkin, setSmootherSkin] = useState(0);
  const [glowUps, setGlowUps] = useState(0);
  const [glowUpsEnd, setGlowUpsEnd] = useState(false);

  const handleStartAnimation = () => {
    setProductsSold(5);
    setSmootherSkin(2);
    setGlowUps(Number.MAX_SAFE_INTEGER);
    setGlowUpsEnd(false);
  };

  return (
    <div className="App">
      <NumberFlowGroup>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-value">
              <NumberFlow
                className="number-flow-value"
                value={productsSold}
                spinTiming={{ duration: 2000 }}
              />
              <span className="number-flow-suffix">M+</span>
            </div>
            <span className="stat-label">Products Sold</span>
          </div>

          <div className="stat-item">
            <div className="stat-value">
              <NumberFlow
                className="number-flow-value"
                value={smootherSkin}
                spinTiming={{ duration: 2000 }}
              />
              <span className="number-flow-suffix">X</span>
            </div>
            <span className="stat-label">Smoother Skin</span>
          </div>

          <div className="stat-item">
            <div className="stat-value">
              <NumberFlow
                format={{
                  minimumIntegerDigits: 1,
                  compactDisplay: "short",
                  notation: "compact",
                }}
                className="number-flow-value"
                value={glowUps}
                spinTiming={{ duration: 2000 }}
                onAnimationsFinish={() => setGlowUpsEnd(true)}
              />
            </div>
            <span className="stat-label">Glow-Ups</span>
          </div>
        </div>
      </NumberFlowGroup>
      <button
        onClick={handleStartAnimation}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "1rem" }}
      >
        Start Animations
      </button>
    </div>
  );
}

export default App;
