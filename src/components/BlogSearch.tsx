'use client';

import {useMemo, useState} from 'react';
import {BlogListItem} from '@/types/BlogPost';
import BlogCard from '@/components/BlogCard';

interface BlogSearchProps {
    posts: BlogListItem[];
}

/**
 * Client component that renders the blog post grid with live search filtering.
 * Filters posts by title, excerpt and tags based on the entered search term.
 */
export default function BlogSearch({posts}: BlogSearchProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = useMemo(() => {
        if (!searchTerm) return posts;

        const searchParts = searchTerm.split(/\s+/).map(p => p.trim().toLowerCase()).filter(p => p.length > 0);

        return posts.filter(post => {
            const searchableText = [
                post.title.toLowerCase(),
                (post.excerpt || '').toLowerCase(),
                ...(post.tags ?? []).map(t => t.toLowerCase()),
            ];

            return searchParts.every(part =>
                searchableText.some(text => text.includes(part))
            );
        });
    }, [posts, searchTerm]);

    return (
        <>
            <div className="px-4 pb-8">
                <div className="flex flex-col items-center">
                    <div className="relative max-w-md w-full mb-2">
                        <input
                            type="text"
                            placeholder="Stichwortsuche..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="text-center search-input w-full px-4 py-2 pr-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        )}
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                        Sucht nach Stichworten im Titel oder Tags
                    </p>
                </div>
            </div>

            <div className="bg-gray-50 py-6">
                {posts.length === 0 && !searchTerm ? (
                    <div className="text-center py-24 px-4">
                        <div className="text-6xl mb-6">✍️</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Bald gibt es Neues zu lesen
                        </h2>
                        <p className="text-gray-500 text-lg max-w-md mx-auto">
                            Wir arbeiten gerade an spannenden Artikeln rund um Programmiersprachen und Entwicklungswerkzeuge. Schau bald wieder vorbei!
                        </p>
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Kein Beitrag gefunden. Versuchen Sie andere Suchbegriffe.</p>
                    </div>
                ) : (
                    <div className="grid px-6 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map(post => (
                            <BlogCard key={post.slug} post={post}/>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}