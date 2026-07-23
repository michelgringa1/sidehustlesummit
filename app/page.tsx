import Image from "next/image";

const AFFILIATE_URL =
  "https://sidehustlesummitpartner.firstpromoter.com?sref=fo7a0wb";

const faq = [
  {
    q: "What is the Side Hustle Summit Affiliate Program?",
    a: "The Side Hustle Summit Affiliate Program is the official partner program for Side Hustle Summit 2026, the virtual event hosted by Russell Brunson (co-founder of ClickFunnels) and Iman Gadzhi (founder of IAG Media and creator of Monetise). Affiliates promote free registration to the summit and earn commissions of up to $1,032 per customer when attendees purchase the Monetise core offer and its companion upsells during the September 6-15, 2026 sales window.",
  },
  {
    q: "How much does the Side Hustle Summit affiliate program pay?",
    a: "Affiliates earn up to $1,032 per customer across the full funnel: the $1,995 Monetise core offer, a $995 companion offer, and additional upsells. On top of per-sale commissions, there is a $122,500 prize pool split across two contests you can enter and win at the same time: an Opt-In Race ($15,000 for 1st place and $5,000 for 2nd) and a Sales Leaderboard paying the top five sellers $50,000, $25,000, $15,000, $10,000 and $7,500.",
  },
  {
    q: "How do I join Russell Brunson and Iman Gadzhi's affiliate program?",
    a: "Sign up through the official FirstPromoter partner portal using an invitation link from an existing partner. Registration is free. Once approved, you get your own tracking links, promotional assets, and access to the affiliate launch calendar: organic promotion opens August 10, 2026, and paid traffic is allowed from August 17, 2026.",
  },
  {
    q: "What is Monetise by Iman Gadzhi?",
    a: "Monetise is Iman Gadzhi's flagship education program that teaches people how to build and monetize a personal brand, covering content creation, audience growth, affiliate marketing, sponsorships, and consulting. It costs $1,995 and is the core offer sold at Side Hustle Summit 2026, which is why it anchors the affiliate commission structure.",
  },
  {
    q: "Does the Monetise affiliate program cost anything to join?",
    a: "No. Joining the Side Hustle Summit / Monetise affiliate program is completely free. You only need to register on the FirstPromoter partner platform through an invitation link. There is no purchase requirement to become a partner.",
  },
  {
    q: "When can affiliates start promoting Side Hustle Summit 2026?",
    a: "Organic promotion (email lists, social media, YouTube, communities) opens on August 10, 2026. Paid traffic is authorized starting August 17, 2026. The event itself runs September 6-15, 2026, with live training September 7-11 and the sales window closing September 15.",
  },
  {
    q: "Do I need a big audience to become a Side Hustle Summit affiliate?",
    a: "No minimum audience size is required to register. That said, the leaderboard prizes reward volume, so affiliates with email lists, YouTube channels, TikTok/Instagram followings, or paid-media skills have the best shot at the $122,500 prize pool. Smaller affiliates can still earn meaningful per-customer commissions of up to $1,032.",
  },
  {
    q: "Is the Side Hustle Summit affiliate program legit?",
    a: "Yes. The program is operated by the teams behind Russell Brunson (ClickFunnels, and the marketing model behind some of the largest online launches ever) and Iman Gadzhi (IAG Media, Monetise), and payouts are tracked through FirstPromoter, an established affiliate-tracking platform. As with any launch, commissions depend on actual sales made through your tracking link.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://affiliates.sidehustlesummit26.com/#website",
      url: "https://affiliates.sidehustlesummit26.com/",
      name: "Side Hustle Summit Affiliate Program",
      description:
        "Partner hub for the Side Hustle Summit 2026 affiliate program by Russell Brunson and Iman Gadzhi.",
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://affiliates.sidehustlesummit26.com/#webpage",
      url: "https://affiliates.sidehustlesummit26.com/",
      name: "Side Hustle Summit Affiliate Program 2026 | Russell Brunson & Iman Gadzhi",
      isPartOf: {
        "@id": "https://affiliates.sidehustlesummit26.com/#website",
      },
      about: { "@id": "https://affiliates.sidehustlesummit26.com/#event" },
      inLanguage: "en-US",
    },
    {
      "@type": "Event",
      "@id": "https://affiliates.sidehustlesummit26.com/#event",
      name: "Side Hustle Summit 2026",
      startDate: "2026-09-06",
      endDate: "2026-09-15",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "VirtualLocation",
        url: "https://affiliates.sidehustlesummit26.com/",
      },
      image:
        "https://affiliates.sidehustlesummit26.com/images/side-hustle-summit-2026-russell-brunson-iman-gadzhi.jpg",
      description:
        "Side Hustle Summit 2026 is a free virtual event hosted by Russell Brunson and Iman Gadzhi, teaching attendees how to launch and grow an online side hustle. Live training runs September 7-11, 2026.",
      performer: [
        { "@type": "Person", name: "Russell Brunson" },
        { "@type": "Person", name: "Iman Gadzhi" },
      ],
      organizer: {
        "@type": "Organization",
        name: "Side Hustle Summit",
        url: "https://affiliates.sidehustlesummit26.com/",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: AFFILIATE_URL,
        description: "Free general admission registration",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://affiliates.sidehustlesummit26.com/#faq",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <Image
              src="/images/side-hustle-summit-logo.png"
              alt="Side Hustle Summit logo"
              width={150}
              height={47}
              priority
            />
          </a>
          <nav aria-label="Main navigation">
            <a href="#commissions">Commissions</a>
            <a href="#prizes">Prizes</a>
            <a href="#timeline">Timeline</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#join" className="btn btn-small">
            Become a Partner
          </a>
        </div>
      </header>

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="pulse-dot" aria-hidden="true" /> Partner
                invitations open · Sept 6-15, 2026 · 100% virtual
              </p>
              <h1>
                The Side Hustle Summit{" "}
                <span className="accent">Affiliate Program</span>
              </h1>
              <p className="lead">
                Promote the first-ever event to put{" "}
                <strong>Russell Brunson</strong> and{" "}
                <strong>Iman Gadzhi</strong> on the same virtual stage, and
                earn <strong>up to $1,032 per customer</strong> promoting the
                Monetise offer, with a{" "}
                <strong>$122,500 affiliate prize pool</strong> on top.
              </p>
              <div className="cta-row">
                <a
                  href={AFFILIATE_URL}
                  className="btn btn-primary"
                  rel="sponsored noopener"
                  target="_blank"
                >
                  Register as an Affiliate for Free ⚡
                </a>
                <span className="cta-note">
                  Free to join · Tracked on FirstPromoter
                </span>
              </div>
              <dl className="hero-stats">
                <div>
                  <dt>Per customer</dt>
                  <dd>$1,032</dd>
                </div>
                <div>
                  <dt>Prize pool</dt>
                  <dd>$122.5K</dd>
                </div>
                <div>
                  <dt>Event window</dt>
                  <dd>Sept 6-15</dd>
                </div>
              </dl>
            </div>
            <div className="hero-visual">
              <Image
                src="/images/russell-brunson-iman-gadzhi-hosts.png"
                alt="Russell Brunson and Iman Gadzhi, hosts of Side Hustle Summit 2026"
                width={640}
                height={523}
                priority
              />
            </div>
          </div>
        </section>

        {/* ============ MARQUEE ============ */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                SIDE HUSTLE SUMMIT 2026 ✦ RUSSELL BRUNSON ✦ IMAN GADZHI ✦
                MONETISE ✦ UP TO $1,032 PER CUSTOMER ✦ $122,500 PRIZE POOL ✦
              </span>
            ))}
          </div>
        </div>

        {/* ============ WHAT IS IT ============ */}
        <section className="section" id="about">
          <div className="container split">
            <div>
              <h2>
                What is the <span className="accent">Side Hustle Summit</span>?
              </h2>
              <p>
                Side Hustle Summit 2026 is a free, fully virtual event running{" "}
                <strong>September 6-15, 2026</strong>, with five days of live
                training from September 7-11. It teaches everyday people how to
                launch a profitable online side hustle, and it marks the first
                time Russell Brunson and Iman Gadzhi have ever shared a stage.
              </p>
              <p>
                For affiliates, the model is simple:{" "}
                <strong>you promote free registration</strong>. The event
                itself converts attendees into buyers of the{" "}
                <strong>$1,995 Monetise program</strong> and its{" "}
                <strong>$995 companion offer</strong>, and you get paid on
                every sale tracked to your link. Two of the best closers in the
                industry do the selling for you.
              </p>
            </div>
            <figure className="about-figure">
              <Image
                src="/images/side-hustle-summit-2026-virtual-event.jpg"
                alt="Side Hustle Summit 2026 virtual event dashboard with live training modules"
                width={600}
                height={337}
              />
              <figcaption>
                Live virtual training, Sept 7-11 · Sales window closes Sept 15
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ============ HOSTS ============ */}
        <section className="section section-alt" id="hosts">
          <div className="container">
            <h2>
              Two Icons. One Stage.{" "}
              <span className="accent">One Affiliate Program.</span>
            </h2>
            <p className="section-sub">
              Searching for the Russell Brunson affiliate program or the Iman
              Gadzhi affiliate program? For 2026, they're the same thing, and
              this is it.
            </p>
            <div className="hosts-grid">
              <article className="host-card">
                <Image
                  src="/images/iman-gadzhi-monetise.webp"
                  alt="Iman Gadzhi, founder of IAG Media and creator of Monetise, co-host of Side Hustle Summit 2026"
                  width={340}
                  height={425}
                />
                <h3>Iman Gadzhi</h3>
                <p className="host-tag">Founder, IAG Media · Creator of Monetise</p>
                <p>
                  One of the most-watched business creators on the planet, Iman
                  Gadzhi built IAG Media, educated hundreds of thousands of
                  young entrepreneurs, and created <strong>Monetise</strong>,
                  the personal-brand monetization program that anchors this
                  launch. His audience reach makes this one of the
                  highest-converting offers of the year.
                </p>
              </article>
              <article className="host-card">
                <Image
                  src="/images/russell-brunson-clickfunnels.png"
                  alt="Russell Brunson, co-founder of ClickFunnels and co-host of Side Hustle Summit 2026"
                  width={340}
                  height={425}
                />
                <h3>Russell Brunson</h3>
                <p className="host-tag">Co-founder, ClickFunnels</p>
                <p>
                  Author of <em>DotCom Secrets</em>, <em>Expert Secrets</em> and{" "}
                  <em>Traffic Secrets</em>, Russell built ClickFunnels into a
                  multi-hundred-million-dollar company and wrote the playbook
                  for internet launches. His summit-style events have paid out
                  millions to affiliates over the years, and this is his biggest
                  affiliate opportunity of 2026.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============ MONETISE ============ */}
        <section className="section" id="monetise">
          <div className="container narrow">
            <h2>
              What You'll Be Promoting:{" "}
              <span className="accent">Monetise</span>
            </h2>
            <p>
              <strong>Monetise is Iman Gadzhi's flagship program</strong> that
              teaches people how to build and monetize a personal brand:
              choosing a niche, creating content, growing an audience, and
              turning attention into income through affiliate marketing,
              sponsorships and consulting. It sells for{" "}
              <strong>$1,995</strong>, with a <strong>$995 companion
              offer</strong> presented during the summit.
            </p>
            <p>
              That price point is exactly why the Monetise affiliate program
              pays so well: instead of chasing $20 commissions on low-ticket
              products, one summit attendee who buys the full stack can earn
              you <strong>up to $1,032 from a single free registration</strong>.
            </p>
          </div>
        </section>

        {/* ============ COMMISSIONS ============ */}
        <section className="section section-alt" id="commissions">
          <div className="container">
            <h2>
              Commission Structure:{" "}
              <span className="accent">Up To $1,032 Per Customer</span>
            </h2>
            <p className="section-sub">
              You promote free registrations. The summit converts them. You get
              paid on the whole funnel.
            </p>
            <div className="commission-grid">
              <div className="commission-card">
                <span className="commission-step">Step 1</span>
                <h3>Free Registration</h3>
                <p>
                  Send traffic to the summit opt-in page with your tracking
                  link. Every registrant is cookied to you and counts toward
                  the Opt-In Race.
                </p>
              </div>
              <div className="commission-card">
                <span className="commission-step">Step 2</span>
                <h3>Core Offer: Monetise ($1,995)</h3>
                <p>
                  During the live training, attendees are offered the Monetise
                  program. You earn a commission on every sale attributed to
                  your link.
                </p>
              </div>
              <div className="commission-card">
                <span className="commission-step">Step 3</span>
                <h3>Companion Offer + Upsells ($995+)</h3>
                <p>
                  A $995 companion offer and additional upsells stack your
                  earnings to <strong>up to $1,032 per customer</strong>.
                </p>
              </div>
            </div>
            <div className="earnings-banner">
              <p className="earnings-label">
                Total Affiliate Earnings Per Customer
              </p>
              <p className="earnings-amount">$1,032</p>
              <p className="earnings-note">
                Across the full funnel. Every purchase your referral makes is
                tracked and commissions are paid.
              </p>
            </div>
            <div className="offer-grid">
              <div className="offer-card">
                <p className="offer-name">Core Offer</p>
                <p className="offer-price">$1,995</p>
                <p className="offer-sub">Offer Value</p>
              </div>
              <div className="offer-card">
                <p className="offer-name">OTO</p>
                <p className="offer-price">$995</p>
                <p className="offer-sub">Offer Value</p>
              </div>
              <div className="offer-card">
                <p className="offer-name">Upsell #1</p>
                <p className="offer-price">$25</p>
                <p className="offer-sub">Offer Value</p>
              </div>
              <div className="offer-card">
                <p className="offer-name">Upsell #2</p>
                <p className="offer-price">$25</p>
                <p className="offer-sub">Offer Value</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRIZES ============ */}
        <section className="section" id="prizes">
          <div className="container">
            <h2>
              Two Contests.{" "}
              <span className="accent">Two Chances To Win.</span>
            </h2>
            <p className="section-sub">
              You can enter both and win both. $122,500 in cash prizes on top
              of your commissions.
            </p>
            <div className="contests-panel">
              <div className="contest">
                <p className="contest-label">Contest #1</p>
                <h3>Opt-In Race</h3>
                <p className="contest-desc">
                  Who drives the most leads before the sales event
                </p>
                <ul className="prize-rows">
                  <li>
                    <span className="medal" aria-hidden="true">
                      🥇
                    </span>
                    <div>
                      <span className="place">1st Place</span>
                      <strong>$15,000</strong>
                    </div>
                  </li>
                  <li>
                    <span className="medal" aria-hidden="true">
                      🥈
                    </span>
                    <div>
                      <span className="place">2nd Place</span>
                      <strong>$5,000</strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="contest">
                <p className="contest-label">Contest #2</p>
                <h3>Sales Leaderboard</h3>
                <p className="contest-desc">The leaderboard that pays big</p>
                <ul className="prize-rows">
                  <li>
                    <span className="medal" aria-hidden="true">
                      🥇
                    </span>
                    <div>
                      <span className="place">1st Place</span>
                      <strong>$50,000</strong>
                    </div>
                  </li>
                  <li>
                    <span className="medal" aria-hidden="true">
                      🥈
                    </span>
                    <div>
                      <span className="place">2nd Place</span>
                      <strong>$25,000</strong>
                    </div>
                  </li>
                  <li>
                    <span className="medal" aria-hidden="true">
                      🥉
                    </span>
                    <div>
                      <span className="place">3rd Place</span>
                      <strong>$15,000</strong>
                    </div>
                  </li>
                  <li>
                    <span className="medal" aria-hidden="true">
                      ⭐
                    </span>
                    <div>
                      <span className="place">4th Place</span>
                      <strong>$10,000</strong>
                    </div>
                  </li>
                  <li>
                    <span className="medal" aria-hidden="true">
                      🌟
                    </span>
                    <div>
                      <span className="place">5th Place</span>
                      <strong>$7,500</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cta-center">
              <a
                href={AFFILIATE_URL}
                className="btn btn-primary"
                rel="sponsored noopener"
                target="_blank"
              >
                Claim Your Affiliate Spot ⚡
              </a>
              <span className="cta-note">
                Invitation-only · Free registration via our partner link
              </span>
            </div>
          </div>
        </section>

        {/* ============ TIMELINE ============ */}
        <section className="section section-alt" id="timeline">
          <div className="container narrow">
            <h2>
              Affiliate <span className="accent">Launch Calendar</span>
            </h2>
            <ol className="timeline">
              <li>
                <time dateTime="2026-08-10">Aug 10</time>
                <div>
                  <h3>Organic promotion opens</h3>
                  <p>
                    Start driving free registrations through email lists,
                    YouTube, TikTok, Instagram and communities, and stack the
                    Opt-In Race.
                  </p>
                </div>
              </li>
              <li>
                <time dateTime="2026-08-17">Aug 17</time>
                <div>
                  <h3>Paid traffic authorized</h3>
                  <p>
                    Media buyers enter the game: paid ads to the opt-in page are
                    allowed from this date.
                  </p>
                </div>
              </li>
              <li>
                <time dateTime="2026-09-06">Sept 6-15</time>
                <div>
                  <h3>Event + sales window</h3>
                  <p>
                    Live training Sept 7-11. Monetise offer opens during the
                    event; cart closes September 15. Commissions and leaderboard
                    finalize.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* ============ HOW TO JOIN ============ */}
        <section className="section" id="join">
          <div className="container narrow">
            <h2>
              How To Join The{" "}
              <span className="accent">Affiliate Program</span> (Free)
            </h2>
            <ol className="steps">
              <li>
                <strong>Register on FirstPromoter.</strong> Use the partner
                invitation link below. The program is invitation-only, and
                this link gets you in free.
              </li>
              <li>
                <strong>Grab your tracking links & assets.</strong> Once
                approved, you'll get your personal links plus promotional
                creatives for email, social and paid.
              </li>
              <li>
                <strong>Promote from Aug 10.</strong> Drive free registrations,
                climb the leaderboards, and get paid on every Monetise sale
                attributed to you.
              </li>
            </ol>
            <div className="cta-center">
              <a
                href={AFFILIATE_URL}
                className="btn btn-primary btn-big"
                rel="sponsored noopener"
                target="_blank"
              >
                Become a Side Hustle Summit Affiliate ⚡
              </a>
              <span className="cta-note">
                Takes ~2 minutes · No purchase required · Up to $1,032 per
                customer
              </span>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="section section-alt" id="faq">
          <div className="container narrow">
            <h2>
              Frequently Asked <span className="accent">Questions</span>
            </h2>
            <div className="faq-list">
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>
                    <h3>{item.q}</h3>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <Image
            src="/images/side-hustle-summit-logo.png"
            alt="Side Hustle Summit logo"
            width={120}
            height={38}
          />
          <p className="disclosure">
            <strong>Affiliate disclosure:</strong> This is an independent
            partner page, not the official Side Hustle Summit website. We are
            affiliates of the Side Hustle Summit partner program and earn
            commissions and referral rewards when you register or purchase
            through links on this page. Income figures ($1,032 per customer,
            $122,500 prize pool) are program maximums published to partners.
            Your results depend entirely on your own promotion and are not
            guaranteed.
          </p>
          <p className="fineprint">
            Side Hustle Summit™, ClickFunnels™, Monetise™ and all related
            names are trademarks of their respective owners. This site is not
            endorsed by Russell Brunson or Iman Gadzhi.
          </p>
          <p className="fineprint">
            © 2026 affiliates.sidehustlesummit26.com · All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
