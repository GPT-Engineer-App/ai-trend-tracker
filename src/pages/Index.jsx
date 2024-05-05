import { Container, Heading, VStack, Text, Box, Link, Image } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const newsItems = [
  {
    title: "Exploring the Latest AI Security Advances",
    summary: "A deep dive into the newest security protocols for AI and how they can help protect your systems.",
    link: "#",
  },
  {
    title: "Vulnerabilities in Popular LLMs Uncovered",
    summary: "Recent studies have shown several vulnerabilities in widely used large language models.",
    link: "#",
  },
  {
    title: "AI in Cybersecurity: The New Frontier",
    summary: "How artificial intelligence is being used to enhance cybersecurity measures across industries.",
    link: "#",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading mb={4}>AI / LLM Security and Vulnerabilities</Heading>
          <Text fontSize="lg">Stay updated with the latest trends and news in the world of AI security.</Text>
          <Image src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHNlY3VyaXR5fGVufDB8fHx8MTcxNDg4NTQyOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Security" borderRadius="lg" mt={6} />
        </Box>
        {newsItems.map((item, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg" width="full">
            <Heading fontSize="xl">{item.title}</Heading>
            <Text mt={4}>{item.summary}</Text>
            <Link href={item.link} color="teal.500" isExternal>
              Read more <FaExternalLinkAlt />
            </Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
