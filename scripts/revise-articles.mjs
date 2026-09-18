import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const articleDir = path.join(root, "public", "data", "articles");

const blocks = (intro, sections) => [
  { type: "intro", text: intro },
  ...sections.flatMap(([heading, paragraphs]) => [
    { type: "heading", level: 2, text: heading },
    ...paragraphs.map((text) => ({ type: "paragraph", text })),
  ]),
];

const revisions = {
  "ai-drones-reforestation-2026": {
    title: "Can AI-Guided Drones Make Reforestation Scale? What the Evidence Must Show",
    excerpt: "Drone planting can map damaged land and place seeds quickly, but hectares restored—not seeds dropped—is the outcome that matters.",
    tags: ["Reforestation", "Drones", "Forest restoration", "Climate", "Biodiversity"],
    content: blocks(
      "AI-guided drones could make some restoration work faster and safer, especially on large or difficult terrain. They are not a substitute for ecological planning, local stewardship or long-term monitoring.",
      [
        ["What the technology actually does", [
          "A typical system combines aerial mapping, soil and slope analysis, seed-pod placement and follow-up imaging. The strongest use case is operational: drones can survey large areas, identify planting zones and reach sites that are expensive or dangerous for crews.",
          "Planting speed is an input, not proof of restoration. A credible project reports germination, survival and ecosystem recovery over several growing seasons. A headline seed count can conceal poor establishment when species, rainfall, soil or aftercare are wrong.",
        ]],
        ["The evidence readers should ask for", [
          "Useful reporting separates seeds dispersed, seedlings established and hectares moving toward a locally appropriate ecosystem. It should also name the species mix, the monitoring period, the baseline condition of the land and who independently checked the results.",
          "Restoration is not always tree planting. Grasslands, peatlands and naturally regenerating forests can be damaged by inappropriate planting. Local ecologists and communities need a role in deciding whether planting is the right intervention at all.",
        ]],
        ["Economics and accountability", [
          "Drone systems may reduce mapping and deployment costs, but the full budget includes nurseries, seed collection, permits, maintenance, fire protection and multi-year monitoring. Comparing projects on cost per surviving native plant is more meaningful than cost per seed dropped.",
          "The practical test is simple: does the project produce a resilient, diverse ecosystem and durable local benefits? Until survival data supports that outcome, billion-seed claims should be treated as ambition rather than achievement.",
        ]],
      ],
    ),
  },
  "climate-proof-luxury-real-estate-2026": {
    title: "What “Climate-Proof” Really Means in Luxury Real Estate",
    excerpt: "No property is climate-proof. Serious buyers compare physical hazards, insurance, infrastructure and adaptation plans before accepting a resilience premium.",
    tags: ["Real estate", "Climate risk", "Insurance", "Resilience", "Wealth"],
    content: blocks(
      "The phrase “climate-proof” is useful marketing and poor risk language. Heat, flood, fire, wind, water scarcity and insurance availability can change a property's value even when the building itself is well engineered.",
      [
        ["Start with the hazard, not the amenity list", [
          "A defensible assessment looks at present and projected hazards for the exact site. Buyers should compare public flood and fire maps with elevation, drainage, building materials, evacuation routes and the reliability of power and water systems.",
          "Regional averages are not enough. Two homes in the same postcode can have very different exposure because of slope, vegetation, shoreline change or the capacity of local infrastructure.",
        ]],
        ["Insurance is a price signal", [
          "Premiums, deductibles, exclusions and insurer withdrawal can reveal risks that a listing does not. A buyer should obtain written insurance indications before closing and test how ownership costs change under less favorable renewal terms.",
          "Resilience features also need scrutiny. Backup power, flood barriers and fire-resistant landscaping only work when maintained, tested and supported by community-scale systems.",
        ]],
        ["A practical due-diligence file", [
          "The strongest file includes an independent building assessment, hazard maps, loss history, insurance terms, utility resilience, local adaptation plans and likely capital expenditure. It should distinguish protections that reduce damage from claims that imply risk has disappeared.",
          "A resilience premium can be rational when evidence supports lower disruption and loss. It should never rest on the label “climate-proof” alone.",
        ]],
      ],
    ),
  },
  "family-offices-planetary-impact-2026": {
    title: "How Family Offices Can Measure Environmental Impact Without Greenwashing",
    excerpt: "Impact claims become useful when investors define the outcome, establish a baseline and report both additionality and trade-offs.",
    tags: ["Family offices", "Impact investing", "Measurement", "Climate", "Governance"],
    content: blocks(
      "Family offices can invest with a longer horizon than many institutions, but patient capital is not automatically impact capital. The investment case and the claimed social or environmental outcome need separate evidence.",
      [
        ["Define the outcome before choosing the metric", [
          "A credible mandate states the problem, the intended change and the people or ecosystems affected. It then chooses indicators that can show progress, rather than selecting attractive figures after an investment is made.",
          "Portfolio emissions, jobs created or hectares protected can be useful, but only with a clear baseline, consistent boundaries and an explanation of what would likely have happened without the investment.",
        ]],
        ["Governance matters as much as allocation", [
          "Investment committees should document who owns impact targets, how conflicts are handled and when weak performance triggers engagement or exit. Independent assurance can improve confidence when results influence compensation or public claims.",
          "Beneficiaries and local communities should not appear only as data points. Their feedback can reveal costs, displacement or implementation failures that financial reporting misses.",
        ]],
        ["Report the misses", [
          "Good impact reporting includes underperformance, adverse effects and methodological limits. It distinguishes modeled outcomes from measured ones and avoids presenting a company's total footprint as the investor's contribution.",
          "The useful question is not whether capital sounds purposeful. It is whether a repeatable chain of evidence connects the investment to a material, additional and durable outcome.",
        ]],
      ],
    ),
  },
  "global-museum-reform-restitution-2026": {
    title: "Museum Restitution: The Legal and Ethical Tests That Matter",
    excerpt: "Restitution decisions turn on provenance, the circumstances of removal, present law and the claims of source communities—not slogans alone.",
    tags: ["Museums", "Restitution", "Provenance", "Cultural heritage", "Ethics"],
    content: blocks(
      "Restitution debates are strongest when they begin with the object record: who made an item, how it left its community, who transferred it and what law or coercive power shaped each step.",
      [
        ["Provenance is the foundation", [
          "A museum should publish known ownership history, gaps in the chain, acquisition documents and the level of confidence attached to each claim. Missing records are not neutral when conflict, colonial rule or illicit excavation made documentation unlikely.",
          "Researchers also need to distinguish legal title from ethical legitimacy. An acquisition may have complied with the rules of its time while still reflecting unequal power or a sale made under duress.",
        ]],
        ["Possible remedies are broader than a binary choice", [
          "Return can be permanent, renewable, shared or tied to a long-term loan. Other remedies include joint stewardship, access agreements, conservation partnerships, digital records and support for institutions in the community of origin.",
          "The appropriate remedy depends on the claimant, the object's cultural role, conservation needs and the quality of the evidence. Communities should help define what repair means.",
        ]],
        ["What transparent decisions look like", [
          "A credible process names the decision-makers, publishes criteria, gives claimants access to records and explains the final reasoning. It also sets a correction path when new evidence appears.",
          "Restitution is not only about where an object sits. It is about whether institutions are prepared to make their records, assumptions and authority open to scrutiny.",
        ]],
      ],
    ),
  },
  "mariana-trench-new-species-2026": {
    title: "How Scientists Confirm a New Deep-Sea Species",
    excerpt: "A striking image from the Mariana region is only the start; a species claim requires specimens, comparison, taxonomy and a preserved record.",
    tags: ["Deep sea", "Taxonomy", "Mariana Trench", "Ocean science", "Biodiversity"],
    content: blocks(
      "Deep-sea expeditions routinely encounter unfamiliar organisms, but “never seen before” does not automatically mean “new species.” Formal identification is a careful, reviewable process.",
      [
        ["From observation to description", [
          "Researchers document location, depth, habitat and behavior, then compare physical features with museum collections and published descriptions. Genetic evidence can strengthen the case, especially when closely related species look similar.",
          "A formal description designates a type specimen, explains the diagnostic differences and places the material in a recognized collection so other scientists can inspect it.",
        ]],
        ["Why the deep sea complicates the work", [
          "Sampling at extreme depth is expensive and can damage fragile organisms. A remotely operated vehicle may record excellent video without collecting the anatomical material needed for taxonomy.",
          "Environmental DNA can reveal that an organism is present, but a sequence alone may not provide enough information to describe its form, ecology or relationship to known species.",
        ]],
        ["How to read discovery headlines", [
          "Look for a peer-reviewed description, the name of the collection holding the specimen, diagnostic evidence and a clear distinction between an observation and a confirmed species.",
          "The time between expedition and publication is a feature of careful science, not a delay to be hidden. Verification gives a discovery lasting value.",
        ]],
      ],
    ),
  },
  "metaverse-festivals-culture-2026": {
    title: "What Digital Festivals Can—and Cannot—Replace",
    excerpt: "Virtual events can widen access and enable new forms of performance, but they do not erase the social, economic or technical value of gathering in person.",
    tags: ["Digital culture", "Festivals", "Virtual events", "Accessibility", "Creative economy"],
    content: blocks(
      "Digital festivals work best as their own format, not as a lower-cost imitation of a physical event. Their strengths are reach, experimentation and participation across distance.",
      [
        ["Where the format adds value", [
          "Online stages can add captions, translation, flexible viewing, audience tools and experiences that would be impossible in a venue. They can also serve people limited by geography, disability, cost or caregiving responsibilities.",
          "The experience still depends on bandwidth, device access and interface design. A claim of global access should disclose those practical barriers.",
        ]],
        ["The economics are different", [
          "A virtual ticket may reduce travel and venue costs, but production, moderation, licensing, platform fees and artist compensation remain significant. Attendance figures should separate unique people from visits, replays and free sampling.",
          "Organizers also need clear rules for ownership, recording, data collection and harassment. A technically impressive space can still fail performers and audiences if governance is weak.",
        ]],
        ["Hybrid is a design choice, not a compromise", [
          "The most durable model may combine a strong local event with a deliberately different online program. Success should be judged through accessibility, audience satisfaction, artist outcomes and repeat participation—not novelty alone.",
          "Digital festivals can extend culture. They are most credible when they state which forms of connection they enable and which they cannot reproduce.",
        ]],
      ],
    ),
  },
  "plastic-eating-enzyme-ocean-clean-up-2026": {
    title: "Plastic-Eating Enzymes: What Works in the Lab and What Scaling Requires",
    excerpt: "Enzymes can help recycle selected plastics under controlled conditions; they are not a stand-alone method for cleaning mixed waste from the ocean.",
    tags: ["Plastic recycling", "Enzymes", "Circular economy", "Ocean pollution", "Materials science"],
    content: blocks(
      "Enzymatic recycling is promising because it can break some polymers into building blocks that may be reused. The promise is specific: controlled processing of compatible material, not an enzyme released into the sea.",
      [
        ["What the process can do", [
          "Engineered enzymes can accelerate the breakdown of polymers such as PET when temperature, particle size and contamination are controlled. The resulting molecules can potentially become feedstock for new material.",
          "Performance depends on the plastic. Packaging contains dyes, adhesives, multilayer films and additives that can obstruct the reaction or require separate treatment.",
        ]],
        ["The scale test", [
          "A commercial process must collect and sort enough suitable waste, run efficiently, recover useful output and compete with virgin material and other recycling routes. Energy, water and chemical inputs belong in the calculation.",
          "Life-cycle assessment should compare the whole system, including transport and pretreatment, rather than reporting only the speed of a laboratory reaction.",
        ]],
        ["Why prevention still comes first", [
          "Plastic dispersed in rivers and oceans is mixed, weathered and expensive to retrieve. Enzymes do not replace product redesign, reuse, collection or controls on waste leakage.",
          "The technology is most credible as one tool in a circular system: prevent avoidable material, collect what is used, sort it well and apply the recycling method that fits the polymer.",
        ]],
      ],
    ),
  },
  "vertical-forests-living-skyscrapers-2026": {
    title: "Do Vertical Forests Deliver Measurable Urban Benefits?",
    excerpt: "Tree-covered towers can provide shade, habitat and identity, but their performance depends on species, maintenance, water and the building's full carbon cost.",
    tags: ["Urban design", "Green buildings", "Biodiversity", "Architecture", "Climate adaptation"],
    content: blocks(
      "A planted facade is visible evidence of biophilic design, but a photograph cannot show whether the system delivers durable environmental benefits.",
      [
        ["Measure the building as a system", [
          "Useful assessment includes shade, surface temperature, habitat, irrigation demand, plant survival and maintenance. It also accounts for the structural material and equipment required to support soil, water and safe access at height.",
          "The relevant comparison is not a bare tower. It may be a lower-carbon building paired with street trees, parks or restored ground-level habitat.",
        ]],
        ["Maintenance determines performance", [
          "Species need to suit sun, wind, rainfall and root volume at each elevation. Irrigation failures, disease or inaccessible planters can turn a living facade into a costly replacement cycle.",
          "A credible plan identifies who maintains the planting, where water comes from, how runoff is handled and how performance will be reported after the launch photographs.",
        ]],
        ["Where the idea is strongest", [
          "Vertical planting can add value on dense sites with little ground space, particularly when it improves shade, resident comfort and habitat connectivity. It should complement, not displace, broader urban greening.",
          "The test is measured performance over time. Green appearance is a design feature; ecological benefit is an evidence claim.",
        ]],
      ],
    ),
  },
  "excluding-well-some": {
    title: "The High-Energy Economics of a Hummingbird's Day",
    category: "Nature",
    excerpt: "A hummingbird survives on a narrow energy budget, balancing nectar intake, insect protein, temperature and the cost of hovering flight.",
    tags: ["Hummingbirds", "Ecology", "Energy", "Pollination", "Wildlife"],
    content: blocks(
      "Hummingbirds offer a vivid lesson in biological budgeting: the energy gained from food must cover flight, temperature control, defense and reproduction without adding too much weight.",
      [
        ["Why hovering is expensive", [
          "Hovering lets a bird feed from flowers that cannot support its weight, but it demands rapid wing movement and continuous muscular work. Hummingbirds compensate by feeding frequently and choosing routes that reduce wasted travel.",
          "Nectar provides fast carbohydrate energy. Small insects and spiders supply protein and other nutrients that sugar water alone cannot provide.",
        ]],
        ["The role of torpor", [
          "At night or in cold conditions, some hummingbirds enter torpor, lowering body temperature and metabolic demand. The strategy conserves energy but delays escape and morning activity, so the decision carries risk.",
          "Flower timing, weather and competition can therefore affect survival even when habitat appears green and abundant.",
        ]],
        ["What helps in a garden", [
          "Native flowering plants with staggered bloom periods provide a more complete food system than a feeder alone. Avoiding pesticides helps preserve the insects that hummingbirds eat.",
          "A feeder, if used, needs a plain sugar-water solution and frequent cleaning. The most useful intervention is a diverse, pesticide-light habitat rather than a single source of calories.",
        ]],
      ],
    ),
  },
  "heared-opposite-around": {
    title: "Why Cultural Context Changes What an Audience Hears",
    excerpt: "Meaning is shaped by language, history, setting and power; the same sound or phrase can carry very different weight across audiences.",
    tags: ["Culture", "Language", "Media literacy", "Context", "Communication"],
    content: blocks(
      "Communication is not a package with one fixed meaning. Audiences interpret words, images and sounds through their own histories, expectations and relationship to the speaker.",
      [
        ["Context is part of the message", [
          "A phrase that feels playful within one group may sound hostile outside it. Translation can preserve literal words while losing status, irony or cultural reference.",
          "Medium matters too. A clipped video, a private joke and a formal speech invite different assumptions even when the sentence is identical.",
        ]],
        ["Listen for power and position", [
          "Meaning changes when the speaker controls resources, access or representation. Audiences may reasonably read a statement through the consequences that follow it, not only the speaker's stated intent.",
          "Good criticism therefore asks who is speaking, who is addressed, what history sits behind the exchange and who bears the cost of misunderstanding.",
        ]],
        ["A better reading practice", [
          "Before reacting, find the full exchange, identify the intended audience and compare interpretations from people with direct knowledge of the context. Separate what is visible from what is inferred.",
          "Cultural literacy does not require agreeing with every interpretation. It requires enough context to explain why reasonable people may hear the same message differently.",
        ]],
      ],
    ),
  },
  "incongruous-jeepers-jellyfish": {
    title: "Why Jellyfish Blooms Are So Difficult to Explain",
    category: "Nature",
    excerpt: "A crowded shoreline can reflect currents, temperature, food, predators or observation bias; one bloom does not prove a global trend.",
    tags: ["Jellyfish", "Oceans", "Marine ecology", "Climate", "Data"],
    content: blocks(
      "Reports of a jellyfish bloom often trigger a simple explanation. Marine systems rarely offer one: local weather, currents, food supply, fishing pressure and long-term warming can interact.",
      [
        ["What counts as a bloom", [
          "A bloom is a sharp increase in jellyfish abundance in a place and period. Wind and currents can concentrate animals near shore, making a population look larger without a comparable regional increase.",
          "Different species also respond to different conditions, so a single count cannot represent “jellyfish” as a whole.",
        ]],
        ["Why the data are uneven", [
          "Systematic long-term monitoring is limited in many regions. Beach reports and fishing encounters are valuable, but changes in tourism, reporting or gear can alter what people observe.",
          "Researchers look for repeated measurements, species identification and environmental data before attributing a trend to climate or ecosystem change.",
        ]],
        ["What a useful local report includes", [
          "Readers need the species, location, dates, sampling method and comparison with past seasons. Water temperature, currents and predator or prey changes can help explain the event.",
          "The responsible conclusion may be narrow: a bloom occurred here, under these conditions. That precision is more useful than turning every crowded beach into a planetary signal.",
        ]],
      ],
    ),
  },
  "timmediately-quail-was-inverse": {
    title: "How Seasonal Change Shapes Quail Habitat",
    category: "Nature",
    excerpt: "Quail need a patchwork of cover, seed, insects and open ground; land management succeeds when those needs overlap through the year.",
    tags: ["Quail", "Habitat", "Grasslands", "Conservation", "Wildlife"],
    content: blocks(
      "Quail are often described as birds of fields, but a uniform field is rarely enough. They rely on nearby patches that serve different needs as seasons and life stages change.",
      [
        ["A habitat mosaic", [
          "Nesting requires concealed ground cover, while chicks need insect-rich areas with enough open space to move. Adults also use shrubs or dense vegetation for escape and protection from weather.",
          "Food availability changes through the year, so seed-producing plants and healthy insect populations both matter.",
        ]],
        ["Why timing matters", [
          "Mowing, grazing, burning and herbicide use can improve or damage habitat depending on season, intensity and scale. Treating every patch at once removes the variety that quail need.",
          "Rotating management and leaving refuges can preserve cover while allowing renewal elsewhere.",
        ]],
        ["Measure response, not appearance", [
          "Good habitat can look untidy to people. Monitoring should track bird use, nesting success, plant structure and food availability rather than relying on a neat visual standard.",
          "The broader lesson is practical: wildlife management works through connected needs over time, not a single feature installed once.",
        ]],
      ],
    ),
  },
};

