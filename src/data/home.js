import {
  Code2, Building2, Rocket, BarChart3, Compass, GraduationCap,
  Zap, ShieldCheck, MessagesSquare, Languages, LineChart, Infinity as InfinityIcon,
  Search, BrainCircuit, Plug, Bot, Database, Workflow, Activity,
} from 'lucide-react'

export const heroExperts = ['/images/expert-1.png', '/images/expert-2.png', '/images/expert-3.png', '/images/expert-4.png']

export const audiences = [
  { icon: Code2, color: '#3b82f6', title: 'Engineering Teams', description: 'Building LLM applications, RAG systems, and production AI infrastructure.' },
  { icon: Building2, color: '#8b5cf6', title: 'Enterprise AI Teams', description: 'Driving internal AI adoption, automation, and digital transformation at scale.' },
  { icon: Rocket, color: '#f97316', title: 'Startups', description: 'Moving fast on AI-first products and scaling intelligent systems from day one.' },
  { icon: BarChart3, color: '#10b981', title: 'Data & Analytics Teams', description: 'Enhancing decision-making with AI-powered pipelines and intelligence systems.' },
  { icon: Compass, color: '#22d3ee', title: 'Product & Technology Leaders', description: 'Defining AI strategy, architecture standards, and implementation roadmaps.' },
  { icon: GraduationCap, color: '#ec4899', title: 'Institutions & Learning Teams', description: 'Designing AI education programs and structured technical upskilling pathways.' },
]

export const features = [
  { icon: Zap, title: 'Real-time Intelligence', description: 'AI agents that process enterprise data and make decisions in under 30ms for maximum efficiency.' },
  { icon: ShieldCheck, title: 'Enterprise Security', description: 'Military-grade encryption with SOC2 Type II compliance standards ensuring data privacy.' },
  { icon: MessagesSquare, title: 'Omnichannel Support', description: 'Seamless AI integration across WhatsApp, Web, Voice, and Email platforms.' },
  { icon: Languages, title: 'Global Language Support', description: 'Communicate fluently in over 95+ regional and global languages with native accuracy.' },
  { icon: LineChart, title: 'Predictive Analytics', description: 'Forecasting business trends using advanced neural networks and historical data points.' },
  { icon: InfinityIcon, title: 'Infinite Scalability', description: 'Handle 1 to 1,000,000 concurrent sessions without latency or performance drops.' },
]

const wiki = 'https://upload.wikimedia.org/wikipedia/commons'

export const timeline = [
  { year: '2015', tags: ['Web', 'iOS'], solutions: 45, logos: [
    { name: 'P&G', url: `${wiki}/8/85/Procter_%26_Gamble_logo.svg` },
    { name: '3M', url: `${wiki}/1/15/3M_wordmark.svg` },
  ] },
  { year: '2017', tags: ['AWS', 'Micro'], solutions: 80, logos: [
    { name: 'ESPN', url: `${wiki}/thumb/2/2f/ESPN_wordmark.svg/1280px-ESPN_wordmark.svg.png` },
    { name: 'Hershey', url: 'https://brandlogos.net/wp-content/uploads/2022/11/hershey_company-logo_brandlogos.net_pcliv.png' },
    { name: 'CocaCola', url: `${wiki}/c/ce/Coca-Cola_logo.svg` },
  ] },
  { year: '2019', tags: ['DevOps', 'Web3'], solutions: 90, logos: [
    { name: 'SIEMENS', url: `${wiki}/5/5f/Siemens-logo.svg` },
    { name: 'IBM', url: `${wiki}/5/51/IBM_logo.svg` },
    { name: 'Intel', url: `${wiki}/7/7d/Intel_logo_%282006-2020%29.svg` },
  ] },
  { year: '2021', tags: ['AR/VR', 'Alexa'], solutions: 110, logos: [
    { name: 'Nike', url: `${wiki}/a/a6/Logo_NIKE.svg` },
    { name: 'Adidas', url: `${wiki}/2/20/Adidas_Logo.svg` },
    { name: 'Puma', url: `${wiki}/8/88/Puma-Logo.png` },
  ] },
  { year: '2023', tags: ['Meta', 'NFT'], solutions: 135, logos: [
    { name: 'Google', url: `${wiki}/2/2f/Google_2015_logo.svg` },
    { name: 'Microsoft', url: `${wiki}/9/96/Microsoft_logo_%282012%29.svg` },
    { name: 'Meta', url: `${wiki}/7/7b/Meta_Platforms_Inc._logo.svg` },
    { name: 'Netflix', url: `${wiki}/0/08/Netflix_2015_logo.svg` },
  ] },
  { year: '2025', tags: ['Gen AI', 'ML'], solutions: 155, logos: [
    { name: 'Amazon', url: `${wiki}/a/a9/Amazon_logo.svg` },
    { name: 'Tesla', url: `${wiki}/b/bd/Tesla_Motors.svg` },
    { name: 'Apple', url: `${wiki}/f/fa/Apple_logo_black.svg` },
    { name: 'Samsung', url: `${wiki}/2/24/Samsung_Logo.svg` },
  ] },
  { year: '2026', tags: ['Quantum', 'LLM'], solutions: 175, logos: [
    { name: 'OpenAI', url: `${wiki}/4/4d/OpenAI_Logo.svg` },
    { name: 'Nvidia', url: `${wiki}/2/21/Nvidia_logo.svg` },
    { name: 'Oracle', url: `${wiki}/5/50/Oracle_logo.svg` },
    { name: 'Slack', url: `${wiki}/d/d5/Slack_icon_2019.svg` },
  ] },
]

