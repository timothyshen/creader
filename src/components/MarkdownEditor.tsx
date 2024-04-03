'use client';
import dynamic from 'next/dynamic';
import { useState, useCallback } from 'react';
import type { ContextStore } from '@uiw/react-md-editor';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });
type OnChange = (value?: string, event?: React.ChangeEvent<HTMLTextAreaElement>, state?: ContextStore) => void;

const MarkdownEditor = () => {
    const [value, setValue] = useState('**Hello world!!!**');

    const onChange = useCallback<OnChange>((val) => {
        setValue(val || '');
    }, []);
    return (
        <main className=" w-auto mx-auto p-4">
            <MDEditor style={{ width: '100%' }} value={value} onChange={onChange} />
        </main>
    );
}

export default MarkdownEditor;