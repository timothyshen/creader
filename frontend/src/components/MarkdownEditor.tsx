'use client';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';
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
    }, [setValue]);

    return (
        <div className="w-full h-[500px]">
            <MDEditor
                value={value}
                onChange={onChange}
                className="w-full h-full"
                preview="edit"
            />
        </div>
    );
}

export default MarkdownEditor;