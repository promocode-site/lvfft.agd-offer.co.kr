import PageMeta from "@/components/PageMeta";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";
import guideSteps from "@/assets/guide-steps.jpg";
import faqHero from "@/assets/faq-hero.jpg";
import shipping from "@/assets/shipping.jpg";
import returns from "@/assets/returns.jpg";
import couponPnow from "@/assets/coupon-pnow.jpg";
import coupon10ff from "@/assets/coupon-10ff.jpg";
import couponWelcome from "@/assets/coupon-welcome.jpg";
import couponBirthday from "@/assets/coupon-birthday.jpg";
import couponStudent from "@/assets/coupon-student.jpg";
import customsTax from "@/assets/customs-tax.jpg";
import savingsStrategy from "@/assets/savings-strategy.jpg";
import heroMain from "@/assets/hero-main.jpg";

const AFFILIATE_LINK = "http://app.ac/NjMZuMa23";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="font-semibold text-foreground text-sm pr-4">{question}</span>
        {open ? <ChevronUp size={18} className="text-primary flex-shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground flex-shrink-0" />}
      </button>
      {open && <p className="text-sm text-muted-foreground pb-4 leading-relaxed">{answer}</p>}
    </div>
  );
}

const faqs = [
  { q: "파페치 할인코드는 어디에 입력하나요?", a: "장바구니 → 주문하기 → 개인정보·결제수단 입력 후 오른쪽 '프로모션 코드' 입력란에 코드를 입력하고 '적용하기'를 클릭하면 됩니다." },
  { q: "할인코드를 2개 이상 동시에 사용할 수 있나요?", a: "아닙니다. 파페치는 1회 주문당 할인코드 1개만 적용 가능합니다. 가장 유리한 코드 1개를 선택하여 사용하세요." },
  { q: "세일 상품에 할인코드를 적용할 수 있나요?", a: "아닙니다. 할인코드는 정가 상품에만 적용 가능합니다. 이미 세일 중인 상품에는 추가 코드 적용이 불가합니다." },
  { q: "PNOW 코드를 웹에서 사용할 수 있나요?", a: "아닙니다. PNOW는 앱 전용 코드로, 파페치 모바일 앱(iOS/Android)에서만 사용 가능합니다." },
  { q: "관부가세를 별도로 납부해야 하나요?", a: "아닙니다. 파페치에서 한국 배송 선택 시 제품 가격에 관부가세가 이미 포함되어 있어 별도 세금 납부가 필요 없습니다." },
  { q: "반품은 어떻게 하나요?", a: "수령 후 14일 이내에 반품 신청이 가능합니다. 상품은 원래 상태와 포장 그대로 반품해야 하며, 반품 픽업 컬렉션(무료 반품) 서비스가 제공됩니다." },
  { q: "무료 배송 조건은 무엇인가요?", a: "파페치 실버 등급 이상 회원은 금액에 관계없이 무료 배송이 적용됩니다. 일반 회원은 28만 원 이상 구매 시 스탠다드 배송 16,000원입니다." },
  { q: "Gucci 제품에도 할인코드가 적용되나요?", a: "아닙니다. Gucci, Marla Aaron, Foundrae 등 특정 브랜드는 할인코드 적용이 제외됩니다." },
  { q: "생일 할인코드는 어떻게 받나요?", a: "파페치 계정 → '내 정보'에서 생일을 등록하면 생일 21일 전에 자동으로 할인코드가 발급됩니다. 최대 15~20% 할인이 가능합니다." },
  { q: "학생 할인을 받으려면 어떻게 해야 하나요?", a: "UNiDAYS에서 학생 신분을 인증한 후 파페치 학생 할인 프로그램에 가입하면 상시 10% 할인을 받을 수 있습니다. 재학 중인 대학·대학원생이 대상입니다." },
  { q: "포털 사이트 광고 링크로 접속하면 할인코드가 안 되나요?", a: "네, 포털 광고 링크로 접속 시 코드가 미적용될 수 있습니다. 직접 farfetch.com/kr로 접속하는 것을 권장합니다." },
  { q: "파페치 고객센터 연락처는?", a: "한국 무료 고객센터 080-880-0465 (평일 오전 9시 ~ 오후 6시)로 연락하실 수 있습니다." },
];

const steps = [
  { step: 1, title: "파페치 접속", desc: "파페치 공식 홈페이지(farfetch.com/kr)에 접속해 원하는 상품을 고릅니다." },
  { step: 2, title: "쇼핑백에 담기", desc: "상품 페이지에서 사이즈를 선택하고 '쇼핑백에 담기'를 클릭합니다." },
  { step: 3, title: "주문하기", desc: "장바구니 아이콘 클릭 → '주문하기' 클릭 → 로그인 또는 신규 가입합니다." },
  { step: 4, title: "개인정보 입력", desc: "개인 정보와 배송지를 입력하고 '저장하고 진행하기'를 클릭합니다." },
  { step: 5, title: "할인코드 입력", desc: "결제 수단 선택 후 오른쪽 '프로모션 코드 입력' 란에 코드를 입력합니다." },
  { step: 6, title: "적용 확인", desc: "'적용하기'를 누르면 할인 금액이 반영됩니다. 최종 금액 확인 후 결제 완료!" },
];

