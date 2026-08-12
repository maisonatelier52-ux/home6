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
    content: ContentBlock[] | string;
}

export default function ArticleBody({ image, content }: ArticleBodyProps) {
    return (
        <div className="max-w-3xl text-gray-800 font-serif leading-[1.8] text-[17px] md:text-lg">
            {/* Feature Image */}
            <div className="w-full mb-8">
                <div className="relative w-full h-auto min-h-[300px] md:h-[450px] rounded-sm overflow-hidden shadow-sm">
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
                    className="[&>p]:mb-6 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:tracking-tight [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:font-serif [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:bg-gray-50 [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-900 [&>blockquote]:text-xl [&>blockquote]:tracking-wide"
                    dangerouslySetInnerHTML={{ __html: content }} 
                />
            ) : (
                content.map((block, index) => {
                    switch (block.type) {
                        case 'intro':
                            return (
                                <p key={index} className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed mb-8 tracking-tight">
                                    {block.text}
                                </p>
                            );

                        case 'paragraph':
                            return (
                                <div key={index} className="mb-6">
                                    {block.hasDropCap ? (
                                        <p>
                                            <span className="float-left text-6xl leading-[0.8] font-serif font-bold text-gray-900 mr-4 mt-2">
                                                {block.text?.charAt(0)}
                                            </span>
                                            {block.text?.substring(1)}
                                        </p>
                                    ) : (
                                        <p className='text-[16px]'>{block.text}</p>
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
                                2: "text-lg md:text-2xl",
                                3: "text-xl md:text-xl",
                                4: "text-lg md:text-xl",
                                5: "text-base md:text-lg",
                                6: "text-sm md:text-base"
                            };
                            
                            // Calculate heading index
                            const headingIndex = Array.isArray(content) 
                                ? content.slice(0, index + 1).filter(b => b.type === 'heading').length 
                                : 0;
                                
                            return (
                                <Level key={index} className={`${sizes[block.level || 2]} font-medium text-black tracking-tight mt-10 mb-4 font-serif flex items-center gap-3`}>
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#B22222] text-white text-base font-sans shrink-0">
                                        {headingIndex}
                                    </span>
                                    <span>{block.text}</span>
                                </Level>
                            );

                        case 'quote':
                            return (
                                <blockquote key={index} className="border-l-4 border-red-300 bg-gray-900 pl-6 pr-4 py-6 my-10 italic text-white text-xl md:text-2xl tracking-wide rounded-r-sm font-semibold shadow-sm">
                                    <span className="text-4xl text-red-500 leading-none mr-2 font-serif">"</span>
                                    {block.text}
                                    <span className="text-4xl text-red-500 leading-none ml-2 font-serif">"</span>
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
        </div>
    );
}
