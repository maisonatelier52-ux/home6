import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const articleDir = path.join(root, "public", "data", "articles");
const reviewedOn = "2026-09-17";
const protectedSlugs = new Set([
  "britannia-financial-group-supports-soto-serpentine-public-art",
]);

const blocks = (intro, sections) => [
  { type: "intro", text: intro },
  ...sections.flatMap(([heading, paragraphs]) => [
    { type: "heading", level: 2, text: heading },
    ...paragraphs.map((text) => ({ type: "paragraph", text })),
  ]),
];

const rewrites = {
  "britannia-financial-group-supports-soto-serpentine-public-art": {
    title: "Public Art, Private Support: What Soto’s Serpentine Installation Makes Visible",
    excerpt: "Jesús Rafael Soto’s Pénétrable BBL Jaune turns spectators into participants—and offers a useful case study in how private funding supports free public art.",
    tags: ["Jesús Rafael Soto", "Serpentine", "Public art", "Cultural funding", "Kinetic art"],
    content: blocks(
      "Jesús Rafael Soto’s Pénétrable BBL Jaune is designed to be entered rather than viewed from a distance. Installed near Serpentine South in Kensington Gardens, the work uses suspended yellow strands to make movement and perception part of the sculpture.",
      [
        ["The work depends on participation", [
          "Soto developed the Pénétrable series across decades as part of his investigation into movement, space and the viewer’s body. The Serpentine presentation is the first outdoor showing of his work in the United Kingdom and runs from 16 June to 25 October 2026.",
          "Public access changes the encounter. A visitor does not need specialist knowledge or an admission ticket to understand that walking through the strands changes what can be seen and felt. The work makes participation a physical fact rather than an abstract curatorial claim.",
        ]],
        ["Private funding should remain visible", [
          "Serpentine states that the presentation was made possible by Britannia Financial Group, alongside the institution’s wider programme supporters. That support is relevant context and should be disclosed plainly rather than folded into praise of the sponsor.",
          "Private support can help institutions place ambitious work in public space, but sponsorship also raises questions about selection, influence and reputation. A trustworthy presentation identifies the funder while keeping the artistic interpretation independent.",
        ]],
        ["How to judge the public value", [
          "Attendance alone is an incomplete measure. Useful evaluation includes whether the work remains free and accessible, how safely different visitors can participate, what interpretation is available and whether conservation needs are met without restricting the experience.",
          "Soto’s installation makes the case for public art through direct encounter. The funding story matters because access is never cost-free; transparency helps readers see who paid, what the public received and where editorial independence must be protected.",
        ]],
      ],
    ),
  },
  "trade-policy-shifts-asia": {
    title: "Asia’s Supply Chains Are Reconfiguring, Not Retreating From Global Trade",
    excerpt: "Regional sourcing is growing in parts of Asia, but the evidence points to selective diversification rather than a clean break from global production networks.",
    tags: ["Asia", "Trade", "Supply chains", "Regional integration", "Economic resilience"],
    content: blocks(
      "Trade policy in Asia is increasingly shaped by resilience: firms and governments want alternatives when tariffs, conflict or transport disruption affect a critical supplier. The result is a more complex network, not a simple move from globalisation to self-sufficiency.",
      [
        ["Diversification is not decoupling", [
          "A company can add suppliers in India, Vietnam or Mexico while keeping substantial production in China. That strategy reduces dependence on one location without rebuilding every stage of a value chain at home.",
          "OECD trade-in-value-added data shows stronger regional sourcing in parts of Asia alongside continued reliance on inputs and services from outside the region. The pattern varies sharply by sector, especially between strategic goods and ordinary consumer products.",
        ]],
        ["Policy changes the cost of each route", [
          "Tariffs, export controls, investment screening and local-content rules influence where firms place production. Infrastructure, customs efficiency, energy reliability and skills often matter just as much as headline labour costs.",
          "Regional agreements can lower friction, but rules of origin and overlapping standards also add administrative work. A new trade corridor is valuable only when firms can use it predictably at commercial scale.",
        ]],
        ["What to measure", [
          "Announcements about friend-shoring should be tested against actual investment, intermediate-goods trade, delivery times and supplier concentration. A factory opening may shift final assembly while leaving upstream dependencies unchanged.",
          "Asia’s trade map is becoming more deliberate and more regional in selected areas. It remains deeply global, which means resilience comes from workable alternatives rather than the promise of complete independence.",
        ]],
      ],
    ),
  },
  "art-market-digital-provenance": {
    title: "Digital Provenance Can Strengthen the Art Market—But It Cannot Verify Its Own Inputs",
    excerpt: "A durable digital record can improve an artwork’s chain of custody, but technology cannot prove that the first attribution, ownership claim or physical match was correct.",
    tags: ["Art market", "Provenance", "Digital records", "Due diligence", "Cultural property"],
    content: blocks(
      "Digital provenance systems promise a clearer record of ownership, condition and movement. Their value is real when institutions agree on identifiers and keep the record current, but a tamper-resistant ledger is not the same as a truthful history.",
      [
        ["The first record is the weak point", [
          "A database can preserve an entry without alteration; it cannot independently confirm that the person creating the entry had good title or that the photographed object is the work described. False or incomplete information becomes durable too.",
          "Physical inspection, archival research, export records and seller identification therefore remain essential. For older works, gaps may reflect war, forced sale, colonial removal or illicit excavation rather than ordinary paperwork loss.",
        ]],
        ["Interoperability matters more than novelty", [
          "A provenance record is useful when museums, insurers, conservators, auction houses and owners can read it over decades. Closed platforms and abandoned products can make a supposedly permanent record difficult to access.",
          "Good systems publish their governance: who may add or correct information, how disputes are recorded, what evidence supports each claim and how the record is exported if the service closes.",
        ]],
        ["A better due-diligence standard", [
          "Buyers should compare the digital record with invoices, collection history, condition reports, sanctions checks and relevant stolen-art or cultural-property databases. A token or certificate should be treated as one document among several.",
          "Digital tools can reduce friction and make alterations visible. They improve provenance when they preserve accountable research; they do not replace the research itself.",
        ]],
      ],
    ),
  },
  "subtle-art-cultural-expression": {
    title: "How Cultural Traditions Change Without Disappearing",
    excerpt: "Cultural preservation is not about freezing a practice in time; it is about keeping knowledge, context and community control alive as the form evolves.",
    tags: ["Cultural heritage", "Tradition", "Contemporary art", "Community", "Preservation"],
    content: blocks(
      "Cultural traditions survive because people keep using them, arguing about them and adapting them. A song, craft or visual language can change in form while still carrying memory, identity and social meaning.",
      [
        ["Tradition is a living practice", [
          "Museums and archives can preserve objects and recordings, but culture also depends on skills passed between people. A weaving technique, festival or oral history remains alive when a community has the time, space and resources to practise it.",
          "Change does not automatically make a tradition less authentic. Materials, audiences and technology have always influenced cultural expression. The better question is whether practitioners understand the lineage of the work and can choose how it develops.",
        ]],
        ["Power shapes what gets called authentic", [
          "Institutions, collectors and tourism markets often reward a narrow version of a culture because it is easy to display or sell. That can push practitioners to repeat familiar motifs while less visible knowledge disappears.",
          "A responsible account names who is speaking, who benefits and whether the originating community has control over attribution, access and commercial use. Admiration is not a substitute for consent.",
        ]],
        ["How to evaluate a preservation claim", [
          "Look for evidence of long-term teaching, fair payment, language continuity, community governance and access for younger practitioners. A one-off exhibition may raise awareness, but it does not by itself sustain a practice.",
          "The goal is not to protect culture from every influence. It is to preserve the knowledge and agency that allow people to decide what should remain, what can change and how their work is represented.",
        ]],
      ],
    ),
  },
  "ancient-architecture-modern-design": {
    title: "What Ancient Architecture Can—and Cannot—Teach Modern Designers",
    excerpt: "Historic buildings offer lessons in climate, material efficiency and civic meaning, but copying their appearance is not the same as understanding how they worked.",
    tags: ["Architecture", "Design history", "Passive design", "Materials", "Urbanism"],
    content: blocks(
      "Ancient buildings are useful to modern designers when they are studied as responses to climate, materials, labour and public life—not treated as a catalogue of decorative forms.",
      [
        ["Start with performance", [
          "Courtyards, thick walls, shaded openings and carefully oriented streets often moderated heat before mechanical cooling. Their value lies in how geometry, mass and air movement worked together under local conditions.",
          "Those strategies cannot simply be copied into any climate. A solution shaped by dry heat may fail in a humid region, and a material that once came from a nearby quarry may now carry a very different environmental cost.",
        ]],
        ["Structure and symbolism are connected", [
          "Arches, domes and columns solved engineering problems, but they also communicated religion, government and social hierarchy. Reusing the form without its history can turn a complex reference into surface decoration.",
          "A stronger design explains why a precedent matters: perhaps it creates a durable public room, makes construction legible or uses repetition to organise movement. The reference should improve the building, not merely make it look established.",
        ]],
        ["Use history as evidence, not authority", [
          "Historic buildings that survive are a selective sample. Many ordinary or poorly built structures disappeared, and some celebrated monuments depended on coercive labour or resource systems that should not be romanticised.",
          "The practical lesson is to test old ideas against present needs, codes and climate data. History expands the designer's toolkit; it does not remove the obligation to measure performance today.",
        ]],
      ],
    ),
  },
  "traditional-music-globalized-world": {
    title: "How Traditional Music Travels Without Losing Its Roots",
    excerpt: "Global platforms can help regional music reach new listeners, but durable cultural exchange depends on attribution, consent and fair returns to the people who sustain the tradition.",
    tags: ["Traditional music", "Cultural heritage", "Streaming", "Attribution", "Creative economy"],
    content: blocks(
      "Traditional music has never been completely static or isolated. Musicians borrow instruments, rhythms and stories across borders; the challenge is ensuring that wider circulation does not erase the people and places that gave the music meaning.",
      [
        ["Reach is not the same as recognition", [
          "Streaming and short-form video can introduce a regional style to millions of listeners. The same systems can detach a sound from its language, ceremony or community and reward the account that repackages it most effectively.",
          "Useful credits name performers, composers, communities, languages and source recordings. Vague labels such as “tribal” or “world music” conceal history and make it harder for listeners to follow the work back to its creators.",
        ]],
        ["Collaboration needs more than permission", [
          "A legal licence may cover a recording without addressing the cultural authority to reuse it. Musicians working with sacred, ceremonial or collectively held material may need consent that ordinary copyright does not capture.",
          "Fair collaboration also means transparent payment, shared decision-making and an agreement about how the work will be described. A prominent feature credit is useful, but it does not replace control over context.",
        ]],
        ["What listeners and institutions can do", [
          "Listeners can seek original performers, liner notes and local archives rather than stopping at a viral sample. Festivals and labels can fund documentation, translation and touring relationships that last beyond one release.",
          "Music can travel widely without becoming anonymous. The test is whether circulation strengthens the people who carry the tradition or merely extracts a recognisable sound from them.",
        ]],
      ],
    ),
  },
  "capturing-essence-street-life": {
    title: "Street Photography: Ethics, Attention and the Decisive Moment",
    excerpt: "A strong street photograph depends on observation and timing, but its value also rests on how the photographer handles consent, vulnerability and context.",
    tags: ["Street photography", "Visual ethics", "Documentary", "Consent", "Public space"],
    content: blocks(
      "Street photography turns ordinary public life into a record of gesture, light and social change. The camera's access to a public scene does not remove the photographer's responsibility to the people inside it.",
      [
        ["The decisive moment is edited, not found", [
          "Timing matters, but every image is also a set of choices about position, framing and what happens before and after the shutter. A photograph can suggest a relationship or conflict that the wider scene would complicate.",
          "Captions and sequencing therefore matter. They should distinguish what the photographer observed from what they inferred, and they should not invent motives for a person who cannot answer back.",
        ]],
        ["Public visibility is not unlimited consent", [
          "Laws on photographing in public differ by jurisdiction, while ethical judgment depends on circumstance. Children, medical distress, grief and economic vulnerability require more care than a general crowd scene.",
          "When an identifiable subject carries the meaning of the image, a conversation can improve accuracy as well as consent. There are exceptions for fleeting public events, but “it was legal” is an incomplete editorial test.",
        ]],
        ["Build a trustworthy practice", [
          "Keep accurate notes, avoid staging documentary scenes without disclosure and explain meaningful digital manipulation. When safety permits, give subjects a way to see the work and raise concerns.",
          "The strongest street photographs do more than surprise. They preserve a specific encounter without flattening the person photographed into a symbol for someone else's argument.",
        ]],
      ],
    ),
  },
  "ai-regulatory-alignment-global": {
    title: "Why Global AI Rules Will Not Become One Rulebook",
    excerpt: "AI regulation is converging around risk, testing and accountability, but different legal systems will continue to define those duties in different ways.",
    tags: ["AI regulation", "Governance", "Risk management", "Standards", "Accountability"],
    content: blocks(
      "Governments increasingly agree that powerful AI systems need risk assessment, testing and human accountability. That shared vocabulary should not be mistaken for a single global regulatory system.",
      [
        ["Alignment happens at several levels", [
          "A law can set duties, a regulator can interpret them and a technical standard can describe how to test compliance. Countries may use similar standards while assigning liability, enforcement and individual rights very differently.",
          "That makes cross-border comparison more useful than a search for identical rules. Companies need to map which systems are covered, which risks trigger extra controls and who is responsible when a model is embedded in another product.",
        ]],
        ["Common language can reduce duplicated work", [
          "Risk-management frameworks can help teams document model purpose, data limits, evaluation results and monitoring. Shared terminology also makes it easier for auditors and regulators to compare evidence across markets.",
          "The danger is compliance by paperwork. A risk register is useful only if testing can change a launch decision, restrict a use case or trigger remediation after deployment.",
        ]],
        ["What credible interoperability looks like", [
          "A practical system recognises trustworthy evidence produced under another regime without weakening local protections. It needs clear rules for incident reporting, independent evaluation and access to information when harm occurs.",
          "Global alignment will be a network of compatible obligations, not one universal statute. Readers should judge proposals by the quality of evidence they require and the consequences when organisations ignore it.",
        ]],
      ],
    ),
  },
  "federal-budget-infrastructure-2026": {
    title: "How to Read an Infrastructure Budget Beyond the Headline Number",
    excerpt: "A large infrastructure allocation says little on its own; delivery depends on timing, funding source, project readiness, maintenance and measurable public value.",
    tags: ["Infrastructure", "Public finance", "Budgets", "Project delivery", "Accountability"],
    content: blocks(
      "Infrastructure announcements compress years of approvals, procurement and construction into one number. A useful reading separates money that is genuinely new from funds that were previously authorised or shifted between programmes.",
      [
        ["Follow the money through time", [
          "Budget authority allows an agency to commit funds, while actual spending may occur much later. Multi-year totals should be compared on the same time horizon and adjusted for inflation before they are described as increases or cuts.",
          "The funding source matters too. General taxation, borrowing, user charges and public-private structures distribute cost and risk differently. A project can be affordable to government while remaining expensive for users.",
        ]],
        ["Project readiness limits delivery", [
          "Land acquisition, environmental review, engineering capacity and local matching funds can delay otherwise funded work. A credible plan identifies which projects are ready, which approvals remain and how cost escalation will be managed.",
          "Maintenance deserves equal attention. New assets create future obligations, and deferred repairs can erase the value of a visible construction programme.",
        ]],
        ["Measure outcomes, not ribbon cuttings", [
          "Transport projects should report travel time, safety, reliability and access. Water and energy projects need service quality, resilience and affordability measures. Construction jobs are important but do not prove the asset will perform.",
          "The headline number is the start of scrutiny. The durable questions are what will be delivered, by when, for whom and with what evidence of benefit.",
        ]],
      ],
    ),
  },
  "election-polling-demographics-shift": {
    title: "How to Read Demographic Shifts in Election Polling",
    excerpt: "Subgroup polling can reveal change, but small samples, turnout assumptions and broad identity labels make precise conclusions much harder than headline comparisons suggest.",
    tags: ["Polling", "Elections", "Demographics", "Survey methods", "Political analysis"],
    content: blocks(
      "Claims that a demographic group is “moving” toward a candidate often rely on a small slice of one poll. The direction may be real, but the evidence should be tested across surveys, time and actual elections.",
      [
        ["Subgroups carry more uncertainty", [
          "A poll designed to represent the whole electorate may include only a few dozen respondents from a particular age, ethnic or regional group. The uncertainty for that subgroup is therefore much larger than the headline margin of error.",
          "Weighting can correct known differences between the sample and population, but it cannot create information that was never collected. Large swings in a small cross-tab should be treated as a signal to investigate, not a settled fact.",
        ]],
        ["Turnout models shape the result", [
          "Registered voters, likely voters and all adults are different populations. Small changes in assumptions about who will vote can move estimates even when underlying preferences are stable.",
          "Broad labels also hide variation. “Young voters” or “Latino voters” include people with different education, income, geography and political histories. A useful analysis shows those differences instead of treating identity as a single cause.",
        ]],
        ["Look for confirmation", [
          "Compare polling averages, survey methods, sample sizes and question wording. Then check whether voter registration, turnout and precinct results support the interpretation once an election occurs.",
          "Demographic change is usually gradual and uneven. The most credible conclusion states the size of the evidence, the uncertainty around it and what future data would confirm or weaken the claim.",
        ]],
      ],
    ),
  },
};

