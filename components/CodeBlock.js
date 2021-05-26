import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
const CodeBlock = ({ language, value }) => (
    <div className="border border-code-gray rounded mb-8">
        <div className="flex items-center space-x-2 w-full py-3 pl-3 border-b border-code-gray bg-gray-50 rounded rounded-b-none">
            <span className="w-3 h-3 inline-block rounded-full border bg-red-300 border-red-400"></span>
            <span className="w-3 h-3 inline-block rounded-full border bg-yellow-300 border-yellow-400"></span>
            <span className="w-3 h-3 inline-block rounded-full border bg-green-300 border-green-400"></span>
        </div>
        <SyntaxHighlighter
            language={language}
            useInlineStyles={false}
            showLineNumbers={true}
            codeTagProps={{ style: { whiteSpace: 'pre' } }}>
            {value}
        </SyntaxHighlighter>
    </div>
)

export default CodeBlock
