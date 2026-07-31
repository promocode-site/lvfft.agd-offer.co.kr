import CouponCard from "@/components/CouponCard";
import PageMeta from "@/components/PageMeta";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { ExternalLink, AlertTriangle, CheckCircle } from "lucide-react";
import couponPnow from "@/assets/coupon-pnow.jpg";
import coupon10ff from "@/assets/coupon-10ff.jpg";
import couponWelcome from "@/assets/coupon-welcome.jpg";
import couponBirthday from "@/assets/coupon-birthday.jpg";
import couponReferral from "@/assets/coupon-referral.jpg";
import couponStudent from "@/assets/coupon-student.jpg";
import savingsStrategy from "@/assets/savings-strategy.jpg";
import heroMain from "@/assets/hero-main.jpg";
import saleSpring from "@/assets/sale-spring.jpg";
import shipping from "@/assets/shipping.jpg";
import customsTax from "@/assets/customs-tax.jpg";
import guideSteps from "@/assets/guide-steps.jpg";

const AFFILIATE_LINK = "http://app.ac/NjMZuMa23";

const coupons = [
  {
    code: "PNOW",
    discount: "10%",
    title: "앱 전용 설치 할인코드",
    description: "파페치 모바일 앱(iOS/Android) 설치 후 주문하는 신규 및 기존 회원 대상 10% 추가 할인코드입니다. 앱 설치를 유도하기 위한 전용 코드로, 기존 회원에게도 혜택이 적용됩니다.",
    conditions: ["앱 전용 — 웹에서는 미적용", "정가 상품에만 적용", "다른 코드와 중복 불가", "유효기간 확인 필요 (2026.02.28까지였으나 연장 가능성)"],
    image: couponPnow,
    badge: "앱 전용",
  },
  {
    code: "10FF",
    discount: "10%",
    title: "신규 회원 첫 구매 할인코드",
    description: "파페치에 처음 가입한 신규 회원이 첫 주문에 사용할 수 있는 10% 할인코드입니다. PC와 모바일 웹 모두에서 사용 가능합니다.",
    conditions: ["신규 회원 첫 주문에만 사용 가능", "정가 상품 한정", "PC/모바일 웹 모두 사용 가능", "유효기간: 파페치 앱 내 '웰컴 리워드'에서 현재 코드 확인"],
    image: coupon10ff,
    badge: "신규 회원",
  },
  {
    code: "—",
    discount: "~10%",
    title: "웰컴 리워드 할인코드 (회원 전용)",
    description: "파페치 앱 또는 웹에서 우측 상단 등급(BRONZE) 클릭 → '나의 BRONZE 리워드' → '웰컴 리워드'에서 발급받을 수 있는 개인 전용 코드입니다.",
    conditions: ["등급에 따라 할인율 상이 (일반적으로 10% 내외)", "정가 상품 한정", "발급 후 30일 이내 사용", "다른 프로모션 코드와 중복 불가"],
    image: couponWelcome,
    badge: "회원 전용",
  },
  {
    code: "—",
    discount: "최대 20%",
    title: "생일 할인코드",
    description: "파페치 계정 '내 정보'에서 생일을 등록하면 생일 21일 전에 자동으로 발급되는 할인코드입니다. 파페치에서 가장 높은 개인화 혜택 중 하나입니다.",
    conditions: ["생일 21일 전 자동 발급", "발급 후 30일 이내 사용", "정가 상품 전체 적용 (일부 브랜드 제외)", "이미 사용한 경우 생일 수정으로 재발급 불가", "쇼핑 타이밍 맞추면 시즌 세일과 병행 가능"],
    image: couponBirthday,
    badge: "최대 할인",
  },
  {
    code: "—",
    discount: "10%",
    title: "친구 추천 프로그램",
    description: "추천 링크를 통해 가입한 신규 고객은 첫 주문 10% 할인코드를 받고, 기존 회원은 친구가 첫 구매 완료 시 다음 주문 10% 할인코드를 받습니다.",
    conditions: ["신규 고객: 추천 링크 가입 시 10% 코드 수령", "기존 회원: 친구 첫 구매 후 10% 코드 수령", "정가 상품에만 적용", "발급 코드 30일 이내 사용"],
    image: couponReferral,
    badge: "서로 혜택",
  },
  {
    code: "—",
    discount: "10%",
    title: "학생 할인 (UNiDAYS)",
    description: "UNiDAYS에서 학생 신분을 인증한 후 파페치 학생 할인 프로그램에 가입하면 상시 10% 할인을 받을 수 있습니다.",
    conditions: ["UNiDAYS 학생 인증 필요", "재학 중인 대학·대학원생 대상", "인증 완료 후 상시 적용", "정가 상품 한정"],
    image: couponStudent,
    badge: "학생 전용",
  },
];

