"use client";

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export default function Slider({
  label,
  value,
  min,
  max,
  onChange,
}: SliderProps) {
  return (
    <div className="mt-6">
      <div className="mb-2 flex justify-between">
        <label className="font-semibold">{label}</label>
        <span className="text-slate-400">{value}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        // onChange={(e) => onChange(Number(e.target.value))}
        onChange={(e) => {
  console.log(label, e.target.value);
  onChange(Number(e.target.value));
}}
        className="w-full accent-purple-500"
      />
    </div>
  );
}