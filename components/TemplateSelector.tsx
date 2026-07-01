"use client";

import { templates } from "@/data/templates";


interface TemplateSelectorProps {
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

export default function TemplateSelector({
  setPrompt,
}: TemplateSelectorProps) {
    return (
  <div className="mt-8">
    <label className="mb-2 block text-lg font-semibold">
      Prompt Templates
    </label>

    <select
      defaultValue=""
      onChange={(e) => {
        const selected = templates.find(
          (template) => template.name === e.target.value
        );

        if (selected) {
          setPrompt(selected.prompt);
        }
      }}
      className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 text-slate-900 dark:text-white outline-none focus:border-purple-500"
    >
      <option value="">Choose a template...</option>

      {templates.map((template) => (
        <option key={template.name} value={template.name}>
          {template.name}
        </option>
      ))}
    </select>
  </div>
);
}