export default function DiscountCodes() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "파페치 할인코드 총정리",
    description: "2026년 8월 기준 파페치에서 사용 가능한 모든 할인코드와 프로모션 코드 목록",
    numberOfItems: coupons.length,
    itemListElement: coupons.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Offer",
        name: c.title,
        description: c.description,
        discount: c.discount,
        priceCurrency: "KRW",
      },
    })),
  };

  return (
    <>
      <PageMeta
        title="파페치 할인쿠폰"
        description="파페치(Farfetch) 할인코드, 프로모션 코드, 시즌 세일 정보를 한 곳에서 확인하세요."
        canonical="https://lvfft.agd-offer.co.kr/discount-codes"
      />
      <SchemaJsonLd schema={schema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={heroMain} alt="파페치 할인코드" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="relative page-container py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">파페치 할인코드</span> 총정리
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            2026년 8월 기준, 파페치에서 사용할 수 있는 모든 할인코드의 상세 조건, 적용 방법, 유의사항을 한 곳에서 확인하세요.
          </p>
        </div>
      </section>

      {/* Pre-Check Section */}
      <section className="page-container">
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle size={20} className="text-primary" />
            할인코드 적용 전 필수 체크사항
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "결제 시 '프로모션 코드' 입력란에 입력 후 '적용하기' 클릭",
              "할인코드는 1개만 사용 가능 (중복 불가)",
              "정가 상품에만 적용 — 세일 중인 상품에는 미적용",
              "일부 브랜드(Gucci, Marla Aaron 등) 코드 적용 제외",
              "쿠키 허용 팝업에서 동의 필수",
              "포털 광고 링크 접속 시 미적용 → 직접 URL(farfetch.com) 접속 권장",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coupon Cards */}
      <section className="page-container">
        <h2 className="section-title gold-text">🎟️ 2026년 8월 할인코드 상세 정보</h2>
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {coupons.map((c) => (
            <CouponCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="page-container">
        <h2 className="section-title gold-text">📊 할인코드 상세 비교 분석표</h2>
        <p className="text-muted-foreground mb-6">각 할인코드의 적용 대상, 조건, 유효기간을 상세히 비교합니다.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[600px] md:min-w-0">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-3 text-foreground font-semibold border-b border-border">코드</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">할인율</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">대상</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">플랫폼</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">유효기간</th>
                <th className="text-center p-3 text-foreground font-semibold border-b border-border">난이도</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["PNOW", "10%", "신규+기존", "앱 전용", "확인 필요", "쉬움"],
                ["10FF", "10%", "신규 회원", "웹+앱", "확인 필요", "매우 쉬움"],
                ["웰컴 리워드", "~10%", "가입 회원", "웹+앱", "발급 후 30일", "쉬움"],
                ["생일 할인", "최대 20%", "생일 등록", "웹+앱", "발급 후 30일", "보통"],
                ["친구 추천", "10%", "추천 가입", "웹+앱", "발급 후 30일", "쉬움"],
                ["학생 할인", "10%", "대학생", "웹+앱", "재학 기간", "보통"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-3 font-medium text-foreground">{row[0]}</td>
                  <td className="p-3 text-center text-primary font-bold">{row[1]}</td>
                  <td className="p-3 text-center text-muted-foreground">{row[2]}</td>
                  <td className="p-3 text-center text-muted-foreground">{row[3]}</td>
                  <td className="p-3 text-center text-muted-foreground">{row[4]}</td>
                  <td className="p-3 text-center text-muted-foreground">{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Strategy by User Type */}
      <section className="page-container">
        <h2 className="section-title gold-text">🎯 사용자 유형별 최적 할인 전략</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              type: "🆕 신규 가입자",
              strategy: "10FF 코드로 첫 구매 10% 할인 → 가장 먼저 사용",
              tip: "가입 즉시 사용 가능하여 진입 장벽이 가장 낮은 할인 방법입니다.",
              img: coupon10ff,
            },
            {
              type: "🎂 생일이 다가오는 분",
              strategy: "생일 날짜를 원하는 쇼핑 날짜 기준 21일 후로 설정",
              tip: "최대 20% 할인으로 파페치에서 가장 높은 개인 할인을 받을 수 있습니다.",
              img: couponBirthday,
            },
            {
              type: "📱 앱 미설치자",
              strategy: "PNOW 코드 → 앱 설치 후 사용",
              tip: "기존 회원도 앱 설치만 하면 추가 10% 할인을 받을 수 있습니다.",
              img: couponPnow,
            },
            {
              type: "🎓 학생",
              strategy: "UNiDAYS 인증 후 학생 할인 상시 적용",
              tip: "재학 기간 동안 정가 상품에 상시 10% 할인이 적용됩니다.",
              img: couponStudent,
            },
          ].map((item) => (
            <article key={item.type} className="bg-card border border-border rounded-xl overflow-hidden card-hover">
              <img src={item.img} alt={`${item.type} 최적 할인 전략`} className="w-full h-36 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground mb-2">{item.type}</h3>
                <p className="text-sm text-primary font-semibold mb-1">{item.strategy}</p>
                <p className="text-sm text-muted-foreground">{item.tip}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Additional Images & Info */}
      <section className="page-container">
        <h2 className="section-title gold-text">📦 배송 & 관부가세 안내</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-card border border-border rounded-xl overflow-hidden">
            <img src={shipping} alt="파페치 배송 안내" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-5">
              <h3 className="font-bold text-lg text-foreground mb-3">배송 비용 안내</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="text-left p-2 text-foreground font-semibold">배송 유형</th>
                      <th className="text-left p-2 text-foreground font-semibold">조건</th>
                      <th className="text-right p-2 text-foreground font-semibold">금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="p-2 text-muted-foreground">스탠다드</td><td className="p-2 text-muted-foreground">28만원 이상</td><td className="p-2 text-right text-foreground">16,000원</td></tr>
                    <tr className="border-b border-border"><td className="p-2 text-muted-foreground">스탠다드</td><td className="p-2 text-muted-foreground">28만원 미만</td><td className="p-2 text-right text-foreground">37,000원</td></tr>
                    <tr className="border-b border-border"><td className="p-2 text-muted-foreground">익스프레스</td><td className="p-2 text-muted-foreground">28만원 이상</td><td className="p-2 text-right text-foreground">24,000원</td></tr>
                    <tr><td className="p-2 text-muted-foreground">무료 배송</td><td className="p-2 text-primary font-semibold">실버 등급 이상</td><td className="p-2 text-right text-primary font-bold">무료</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
          <article className="bg-card border border-border rounded-xl overflow-hidden">
            <img src={customsTax} alt="파페치 관부가세 안내" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-5">
              <h3 className="font-bold text-lg text-foreground mb-3">관부가세 안내</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />제품 가격에 관부가세 포함 → 별도 세금 불필요</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />FTA 협정국 원산지: 관세 면제, 부가세 10%만</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />원산지에 따라 동일 모델 가격 차이 발생 가능</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />개인통관고유부호 필요 시 관세청에서 간편 발급</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Guide Steps Preview */}
      <section className="page-container">
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <img src={guideSteps} alt="파페치 할인코드 적용 단계" className="w-full h-48 object-cover" loading="lazy" />
          <div className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">📱 할인코드 적용 방법 (간략)</h2>
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
              <li>파페치 공식 홈페이지(farfetch.com/kr) 접속 → 상품 선택</li>
              <li>쇼핑백에 담기 → 주문하기 → 로그인/가입</li>
              <li>개인정보·배송지 입력 → 결제 수단 선택</li>
              <li>오른쪽 '프로모션 코드 입력' 란에 코드 입력 → '적용하기' 클릭</li>
            </ol>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button inline-flex items-center gap-2 mt-4 text-sm">
              지금 할인코드 적용하러 가기 <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-container pb-16">
        <div className="gold-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">할인코드를 적용하고 쇼핑을 시작하세요!</h2>
          <p className="text-primary-foreground/80 mb-6">위의 할인코드 중 가장 유리한 코드를 선택하고, 파페치에서 럭셔리 쇼핑을 즐기세요.</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
            파페치 바로가기 <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
