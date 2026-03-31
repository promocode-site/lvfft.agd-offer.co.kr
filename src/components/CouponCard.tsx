import { useState } from "react";
import { Copy, ExternalLink, Check } from "lucide-react";
import { toast } from "sonner";

const AFFILIATE_LINK = "http://app.ac/NjMZuMa23";

interface CouponCardProps {
  code: string;
  discount: string;
  title: string;
  description: string;
  conditions: string[];
  image: string;
  badge?: string;
}

export default function CouponCard({ code, discount, title, description, conditions, image, badge }: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (code !== "—") {
      navigator.clipboard.writeText(code);
    }
    setCopied(true);
    toast.success(`${code !== "—" ? `코드 "${code}" 복사 완료!` : "파페치로 이동합니다!"}`);
    setTimeout(() => setCopied(false), 2000);
    window.open(AFFILIATE_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="bg-card border border-border rounded-lg md:rounded-xl overflow-hidden card-hover flex flex-col">
      <div className="relative">
        <img src={image} alt={`${title} - ${discount} 할인`} className="w-full h-28 md:h-48 object-cover" loading="lazy" />
        {badge && (
          <span className="absolute top-2 right-2 md:top-3 md:right-3 gold-gradient text-primary-foreground text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="p-3 md:p-5 flex flex-col flex-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1 md:mb-2">
          <h3 className="font-bold text-xs md:text-lg text-foreground leading-tight">{title}</h3>
          <span className="text-primary font-bold text-lg md:text-xl">{discount}</span>
        </div>
        <p className="text-[11px] md:text-sm text-muted-foreground mb-2 md:mb-3 leading-relaxed line-clamp-3 md:line-clamp-none">{description}</p>
        <ul className="text-[10px] md:text-xs text-muted-foreground space-y-0.5 md:space-y-1 mb-3 md:mb-4 flex-1 hidden md:block">
          {conditions.map((c, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="text-primary mt-0.5">•</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        {/* Mobile: compact conditions */}
        <ul className="text-[10px] text-muted-foreground space-y-0.5 mb-2 flex-1 md:hidden">
          {conditions.slice(0, 2).map((c, i) => (
            <li key={i} className="flex items-start gap-1">
              <span className="text-primary mt-0.5">•</span>
              <span className="line-clamp-1">{c}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-1.5 md:gap-2">
          {code !== "—" && (
            <div className="bg-muted rounded-md px-2 py-1.5 md:px-3 md:py-2 text-center font-mono text-xs md:text-sm font-bold text-primary border border-border md:flex-1">
              {code}
            </div>
          )}
          <button onClick={handleCopy} className="cta-button flex items-center justify-center gap-1 text-[10px] md:text-xs py-2 md:py-3 flex-shrink-0">
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "복사됨!" : code !== "—" ? "코드 복사" : "혜택 받기"}
          </button>
        </div>
      </div>
    </article>
  );
}
