'use client';

import {useState} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    code: string;
    language: string;
    caption?: string;
}

export default function CodeBlock({code, language, caption}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className="my-6">
            <div className="relative">
                <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 z-10 px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-md transition-all duration-200 flex items-center gap-1.5"
                    aria-label="Copy code to clipboard"
                >
                    {copied ? (
                        <>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                            <span>Copy</span>
                        </>
                    )}
                </button>

                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        borderRadius: '0.5rem',
                        padding: '1.5rem',
                        paddingTop: '3rem',
                        fontSize: '0.9rem',
                        margin: 0,
                    }}
                    showLineNumbers={true}
                >
                    {code}
                </SyntaxHighlighter>
            </div>

            {caption && (
                <p className="text-sm text-gray-500 mt-2 text-center italic">
                    {caption}
                </p>
            )}
        </div>
    );
}
