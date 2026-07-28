import fs from 'fs';
import path from 'path';

export interface ArticleIndexItem {
    slug: string;
    title: string;
    shortdescription: string;
    category: string;
    author: string;
    date: string;
}

export function getSortedArticles(): ArticleIndexItem[] {
    const indexPath = path.join(process.cwd(), 'public/data/all-articles-index.json');
    if (!fs.existsSync(indexPath)) return [];
    const indexData: ArticleIndexItem[] = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

    // Sort by date descending
    return indexData.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
    });
}

export function getFullArticle(slug: string) {
    try {
        const articlePath = path.join(process.cwd(), `public/data/articles/${slug}.json`);
        if (!fs.existsSync(articlePath)) return null;
        return JSON.parse(fs.readFileSync(articlePath, 'utf-8'));
    } catch (e) {
        return null;
    }
}

export function mapToHeroStructure(fullArticle: any) {
    if (!fullArticle) return null;
    
    // Get primary summary
    let excerpt = fullArticle.excerpt || fullArticle.shortdescription || "";
    let excerptPart2 = fullArticle.excerptPart2 || "";
    
    // If excerptPart2 is missing, try to find a unique second paragraph from content
    if (!excerptPart2 && fullArticle.content && Array.isArray(fullArticle.content)) {
        // Find a paragraph that isn't the same as our primary excerpt
        const candidate = fullArticle.content.find((c: any) => 
            (c.type === 'paragraph' || c.type === 'intro') && 
            c.text !== excerpt && 
            c.text !== fullArticle.shortdescription
        );
        if (candidate) {
            excerptPart2 = candidate.text;
        }
    }

    // Extract first letter for drop cap from column 1
    let firstLetter = fullArticle.firstLetter || "T";
    if (!fullArticle.firstLetter && excerpt.length > 0) {
        firstLetter = excerpt[0];
        excerpt = excerpt.substring(1);
    }

    return {
        id: fullArticle.id || "hero",
        image: fullArticle.image,
        author: typeof fullArticle.author === 'string' ? fullArticle.author : fullArticle.author?.name,
        category: fullArticle.category,
        date: fullArticle.date,
        views: fullArticle.views || "10k",
        readTime: fullArticle.readTime || "5 Mins",
        title: fullArticle.title,
        slug: fullArticle.slug,
        excerpt: excerpt,
        excerptPart2: excerptPart2,
        firstLetter: firstLetter
    };
}

export function mapToSidebarItem(fullArticle: any) {
    if (!fullArticle) return null;
    return {
        id: fullArticle.id || fullArticle.slug,
        image: fullArticle.image,
        author: typeof fullArticle.author === 'string' ? fullArticle.author : fullArticle.author?.name,
        category: fullArticle.category,
        date: fullArticle.date,
        title: fullArticle.title,
        slug: fullArticle.slug
    };
}

export function mapToColHeroStructure(fullArticle: any) {
    if (!fullArticle) return null;
    
    let intro = fullArticle.excerpt || fullArticle.shortdescription || "";
    let contentLeft = fullArticle.content?.[0]?.text || intro;
    let contentRight = fullArticle.content?.[1]?.text || fullArticle.excerptPart2 || "";
    
    return {
        category: fullArticle.category,
        title: fullArticle.title,
        intro: intro,
        author: typeof fullArticle.author === 'string' ? fullArticle.author : fullArticle.author?.name,
        role: "Editor",
        date: fullArticle.date,
        contentLeft: contentLeft,
        contentRight: contentRight,
        image: fullArticle.image,
        slug: fullArticle.slug
    };
}