const categoryReferences = {
  Business: [
    { name: "SEC company filings", url: "https://www.sec.gov/edgar/search/" },
    { name: "U.S. Department of Justice releases", url: "https://www.justice.gov/news" },
  ],
  Politics: [
    { name: "Congress.gov legislation and records", url: "https://www.congress.gov/" },
    { name: "U.S. Supreme Court opinions", url: "https://www.supremecourt.gov/opinions/slipopinion/" },
  ],
  Finance: [
    { name: "Federal Reserve releases", url: "https://www.federalreserve.gov/newsevents.htm" },
    { name: "Bureau of Labor Statistics releases", url: "https://www.bls.gov/bls/newsrels.htm" },
  ],
  Markets: [
    { name: "Federal Reserve economic data", url: "https://fred.stlouisfed.org/" },
    { name: "U.S. Energy Information Administration", url: "https://www.eia.gov/" },
  ],
  Wealth: [
    { name: "SEC investor resources", url: "https://www.investor.gov/" },
    { name: "Federal Reserve economic data", url: "https://fred.stlouisfed.org/" },
  ],
  Tech: [
    { name: "NIST technology guidance", url: "https://www.nist.gov/news-events" },
    { name: "CISA cybersecurity advisories", url: "https://www.cisa.gov/news-events/cybersecurity-advisories" },
  ],
  Nature: [
    { name: "NASA science", url: "https://science.nasa.gov/" },
    { name: "NOAA research", url: "https://www.noaa.gov/research" },
  ],
  Culture: [
    { name: "UNESCO culture and heritage", url: "https://www.unesco.org/en/culture" },
    { name: "Library of Congress collections", url: "https://www.loc.gov/" },
  ],
};

