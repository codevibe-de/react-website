import ReactMarkdown from 'react-markdown';
import { TextBlock } from '@/types/TextBlock';

interface TextBlockRendererProps {
    block: TextBlock;
    className?: string;
}

export default function TextBlockRenderer({ block, className = '' }: TextBlockRendererProps) {
    const combinedClasses = `${block.classes || ''} ${className}`.trim();

    if (block.type === 'paragraph' && block.content) {
        return (
            <p className={combinedClasses || 'mb-4'}>
                {block.content}
            </p>
        );
    }

    if (block.type === 'list' && block.content) {
        const items = block.content.split('\n').filter(item => item.trim());
        return (
            <ul className={combinedClasses || 'list-disc pl-5 mb-4 space-y-1'}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    }

    if (block.type === 'markdown' && block.content) {
        return (
            <div className={combinedClasses || 'markdown prose max-w-none'}>
                <ReactMarkdown>{block.content}</ReactMarkdown>
            </div>
        );
    }

    return null;
}