export const frameworkSteps = [
  { icon: Search, tag: 'Eliminates Guesswork', title: 'Discovery & Context', description: 'Business data aur requirements analyze karke AI agent ka blueprint taiyar hota hai.' },
  { icon: BrainCircuit, tag: '99% Accuracy', title: 'Neural Training', description: 'Agent ko aapke specific knowledge base par train kiya jata hai high accuracy ke liye.' },
  { icon: Plug, tag: 'Zero Downtime', title: 'Integration', description: 'AI modules ko aapke existing CRM aur ERP tools ke saath connect kiya jata hai.' },
  { icon: Bot, tag: 'Instant ROI', title: 'Autonomous Launch', description: 'Aapka workforce live ho jata hai, jo 24/7 bina human intervention ke perform karta hai.' },
]

export const successStories = [
  {
    title: 'AI-Powered Recruitment for Growth',
    description: 'Career Lab Consulting implemented an advanced filtering system for our corporate partners, streamlining the talent acquisition process and reducing hiring time by half.',
    stats: [['45%', 'reduction in hiring cost'], ['98.2%', 'client satisfaction rate']],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    video: 'https://www.youtube.com/shorts/pJnxRMXCMdk',
  },
  {
    title: 'Automated Sales Funnel for Tech Firms',
    description: 'We deployed intelligent agents that handle initial outreach and lead qualification, allowing sales teams to focus only on closing high-value deals.',
    stats: [['120%', 'increase in lead volume'], ['3.5x', 'ROI in first quarter']],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    video: 'https://www.youtube.com/shorts/_NIWQjjMvfw',
  },
]

export const methodology = ['Strategic alignment and planning', 'Proof of Value', 'Process augmentation']

export const serviceCategories = [
  { category: 'Engineering', title: 'AI & Agentic Systems Engineering', description: 'End-to-end autonomous systems and Agentic solutions built for enterprise scale.', image: '/images/service-agentic.jpg', href: '/services/engineering/agentic-ai-frameworks' },
  { category: 'App Development', title: 'Intelligent Application Development', description: 'Building next-gen platforms with embedded intelligence for modern digital ecosystems.', image: '/images/service-apps.jpg', href: '/services/development/ai-powered-web-applications' },
  { category: 'Consulting', title: 'AI & Digital Transformation Consulting', description: 'Strategic advisory, ROI modeling, and roadmap creation for operational scalability.', image: '/images/team-meeting.jpg', href: '/services/consulting/ai-and-llm-strategy-and-roadmap' },
  { category: 'Blockchain', title: 'Blockchain & Web3 Services', description: 'Decentralized solutions and smart contract engineering for secure operations.', image: '/images/service-blockchain.jpg', href: '/services/blockchain/blockchain-consulting' },
  { category: 'Security', title: 'Quality, Security & Compliance', description: 'Ensuring your AI systems are responsible, secure, and globally compliant.', image: '/images/service-security.jpg', href: '/services/security/security-and-penetration-testing' },
  { category: 'Operations', title: 'Managed AI & Tech Operations', description: 'Continuous monitoring, fine-tuning, and maintenance of your AI infrastructure 24/7.', image: '/images/service-operations.jpg', href: '/services/operations/ai-llm-ops' },
  { category: 'Talent', title: 'Talent & Dedicated Teams', description: 'Access to elite AI researchers and engineers to accelerate your R&D goals.', image: '/images/service-talent.jpg', href: '/services/talent/ai-engineers' },
]

