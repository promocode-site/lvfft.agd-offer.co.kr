import PageMeta from "@/components/PageMeta";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { ExternalLink, TrendingUp, Calendar as CalendarIcon, BarChart3 } from "lucide-react";
import saleSpring from "@/assets/sale-spring.jpg";
import saleSummer from "@/assets/sale-summer.jpg";
import saleBlackfriday from "@/assets/sale-blackfriday.jpg";
import saleSingles from "@/assets/sale-singles.jpg";
import saleChristmas from "@/assets/sale-christmas.jpg";
import savingsStrategy from "@/assets/savings-strategy.jpg";
import couponPnow from "@/assets/coupon-pnow.jpg";
import coupon10ff from "@/assets/coupon-10ff.jpg";
import couponBirthday from "@/assets/coupon-birthday.jpg";
import heroMain from "@/assets/hero-main.jpg";
import shipping from "@/assets/shipping.jpg";

const AFFILIATE_LINK = "http://app.ac/NjMZuMa23";

const sales = [
  {
    period: "4월 (현재)",
    name: "봄 시즌오프 / 프라이빗 프로모션",
    discount: "최대 70%",
    img: saleSpring,
    description: "봄 시즌오프와 함께 프라이빗 프로모션이 진행 중입니다. 여성, 남성, 키즈 패션 상품이 대상이며 수량 한정 선착순으로 인기 아이템은 조기 품절 가능합니다.",
    tips: ["Sale 카테고리에서 최대 20% 추가 할인 적용 아이템 확인", "정가 할인코드와 적용 대상이 다를 수 있으므로 가격 비교 필수", "인기 브랜드 아이템은 빠르게 소진되므로 조기 체크 권장"],
    active: true,
  },
  {
    period: "8월",
    name: "여름 시즌오프 세일",
    discount: "최대 70%",
    img: saleSummer,
    description: "여름 시즌 종료와 함께 SS(Spring/Summer) 컬렉션 상품이 대폭 할인됩니다. 가을 시즌 전환 전 마지막 기회입니다.",
    tips: ["SS 컬렉션의 마지막 재고가 대폭 할인", "다음 시즌 활용 가능한 기본 아이템 위주로 쇼핑 추천", "인기 브랜드는 세일 시작 초기에 품절"],
    active: false,
  },
  {
    period: "11월 초",
    name: "싱글즈데이 세일 (11.11)",
    discount: "최대 50%+",
    img: saleSingles,
    description: "중국 광군제(11.11)에 맞춰 글로벌 세일을 진행합니다. 특별 프로모션 코드가 발급되는 경우가 많습니다.",
    tips: ["특별 프로모션 코드 발급 가능성 높음", "아시아 시장 타겟 세일이라 한국 소비자에게 유리한 혜택 多", "한정 시간 플래시 세일 주목"],
    active: false,
  },
  {
    period: "11월 말",
    name: "블랙프라이데이 세일",
    discount: "최대 50%+",
    img: saleBlackfriday,
    description: "연중 가장 큰 할인 행사 중 하나입니다. 블랙프라이데이 전후 약 1주일간 진행되며, 추가 할인 코드가 제공되기도 합니다.",
    tips: ["연중 최대 할인 행사 — 연말 쇼핑 최적 시기", "추가 프로모션 코드 발급 가능", "위시리스트를 미리 정리하고 세일 시작과 동시에 구매 추천"],
    active: false,
  },
  {
    period: "12월",
    name: "크리스마스·연말 세일",
    discount: "최대 25% 추가",
    img: saleChristmas,
    description: "연말 시즌에 진행되는 추가 할인 행사입니다. FW(Fall/Winter) 시즌 아이템에 추가 할인이 적용됩니다.",
    tips: ["FW 컬렉션 추가 할인 적용", "크리스마스 선물 쇼핑에 최적", "연말 추가 프로모션 코드 주목"],
    active: false,
  },
];

