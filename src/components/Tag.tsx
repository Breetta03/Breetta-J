export default function Tag({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span className={`inline-block border px-3 py-1 text-xs font-medium ${dark ? "border-white/20 text-[#D9D5CE]" : "border-line bg-white text-ink"}`}>
      {children}
    </span>
  );
}
