'use client';
import dynamic from 'next/dynamic';
import { useState, useCallback } from 'react';
import type { ContextStore } from '@uiw/react-md-editor';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });
type OnChange = (value?: string, event?: React.ChangeEvent<HTMLTextAreaElement>, state?: ContextStore) => void;

type MarkdownEditorProps = {
    setValue: (value: string) => void;
    value: string | undefined;
}

const MarkdownEditor = ({ setValue, value }: MarkdownEditorProps) => {

    const onChange = useCallback<OnChange>((val) => {
        setValue(val || '');
    }, []);

    return (
        <main className="w-full h-full mx-auto">
            <MDEditor style={{ width: '100%', minHeight: '700px' }} value={value} onChange={onChange} height={700} />
        </main>
    );
}

export default MarkdownEditor;