const directReferences = {
  "apple-iphone-duo-foldable-samsung-market-2026": [
    { name: "Apple: iPhone Duo announcement", url: "https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/" },
  ],
  "google-15-billion-finland-ai-infrastructure-nuclear-power-deal": [
    { name: "Google: Finland investment announcement", url: "https://www.googlecloudpresscorner.com/2026-09-09-Google-Deepens-Commitment-to-Finland-with-Two-Year-EUR13-Billion-investment-in-AI-Infrastructure" },
  ],
  "us-venezuela-oil-deal-65-billion-barrels-2026": [
    { name: "White House: Venezuela oil agreement fact sheet", url: "https://www.whitehouse.gov/fact-sheets/2026/08/fact-sheet-president-donald-j-trump-announces-historic-oil-agreement-to-secure-american-energy-dominance-and-drive-venezuelas-economic-recovery/" },
    { name: "U.S. Energy Department: agreement follow-up", url: "https://www.energy.gov/articles/fact-sheet-delivering-president-trumps-promise-unleash-prosperity-and-security-united" },
  ],
  "trump-venezuela-65-billion-barrels-oil-deal-2026": [
    { name: "White House: Venezuela oil agreement fact sheet", url: "https://www.whitehouse.gov/fact-sheets/2026/08/fact-sheet-president-donald-j-trump-announces-historic-oil-agreement-to-secure-american-energy-dominance-and-drive-venezuelas-economic-recovery/" },
    { name: "Congressional Research Service: Venezuela oil context", url: "https://www.congress.gov/crs_external_products/IN/PDF/IN12637/IN12637.2.pdf" },
  ],
  "johnson-johnson-5-5bn-baby-powder-lawsuit-settlement-2026": [
    { name: "Johnson & Johnson settlement filing with the SEC", url: "https://www.sec.gov/Archives/edgar/data/200406/000020040626000155/exhibit991.htm" },
  ],
  "trump-anthropic-retaliation-pentagon-ruling-2026": [
    { name: "Anthropic v. Department of War court ruling", url: "https://caselaw.findlaw.com/court/us-dis-crt-n-d-cal/362881.html" },
  ],
  "novartis-del-desiran-muscle-disease-drug-trial-failure-2026": [
    { name: "Novartis: Phase III HARBOR study update", url: "https://www.novartis.com/news/media-releases/novartis-provides-update-delpacibart-etedesiran-del-desiran-phase-iii-harbor-study-treatment-myotonic-dystrophy-type-1-dm1" },
  ],
  "supreme-court-birthright-citizenship-trump-ruling-2026": [
    { name: "U.S. Supreme Court: Trump v. Barbara opinion", url: "https://www.supremecourt.gov/opinions/25pdf/25-365_new_5if6.pdf" },
    { name: "Supreme Court case docket", url: "https://www.supremecourt.gov/docket/docketfiles/html/public/25-365.html" },
  ],
  "anthony-fauci-contempt-of-congress-vote-rand-paul-covid-investigation": [
    { name: "Senate committee: contempt resolution announcement", url: "https://www.hsgac.senate.gov/media/reps/chairman-pauls-contempt-resolution-against-anthony-fauci-advances-out-of-committee/" },
    { name: "Senate committee minority response", url: "https://www.hsgac.senate.gov/media/dems/ahead-of-pending-contempt-vote-peters-warns-colleagues-resolution-lacks-legal-basis-and-would-weaken-congressional-oversight-and-constitutional-rights/" },
  ],
  "wesley-bell-defeats-cori-bush-missouri-democratic-primary-2026": [
    { name: "Missouri Secretary of State: 2026 primary results", url: "https://enr.sos.mo.gov/" },
  ],
  "claude-ai-public-chat-links-privacy-concerns-2026": [
    { name: "Anthropic Privacy Center: manage shared chats", url: "https://privacy.claude.com/en/articles/10593882-share-and-unshare-chats" },
  ],
  "nasa-roman-space-telescope-launch-2026": [
    { name: "NASA: Roman Space Telescope launch release", url: "https://www.nasa.gov/news-release/nasas-dark-universe-seeking-nancy-grace-roman-space-telescope-launches/" },
    { name: "NASA Science: Roman mission overview", url: "https://science.nasa.gov/mission/roman-space-telescope/" },
  ],
  "ebay-56-million-settlement-blogger-harassment-lawsuit-2026": [
    { name: "Associated Press: eBay settlement details", url: "https://apnews.com/article/d0886f1036e198f77669707db9fe1f2b" },
    { name: "U.S. Department of Justice releases", url: "https://www.justice.gov/news" },
  ],
  "britannia-financial-group-supports-soto-serpentine-public-art": [
    { name: "Serpentine: Jesús Rafael Soto public sculpture", url: "https://www.serpentinegalleries.org/about/press/serpentine-kickstarts-summer-programme-with-new-public-sculpture-by-jesus-rafael-soto/" },
  ],
  "trade-policy-shifts-asia": [
    { name: "OECD: globalisation is reconfiguring", url: "https://www.oecd.org/en/blogs/2026/05/globalisation-isnt-dead-its-reconfiguring-new-insights-from-oecd-trade-in-value-added-data.html" },
    { name: "OECD: global value chains are evolving", url: "https://www.oecd.org/en/blogs/2026/07/global-value-chains-why-international-production-is-evolving-not-fragmenting.html" },
  ],
  "art-market-digital-provenance": [
    { name: "UNESCO: due diligence for cultural objects offered online", url: "https://www.unesco.org/sites/default/files/medias/fichiers/2023/03/G20_Priority%201%20India%20CWG%20Background%20Paper.pdf" },
  ],
};

