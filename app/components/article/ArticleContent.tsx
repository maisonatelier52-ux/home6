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
        <div className="flex flex-col gap-6 text-gray-700 font-serif leading-relaxed text-[17px]">
            {/* Feature Image */}
            <div className="w-full mb-2">
                <img
                    src={image}
                    alt="Article Feature"
                    className="w-full h-auto md:h-[400px] object-cover"
                />
            </div>

            {/* Content Rendering */}
            {content.map((block, index) => {
                switch (block.type) {
                    case 'intro':
                        return (
                            <p key={index} className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-2">
                                {block.text}
                            </p>
                        );

                    case 'paragraph':
                        if (block.hasDropCap) {
                            return (
                                <p key={index} className="mb-2 text-sm">
                                    <span className="float-left text-[30px] md:text-[50px] leading-[45px] md:leading-[70px] font-bold text-black mr-3 mt-[-5px] md:mt-[-15px] font-serif">
                                        {block.text?.charAt(0)}
                                    </span>
                                    {block.text?.substring(1)}
                                </p>
                            );
                        }
                        return <p key={index} className="mb-2 text-sm">{block.text}</p>;

                    case 'heading':
                        const Level = `h${block.level || 2}` as React.ElementType;
                        const sizes: Record<number, string> = {
                            1: "text-2xl md:text-3xl",
                            2: "text-xl md:text-2xl",
                            3: "text-xl md:text-2xl",
                            4: "text-lg md:text-xl",
                            5: "text-base md:text-lg",
                            6: "text-sm md:text-base"
                        };
                        return (
                            <Level key={index} className={`${sizes[block.level || 2]} font-bold text-gray-900 mt-0 mb-0 font-serif`}>
                                {block.text}
                            </Level>
                        );

                    case 'quote':
                        return (
                            <blockquote key={index} className="border-l-4 border-gray-200 pl-4 md:pl-6 py-1 my-6 italic text-gray-900 font-bold text-base md:text-lg">
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
