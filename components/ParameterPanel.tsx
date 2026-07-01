"use client";

import { useState } from "react";
import Slider from "./Slider";

interface ParametersPanelProps {
  temperature: number;
  setTemperature: React.Dispatch<React.SetStateAction<number>>;
  tokens: number;
  setTokens: React.Dispatch<React.SetStateAction<number>>;
}

export default function ParameterPanel({
    temperature,setTemperature,tokens,setTokens
}:ParametersPanelProps) {
//   const [temperature, setTemperature] = useState(50);
//   const [tokens, setTokens] = useState(500);
console.log("ParameterPanel:", temperature, tokens);

  return (
    <div className="mt-8">

      <h2 className="text-xl font-bold">
        Parameters
      </h2>

      <Slider
        label="Temperature"
        value={temperature}
        min={0}
        max={100}
        onChange={setTemperature}
      />

      <Slider
        label="Max Tokens"
        value={tokens}
        min={100}
        max={2000}
        onChange={setTokens}
      />

    </div>
  );
}