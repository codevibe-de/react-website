import ReactMarkdown from 'react-markdown';
import {TextBlock} from '@/types/TextBlock';

interface MarkdownContentProps {
    textBlock: TextBlock;
    className?: string;
}

export default function TextBlockComponent({textBlock, className = ""}: MarkdownContentProps) {
    return (
        <div className={className}>
            {textBlock.type === 'paragraph' && textBlock.content && (
                <p className="mb-4">
                    {textBlock.content}
                </p>
            )}
            {textBlock.type === 'markdown' && textBlock.content && (
                <div className="markdown prose max-w-none">
                    <ReactMarkdown>
                        {textBlock.content}
                    </ReactMarkdown>
                </div>
            )}
        </div>
    );
}