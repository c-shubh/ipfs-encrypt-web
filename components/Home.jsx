import {
  Box,
  Code,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Spinner,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchReadme = async () => {
      const response = await fetch("https://raw.githubusercontent.com/0xVikasRushi/ipfs-encrypt/main/README.md");
      const text = await response.text();
      setLoading(false);
      setMarkdown(text);
    };
    fetchReadme();
  });

  const headingSizes = ["xl", "lg", "md", "sm", "xs", "xs"];
  const handleHeadings = ({ level, children }) => {
    return (
      <Heading as={`h${level}`} size={headingSizes[level - 1]} mt={"1"} mb={"4"}>
        {children}
      </Heading>
    );
  };

  if (loading) {
    return (
      <Flex grow={"1"} alignItems={"center"} justifyContent={"center"}>
        <Spinner size="xl" />
      </Flex>
    );
  } else
    return (
      <Flex direction={"column"} grow={"1"} alignItems={"center"}>
        <Box mt="4" width={{ base: "90%", sm: "96", md: "85%" }}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              h1({ level, children }) {
                return (
                  <>
                    <Heading as={"h1"} size={headingSizes[level - 1]} mt={"4"} mb={"1"}>
                      {children}
                    </Heading>
                    <hr style={{ marginBottom: "12px", display: "block" }} />
                  </>
                );
              },
              h2({ level, children }) {
                return (
                  <>
                    <Heading as={"h2"} size={headingSizes[level - 1]} mt={"4"} mb={"1"}>
                      {children}
                    </Heading>
                    <hr style={{ marginBottom: "12px", display: "block" }} />
                  </>
                );
              },
              h3: handleHeadings,
              h4: handleHeadings,
              h5: handleHeadings,
              h6: handleHeadings,
              p({ ...props }) {
                return <Text mb={"2"} {...props} />;
              },
              img({ src, alt }) {
                if (/shields\.io/.test(src)) return <Image src={src} alt={alt} display={"inline"} />;
                else if (/github\.com\/.*\.png/.test(src))
                  return <Image src={src} alt={alt} display={"inline"} width="16" mr="2" />;
                else return <Image src={src} alt={alt} />;
              },
              a({ ...props }) {
                return <Link color="blue.400" {...props}></Link>;
              },
              ul({ ...props }) {
                return <UnorderedList mb={"2"} {...props} />;
              },
              li({ children }) {
                return <ListItem>{children}</ListItem>;
              },
              ol: OrderedList,
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <Box mt="4">
                    <SyntaxHighlighter style={materialDark} language={match[1]} PreTag={Box} {...props}>
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </Box>
                ) : (
                  <Code className={className} {...props}>
                    {children}
                  </Code>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </Box>
      </Flex>
    );
}
