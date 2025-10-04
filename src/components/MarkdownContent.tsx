import ReactMarkdown from 'react-markdown';
import {TextBlock} from '@/types/TextBlock';

interface MarkdownContentProps {
    body?: TextBlock;
    className?: string;
}

export default function MarkdownContent({body, className = ""}: MarkdownContentProps) {
    if (!body) {
        return null;
    }
    return (
        <div className={className}>
            {body.map((block, i) => {
                if (block.type === 'paragraph' && block.content) {
                    return <p key={i} className="mb-4">
                        {block.content}
                    </p>
                }
                if (block.type === 'markdown' && block.content) {
                    return <div className="markdown prose max-w-none" key={i}>
                        <ReactMarkdown>
                            {block.content}
                        </ReactMarkdown>
                    </div>
                }
                return null;
            })}
        </div>
    );
}