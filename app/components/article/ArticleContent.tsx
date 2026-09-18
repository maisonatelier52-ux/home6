import React from 'react';
import Image from 'next/image';

interface ContentBlock {
    type: string;
    text?: string;
    hasDropCap?: boolean;
    level?: number;
    image?: string;
    headers?: string[];
    rows?: string[][];
}

interface ArticleBodyProps {
    image: string;
    content: Array<ContentBlock | string> | string;
    imageAlt?: string;
}

export default function ArticleBody({ image, content, imageAlt }: ArticleBodyProps) {
    return (
        <article className="max-w-3xl font-serif text-[18px] leading-[1.85] text-slate-800 md:text-[19px]">
            {/* Feature Image */}
            <div className="w-full mb-8">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                        src={image}
                        alt={imageAlt || "Article Feature"}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Content Rendering */}
            {typeof content === 'string' ? (
                <div 
                    className="[&>p]:mb-6 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:tracking-tight [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:font-serif [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:bg-gray-50 [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-900 [&>blockquote]:text-xl [&>blockquote]:tracking-wide"
                    dangerouslySetInnerHTML={{ __html: content }} 
                />
            ) : (
                content.map((block, index) => {
                    if (typeof block === 'string') {
                        return (
                            <p key={index} className={index === 0 ? "mb-8 text-xl font-semibold leading-8 text-slate-950" : "mb-7"}>
                                {block}
                            </p>
                        );
                    }
                    switch (block.type) {
                        case 'intro':
                            return (
                                <p key={index} className="mb-9 border-l-4 border-[#a61f2d] pl-5 font-serif text-xl font-semibold leading-8 text-slate-950 md:text-2xl md:leading-9">
                                    {block.text}
                                </p>
                            );

                        case 'paragraph':
                            return (
                                <div key={index} className="mb-7">
                                    {block.hasDropCap ? (
                                        <p>
                                            <span className="float-left mr-3 mt-2 font-serif text-6xl font-bold leading-[0.8] text-[#a61f2d]">
                                                {block.text?.charAt(0)}
                                            </span>
                                            <span dangerouslySetInnerHTML={{ __html: block.text?.substring(1) || '' }} />
                                        </p>
                                    ) : (
                                        <p dangerouslySetInnerHTML={{ __html: block.text || '' }} />
                                    )}
                                    {block.image && (
                                        <div className="relative w-full h-auto min-h-[250px] md:h-[400px] my-8 rounded-sm overflow-hidden shadow-sm">
                                            <Image
                                                src={block.image}
                                                alt="Article section image"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            );

                        case 'heading':
                            const Level = `h${block.level || 2}` as React.ElementType;
                            const sizes: Record<number, string> = {
                                1: "text-3xl md:text-4xl",
                                2: "text-2xl md:text-3xl",
                                3: "text-xl md:text-2xl",
                                4: "text-lg md:text-xl",
                                5: "text-base md:text-lg",
                                6: "text-sm md:text-base"
                            };
                            
                            return (
                                <Level key={index} className={`${sizes[block.level || 2]} mb-5 mt-12 border-t border-slate-300 pt-5 font-serif font-bold leading-tight tracking-tight text-slate-950`}>
                                    {block.text}
                                </Level>
                            );

                        case 'quote':
                            return (
                                <blockquote key={index} className="my-10 border-y border-slate-300 py-7 font-serif text-xl font-semibold italic leading-8 text-slate-900 md:text-2xl md:leading-9">
                                    <span className="mr-2 font-serif text-4xl leading-none text-[#a61f2d]">“</span>
                                    {block.text}
                                    <span className="ml-2 font-serif text-4xl leading-none text-[#a61f2d]">”</span>
                                </blockquote>
                            );

                        case 'table':
                            return (
                                <div key={index} className="my-10 overflow-x-auto">
                                    <table className="w-full text-left border-collapse font-sans text-sm">
                                        {block.headers && (
                                            <thead className="border-b-2 border-gray-900">
                                                <tr>
                                                    {block.headers.map((header, i) => (
                                                        <th key={i} className={`py-3 ${i === 0 ? 'pr-6' : 'px-6'} text-gray-500 font-semibold uppercase tracking-wider`}>
                                                            {header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                        )}
                                        <tbody className="divide-y divide-gray-200 border-b-2 border-gray-900">
                                            {block.rows?.map((row, rowIndex) => (
                                                <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                                                    {row.map((cell, cellIndex) => (
                                                        <td 
                                                            key={cellIndex} 
                                                            className={`py-3 ${cellIndex === 0 ? 'pr-6 font-semibold text-gray-900 w-1/3' : 'px-6 text-gray-800 leading-relaxed'}`}
                                                        >
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );

                        default:
                            return null;
                    }
                })
            )}
        </article>
    );
}
