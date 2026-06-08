import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "building-rag-systems-production",
    title: "Building RAG Systems for Production",
    excerpt:
      "A practical guide to designing and deploying Retrieval-Augmented Generation systems that scale reliably in production environments.",
    content: `
## Introduction

Retrieval-Augmented Generation (RAG) has become the go-to architecture for building LLM applications that need access to domain-specific knowledge. In this post, I share practical lessons from building production RAG systems.

## Key Considerations

### 1. Chunking Strategy
The way you split your documents has the biggest impact on retrieval quality. Consider semantic chunking over fixed-size splits.

### 2. Embedding Model Selection
Choose your embedding model based on your domain. General-purpose models work for most cases, but domain-specific fine-tuning can improve recall by 20-30%.

### 3. Vector Store Architecture
For production workloads, consider:
- **Indexing strategy**: HNSW vs IVF based on your scale
- **Metadata filtering**: Pre-filter before vector search to reduce noise
- **Hybrid search**: Combine dense and sparse retrieval

## Conclusion

Building production RAG systems requires careful attention to chunking, retrieval, and evaluation. Start simple, measure rigorously, and iterate based on real user queries.
    `.trim(),
    publishedAt: "2025-03-15",
    tags: ["RAG", "LLMs", "Production", "Vector Databases"],
    category: "LLM Engineering",
    readingTime: 8,
    featured: true,
  },
  {
    slug: "agentic-ai-langgraph",
    title: "Agentic AI with LangGraph: From Concept to Implementation",
    excerpt:
      "How to design and implement multi-agent AI systems using LangGraph's state machine architecture for complex real-world tasks.",
    content: `
## What is Agentic AI?

Agentic AI refers to AI systems that can autonomously plan, execute, and adapt to accomplish complex tasks. Unlike simple chatbots, agentic systems make decisions, use tools, and coordinate multiple specialized components.

## Why LangGraph?

LangGraph provides a graph-based framework for building stateful, multi-agent applications. Key advantages:
- **State management**: Built-in state tracking across agent interactions
- **Controllability**: Define explicit control flows between agents
- **Persistence**: Checkpoint and resume complex workflows

## Implementation Pattern

A typical agentic system with LangGraph involves:
1. Define your state schema
2. Create specialized agent nodes
3. Define edges and conditional routing
4. Add human-in-the-loop checkpoints

## Lessons from Production

Building agentic systems for production taught me that reliability matters more than capability. A system that works 95% of the time is more valuable than one that works 99% of the time on easy cases but fails catastrophically on edge cases.
    `.trim(),
    publishedAt: "2025-02-20",
    tags: ["Agentic AI", "LangGraph", "Multi-Agent", "LLMs"],
    category: "Agentic AI",
    readingTime: 10,
    featured: true,
  },
  {
    slug: "computer-vision-edge-deployment",
    title: "Deploying Computer Vision Models at the Edge",
    excerpt:
      "Strategies for optimizing and deploying CV models on resource-constrained devices without sacrificing accuracy.",
    content: `
## The Edge Deployment Challenge

Deploying computer vision models at the edge presents unique challenges: limited compute, memory constraints, and real-time requirements. Here's how to navigate them.

## Model Optimization Techniques

### Quantization
Converting FP32 weights to INT8 can reduce model size by 4x with minimal accuracy loss.

### Pruning
Remove redundant connections to reduce computation without retraining from scratch.

### Knowledge Distillation
Train a smaller "student" model to mimic a larger "teacher" model's behavior.

## Framework Selection

- **ONNX Runtime**: Great portability across platforms
- **TensorRT**: Best performance on NVIDIA hardware
- **TFLite**: Optimized for mobile and embedded devices

## Real-World Results

In our OMR grading project, model optimization reduced inference time from 200ms to 35ms on a Raspberry Pi 4, enabling real-time grading in resource-constrained environments.
    `.trim(),
    publishedAt: "2025-01-10",
    tags: ["Computer Vision", "Edge Computing", "Model Optimization", "Deployment"],
    category: "Computer Vision",
    readingTime: 7,
  },
  {
    slug: "nlp-low-resource-languages",
    title: "NLP for Low-Resource Languages: Egyptian Arabic Case Study",
    excerpt:
      "Challenges and solutions for building NLP systems for dialects and low-resource languages, with lessons from Egyptian Arabic.",
    content: `
## The Low-Resource Challenge

Most NLP breakthroughs focus on English and a handful of high-resource languages. Building systems for dialects like Egyptian Arabic requires creative approaches.

## Data Collection Strategies

### 1. Leveraging Existing Resources
Start with Modern Standard Arabic resources and adapt using transfer learning techniques.

### 2. Data Augmentation
Use back-translation, synonym replacement, and dialect-specific transformations to expand limited datasets.

### 3. Community-Sourced Data
Collaborate with native speakers for annotation and validation.

## Technical Approaches

- **Fine-tuning multilingual models**: Start with mBERT or XLM-R and fine-tune on dialect data
- **Whisper fine-tuning**: For speech, OpenAI's Whisper provides a strong starting point
- **Custom tokenizers**: Standard tokenizers often fragment Arabic text poorly

## Results and Impact

Our Egyptian Arabic speech recognition system achieved a 30% WER improvement over the base Whisper model, demonstrating the value of targeted fine-tuning.
    `.trim(),
    publishedAt: "2024-11-05",
    tags: ["NLP", "Arabic", "Low-Resource", "Speech Recognition"],
    category: "NLP",
    readingTime: 9,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  blogPosts.forEach((post) => categories.add(post.category));
  return Array.from(categories).sort();
}
