import { Link } from "react-router-dom";
import { ArrowRight, Copy, ExternalLink, Gift, Tag, Calendar, GraduationCap, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import PageMeta from "@/components/PageMeta";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import heroMain from "@/assets/hero-main.jpg";
import couponPnow from "@/assets/coupon-pnow.jpg";
import coupon10ff from "@/assets/coupon-10ff.jpg";
import couponWelcome from "@/assets/coupon-welcome.jpg";
import couponBirthday from "@/assets/coupon-birthday.jpg";
import couponReferral from "@/assets/coupon-referral.jpg";
import couponStudent from "@/assets/coupon-student.jpg";
import saleSpring from "@/assets/sale-spring.jpg";
import savingsStrategy from "@/assets/savings-strategy.jpg";
import shipping from "@/assets/shipping.jpg";
import customsTax from "@/assets/customs-tax.jpg";

const AFFILIATE_LINK = "http://app.ac/NjMZuMa23";

function QuickCopyButton({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    if (code !== "—") navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success(`코드 "${code}" 복사 완료!`);
    setTimeout(() => setCopied(false), 2000);
    window.open(AFFILIATE_LINK, "_blank", "noopener,noreferrer");
  };
  return (
    <button onClick={handleClick} className="cta-button flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-sm w-full py-2 md:py-3">
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "복사됨!" : label}
    </button>
  );
}

