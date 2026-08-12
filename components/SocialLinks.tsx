const LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon:"/bg/instagram.png" },
  { label: "YouTube", href: "https://youtube.com" ,icon:"/bg/youtube.png"},
];

export default function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-4">
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-ivory/70 transition-colors hover:text-marigold sm:text-xs"
        >
          <img src={l.icon} alt={`${l.label} icon`} className="w-5 l-5 object-contain"/><span>{l.label}</span>
        </a>
      ))}
    </nav>
  );
}