const titleFixes = {
  "capturing-essence-street-life": "Capturing the Essence of Street Life Through a Lens",
  "global-emissions-peak-2026-milestone": "Could Global Emissions Peak in 2026? The Indicators That Would Confirm It",
  "biodiversity-de-extinction-2026-success": "De-Extinction Claims in 2026: What Counts as a Scientific Success?",
};

const referenceDesks = {
  Business: [
    { name: "SEC company filings", url: "https://www.sec.gov/edgar/search/" },
    { name: "U.S. Department of Justice", url: "https://www.justice.gov/news" },
    { name: "Federal Trade Commission", url: "https://www.ftc.gov/news-events" },
  ],
  Politics: [
    { name: "Congress.gov", url: "https://www.congress.gov/" },
    { name: "U.S. Supreme Court opinions", url: "https://www.supremecourt.gov/opinions/slipopinion/" },
    { name: "Federal Election Commission data", url: "https://www.fec.gov/data/" },
  ],
  Finance: [
    { name: "Federal Reserve releases", url: "https://www.federalreserve.gov/newsevents.htm" },
    { name: "Bureau of Labor Statistics", url: "https://www.bls.gov/bls/newsrels.htm" },
    { name: "SEC company filings", url: "https://www.sec.gov/edgar/search/" },
  ],
  Markets: [
    { name: "Federal Reserve data", url: "https://fred.stlouisfed.org/" },
    { name: "U.S. Energy Information Administration", url: "https://www.eia.gov/" },
    { name: "SEC company filings", url: "https://www.sec.gov/edgar/search/" },
  ],
  Wealth: [
    { name: "SEC investor resources", url: "https://www.investor.gov/" },
    { name: "Federal Reserve data", url: "https://fred.stlouisfed.org/" },
    { name: "Internal Revenue Service", url: "https://www.irs.gov/newsroom" },
  ],
  Tech: [
    { name: "NIST technology guidance", url: "https://www.nist.gov/news-events" },
    { name: "CISA advisories", url: "https://www.cisa.gov/news-events/cybersecurity-advisories" },
    { name: "SEC company filings", url: "https://www.sec.gov/edgar/search/" },
  ],
  Nature: [
    { name: "NASA science", url: "https://science.nasa.gov/" },
    { name: "NOAA research", url: "https://www.noaa.gov/research" },
    { name: "UN Environment Programme", url: "https://www.unep.org/news-and-stories" },
  ],
  Culture: [
    { name: "UNESCO culture", url: "https://www.unesco.org/en/culture" },
    { name: "Smithsonian research", url: "https://www.si.edu/research" },
    { name: "Library of Congress", url: "https://www.loc.gov/" },
  ],
};