export const llmServices = [
  { icon: Database, title: 'RAG Engineering', description: 'Expert Retrieval-Augmented Generation (RAG) implementation to connect LLMs with your private data for accurate, hallucination-free AI responses.', image: '/images/llm-rag.jpg' },
  { icon: Compass, title: 'AI Strategy Consulting', description: 'Enterprise AI roadmaps that identify high-ROI use cases, model selection strategy, and seamless integration workflows.', image: '/images/llm-strategy.jpg' },
  { icon: Workflow, title: 'LangChain Development', description: 'Building complex AI agents and multi-step chains using LangChain and LlamaIndex for advanced cognitive automation.', image: '/images/llm-langchain.jpg' },
  { icon: Activity, title: 'LLMOps & Monitoring', description: 'End-to-end lifecycle management, including fine-tuning, latency optimization, and continuous evaluation of production models.', image: '/images/llm-ops.jpg' },
]

export const awards = [
  { image: '/images/awards/clutch.png', title: 'Top AI Development Firm 2019', rating: 4.6, reviews: '12,786+' },
  { image: '/images/awards/deloitte.png', title: 'Deloitte Technology Fast 50 Winner', rating: 4.8, reviews: '9,654+' },
  { image: '/images/awards/microsoft.webp', title: 'Most Reviewed AI Partner', rating: 4.7, reviews: '32,210+' },
]

export const insights = [
  { image: '/images/blog/agents.jpg', category: 'AI Strategy', readTime: '6 min', title: 'Autonomous AI Agents: The Shift from SaaS to Agent-as-Service' },
  { image: '/images/blog/rag.jpg', category: 'Technical', readTime: '8 min', title: 'Optimizing RAG Pipelines for Enterprise-Grade Accuracy' },
  { image: '/images/blog/seo.jpg', category: 'Marketing', readTime: '5 min', title: 'Next-Gen SEO: Ranking in the Age of AI Search (SGE)' },
]

export const faqs = [
  { question: 'How long does it take to deploy an AI agent?', answer: 'Our standard deployment cycle typically takes 2 to 4 weeks. This includes deep discovery, custom neural training, and seamless integration with your existing tech stack.' },
  { question: 'Is my business data secure with your agents?', answer: 'Absolutely. We employ enterprise-grade AES-256 encryption and are SOC2 Type II compliant. Your data is never used to train public LLMs.' },
  { question: 'Which industries do you specialize in?', answer: 'We specialize in high-impact sectors including Fintech, Healthcare, Logistics, and E-commerce where accuracy and 24/7 reliability are mission-critical.' },
  { question: 'Do I need technical expertise to manage the agents?', answer: 'No. We provide a fully managed service. Our engineering team handles setup and maintenance, while you get an intuitive dashboard for real-time analytics.' },
]

export const liveStats = [
  { label: 'Global Visitors', value: 8420, suffix: '+', description: 'Active users exploring from across the globe.' },
  { label: 'Indian Visitors', value: 3150, description: 'Real-time traffic originating from India.' },
  { label: 'API Requests', value: 142, suffix: '/s', description: 'Current requests being processed by our edge.' },
  { label: 'Active Projects', value: 512, description: 'Ongoing enterprise projects powered by AI.' },
]