export function getAutomatedHomeData() {
    const sorted = getSortedArticles();
    
    // Fetch full data for top articles and merge with index data (to get shortdescription)
    const fullArticles = sorted.slice(0, 70).map(item => {
        const full = getFullArticle(item.slug);
        if (!full) return null;
        return { ...full, shortdescription: item.shortdescription };
    }).filter(Boolean);
    
    if (fullArticles.length === 0) return null;

    // 1. Hero (0)
    const hero = mapToHeroStructure(fullArticles[0]);
    
    // 2. Sidebar (1, 2, 3)
    const sidebar = fullArticles.slice(1, 4).map(mapToSidebarItem);
    
    // 3. Module 7 (4, 5)
    const module7Articles = fullArticles.slice(4, 6).map(a => ({
        category: a.category,
        title: a.title,
        excerpt: a.excerpt || a.shortdescription,
        slug: a.slug
    }));
    
    // 4. Module 10 (6, 7, 8, 9)
    const module10Posts = fullArticles.slice(6, 10).map(a => ({
        title: a.title,
        date: a.date,
        image: a.image,
        category: a.category,
        slug: a.slug
    }));

    // 5. Hot Peoples (10, 11)
    const hotPeoples = fullArticles.slice(10, 12).map(a => ({
        category: a.category,
        slug: a.slug,
        title: a.title,
        image: a.image
    }));

    // 6. Sidebar Module items (12, 13, 14)
    const sidebarModuleItems = fullArticles.slice(12, 15).map(a => ({
        id: a.id || a.slug,
        date: a.date,
        title: a.title,
        slug: a.slug,
        category: a.category
    }));

    // 7. Sidebar Module articleList (15, 16, 17)
    const sidebarModuleList = fullArticles.slice(15, 18).map(a => ({
        category: a.category,
        title: a.title,
        excerpt: a.excerpt || a.shortdescription,
        slug: a.slug
    }));

    // 8. Text News (18, 19, 20, 21)
    const textNews = fullArticles.slice(18, 22).map(a => ({
        id: a.id || a.slug,
        categories: [a.category],
        title: a.title,
        slug: a.slug
    }));

    // 9. Module 6 (22 to 29)
    const module6Articles = fullArticles.slice(22, 30).map(a => ({
        id: a.id || a.slug,
        author: typeof a.author === 'string' ? a.author : a.author?.name,
        date: a.date,
        title: a.title,
        slug: a.slug,
        image: a.image
    }));

    // 10. Three Col - Hero (30)
    const threeColHero = mapToColHeroStructure(fullArticles[30]);

    // 11. Three Col - SportNews (31 to 34)
    const threeColSportNews = fullArticles.slice(31, 35).map(a => ({
        category: a.category,
        title: a.title,
        excerpt: a.excerpt || a.shortdescription,
        slug: a.slug
    }));

    // 12. Three Col - Coronavirus (35 to 38)
    const threeColTimeline = fullArticles.slice(35, 39).map(a => ({
        time: a.date,
        title: a.title,
        slug: a.slug,
        category: a.category
    }));

    // 13. Three Col - Culture (39 to 41)
    const threeColCulture = fullArticles.slice(39, 42).map(a => ({
        category: a.category,
        title: a.title,
        image: a.image,
        excerpt: a.excerpt || a.shortdescription,
        slug: a.slug
    }));

    // 14. Three Col - Module15 (42 to 45)
    const threeColModule15 = fullArticles.slice(42, 46).map(a => ({
        slug: a.slug,
        title: a.title,
        image: a.image
    }));

    // 15. Three Col - HotWeek (46 to 48)
    const threeColHotWeek = fullArticles.slice(46, 49).map(a => ({
        category: a.category,
        title: a.title,
        image: a.image,
        slug: a.slug
    }));

    // 16. News V2 - Col1 (49 to 53)
    const newsV2Col1 = fullArticles.slice(49, 54).map(a => ({
        category: a.category,
        title: a.title,
        excerpt: a.excerpt || a.shortdescription,
        slug: a.slug
    }));

    // 17. News V2 - Col2 Hero (54)
    const newsV2Col2Hero = mapToColHeroStructure(fullArticles[54]);

    // 18. News V2 - Col2 Bullets (55 to 57)
    const newsV2Col2Bullets = fullArticles.slice(55, 58).map(a => ({
        title: a.title,
        category: a.category,
        slug: a.slug
    }));

    // 19. News V2 - Col3 Hero (58)
    const newsV2Col3Hero = mapToColHeroStructure(fullArticles[58]);

    // 20. News Five Col (59 to 66)
    const newsFiveCol2 = fullArticles.slice(59, 61).map(a => ({
        category: a.category,
        title: a.title,
        excerpt: a.excerpt || a.shortdescription,
        slug: a.slug
    }));
    const newsFiveCol3 = fullArticles.slice(61, 63).map(a => ({
        category: a.category,
        title: a.title,
        excerpt: a.excerpt || a.shortdescription,
        slug: a.slug
    }));
    const newsFiveCol4 = fullArticles.slice(63, 65).map(a => ({
        category: a.category,
        title: a.title,
        excerpt: a.excerpt || a.shortdescription,
        slug: a.slug
    }));
    const newsFiveCol5 = fullArticles.slice(65, 67).map(a => ({
        category: a.category,
        title: a.title,
        excerpt: a.excerpt || a.shortdescription,
        slug: a.slug
    }));

    return {
        textNews: textNews,
        featureHome: {
            hero,
            sidebar,
            module7: {
                id: "m7",
                title: "Global Updates",
                subtitle: "LATEST NEWS",
                articles: module7Articles
            },
            module10: {
                id: "m10",
                title: "Expert Analysis",
                subtitle: "TRENDING NOW",
                editor: {
                    name: "Jessica Wu",
                    posts: "310 Posts",
                    bio: "Jessica spans the gap between complex algorithms and business outcomes, focusing on the real-world deployment of Agentic AI.",
                    image: "/images/authors/jessica.jpg",
                    social: [
                        { platform: "twitter", url: "#" },
                        { platform: "instagram", url: "https://www.instagram.com/thequestforprofit/" },
                        { platform: "youtube", url: "#" }
                    ]
                },
                recentPosts: module10Posts
            },
            hotPeoples
        },
        sidebarModule: {
            moduleTitle: { red: "Market", rest: "ALERTS" },
            description: "Critical updates and real-time market movement summaries for the active trader.",
            items: sidebarModuleItems,
            articleList: {
                title: { red: "Policy", rest: "BRIEFINGS" },
                articles: sidebarModuleList
            }
        },
        module6: {
            title: { red: "Wealth", rest: "INSIGHTS" },
            articles: module6Articles
        },
        threeCol: {
            hero: threeColHero,
            sportNews: {
                title: { red: "Market", rest: "MOVERS & SHAKERS" },
                articles: threeColSportNews
            },
            coronavirus: {
                title: { red: "Latest", rest: "HEADLINES" },
                description: "Stay updated with real-time alerts from our global newsroom tracking the most significant economic shifts.",
                timeline: threeColTimeline
            },
            culture: {
                title: { red: "Business", rest: "INTELLIGENCE" },
                articles: threeColCulture
            },
            module15: {
                title: { red: "Wealth", rest: "MANAGEMENT" },
                description: "Strategies for capital preservation and high-alpha returns in a volatile global economy.",
                articles: threeColModule15
            },
            hotWeek: {
                title: { red: "Top", rest: "STORIES" },
                articles: threeColHotWeek
            }
        },
        newsV2: {
            sectionHeader: {
                title: "Finance & Economics",
                subtitle: "Global wealth management and monetary policy analysis."
            },
            col1: {
                title: { red: "Finance", rest: "WATCH" },
                articles: newsV2Col1
            },
            col2: {
                hero: newsV2Col2Hero,
                bullets: newsV2Col2Bullets
            },
            col3: {
                hero: newsV2Col3Hero
            }
        },
        newsFiveCol: {
            sectionHeader: {
                title: "Technology & Innovation",
                subtitle: "Tracking the cutting edge of human progress."
            },
            columns: [
                {
                    type: "image",
                    image: fullArticles[67]?.image || "/images/news/tech-5.1.jpg"
                },
                {
                    type: "articles",
                    header: { red: "MEDIA", rest: "ACQUISITION" },
                    articles: newsFiveCol2
                },
                {
                    type: "articles",
                    header: { red: "SAFE", rest: "HAVENS" },
                    articles: newsFiveCol3
                },
                {
                    type: "articles",
                    header: { red: "NATURE", rest: "FRONTIERS" },
                    articles: newsFiveCol4
                },
                {
                    type: "articles",
                    header: { red: "CLIMATE", rest: "RESToration" },
                    articles: newsFiveCol5
                }
            ]
        }
    };
}