const errors = [
  { error: "코드 미적용", cause: "세일 상품 구매 시 — 정가 상품에서만 코드 적용 가능" },
  { error: "특정 브랜드에서 오류", cause: "Gucci 등 일부 브랜드는 코드 적용 제외" },
  { error: "앱 코드를 웹에서 사용", cause: "PNOW 등 앱 전용 코드는 앱에서만 작동" },
  { error: "중복 코드 사용 시도", cause: "코드는 1개만 적용 가능 — 더 유리한 코드 1개 선택" },
  { error: "쿠키 미동의 상태", cause: "첫 접속 시 쿠키 팝업에서 동의 필요" },
];

export default function Guide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "파페치 할인코드 적용 방법",
    description: "파페치(Farfetch)에서 할인코드를 적용하는 단계별 가이드",
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.desc,
      position: s.step,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageMeta
        title="파페치 할인쿠폰"
        description="파페치(Farfetch) 할인코드, 프로모션 코드, 시즌 세일 정보를 한 곳에서 확인하세요."
        canonical="https://lvfft.agd-offer.co.kr/guide"
      />
      <SchemaJsonLd schema={[schema, faqSchema]} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={faqHero} alt="파페치 이용 가이드" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="relative page-container py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">이용 가이드</span> & FAQ
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            파페치 할인코드 적용법부터 배송, 반품, 관부가세까지. 처음 파페치를 이용하시는 분도 걱정 없이 쇼핑할 수 있도록 완벽 가이드를 제공합니다.
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="page-container">
        <h2 className="section-title gold-text">📱 할인코드 적용 방법 (단계별 가이드)</h2>
        <div className="mb-6">
          <img src={guideSteps} alt="파페치 할인코드 적용 단계 가이드" className="w-full h-48 md:h-64 object-cover rounded-xl" loading="lazy" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s) => (
            <article key={s.step} className="bg-card border border-border rounded-xl p-5 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <span className="gold-gradient text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {s.step}
                </span>
                <h3 className="font-bold text-foreground">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button inline-flex items-center gap-2">
            지금 파페치에서 할인코드 적용하기 <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Common Errors */}
      <section className="page-container">
        <h2 className="section-title gold-text flex items-center gap-2">
          <AlertTriangle size={24} /> ⚠️ 자주 발생하는 오류 및 해결 방법
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={couponPnow} alt="할인코드 오류 해결" className="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />
          </div>
          <div>
            <img src={coupon10ff} alt="할인코드 적용 방법" className="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />
          </div>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse min-w-[400px] md:min-w-0">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-3 text-foreground font-semibold border-b border-border">오류 상황</th>
                <th className="text-left p-3 text-foreground font-semibold border-b border-border">원인 및 해결 방법</th>
              </tr>
            </thead>
            <tbody>
              {errors.map((e, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-3 font-medium text-foreground">{e.error}</td>
                  <td className="p-3 text-muted-foreground">{e.cause}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="page-container">
        <h2 className="section-title gold-text">🚚 배송 및 무료 배송 안내</h2>
        <div className="md:flex gap-6">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src={shipping} alt="파페치 배송 안내" className="w-full h-48 md:h-full object-cover rounded-xl" loading="lazy" />
          </div>
          <div className="md:w-2/3">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left p-3 text-foreground font-semibold border-b border-border">배송 유형</th>
                    <th className="text-left p-3 text-foreground font-semibold border-b border-border">조건</th>
                    <th className="text-right p-3 text-foreground font-semibold border-b border-border">금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="p-3 text-muted-foreground">스탠다드 배송</td><td className="p-3 text-muted-foreground">28만 원 이상 구매</td><td className="p-3 text-right text-foreground">16,000원</td></tr>
                  <tr className="border-b border-border"><td className="p-3 text-muted-foreground">스탠다드 배송</td><td className="p-3 text-muted-foreground">28만 원 미만 구매</td><td className="p-3 text-right text-foreground">37,000원</td></tr>
                  <tr className="border-b border-border"><td className="p-3 text-muted-foreground">익스프레스 배송</td><td className="p-3 text-muted-foreground">28만 원 이상 구매</td><td className="p-3 text-right text-foreground">24,000원</td></tr>
                  <tr><td className="p-3 text-muted-foreground">무료 배송</td><td className="p-3 text-primary font-semibold">실버 등급 이상 회원</td><td className="p-3 text-right text-primary font-bold">무료</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">💡 팁:</strong> 실버 등급은 첫 구매 후 일정 금액 이상 구매 시 달성 가능합니다. 고가 명품 쇼핑 시 무료 배송이 큰 장점입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Return Policy */}
      <section className="page-container">
        <h2 className="section-title gold-text">🔄 반품 정책</h2>
        <div className="bg-card border border-border rounded-xl overflow-hidden md:flex">
          <img src={returns} alt="파페치 반품 정책" className="md:w-1/3 h-48 md:h-auto object-cover" loading="lazy" />
          <div className="p-6 md:w-2/3">
            <ul className="space-y-3">
              {[
                "수령 후 14일 이내 반품 신청 가능",
                "상품은 원래 상태와 포장 그대로 반품해야 환불 처리",
                "반품 픽업 컬렉션(무료 반품) 서비스 제공",
                "반품 신청 후 택배 픽업 방식으로 진행",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Customs & Tax */}
      <section className="page-container">
        <h2 className="section-title gold-text">💰 관부가세 및 직구 안내</h2>
        <div className="bg-card border border-border rounded-xl overflow-hidden md:flex">
          <img src={customsTax} alt="파페치 관부가세" className="md:w-1/3 h-48 md:h-auto object-cover" loading="lazy" />
          <div className="p-6 md:w-2/3">
            <ul className="space-y-3">
              {[
                "한국 배송 시 제품 가격에 관부가세 포함 → 별도 세금 납부 불필요",
                "FTA 협정국 원산지 제품: 관세 면제, 부가세 10%만 포함",
                "원산지에 따라 동일 모델이라도 가격 차이 발생 가능 (예: 이탈리아산 vs. 중국산)",
                "개인통관고유부호 필요 시: 관세청 홈페이지 또는 모바일 앱에서 간편 발급 가능",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Coupon Images */}
      <section className="page-container">
        <h2 className="section-title gold-text">🎟️ 주요 할인코드 한눈에 보기</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { img: couponPnow, alt: "PNOW 앱 전용 10% 할인코드", label: "PNOW - 앱 전용 10%" },
            { img: coupon10ff, alt: "10FF 신규 회원 10% 할인코드", label: "10FF - 신규 10%" },
            { img: couponWelcome, alt: "웰컴 리워드 할인코드", label: "웰컴 리워드 ~10%" },
            { img: couponBirthday, alt: "생일 할인코드 최대 20%", label: "생일 할인 최대 20%" },
            { img: couponStudent, alt: "학생 할인코드 10%", label: "학생 할인 10%" },
            { img: savingsStrategy, alt: "최대 절약 전략", label: "최대 절약 전략" },
          ].map((item) => (
            <article key={item.label} className="bg-card border border-border rounded-lg overflow-hidden card-hover">
              <img src={item.img} alt={item.alt} className="w-full h-28 object-cover" loading="lazy" />
              <p className="text-xs text-center text-muted-foreground py-2 px-2">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="page-container">
        <h2 className="section-title gold-text">❓ 자주 묻는 질문 (FAQ)</h2>
        <div className="bg-card border border-border rounded-xl p-6">
          {faqs.map((f, i) => (
            <FaqItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>

      {/* Farfetch Overview */}
      <section className="page-container">
        <h2 className="section-title gold-text">📌 파페치(Farfetch)란?</h2>
        <div className="bg-card border border-border rounded-xl overflow-hidden md:flex">
          <img src={heroMain} alt="파페치 럭셔리 패션 플랫폼" className="md:w-1/3 h-48 md:h-auto object-cover" loading="lazy" />
          <div className="p-6 md:w-2/3">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              파페치(Farfetch)는 전 세계 부티크·디자이너 브랜드 제품을 한 곳에서 구매할 수 있는 글로벌 럭셔리 패션 이커머스 플랫폼입니다. 
              구찌, 발렌시아가, 생로랑, 보테가 베네타, 셀린느, 발렌티노 등 수백 개의 하이엔드 브랜드와 부티크 상품을 직접 연결해주는 방식으로 운영됩니다.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              한국에 관부가세가 이미 제품 가격에 포함되어 있어 별도로 세금을 납부할 필요 없이 표시된 가격 그대로 결제하면 된다는 점이 큰 장점입니다.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">고객센터:</strong> 한국 무료 고객센터 080-880-0465 (평일 오전 9시 ~ 오후 6시)
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-container pb-16">
        <div className="gold-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">파페치에서 럭셔리 쇼핑을 시작하세요!</h2>
          <p className="text-primary-foreground/80 mb-6">할인코드를 적용하고, 가장 합리적인 가격에 명품을 만나보세요.</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
            파페치 바로가기 <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
