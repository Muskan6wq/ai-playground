export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">

      <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
        AI Playground
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-400">
        Experiment with prompts, compare AI models,
        and prototype ideas.
      </p>

      <button className="mt-8 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold transition hover:scale-105">
        Get Started
      </button>

    </section>
  );
}