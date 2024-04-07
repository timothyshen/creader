// MarkdownRenderer.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';

// Define the props interface
interface MarkdownRendererProps {
    content: string;
}

// The MarkdownRenderer component
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    return (
        <ReactMarkdown
            components={{
                h1: ({ node, ...props }) => <h1 className='text-2xl font-bold' {...props} />,
                h2: ({ node, ...props }) => <h2 className='text-xl font-bold' {...props} />,
                h3: ({ node, ...props }) => <h3 className='text-lg font-bold' {...props} />,
                h4: ({ node, ...props }) => <h4 className='text-base font-bold' {...props} />,
                p: ({ node, ...props }) => <p className='text-base' {...props} />,
                a: ({ node, ...props }) => <a className='text-blue-400 underline' {...props} />,
                ul: ({ node, ...props }) => <ul className='list-disc list-inside' {...props} />,
                ol: ({ node, ...props }) => <ol className='list-decimal list-inside' {...props} />,
                li: ({ node, ...props }) => <li className='text-base' {...props} />,
                blockquote: ({ node, ...props }) => <blockquote className='border-l-2 pl-2' {...props} />,
            }}>
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
