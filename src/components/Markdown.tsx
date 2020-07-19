import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  content: string
}

const Markdown: FunctionComponent<MarkdownProps> = ({ content }: MarkdownProps) => (
  <ReactMarkdown source={content} />
);

export default Markdown;
