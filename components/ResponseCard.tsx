"use client";

// interface ResponseCardProps {
//   response: string;
// }

interface ResponseCardProps {
  response: string;
  selectedModel: string;
  prompt: string;
  temperature: number;
  tokens: number;
}

export default function ResponseCard({
  response,
  selectedModel,
  prompt,
  temperature,
  tokens,
}: ResponseCardProps) 


{

    const copyResponse = async () => {
  if (!navigator.clipboard) {
    alert("Clipboard API is not available in this browser.");
    return;
  }

  try {
    await navigator.clipboard.writeText(response);
    alert("Copied!");
  } catch (error) {
    console.error(error);
    alert("Copy failed.");
  }
};

const downloadJSON = () => {
  const data = {
    model: selectedModel,
    prompt,
    temperature,
    maxTokens: tokens,
    response,
  };

  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "ai-response.json";

  a.click();

  URL.revokeObjectURL(url);
};

  return (
  <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

    {/* Header */}
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">
        AI Response
      </h2>

      <button
        onClick={copyResponse}
        className="rounded-lg bg-slate-800 px-4 py-2 text-sm transition hover:bg-slate-700"
      >
         Copy
      </button>

 <button
      onClick={downloadJSON}
      className="rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      ⬇ Download
    </button>

    </div>

    {/* Response */}
    {response ? (
      <pre className="whitespace-pre-wrap text-slate-300">
        {response}
      </pre>
    ) : (
      <p className="text-slate-500">
        ✨ Your AI response will appear here.
      </p>
    )}

  </div>
);
}