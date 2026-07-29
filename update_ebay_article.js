const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'public', 'data');
const articlesDir = path.join(dataDir, 'articles');
const indexFile = path.join(dataDir, 'all-articles-index.json');
const sitemapFile = path.join(__dirname, 'public', 'sitemap-articles.xml');

const oldSlug = 'britannia-financial-group-supports-soto-serpentine-public-art';
const newSlug = 'ebay-56-million-settlement-blogger-harassment-lawsuit-2026';

const newArticle = {
    "id": "biz-new-ebay",
    "slug": newSlug,
    "title": "eBay to Pay $56 Million to Settle Lawsuit Over Cyberstalking of EcommerceBytes Publishers",
    "category": "Business",
    "date": "July 29, 2026",
    "author": "Business Desk",
    "views": "0k",
    "readTime": "8 Mins",
    "comments": 0,
    "image": "/images/news/eBay Agrees to $56 Million Settlement Over Harassment of Bloggers.webp",
    "excerpt": "eBay and three former executives have agreed to pay $55.7 million to settle a lawsuit brought by the publishers of EcommerceBytes, ending a years-long legal battle over a shocking cyberstalking and harassment campaign.",
    "tags": [
        "eBay",
        "EcommerceBytes",
        "cyberstalking",
        "harassment lawsuit",
        "Devin Wenig",
        "corporate governance",
        "settlement",
        "business news",
        "legal",
        "Massachusetts"
    ],
    "content": [
        "eBay has agreed to pay $55.7 million (approximately $56 million) to settle a lawsuit brought by David and Ina Steiner, the Massachusetts couple behind the independent e-commerce newsletter EcommerceBytes, bringing an end to one of the most bizarre and damaging corporate scandals in Silicon Valley's recent history. The settlement resolves claims that former eBay employees and senior executives orchestrated an extensive campaign of cyberstalking, intimidation, and harassment against the couple in retaliation for their critical reporting on the online marketplace. The agreement concludes nearly five years of civil litigation and follows separate criminal prosecutions that sent several former eBay employees to prison.",
        "The lawsuit stemmed from events that began in 2019, when executives within eBay allegedly became increasingly frustrated with the Steiners' reporting on EcommerceBytes, a long-running publication that covers developments in online commerce and frequently criticized eBay's policies and leadership. According to court filings, members of eBay's corporate security team launched an intimidation campaign intended to silence the couple and discourage further reporting. Federal prosecutors later described the operation as a coordinated effort to terrorize the Steiners rather than simply respond to negative media coverage.",
        "The harassment campaign included a series of disturbing acts that attracted national attention after becoming public. The Steiners received live cockroaches, fly larvae, spiders, a bloody pig Halloween mask, a funeral wreath, and a book about coping with the death of a spouse. They were also subjected to anonymous threatening messages, online harassment, unwanted deliveries, false online advertisements, and physical surveillance outside their Massachusetts home. Investigators concluded that the campaign escalated from online intimidation into real-world stalking designed to create fear and emotional distress. The extraordinary nature of the harassment shocked both law enforcement officials and the broader business community.",
        "Under the settlement, eBay will pay $46.15 million directly to the Steiners while also contributing $6 million to charitable organizations. Former eBay Chief Executive Devin Wenig will personally pay $2 million to the couple and donate an additional $1 million to a First Amendment-focused charity established in Ina Steiner's name. Former Senior Vice President Wendy Jones will contribute $500,000, while former Chief Communications Officer Steve Wymer will pay $50,000. Collectively, the agreement totals $55.7 million, making it one of the largest settlements arising from corporate harassment and cyberstalking allegations.",
        "Although Wenig was never criminally charged, the lawsuit alleged that messages exchanged among senior executives created an environment that encouraged aggressive action against the newsletter's publishers. Court filings referenced communications in which executives discussed wanting to \"take down\" the Steiners after critical articles were published. Wenig has consistently denied directing or authorizing any criminal conduct, maintaining that he had no knowledge of the illegal harassment campaign carried out by members of eBay's security department. The settlement resolves the civil claims without requiring any admission of personal wrongdoing by the former executives.",
        "The case has already produced significant criminal consequences. Seven former eBay employees pleaded guilty to federal charges related to cyberstalking, conspiracy, witness tampering, and obstruction of justice after prosecutors uncovered evidence of the coordinated campaign. Several received prison sentences, while others were ordered to perform community service and pay restitution. In a separate criminal proceeding, eBay itself agreed to pay a $3 million criminal penalty after admitting responsibility for the actions of its employees and acknowledging failures in corporate oversight. Those criminal cases laid the foundation for the subsequent civil lawsuit that has now been resolved through the latest settlement.",
        "As part of the agreement, eBay issued a strong public statement condemning the conduct of the former employees involved in the harassment campaign. The company said the actions were completely inconsistent with its values and emphasized that significant changes have been made to its leadership, governance, ethics policies, and internal compliance systems since the events occurred. Current executives reiterated that the misconduct represented the actions of a small group of former employees rather than the culture of the company as it exists today. The absence of a confidentiality clause also allows the Steiners to continue speaking publicly about their experiences and the importance of protecting independent journalism.",
        "Corporate governance experts say the case has become a powerful example of how leadership culture and executive accountability can affect organizations far beyond financial performance. The scandal prompted companies across Silicon Valley to review internal reporting procedures, whistleblower protections, executive oversight, and corporate security operations. It also highlighted the legal risks businesses face when employees misuse corporate resources to retaliate against journalists, critics, or customers. Legal scholars believe the settlement may influence future litigation involving online harassment and corporate misconduct, particularly where executive communications are alleged to have contributed to unlawful behavior.",
        "For David and Ina Steiner, the settlement marks the conclusion of a deeply traumatic chapter that began with criticism of a major technology company and escalated into years of fear, legal proceedings, and public scrutiny. While the financial compensation is substantial, the couple has repeatedly stated that their primary goal was accountability and ensuring that similar conduct is never repeated. For eBay, resolving the lawsuit removes one of the most damaging legal controversies in its history, but the case will likely remain a lasting reminder of the importance of ethical leadership, responsible corporate governance, and respect for press freedom in the digital age."
    ]
};

// 1. Write the new article JSON
fs.writeFileSync(path.join(articlesDir, `${newSlug}.json`), JSON.stringify(newArticle, null, 4));
console.log('Created new article JSON file');

// 2. Remove old article JSON
const oldPath = path.join(articlesDir, `${oldSlug}.json`);
if (fs.existsSync(oldPath)) {
    fs.unlinkSync(oldPath);
    console.log('Deleted old article JSON file');
}

// 3. Update all-articles-index.json
let indexData = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
const oldIndex = indexData.findIndex(a => a.slug === oldSlug);
const newIndexItem = {
    slug: newSlug,
    title: newArticle.title,
    shortdescription: newArticle.excerpt,
    category: newArticle.category,
    author: newArticle.author,
    date: newArticle.date
};

if (oldIndex !== -1) {
    indexData[oldIndex] = newIndexItem;
    console.log('Replaced old article in index');
} else {
    indexData.unshift(newIndexItem);
    console.log('Added new article to index');
}
fs.writeFileSync(indexFile, JSON.stringify(indexData, null, 4));

// 4. Update sitemap-articles.xml
if (fs.existsSync(sitemapFile)) {
    let sitemapData = fs.readFileSync(sitemapFile, 'utf8');
    sitemapData = sitemapData.replace(new RegExp(`/${oldSlug}</loc>`, 'g'), `/${newSlug}</loc>`);
    fs.writeFileSync(sitemapFile, sitemapData);
    console.log('Updated sitemap-articles.xml');
}
