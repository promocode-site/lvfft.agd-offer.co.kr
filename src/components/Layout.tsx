import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const AFFILIATE_LINK = "http://app.ac/NjMZuMa23";

const navItems = [
  { path: "/", label: "홈" },
  { path: "/discount-codes", label: "할인코드 총정리" },
  { path: "/seasonal-sales", label: "시즌별 세일" },
  { path: "/guide", label: "이용 가이드 & FAQ" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-lg gold-text flex-shrink-0">
            파페치 할인쿠폰
          </Link>
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    location.pathname === item.path
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs ml-2">
                파페치 바로가기
              </a>
            </li>
          </ul>
          {/* Mobile hamburger */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="메뉴 열기">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-sm border-b border-border/50 ${
                  location.pathname === item.path ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button block text-center mt-3 text-xs">
              파페치 바로가기
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg gold-text mb-3">파페치 할인쿠폰</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                파페치(Farfetch) 공식 할인코드, 프로모션, 시즌 세일 정보를 한 곳에서 확인하세요. 2026년 4월 기준 최신 정보를 제공합니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">빠른 링크</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">파페치 바로가기</h4>
              <p className="text-sm text-muted-foreground mb-3">
                최신 할인 혜택을 확인하고 파페치에서 럭셔리 쇼핑을 시작하세요.
              </p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button inline-block text-xs">
                파페치 방문하기 →
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            <p>© 2026 파페치 할인쿠폰. 본 사이트는 Farfetch의 공식 사이트가 아니며, 제휴 링크를 포함하고 있습니다.</p>
            <p className="mt-1">파페치 고객센터: 080-880-0465 (평일 오전 9시 ~ 오후 6시)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
