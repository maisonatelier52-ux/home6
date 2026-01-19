export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        "name": "The Quest for Profit",
        "alternateName": "TQFP",
        "url": "https://www.thequestforprofit.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.thequestforprofit.com/images/logo-TQFP.svg"
        },
        "description": "Your ultimate destination for business, finance, and wealth management insights. High-authority news for the modern investor.",
        "sameAs": [
            "https://twitter.com/tqfp",
            "https://facebook.com/tqfp",
            "https://linkedin.com/company/tqfp"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Editorial",
            "email": "editorial@tqfp.com"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "TQFP",
        "url": "https://www.thequestforprofit.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.thequestforprofit.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