const categoryContext = {
  Business: "Watch the primary filing, the legal or regulatory record and the gap between an announcement and its operational effect.",
  Politics: "Read the underlying bill, order or judgment and separate the decision itself from partisan interpretation.",
  Finance: "Focus on the time period, benchmark and assumptions; market prices can move before the economic effect is clear.",
  Markets: "Distinguish a one-session move from a durable trend and check which data or event changed expectations.",
  Wealth: "Costs, liquidity, tax treatment and downside risk matter as much as the headline return or asset story.",
  Tech: "Separate a product claim from deployed performance, and check security, privacy, cost and adoption constraints.",
  Nature: "Separate observation from attribution and look for methods, baselines, uncertainty and peer review.",
  Culture: "Place the work or trend in its historical setting and identify whose interpretation and interests shape the account.",
};

function textBlocks(content) {
  if (typeof content === "string") return [content];
  if (!Array.isArray(content)) return [];
  return content
    .map((item) => (typeof item === "string" ? item : item?.text))
    .filter((text) => typeof text === "string" && text.trim().length > 0);
}

function firstSentence(text, max = 210) {
  const clean = String(text || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (!clean) return "This report explains the central claim, the evidence behind it and what readers should monitor next.";
  const sentence = clean.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() || clean;
  return sentence.length <= max ? sentence : `${sentence.slice(0, max - 1).trimEnd()}…`;
}

function normalizeContent(content) {
  if (typeof content === "string") return [{ type: "paragraph", text: content }];
  if (!Array.isArray(content)) return [];
  const seen = new Set();
  const result = [];

  for (const [index, item] of content.entries()) {
    const block = typeof item === "string"
      ? { type: index === 0 ? "intro" : "paragraph", text: item }
      : { ...item };

    if (!block.text && block.type !== "table") continue;
    const key = block.text?.replace(/\s+/g, " ").trim();
    if (key && seen.has(key)) continue;
    if (key) seen.add(key);
    result.push(block);
  }

  if (result.length > 7 && !result.some((item) => item.type === "heading")) {
    const withHeadings = [];
    result.forEach((item, index) => {
      if (index === 3) withHeadings.push({ type: "heading", level: 2, text: "How the story developed" });
      if (index === 7) withHeadings.push({ type: "heading", level: 2, text: "Why it matters" });
      withHeadings.push(item);
    });
    return withHeadings;
  }
  return result;
}

function isoDate(displayDate) {
  const parsed = new Date(displayDate);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10);
}

