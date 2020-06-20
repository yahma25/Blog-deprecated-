import React, { FunctionComponent } from 'react';
import marked from 'marked';

type MarkdownProps = {
  children?: string
};

const Markdown: FunctionComponent = ({ children }: MarkdownProps) => (
  <span dangerouslySetInnerHTML={{ __html: marked(children) }} />
);

export default Markdown;
