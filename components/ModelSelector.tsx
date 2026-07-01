"use client";

import { models } from "@/data/model";

interface ModelSelectorProps {
  selectedModel: string;
  setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
}

export default function ModelSelector({
    selectedModel,setSelectedModel,
}: ModelSelectorProps) {

  return (
    <div className="mt-8">
      <label className="mb-2 block text-lg font-semibold">
        Select AI Model
      </label>

      <select
        value={selectedModel}
  onChange={(e) => setSelectedModel(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-purple-500"
      >
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
    </div>
  );
}