const filenames = fs.readdirSync(articleDir).filter((name) => name.endsWith(".json"));
const changed = [];

for (const filename of filenames) {
  const filePath = path.join(articleDir, filename);
  const article = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const revision = revisions[article.slug];
  if (revision) Object.assign(article, revision);
  if (titleFixes[article.slug]) article.title = titleFixes[article.slug];

  article.content = normalizeContent(article.content);
  const paragraphs = textBlocks(article.content);
  article.excerpt = firstSentence(article.excerpt || paragraphs[0] || article.title, 240);
  article.seoTitle = article.seoTitle || article.title;
  article.seoDescription = firstSentence(article.seoDescription || article.excerpt, 160);
  article.seoImageAlt = article.seoImageAlt || `${article.title} — ${article.category} report`;
  article.datePublished = article.datePublished || isoDate(article.date);
  article.dateModified = "2026-09-16";

  const wordCount = paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
  article.readTime = `${Math.max(2, Math.ceil(wordCount / 220))} min read`;
  article.articleType = /\b(how|why|what|can|guide|preview|debate|influence|future|rise)\b/i.test(article.title)
    ? "Explainer"
    : "News analysis";
  article.keyPoints = [
    firstSentence(article.excerpt || paragraphs[0]),
    firstSentence(paragraphs.find((text) => firstSentence(text) !== firstSentence(article.excerpt)) || paragraphs[1] || categoryContext[article.category]),
    categoryContext[article.category] || "Check the primary record and the stated uncertainty before drawing a conclusion.",
  ].filter((item, index, items) => item && items.indexOf(item) === index).slice(0, 3);
  article.referenceDesk = referenceDesks[article.category] || [];
  article.editorialNote = "This article was revised for clarity, context and evidence discipline. Reference links lead to primary records and public data readers can use to check the subject further.";

  fs.writeFileSync(filePath, `${JSON.stringify(article, null, 2)}\n`);
  changed.push(article);
}