const Index = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "파페치 할인쿠폰",
    url: "https://lvfft.agd-offer.co.kr",
    description: "파페치(Farfetch) 할인코드, 프로모션 코드, 시즌 세일 정보를 한 곳에서 확인하세요.",
    inLanguage: "ko",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://lvfft.agd-offer.co.kr/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "파페치 할인코드는 어디에 입력하나요?",
        acceptedAnswer: { "@type": "Answer", text: "장바구니 → 주문하기 → 결제수단 입력 후 오른쪽 '프로모션 코드' 입력란에 입력 후 '적용하기' 클릭" },
      },
      {
        "@type": "Question",
        name: "파페치 할인코드 중복 사용이 가능한가요?",
        acceptedAnswer: { "@type": "Answer", text: "아닙니다. 할인코드는 1개만 사용 가능하며, 다른 쿠폰·프로모션과 중복 적용이 불가능합니다." },
      },
      {
        "@type": "Question",
        name: "파페치에서 관부가세는 따로 내야 하나요?",
        acceptedAnswer: { "@type": "Answer", text: "아닙니다. 파페치는 한국 배송 시 관부가세가 제품 가격에 이미 포함되어 있어 별도로 세금을 납부할 필요가 없습니다." },
      },
    ],
  };

  const coupons = [
    { code: "PNOW", discount: "10%", title: "앱 전용 할인", img: couponPnow, icon: <Tag size={20} /> },
    { code: "10FF", discount: "10%", title: "신규 회원 첫 구매", img: coupon10ff, icon: <Gift size={20} /> },
    { code: "웰컴 리워드", discount: "~10%", title: "회원 전용 리워드", img: couponWelcome, icon: <Gift size={20} /> },
    { code: "생일 코드", discount: "최대 20%", title: "생일 할인", img: couponBirthday, icon: <Calendar size={20} /> },
    { code: "친구 추천", discount: "10%", title: "친구 추천 프로그램", img: couponReferral, icon: <Gift size={20} /> },
    { code: "학생 할인", discount: "10%", title: "학생 할인", img: couponStudent, icon: <GraduationCap size={20} /> },
  ];

  return (
    <>
      <PageMeta
        title="파페치 할인쿠폰 및 할인코드"
        description="2026년 4월 최신 파페치(Farfetch) 할인쿠폰 및 할인코드 총정리. 프로모션 코드, 시즌 세일, 최대 할인 정보를 한 곳에서 확인하세요."
        canonical="https://lvfft.agd-offer.co.kr/"
      />
      <SchemaJsonLd schema={[websiteSchema, faqSchema]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroMain} alt="파페치 럭셔리 패션 할인쿠폰" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        <div className="relative page-container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold tracking-wider mb-3">2026년 4월 최신 업데이트</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gold-text">파페치 할인쿠폰</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl">완벽 가이드</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              파페치(Farfetch)에서 구찌, 발렌시아가, 생로랑 등 럭셔리 브랜드를 최대 70% 할인된 가격에 구매하세요. 
              모든 할인코드와 프로모션 정보를 실시간으로 확인할 수 있습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-base px-8 py-4 flex items-center gap-2">
                파페치 할인 쇼핑 시작 <ArrowRight size={18} />
              </a>
              <Link to="/discount-codes" className="copy-button text-base px-8 py-4">
                할인코드 모아보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Coupon Summary */}
      <section className="page-container">
        <h2 className="section-title gold-text text-center">🎟️ 현재 사용 가능한 할인코드</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          2026년 4월 기준, 파페치에서 사용할 수 있는 모든 할인코드를 한눈에 확인하고 바로 적용하세요.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {coupons.map((c) => (
            <article key={c.code} className="bg-card border border-border rounded-lg md:rounded-xl overflow-hidden card-hover">
              <img src={c.img} alt={`${c.title} - ${c.discount} 할인 쿠폰`} className="w-full h-24 md:h-40 object-cover" loading="lazy" />
              <div className="p-3 md:p-5">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                  <span className="text-primary hidden md:inline">{c.icon}</span>
                  <h3 className="font-bold text-xs md:text-base text-foreground leading-tight">{c.title}</h3>
                </div>
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <span className="text-lg md:text-2xl font-bold text-primary">{c.discount}</span>
                  {c.code !== "웰컴 리워드" && c.code !== "생일 코드" && c.code !== "친구 추천" && c.code !== "학생 할인" && (
                    <span className="bg-muted text-foreground font-mono text-[10px] md:text-sm px-1.5 py-0.5 md:px-3 md:py-1 rounded border border-border">
                      {c.code}
                    </span>
                  )}
                </div>
                <QuickCopyButton
                  code={c.code}
                  label={c.code !== "웰컴 리워드" && c.code !== "생일 코드" && c.code !== "친구 추천" && c.code !== "학생 할인" ? `"${c.code}" 복사` : "혜택 확인"}
                />
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/discount-codes" className="copy-button inline-flex items-center gap-2 text-sm px-6 py-3">
            할인코드 상세 정보 보기 <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Current Promotion Banner */}
      <section className="page-container">
        <div className="relative rounded-2xl overflow-hidden">
          <img src={saleSpring} alt="2026년 봄 시즌오프 최대 70% 할인" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-lg">
              <span className="text-xs font-semibold text-primary tracking-wider">진행 중</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">🌸 봄 시즌오프</h2>
              <p className="text-muted-foreground mb-4">최대 70% 할인! 프라이빗 프로모션과 함께 여성, 남성, 키즈 패션 상품을 특별 가격에 만나보세요.</p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button inline-flex items-center gap-2">
                세일 상품 보러가기 <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="page-container">
        <h2 className="section-title gold-text text-center">📊 할인코드 비교 분석표</h2>
        <p className="text-center text-muted-foreground mb-8">어떤 할인이 나에게 가장 유리한지 한눈에 비교하세요.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-3 text-foreground font-semibold border-b border-border">할인 종류</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">할인율</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">대상</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">적용 범위</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">중복 사용</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border hidden md:table-cell">추천도</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["PNOW (앱 전용)", "10%", "신규+기존", "정가 상품", "불가", "⭐⭐⭐⭐"],
                ["10FF (신규)", "10%", "신규 회원", "정가 상품", "불가", "⭐⭐⭐⭐⭐"],
                ["웰컴 리워드", "~10%", "회원 전용", "정가 상품", "불가", "⭐⭐⭐⭐"],
                ["생일 할인", "최대 20%", "생일 등록 회원", "정가 상품", "불가", "⭐⭐⭐⭐⭐"],
                ["친구 추천", "10%", "추천 링크 가입", "정가 상품", "불가", "⭐⭐⭐"],
                ["학생 할인", "10%", "대학·대학원생", "정가 상품", "불가", "⭐⭐⭐⭐"],
                ["시즌 세일", "최대 70%", "전체 회원", "세일 상품", "코드 불필요", "⭐⭐⭐⭐⭐"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-3 font-medium text-foreground">{row[0]}</td>
                  <td className="p-3 text-center text-primary font-bold">{row[1]}</td>
                  <td className="p-3 text-center text-muted-foreground">{row[2]}</td>
                  <td className="p-3 text-center text-muted-foreground">{row[3]}</td>
                  <td className="p-3 text-center text-muted-foreground">{row[4]}</td>
                  <td className="p-3 text-center hidden md:table-cell">{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Info Cards */}
      <section className="page-container">
        <h2 className="section-title gold-text text-center">💡 파페치 쇼핑 핵심 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-card border border-border rounded-xl p-6 card-hover">
            <img src={shipping} alt="파페치 배송 정보" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
            <h3 className="font-bold text-lg text-foreground mb-2">🚚 배송 정보</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 28만 원 이상: 스탠다드 16,000원</li>
              <li>• 28만 원 미만: 37,000원</li>
              <li>• 실버 등급: 무료 배송</li>
              <li>• 익스프레스: 24,000원 (28만원↑)</li>
            </ul>
          </article>
          <article className="bg-card border border-border rounded-xl p-6 card-hover">
            <img src={customsTax} alt="파페치 관부가세 정보" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
            <h3 className="font-bold text-lg text-foreground mb-2">💰 관부가세</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 제품 가격에 관부가세 포함</li>
              <li>• 별도 세금 납부 불필요</li>
              <li>• FTA 대상: 관세 면제, 부가세 10%만</li>
              <li>• 원산지에 따라 가격 차이 가능</li>
            </ul>
          </article>
          <article className="bg-card border border-border rounded-xl p-6 card-hover">
            <img src={savingsStrategy} alt="파페치 최대 절약 전략" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
            <h3 className="font-bold text-lg text-foreground mb-2">🎯 최대 절약 전략</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 신규 가입 → 10FF로 10% 할인</li>
              <li>• 생일 코드로 최대 20% 할인</li>
              <li>• 시즌오프에 최대 70% 할인</li>
              <li>• 학생이면 UNiDAYS로 상시 10%</li>
            </ul>
          </article>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="page-container">
        <div className="gold-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">지금 바로 파페치에서 쇼핑하세요!</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            최대 70% 시즌 세일 + 추가 할인코드로 럭셔리 브랜드를 가장 합리적인 가격에 만나보세요.
          </p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
            파페치 바로가기 <ExternalLink size={18} />
          </a>
        </div>
      </section>

      {/* Page Links */}
      <section className="page-container pb-16">
        <h2 className="section-title text-center text-foreground">더 알아보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { to: "/discount-codes", title: "할인코드 총정리", desc: "모든 할인코드의 상세 조건과 사용법을 확인하세요." },
            { to: "/seasonal-sales", title: "시즌별 세일 캘린더", desc: "연간 세일 스케줄과 최적의 쇼핑 시기를 알아보세요." },
            { to: "/guide", title: "이용 가이드 & FAQ", desc: "할인코드 적용법부터 반품까지 완벽 가이드." },
          ].map((link) => (
            <Link key={link.to} to={link.to} className="bg-card border border-border rounded-xl p-6 card-hover group block">
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">{link.title}</h3>
              <p className="text-sm text-muted-foreground">{link.desc}</p>
              <span className="text-primary text-sm mt-3 inline-flex items-center gap-1">
                자세히 보기 <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
