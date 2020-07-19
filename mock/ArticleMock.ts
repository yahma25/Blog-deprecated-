const articleMock = `
# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

# React Syntax Highlighter

> “And here we are” — **another library**

We do not intend to invent the bicycle, right? :)

\`\`\`
$ npm install --save react-syntax-highlighter
\`\`\`

Before we set the library we need to choose between two popular solutions for syntax highlighting — [Prism](https://prismjs.com/) or [Highlight.js](https://highlightjs.org/). They both work well, however **highlight.js does not support styling for JSX**, which was the main reason I switched to Prism.

Whatever “highlighter” we choose, configuring it in our \`<ReactMarkdown />\` is pretty straightforward.

<iframe src="https://medium.com/media/8ad7f8cb0eb2d5e324c606a57ff91991" allowfullscreen="" frameborder="0" height="193" width="680" title="react-markdown-renderers-code.jsx" class="s t u ew ai" scrolling="auto" style="box-sizing: inherit; position: absolute; top: 0px; left: 0px; width: 680px; height: 193px;"></iframe>

\`CodeBlock\` is a file responsible for dealing with our \`<pre />\` HTML tags. To learn more about \`renderers\` property's settings, jump straight to [the library's documentation 🙌🏼](https://github.com/rexxars/react-markdown#node-types).

## React Syntax Highlighter using Prism

<iframe src="https://medium.com/media/6932e165c7ecd33dd9fc36f78e15f8aa" allowfullscreen="" frameborder="0" height="611" width="680" title="react-syntax-highlighter-using-prism.jsx" class="s t u ew ai" scrolling="auto" style="box-sizing: inherit; position: absolute; top: 0px; left: 0px; width: 680px; height: 611px;"></iframe>

CodeBlock.js

Note how we import \`SyntaxHighlighter\` from the library. It's done differently if we use Highlight.js. To see the full list of languages supported by Prism's extension click [here](https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD) and for the list of available themes check this [page](https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD).

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`;

export default articleMock;
