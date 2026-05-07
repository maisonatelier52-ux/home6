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

export function getAutomatedHomeData() {
    const sorted = getSortedArticles();
    
    // Fetch full data for top articles and merge with index data (to get shortdescription)
    const fullArticles = sorted.slice(0, 25).map(item => {
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

    return {
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
        }
    };
}
