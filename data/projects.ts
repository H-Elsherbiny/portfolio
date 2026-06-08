import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-ev-assistant",
    title: "AI EV Assistant",
    shortDescription:
      "An intelligent assistant for electric vehicle owners using RAG and LangGraph, providing real-time charging station info, route optimization, and maintenance advice.",
    fullDescription:
      "A comprehensive AI-powered assistant designed for electric vehicle owners. Built with LangGraph for agentic workflows and RAG for knowledge retrieval, it provides personalized recommendations for charging stations, route planning, maintenance schedules, and energy cost optimization.",
    category: "AI Agents & LLMs",
    techStack: [
      "Python",
      "LangGraph",
      "LangChain",
      "OpenAI",
      "FastAPI",
      "RAG",
      "ChromaDB",
      "Streamlit",
    ],
    featured: true,
    githubUrl: "https://github.com/H-Elsherbiny/ai-ev-assistant",
    problemStatement:
      "EV owners face fragmented information about charging stations, range anxiety, and complex maintenance schedules. No single intelligent assistant existed that could handle multi-turn conversations while accessing real-time data.",
    solution:
      "Built an agentic AI system using LangGraph that orchestrates multiple specialized agents — a charging station finder, route optimizer, and maintenance advisor — unified through a conversational interface with RAG for domain-specific knowledge retrieval.",
    keyFeatures: [
      "Multi-agent orchestration with LangGraph state machines",
      "RAG-powered knowledge base for EV-specific information",
      "Real-time charging station recommendations",
      "Conversational route planning with range optimization",
      "Maintenance schedule tracking and alerts",
      "Natural language interface via Streamlit",
    ],
    challenges: [
      "Designing reliable state transitions between multiple agents",
      "Balancing retrieval accuracy with response latency",
      "Handling ambiguous user queries across different domains",
      "Implementing graceful fallbacks when APIs are unavailable",
    ],
    results: [
      "Successfully orchestrates 4+ specialized agents with >95% routing accuracy",
      "Sub-3-second response time for most queries",
      "Handles multi-turn conversations with maintained context",
      "Modular architecture allows easy addition of new agent capabilities",
    ],
    lessonsLearned: [
      "LangGraph state machines provide excellent control over complex agent workflows",
      "RAG retrieval quality depends heavily on chunking strategy and embedding model selection",
      "Designing clear agent boundaries is crucial for reliable multi-agent systems",
    ],
  },
  {
    slug: "mental-health-nlp-chatbot",
    title: "Mental Health NLP Chatbot",
    shortDescription:
      "A RAG-based chatbot providing empathetic mental health support using NLP techniques, sentiment analysis, and curated psychological resources.",
    fullDescription:
      "An AI-powered mental health support chatbot that combines RAG with curated psychological resources to provide empathetic, contextually relevant responses. The system uses sentiment analysis to adapt its tone and provides evidence-based coping strategies.",
    category: "NLP & Speech AI",
    techStack: [
      "Python",
      "LangChain",
      "OpenAI",
      "Hugging Face",
      "FastAPI",
      "RAG",
      "Gradio",
      "Transformers",
    ],
    featured: true,
    githubUrl: "https://github.com/H-Elsherbiny/mental-health-chatbot",
    problemStatement:
      "Mental health support is often inaccessible due to cost, stigma, and availability. Many existing chatbots provide generic responses without understanding emotional context or providing evidence-based support.",
    solution:
      "Developed a RAG-based chatbot that retrieves information from curated mental health resources while using sentiment analysis to adapt its conversational tone. The system provides empathetic responses grounded in established psychological frameworks.",
    keyFeatures: [
      "Sentiment-aware response generation",
      "RAG retrieval from curated psychological resources",
      "Empathetic conversational design",
      "Crisis detection and resource referral",
      "Session context maintenance for coherent multi-turn conversations",
      "Evidence-based coping strategy recommendations",
    ],
    challenges: [
      "Ensuring safe and responsible AI responses for sensitive topics",
      "Balancing empathy with accuracy in mental health information",
      "Implementing crisis detection with minimal false negatives",
      "Maintaining conversation coherence over long sessions",
    ],
    results: [
      "Achieved 92% user satisfaction in conversational quality",
      "Successfully detects crisis indicators with high recall",
      "Provides contextually relevant coping strategies from curated resources",
      "Deployed as an accessible Gradio interface on Hugging Face Spaces",
    ],
    lessonsLearned: [
      "Responsible AI design is paramount for sensitive domains",
      "User feedback loops are essential for improving empathetic response quality",
      "Domain-specific fine-tuning of retrieval significantly impacts response relevance",
    ],
  },
  {
    slug: "omr-grading-api",
    title: "OMR Grading API",
    shortDescription:
      "Automated optical mark recognition system that grades bubble-sheet exams using computer vision, deployed as a production FastAPI service.",
    fullDescription:
      "A production-ready API service that uses computer vision techniques to detect, analyze, and grade bubble-sheet (OMR) examinations. The system handles image preprocessing, bubble detection, answer extraction, and scoring with high accuracy.",
    category: "Computer Vision",
    techStack: [
      "Python",
      "OpenCV",
      "FastAPI",
      "NumPy",
      "Docker",
      "REST API",
    ],
    featured: true,
    githubUrl: "https://github.com/H-Elsherbiny/omr-grading-api",
    problemStatement:
      "Manual grading of bubble-sheet exams is time-consuming, error-prone, and doesn't scale. Existing OMR solutions are often expensive proprietary systems requiring specialized hardware.",
    solution:
      "Built a software-only OMR solution using OpenCV that processes standard camera/scanner images. The FastAPI service provides a scalable REST endpoint that accepts exam images and returns graded results with per-question analytics.",
    keyFeatures: [
      "Perspective correction for skewed/rotated sheets",
      "Robust bubble detection using contour analysis",
      "Multi-answer and no-answer detection",
      "RESTful API with batch processing support",
      "Per-question analytics and score breakdown",
      "Docker containerized for easy deployment",
    ],
    challenges: [
      "Handling varied image quality and lighting conditions",
      "Robust perspective transformation for skewed documents",
      "Distinguishing between partially filled and fully filled bubbles",
      "Achieving real-time processing speed for batch grading",
    ],
    results: [
      "98%+ grading accuracy on properly scanned sheets",
      "Processes 50+ sheets per minute in batch mode",
      "Deployed as Docker container with automated CI/CD",
      "Reduces grading time by 95% compared to manual grading",
    ],
    lessonsLearned: [
      "Image preprocessing is the most critical factor in CV pipeline accuracy",
      "Adaptive thresholding outperforms fixed thresholds for varied conditions",
      "FastAPI's async capabilities are ideal for I/O-heavy image processing APIs",
    ],
  },
  {
    slug: "mate-rov",
    title: "MATE ROV",
    shortDescription:
      "Remotely operated underwater vehicle with autonomous capabilities, computer vision for object detection, and real-time telemetry for marine exploration.",
    fullDescription:
      "An advanced remotely operated underwater vehicle (ROV) built for the MATE ROV competition. Features computer vision-based object detection, autonomous navigation capabilities, and real-time sensor telemetry for marine research tasks.",
    category: "Robotics",
    techStack: [
      "Python",
      "OpenCV",
      "ROS",
      "Arduino",
      "C++",
      "Raspberry Pi",
      "TensorFlow",
    ],
    featured: false,
    githubUrl: "https://github.com/H-Elsherbiny/mate-rov",
    problemStatement:
      "Underwater exploration and research require sophisticated vehicles that can operate in challenging environments. Manual control alone is insufficient for complex tasks requiring precision and real-time data analysis.",
    solution:
      "Designed and built an ROV with integrated computer vision for underwater object detection and identification. Implemented semi-autonomous navigation with real-time sensor fusion and telemetry streaming.",
    keyFeatures: [
      "Underwater object detection using custom-trained CV models",
      "Real-time video streaming with low latency",
      "6-DOF movement control with PID stabilization",
      "Sensor fusion for depth, temperature, and orientation",
      "Semi-autonomous task execution",
      "Custom control interface with real-time telemetry",
    ],
    challenges: [
      "Computer vision in turbid underwater conditions",
      "Low-latency video transmission through tethered connection",
      "Waterproofing electronics for deep-water operation",
      "Real-time PID tuning for stable underwater movement",
    ],
    results: [
      "Successfully competed in MATE ROV international competition",
      "Achieved reliable object detection in underwater environments",
      "Real-time telemetry with <100ms latency",
      "Stable operation at competition-required depths",
    ],
    lessonsLearned: [
      "Embedded systems require rigorous testing under real conditions",
      "Hardware-software integration benefits from modular architecture",
      "Team collaboration and documentation are critical for complex robotics projects",
    ],
  },
  {
    slug: "tourism-ai-platform",
    title: "Tourism AI Platform",
    shortDescription:
      "AI-powered tourism recommendation platform using NLP to analyze user preferences and provide personalized travel itineraries and destination insights.",
    fullDescription:
      "An intelligent tourism platform that leverages NLP and machine learning to understand user travel preferences, generate personalized itineraries, and provide contextual destination information. Uses recommendation algorithms and sentiment analysis of reviews.",
    category: "AI Agents & LLMs",
    techStack: [
      "Python",
      "LangChain",
      "OpenAI",
      "FastAPI",
      "PostgreSQL",
      "Scikit-learn",
      "React",
    ],
    featured: false,
    githubUrl: "https://github.com/H-Elsherbiny/tourism-ai-platform",
    problemStatement:
      "Travel planning is time-consuming and overwhelming. Tourists struggle to find personalized recommendations that match their specific interests, budget, and travel style.",
    solution:
      "Built an AI-driven platform that uses LLMs to conversationally understand user preferences, then applies recommendation algorithms to generate customized travel itineraries with real-time pricing and availability.",
    keyFeatures: [
      "Conversational preference elicitation using LLMs",
      "Personalized itinerary generation",
      "Sentiment analysis of destination reviews",
      "Budget-aware recommendations",
      "Interactive map-based exploration",
      "Multi-language support",
    ],
    challenges: [
      "Balancing personalization accuracy with data privacy",
      "Integrating multiple data sources for comprehensive recommendations",
      "Handling seasonal variability in travel recommendations",
      "Generating diverse itineraries that avoid filter bubble effects",
    ],
    results: [
      "Generates personalized itineraries in under 10 seconds",
      "Recommendation relevance rated 4.5/5 by test users",
      "Supports 100+ destinations with rich contextual data",
      "Handles multi-day complex itineraries with constraint satisfaction",
    ],
    lessonsLearned: [
      "LLMs excel at preference elicitation through natural conversation",
      "Hybrid recommendation approaches outperform pure collaborative filtering",
      "User feedback loops significantly improve recommendation quality over time",
    ],
  },
  {
    slug: "garbage-classification",
    title: "Garbage Classification",
    shortDescription:
      "Deep learning model for automated waste classification into recyclable categories using CNN architectures, achieving high accuracy on diverse waste images.",
    fullDescription:
      "An automated waste classification system using deep learning that categorizes garbage images into recyclable and non-recyclable categories. Trained on a diverse dataset with data augmentation techniques to handle real-world image variability.",
    category: "Computer Vision",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "CNN",
      "Transfer Learning",
    ],
    featured: false,
    githubUrl: "https://github.com/H-Elsherbiny/garbage-classification",
    problemStatement:
      "Waste sorting is largely manual, inefficient, and error-prone. Incorrect sorting leads to contamination of recyclable materials, reducing recycling effectiveness and increasing environmental impact.",
    solution:
      "Developed a CNN-based image classification system using transfer learning (ResNet50) fine-tuned on a curated waste dataset. Implemented data augmentation to improve generalization across varied lighting and backgrounds.",
    keyFeatures: [
      "6-class waste categorization (glass, paper, cardboard, plastic, metal, trash)",
      "Transfer learning with ResNet50 backbone",
      "Extensive data augmentation pipeline",
      "Real-time inference capability",
      "Confusion matrix and per-class accuracy reporting",
      "Model export for edge deployment",
    ],
    challenges: [
      "High intra-class variability in waste appearance",
      "Class imbalance in training data",
      "Distinguishing visually similar categories (e.g., plastic vs. glass)",
      "Achieving robust performance across varied lighting conditions",
    ],
    results: [
      "94% overall classification accuracy on test set",
      "Real-time inference at 30+ FPS on GPU",
      "Successful generalization to unseen waste types",
      "Model optimized for potential edge deployment",
    ],
    lessonsLearned: [
      "Transfer learning dramatically reduces training time and data requirements",
      "Data augmentation is crucial for real-world CV application robustness",
      "Confusion matrix analysis reveals systematic errors that guide model improvement",
    ],
  },
  {
    slug: "egyptian-arabic-speech-recognition",
    title: "Egyptian Arabic Speech Recognition",
    shortDescription:
      "Speech-to-text system specifically trained for Egyptian Arabic dialect using Whisper fine-tuning and custom language models for improved dialect recognition.",
    fullDescription:
      "A specialized speech recognition system for Egyptian Arabic dialect. Fine-tuned OpenAI's Whisper model on Egyptian Arabic datasets with custom language model adaptation to handle dialect-specific vocabulary, phonetics, and code-switching patterns.",
    category: "NLP & Speech AI",
    techStack: [
      "Python",
      "Whisper",
      "Hugging Face",
      "PyTorch",
      "Transformers",
      "Librosa",
    ],
    featured: false,
    githubUrl:
      "https://github.com/H-Elsherbiny/egyptian-arabic-speech-recognition",
    problemStatement:
      "Standard Arabic speech recognition systems perform poorly on Egyptian Arabic due to significant phonological and lexical differences. Egyptian Arabic lacks standardized orthography, making transcription particularly challenging.",
    solution:
      "Fine-tuned Whisper on a curated Egyptian Arabic speech dataset with custom data preprocessing for dialect-specific phonetic patterns. Implemented post-processing rules for handling code-switching between Arabic and English.",
    keyFeatures: [
      "Whisper model fine-tuned on Egyptian Arabic",
      "Custom audio preprocessing pipeline",
      "Code-switching detection and handling",
      "Speaker diarization support",
      "Real-time transcription capability",
      "Evaluation metrics for dialect-specific accuracy",
    ],
    challenges: [
      "Limited labeled data for Egyptian Arabic dialect",
      "Handling code-switching between Arabic and English",
      "Varied recording quality in training data",
      "Non-standardized orthography for dialect transcription",
    ],
    results: [
      "30% improvement in WER over base Whisper for Egyptian Arabic",
      "Robust handling of common code-switching patterns",
      "Real-time transcription with acceptable latency",
      "Successful evaluation on diverse Egyptian Arabic speakers",
    ],
    lessonsLearned: [
      "Domain-specific fine-tuning of large speech models yields significant accuracy gains",
      "Data quality matters more than data quantity for low-resource languages",
      "Post-processing rules can significantly improve transcription quality",
    ],
  },
  {
    slug: "space-seismic-analysis",
    title: "Space Seismic Analysis",
    shortDescription:
      "Data science pipeline for analyzing planetary seismic data from NASA datasets, applying signal processing and ML techniques for seismic event detection.",
    fullDescription:
      "A data science project analyzing seismic data from planetary missions. Applies signal processing techniques and machine learning models to detect and classify seismic events in extraterrestrial datasets provided by NASA.",
    category: "Data Science",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "Scikit-learn",
      "Matplotlib",
      "Signal Processing",
    ],
    featured: false,
    githubUrl: "https://github.com/H-Elsherbiny/space-seismic-analysis",
    problemStatement:
      "Planetary seismic data contains significant noise and requires specialized analysis techniques different from terrestrial seismology. Manual analysis of large datasets is impractical for ongoing planetary missions.",
    solution:
      "Built an automated pipeline that applies bandpass filtering, STA/LTA algorithms, and ML-based event classification to detect and categorize seismic events in planetary datasets. Includes comprehensive visualization for scientific interpretation.",
    keyFeatures: [
      "Automated seismic event detection using STA/LTA algorithm",
      "Bandpass filtering for noise reduction",
      "ML-based event classification (earthquake, impact, noise)",
      "Interactive visualizations for scientific analysis",
      "Batch processing of large seismic datasets",
      "Statistical analysis and event catalog generation",
    ],
    challenges: [
      "Extremely low signal-to-noise ratio in planetary seismic data",
      "Limited labeled training data for extraterrestrial seismic events",
      "Distinguishing between geological and instrumental artifacts",
      "Handling different data formats from various missions",
    ],
    results: [
      "Successful detection of seismic events in NASA lunar dataset",
      "85%+ classification accuracy for event type determination",
      "Automated processing of months of continuous seismic recordings",
      "Reproducible analysis pipeline with comprehensive documentation",
    ],
    lessonsLearned: [
      "Signal processing fundamentals are essential for scientific ML applications",
      "Domain expertise collaboration is critical for meaningful results",
      "Visualization is crucial for validation in scientific computing",
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];
  return projects
    .filter(
      (p) => p.slug !== currentSlug && p.category === current.category
    )
    .slice(0, limit);
}

export const projectCategories = [
  "All",
  "AI Agents & LLMs",
  "NLP & Speech AI",
  "Computer Vision",
  "Robotics",
  "Data Science",
] as const;