const indexPath = path.join(root, "public", "data", "all-articles-index.json");
const index = changed
  .map((article) => ({
    slug: article.slug,
    title: article.title,
    shortdescription: article.excerpt,
    category: article.category,
    author: typeof article.author === "string" ? article.author : article.author?.name || "Editorial Desk",
    date: article.date,
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));
fs.writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`);

const categoryDir = path.join(root, "public", "data", "categoryNews");
for (const category of Object.keys(referenceDesks)) {
  const categoryArticles = changed
    .filter((article) => article.category === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((article) => ({
      id: article.id,
      slug: article.slug,
      date: article.date,
      category: article.category,
      categories: [article.category],
      title: article.title,
      image: article.image,
      excerpt: article.excerpt,
      tags: article.tags || [],
      readTime: article.readTime,
      articleType: article.articleType,
      author: typeof article.author === "string" ? article.author : article.author?.name || "Editorial Desk",
    }));
  fs.writeFileSync(path.join(categoryDir, `${category.toLowerCase()}.json`), `${JSON.stringify(categoryArticles, null, 2)}\n`);
}

const categoriesPath = path.join(root, "public", "data", "categories.json");
if (fs.existsSync(categoriesPath)) {
  const categories = JSON.parse(fs.readFileSync(categoriesPath, "utf8"));
  for (const [slug, metadata] of Object.entries(categories)) {
    metadata.count = changed.filter((article) => article.category.toLowerCase() === slug).length;
  }
  fs.writeFileSync(categoriesPath, `${JSON.stringify(categories, null, 2)}\n`);
}

console.log(`Revised ${changed.length} articles; replaced ${Object.keys(revisions).length} low-quality drafts.`);
