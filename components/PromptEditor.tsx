"use client";

import { useState } from "react";

 interface PromptEditorProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

export default function PromptEditor({
    prompt,setPrompt, }:PromptEditorProps
) {


  return (
    <div className="mt-8">

      <label className="mb-2 block text-lg font-semibold text-white">
        Prompt
      </label>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your AI prompt here..."
        className="min-h-[180px] w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-purple-500"
      />

      <p className="mt-3 text-sm text-slate-400">
  Characters: {prompt.length}
</p>

    </div>
  );
}