const categoryGuidance = {
  Business: "Check the filing or court record, then separate the announced obligation from what has already taken effect.",
  Politics: "Read the underlying law, order, judgment or certified result before relying on partisan summaries.",
  Finance: "Compare the time period, benchmark and assumptions; a market price can move before the economic effect is known.",
  Markets: "Distinguish a one-session reaction from a durable trend and identify the data that changed expectations.",
  Wealth: "Test the costs, liquidity, tax treatment and downside risk alongside the headline return or asset story.",
  Tech: "Separate an announcement from deployed performance, and check security, privacy, cost and adoption constraints.",
  Nature: "Separate observation from attribution and look for methods, baselines, uncertainty and peer review.",
  Culture: "Ask whose interpretation is presented, what history is missing and whether the originating community retains agency.",
};

const categorySourceChecks = {
  Business: "The most useful follow-up is the operative filing, judgment or company disclosure—not a promotional summary.",
  Politics: "For contested claims, compare the majority record, dissenting view and procedural status.",
  Finance: "Recheck official releases because rates, forecasts and market probabilities change quickly.",
  Markets: "Prices quoted here are time-specific; use current data before making a financial decision.",
  Wealth: "This is general analysis, not personal investment, tax or legal advice.",
  Tech: "Product capabilities and policies can change after publication; confirm the current documentation.",
  Nature: "Scientific confidence depends on the quality of the method and whether independent evidence agrees.",
  Culture: "Attribution and context are part of the evidence, not decorative background.",
};

