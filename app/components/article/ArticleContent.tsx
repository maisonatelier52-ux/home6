import React from 'react';

interface ContentBlock {
    type: string;
    text?: string;
    hasDropCap?: boolean;
    level?: number;
}

interface ArticleBodyProps {
    image: string;
    content: ContentBlock[];
}

export default function ArticleBody({ image, content }: ArticleBodyProps) {
    return (
        <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 font-serif leading-relaxed text-[17px]">
            {/* Feature Image */}
            <div className="w-full mb-4">
                <img
                    src={image}
                    alt="Article Feature"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Content Rendering */}
            {content.map((block, index) => {
                switch (block.type) {
                    case 'intro':
                        return (
                            <p key={index} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-snug mb-2">
                                {block.text}
                            </p>
                        );

                    case 'paragraph':
                        if (block.hasDropCap) {
                            return (
                                <p key={index} className="mb-2">
                                    <span className="float-left text-[85px] line-height-[60px] font-bold text-black dark:text-white mr-3 mt-[-15px] font-serif">
                                        {block.text?.charAt(0)}
                                    </span>
                                    {block.text?.substring(1)}
                                </p>
                            );
                        }
                        return <p key={index} className="mb-2">{block.text}</p>;

                    case 'heading':
                        const Level = `h${block.level || 2}` as React.ElementType;
                        const sizes: Record<number, string> = {
                            1: "text-4xl",
                            2: "text-3xl",
                            3: "text-2xl",
                            4: "text-xl",
                            5: "text-lg",
                            6: "text-base"
                        };
                        return (
                            <Level key={index} className={`${sizes[block.level || 2]} font-bold text-gray-900 dark:text-gray-100 mt-6 mb-2 font-serif`}>
                                {block.text}
                            </Level>
                        );

                    case 'quote':
                        return (
                            <blockquote key={index} className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-1 my-6 italic text-gray-900 dark:text-gray-100 font-bold text-lg">
                                {block.text}
                            </blockquote>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}
