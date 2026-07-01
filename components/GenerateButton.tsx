interface GenerateButtonProps {
  onGenerate: () => void;
  loading: boolean;
}

export default function GenerateButton({
  onGenerate,
  loading
}: GenerateButtonProps) {
  return (
    <button
      onClick={onGenerate}
       disabled={loading}
      className="mt-8 w-full rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 p-4 text-lg font-bold transition hover:scale-[1.02]"
    >
        {loading ? "Generating..." : "✨ Generate Response"}
    </button>
  );
}