function textBlocks(content) {
  if (typeof content === "string") return [content];
  if (!Array.isArray(content)) return [];
  return content.map((item) => typeof item === "string" ? item : item?.text).filter(Boolean);
}

function cleanSentence(value, limit = 235) {
  const clean = String(value || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (!clean) return "This essay explains the evidence, the limits of the claim and the questions worth following.";
  const sentence = clean.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() || clean;
  if (sentence.length <= limit) return sentence;
  const clipped = sentence.slice(0, limit + 1);
  const boundary = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, boundary > 80 ? boundary : limit).replace(/[,:;\s]+$/, "")}.`;
}

function normalizeContent(content) {
  const input = typeof content === "string" ? [{ type: "paragraph", text: content }] : Array.isArray(content) ? content : [];
  const output = [];
  const seen = new Set();

  for (let index = 0; index < input.length; index += 1) {
    const source = typeof input[index] === "string" ? { type: index === 0 ? "intro" : "paragraph", text: input[index] } : { ...input[index] };
    const text = String(source.text || "").replace(/\s+/g, " ").trim();
    if (!text && source.type !== "table") continue;
    if (text && seen.has(text)) continue;
    if (text) seen.add(text);

    if (/^What to Watch Next:?$/i.test(text)) {
      output.push({ type: "heading", level: 2, text: "What to watch next" });
      continue;
    }
    if (source.type === "heading" && /^How the story developed$/i.test(text)) {
      output.push({ type: "heading", level: 2, text: "What the record shows" });
      continue;
    }
    if (source.type === "heading" && /^Why it matters$/i.test(text)) {
      output.push({ type: "heading", level: 2, text: "What this changes—and what it does not" });
      continue;
    }
    output.push({ ...source, text });
  }
  return output;
}

function mergeReferences(slug, category) {
  const merged = [...(directReferences[slug] || []), ...(categoryReferences[category] || [])];
  return merged.filter((item, index, items) => items.findIndex((other) => other.url === item.url) === index).slice(0, 5);
}

function isEvergreen(article) {
  return Object.hasOwn(rewrites, article.slug) || /^(Can|Could|Do|Does|How|What|Why)\b/i.test(article.title);
}

const articles = [];
for (const filename of fs.readdirSync(articleDir).filter((name) => name.endsWith(".json"))) {
  const filePath = path.join(articleDir, filename);
  const article = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (protectedSlugs.has(article.slug)) {
    articles.push(article);
    continue;
  }
  if (rewrites[article.slug]) Object.assign(article, rewrites[article.slug]);

  article.content = normalizeContent(article.content).map((block) => ({
    ...block,
    text: typeof block.text === "string" ? block.text.replace(/former President Donald Trump/g, "President Donald Trump") : block.text,
  }));
  article.author = "The Quest for Profit";
  delete article.views;
  delete article.comments;
  article.tags = (article.tags || []).map((tag) => String(tag).replace(/^#/, "").trim()).filter(Boolean);
  article.articleType = isEvergreen(article) ? "Explainer" : "Analysis & context";
  article.dateModified = reviewedOn;

  const paragraphs = textBlocks(article.content);
  const wordCount = paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
  article.readTime = `${Math.max(2, Math.ceil(wordCount / 220))} min read`;
  const excerptSource = String(article.excerpt || "").includes("…") ? paragraphs[0] : article.excerpt;
  article.excerpt = cleanSentence(excerptSource || paragraphs[0] || article.title, 240);
  article.seoTitle = article.title;
  article.seoDescription = cleanSentence(article.excerpt, 158);
  article.seoImageAlt = `${article.title} — ${article.category} essay`;
  article.keyPoints = [
    article.excerpt,
    categoryGuidance[article.category],
    categorySourceChecks[article.category],
  ].filter(Boolean);
  article.referenceDesk = mergeReferences(article.slug, article.category);
  article.editorialNote = `Reviewed ${reviewedOn}. This post distinguishes reported facts from analysis and links to records readers can check. ${categorySourceChecks[article.category]}`;

  fs.writeFileSync(filePath, `${JSON.stringify(article, null, 2)}\n`);
  articles.push(article);
}

const sorted = [...articles].sort((a, b) => new Date(b.datePublished || b.date) - new Date(a.datePublished || a.date));
const index = sorted.map((article) => ({
  slug: article.slug,
  title: article.title,
  shortdescription: article.excerpt,
  category: article.category,
  author: article.author,
  date: article.date,
}));
fs.writeFileSync(path.join(root, "public", "data", "all-articles-index.json"), `${JSON.stringify(index, null, 2)}\n`);

const categoryDir = path.join(root, "public", "data", "categoryNews");
for (const category of Object.keys(categoryReferences)) {
  const categoryArticles = sorted
    .filter((article) => article.category === category)
    .map((article) => ({
      id: article.id,
      slug: article.slug,
      date: article.date,
      category: article.category,
      categories: [article.category],
      title: article.title,
      image: article.image,
      excerpt: article.excerpt,
      tags: article.tags,
      readTime: article.readTime,
      articleType: article.articleType,
      author: article.author,
    }));
  fs.writeFileSync(path.join(categoryDir, `${category.toLowerCase()}.json`), `${JSON.stringify(categoryArticles, null, 2)}\n`);
}

const tagCounts = new Map();
for (const article of articles) {
  for (const tag of article.tags || []) tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
}
const tags = [...tagCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 14).map(([tag]) => tag);
fs.writeFileSync(path.join(root, "public", "data", "tags.json"), `${JSON.stringify(tags, null, 2)}\n`);
fs.writeFileSync(path.join(root, "public", "data", "recentPosts.json"), `${JSON.stringify(index.slice(0, 5), null, 2)}\n`);

function normalizeLegacyBylines(value) {
  if (Array.isArray(value)) return value.map(normalizeLegacyBylines);
  if (!value || typeof value !== "object") return value;

  const result = {};
  for (const [key, nested] of Object.entries(value)) {
    if (key === "views" || key === "comments") continue;
    if (key === "author") {
      result[key] = "The Quest for Profit";
      continue;
    }
    if (key === "editor" && nested && typeof nested === "object") {
      result[key] = { name: "The Quest for Profit", role: "Independent editorial blog", posts: `${articles.length} essays` };
      continue;
    }
    if (key === "role" && /correspondent|reporter/i.test(String(nested))) {
      result[key] = "Editorial blog";
      continue;
    }
    result[key] = normalizeLegacyBylines(nested);
  }
  return result;
}

const homeDataDir = path.join(root, "public", "data", "homePage");
for (const filename of fs.readdirSync(homeDataDir).filter((name) => name.endsWith(".json"))) {
  const filePath = path.join(homeDataDir, filename);
  const normalized = normalizeLegacyBylines(JSON.parse(fs.readFileSync(filePath, "utf8")));
  fs.writeFileSync(filePath, `${JSON.stringify(normalized, null, 2)}\n`);
}

console.log(JSON.stringify({ articles: articles.length, substantialRewrites: Object.keys(rewrites).length, directSourceMaps: Object.keys(directReferences).length }, null, 2));
