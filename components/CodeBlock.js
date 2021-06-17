import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
const CodeBlock = ({ language, value }) => (
    <div className="border border-gray-300 dark:border-gray-600 rounded mb-8">
        <div className="flex items-center space-x-2 w-full py-3 pl-3 border-b border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-800 rounded rounded-b-none">
            <span className="w-3 h-3 inline-block rounded-full border bg-red-300 border-red-400 dark:bg-red-500 dark:border-red-600"></span>
            <span className="w-3 h-3 inline-block rounded-full border bg-yellow-300 border-yellow-400 dark:bg-yellow-400 dark:border-yellow-500"></span>
            <span className="w-3 h-3 inline-block rounded-full border bg-green-300 border-green-400 dark:bg-green-500 dark:border-green-600"></span>
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
