import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
const CodeBlock = ({ language, value }) => (
    <SyntaxHighlighter
        language={language}
        useInlineStyles={false}
        codeTagProps={{ style: { whiteSpace: 'pre' } }}>
        {value}
    </SyntaxHighlighter>
)

export default CodeBlock
