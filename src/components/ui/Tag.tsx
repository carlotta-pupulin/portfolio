interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border border-[#E2DFD9] text-[#7A7772] bg-white">
      {label}
    </span>
  );
}