export default function SeasonalSales() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "파페치 시즌별 세일 캘린더 2026 - 최적의 쇼핑 시기 가이드",
    description: "파페치(Farfetch) 2026년 연간 시즌 세일 스케줄, 할인율, 최적 쇼핑 전략 완벽 가이드",
    author: { "@type": "Organization", name: "파페치 할인쿠폰" },
    datePublished: "2026-03-01",
    dateModified: "2026-03-08",
    inLanguage: "ko",
  };

  return (
    <>
      <PageMeta
        title="파페치 할인쿠폰"
        description="파페치(Farfetch) 할인코드, 프로모션 코드, 시즌 세일 정보를 한 곳에서 확인하세요."
        canonical="https://lvfft.agd-offer.co.kr/seasonal-sales"
      />
      <SchemaJsonLd schema={schema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={heroMain} alt="파페치 시즌 세일" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="relative page-container py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">시즌별 세일</span> 캘린더 2026
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            파페치의 연간 세일 스케줄을 파악하고, 가장 유리한 시기에 쇼핑하세요. 최대 70%까지 할인받을 수 있는 시즌별 세일 정보를 제공합니다.
          </p>
        </div>
      </section>

      {/* Annual Calendar Overview */}
      <section className="page-container">
        <h2 className="section-title gold-text flex items-center gap-2">
          <CalendarIcon size={24} /> 2026년 연간 세일 캘린더
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse min-w-[500px] md:min-w-0">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-3 text-foreground font-semibold border-b border-border">시기</th>
                <th className="text-left p-3 text-foreground font-semibold border-b border-border">이벤트명</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">할인율</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">상태</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale, i) => (
                <tr key={i} className={`border-b border-border ${sale.active ? "bg-primary/5" : "hover:bg-muted/50"} transition-colors`}>
                  <td className="p-3 font-medium text-foreground">{sale.period}</td>
                  <td className="p-3 text-muted-foreground">{sale.name}</td>
                  <td className="p-3 text-center text-primary font-bold">{sale.discount}</td>
                  <td className="p-3 text-center">
                    {sale.active ? (
                      <span className="gold-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">진행 중</span>
                    ) : (
                      <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">예정</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual Sale Details */}
      <section className="page-container">
        <h2 className="section-title gold-text">🎉 시즌 세일 상세 정보</h2>
        <div className="space-y-8">
          {sales.map((sale) => (
            <article key={sale.name} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img src={sale.img} alt={`파페치 ${sale.name}`} className="w-full h-56 md:h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{sale.name}</h3>
                    {sale.active && (
                      <span className="gold-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">진행 중</span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm text-muted-foreground">{sale.period}</span>
                    <span className="text-2xl font-bold text-primary">{sale.discount}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{sale.description}</p>
                  <h4 className="text-sm font-semibold text-foreground mb-2">💡 쇼핑 팁</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {sale.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button inline-flex items-center gap-2 text-sm">
                    {sale.active ? "세일 상품 보러가기" : "파페치 방문하기"} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Savings Comparison: Code vs Sale */}
      <section className="page-container">
        <h2 className="section-title gold-text flex items-center gap-2">
          <BarChart3 size={24} /> 할인코드 vs 시즌 세일 비교 분석
        </h2>
        <p className="text-muted-foreground mb-6">할인코드와 시즌 세일, 언제 어떤 방법이 더 유리한지 비교합니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <article className="bg-card border border-border rounded-xl p-6">
            <img src={coupon10ff} alt="할인코드 적용" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
            <h3 className="font-bold text-lg text-foreground mb-3">🏷️ 할인코드 사용 시</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ 정가 상품에 10~20% 할인</li>
              <li>✅ 원하는 상품을 할인받을 수 있음</li>
              <li>✅ 신상품·인기 제품도 할인 가능</li>
              <li>❌ 이미 세일 중인 상품에는 적용 불가</li>
              <li>❌ 일부 브랜드 제외</li>
            </ul>
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">추천 상황:</strong> 시즌 세일에 포함되지 않는 신상품이나 인기 아이템을 구매하고 싶을 때
              </p>
            </div>
          </article>
          <article className="bg-card border border-border rounded-xl p-6">
            <img src={saleSpring} alt="시즌 세일" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
            <h3 className="font-bold text-lg text-foreground mb-3">🛍️ 시즌 세일 시</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ 최대 70%까지 대폭 할인</li>
              <li>✅ 별도 코드 없이 할인 자동 적용</li>
              <li>✅ 추가 할인 프로모션 진행 가능</li>
              <li>❌ 원하는 제품이 세일 대상이 아닐 수 있음</li>
              <li>❌ 인기 상품 조기 품절</li>
            </ul>
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">추천 상황:</strong> 브랜드/모델에 관계없이 최저가로 럭셔리 제품을 구매하고 싶을 때
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Price Simulation */}
      <section className="page-container">
        <h2 className="section-title gold-text flex items-center gap-2">
          <TrendingUp size={24} /> 💰 할인 시뮬레이션: 100만원 상품 기준
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[500px] md:min-w-0">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-3 text-foreground font-semibold border-b border-border">할인 방법</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">할인율</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">결제 금액</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">절약 금액</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["정가 구매 (할인 없음)", "0%", "1,000,000원", "0원"],
                ["신규 코드 (10FF)", "10%", "900,000원", "100,000원"],
                ["생일 할인코드", "20%", "800,000원", "200,000원"],
                ["시즌 세일 (30% 할인)", "30%", "700,000원", "300,000원"],
                ["시즌 세일 (50% 할인)", "50%", "500,000원", "500,000원"],
                ["시즌 세일 (70% 할인)", "70%", "300,000원", "700,000원"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-3 font-medium text-foreground">{row[0]}</td>
                  <td className="p-3 text-center text-primary font-bold">{row[1]}</td>
                  <td className="p-3 text-center text-foreground">{row[2]}</td>
                  <td className="p-3 text-center text-primary font-bold">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Monthly Shopping Calendar */}
      <section className="page-container">
        <h2 className="section-title gold-text">📅 월별 최적 쇼핑 전략</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { month: "1~2월", strategy: "FW 시즌 마지막 세일 → 최저가 기회", level: "🟢 추천" },
            { month: "4월", strategy: "봄 시즌오프 + 프라이빗 프로모션", level: "🟢 강력 추천" },
            { month: "4~7월", strategy: "신상품 출시기 → 할인코드 활용", level: "🟡 보통" },
            { month: "6~7월", strategy: "SS 시즌 중반 → 할인코드 활용", level: "🟡 보통" },
            { month: "8월", strategy: "여름 시즌오프 → 대규모 세일", level: "🟢 강력 추천" },
            { month: "9~10월", strategy: "신상품 출시기 → 할인코드 활용", level: "🟡 보통" },
            { month: "11월 초", strategy: "싱글즈데이 (11.11) 세일", level: "🟢 추천" },
            { month: "11월 말", strategy: "블랙프라이데이 → 연중 최대", level: "🟢 강력 추천" },
            { month: "12월", strategy: "크리스마스·연말 세일", level: "🟢 추천" },
          ].map((item) => (
            <article key={item.month} className="bg-card border border-border rounded-lg p-4 card-hover">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-foreground">{item.month}</h3>
                <span className="text-xs">{item.level}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.strategy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Extra Images Section */}
      <section className="page-container">
        <h2 className="section-title gold-text">🎯 세일 + 할인코드 조합 전략</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-card border border-border rounded-xl overflow-hidden card-hover">
            <img src={couponPnow} alt="앱 전용 할인코드 PNOW" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-bold text-foreground mb-1">앱 전용 + 정가 상품</h3>
              <p className="text-sm text-muted-foreground">앱에서 PNOW 코드로 정가 신상품 10% 할인</p>
            </div>
          </article>
          <article className="bg-card border border-border rounded-xl overflow-hidden card-hover">
            <img src={couponBirthday} alt="생일 할인코드" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-bold text-foreground mb-1">생일 할인 + 타이밍</h3>
              <p className="text-sm text-muted-foreground">생일 코드를 시즌 전환기에 맞춰 최대 효율</p>
            </div>
          </article>
          <article className="bg-card border border-border rounded-xl overflow-hidden card-hover">
            <img src={savingsStrategy} alt="최대 절약 전략" className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-bold text-foreground mb-1">시즌 세일 + 위시리스트</h3>
              <p className="text-sm text-muted-foreground">미리 위시리스트 등록 후 세일 시작과 동시에 구매</p>
            </div>
          </article>
        </div>
      </section>

      {/* Additional shipping info with image */}
      <section className="page-container">
        <div className="bg-card border border-border rounded-xl overflow-hidden md:flex">
          <img src={shipping} alt="파페치 배송" className="md:w-1/3 h-48 md:h-auto object-cover" loading="lazy" />
          <div className="p-6 md:w-2/3">
            <h2 className="text-xl font-bold text-foreground mb-3">🚚 세일 기간 배송 팁</h2>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 세일 기간에는 주문량이 몰려 배송이 평소보다 1~3일 지연될 수 있습니다.</li>
              <li>• 28만 원 이상 구매 시 스탠다드 배송비 16,000원 (미만 시 37,000원)</li>
              <li>• 실버 등급 이상이면 금액 관계없이 무료 배송!</li>
              <li>• 세일 시작 초기에 주문하면 재고 확보와 빠른 배송 모두 가능합니다.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-container pb-16">
        <div className="gold-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">지금 봄 시즌오프 진행 중!</h2>
          <p className="text-primary-foreground/80 mb-6">최대 70% 할인! 인기 아이템이 빠르게 소진되고 있습니다.</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
            세일 상품 보러가기 <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
