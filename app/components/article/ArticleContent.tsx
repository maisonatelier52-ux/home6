import React from 'react';
import Image from 'next/image';

interface ContentBlock {
    type: string;
    text?: string;
    hasDropCap?: boolean;
    level?: number;
}

interface ArticleBodyProps {
    image: string;
    content: ContentBlock[] | string;
}

export default function ArticleBody({ image, content }: ArticleBodyProps) {
    return (
        <div className="flex flex-col gap-6 text-gray-700 font-serif leading-relaxed text-[17px]">
            {/* Feature Image */}
            <div className="w-full mb-2">
                <div className="relative w-full h-auto min-h-[300px] md:h-[400px]">
                    <Image
                        src={image}
                        alt="Article Feature"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Content Rendering */}
            {typeof content === 'string' ? (
                <div 
                    className="[&>p]:mb-2 [&>p]:text-sm [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-4 [&>h2]:mb-2 [&>h2]:font-serif [&>blockquote]:border-l-4 [&>blockquote]:border-gray-200 [&>blockquote]:pl-4 [&>blockquote]:md:pl-6 [&>blockquote]:py-1 [&>blockquote]:my-6 [&>blockquote]:italic [&>blockquote]:text-gray-900 [&>blockquote]:font-bold [&>blockquote]:text-base [&>blockquote]:md:text-lg"
                    dangerouslySetInnerHTML={{ __html: content }} 
                />
            ) : (
                content.map((block, index) => {
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
                })
            )}
        </div>
    );
}
