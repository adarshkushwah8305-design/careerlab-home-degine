import {
  Globe, Zap, Code, Blocks, Shield, Cpu, Monitor, HeartPulse, Landmark,
  ShoppingCart, Factory, Car, Scale, GraduationCap,
} from 'lucide-react'

export const slugify = (s) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const footerLinks = {
  Solutions: [
    { name: 'AI Agents', href: '/ai-agents' },
    { name: 'Neural Training', href: '/neural-training' },
    { name: 'Custom LLMs', href: '/custom-llms' },
    { name: 'Security Protocol', href: '/security-protocol' },
  ],
  'Business Hub': [
    { name: 'AI Employers (Jobs)', href: '/ai-employers' },
    { name: 'Freelancer Platform', href: '/freelancer-platform' },
    { name: 'Project Development', href: '/project-development' },
    { name: 'Individual Projects', href: '/individual-projects' },
  ],
  Infrastructure: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Contact', href: '/contact' },
  ],
}

export const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Examination Policy', href: '/examination-policy' },
  { name: 'Escalation Policy', href: '/escalation-policy' },
]

// Plain text links shown in the navbar beside the two mega menus
export const navLinks = [
  { name: 'AI Agents', href: '/ai-agents' },
  { name: 'Hire Talent', href: '/ai-employers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
]

const withHref = (base, groups) =>
  groups.map((g) => ({
    ...g,
    items: g.items.map((name) => ({ name, slug: slugify(name), href: `/${base}/${g.id}/${slugify(name)}` })),
  }))

export const services = withHref('services', [
  { id: 'consulting', title: 'AI & Digital Transformation Consulting', layer: 'Consult & Design Layer', icon: Globe,
    items: ['AI & LLM strategy and roadmap', 'Digital transformation consulting', 'AI readiness assessments', 'Leadership & technical workshops', 'ROI modeling & use-case prioritization', 'Responsible AI & governance advisory'] },
  { id: 'engineering', title: 'AI & Agentic Systems Engineering', layer: 'Core AI Build Layer', icon: Zap,
    items: ['Custom AI & GenAI solutions', 'LLM & RAG systems', 'Agentic AI frameworks', 'Workflow automation', 'System & API integration', 'Deployment and scaling'] },
  { id: 'development', title: 'Intelligent Application & Platform Development', layer: 'Software + AI Layer', icon: Code,
    items: ['AI-powered web applications', 'AI-powered mobile applications', 'Cloud-native platforms', 'IoT + AI systems', 'Enterprise applications'] },
  { id: 'blockchain', title: 'Blockchain & Web3 Services', layer: 'Decentralized Tech Layer', icon: Blocks,
    items: ['Blockchain consulting', 'Smart contracts and dApps', 'Tokenization platforms', 'Blockchain integration', 'Blockchain audits'] },
  { id: 'security', title: 'Quality, Security & Compliance Services', layer: 'Trust & Safety Layer', icon: Shield,
    items: ['Functional testing', 'Performance testing', 'Security & penetration testing', 'AI model validation', 'RAG & LLM safety testing', 'Compliance and audit testing'] },
  { id: 'operations', title: 'Managed AI & Technology Operations', layer: 'Operate & Optimize Layer', icon: Cpu,
    items: ['AI / LLM Ops', 'Monitoring and optimization', 'Support and maintenance', 'Version upgrades', 'Client training and handover', 'Bronze – Monitoring + monthly optimization', 'Silver – SLA support + incident handling', 'Gold – 24/7 support + governance'] },
  { id: 'talent', title: 'Talent & Dedicated Teams', layer: 'Scale & Augment Layer', icon: Monitor,
    items: ['AI engineers', 'Full-stack developers', 'Prompt engineers', 'RAG specialists', 'Dedicated delivery teams'] },
])

export const industries = withHref('industries', [
  { id: 'tech', title: 'Technology & SaaS', layer: 'Digital Innovation Layer', icon: Monitor,
    items: ['Cloud Infrastructure', 'SaaS Platforms', 'AI Research & Development', 'Cybersecurity Firms', 'DevOps & Automation'] },
  { id: 'healthcare', title: 'Healthcare & Pharma', layer: 'Life Sciences Layer', icon: HeartPulse,
    items: ['Telemedicine Systems', 'Clinical Data Management', 'Pharmaceutical AI', 'Medical Device Software', 'Health Insurance Tech'] },
  { id: 'finance', title: 'Finance & Banking', layer: 'FinTech & Wealth Layer', icon: Landmark,
    items: ['Investment Banking', 'FinTech Innovations', 'Asset & Wealth Management', 'Risk & Compliance', 'Blockchain Solutions'] },
  { id: 'retail', title: 'Retail & E-commerce', layer: 'Consumer Goods Layer', icon: ShoppingCart,
    items: ['Direct-to-Consumer (D2C)', 'Inventory Management', 'Customer Loyalty AI', 'Supply Chain Logistics', 'Marketplace Platforms'] },
  { id: 'manufacturing', title: 'Manufacturing', layer: 'Industrial 4.0 Layer', icon: Factory,
    items: ['Smart Factory Systems', 'Predictive Maintenance', 'Industrial Automation', 'Quality Control Systems'] },
  { id: 'automotive', title: 'Automotive', layer: 'Mobility & Auto Layer', icon: Car,
    items: ['Autonomous Vehicle AI', 'Connected Car Services', 'Fleet Management', 'Electric Vehicle Tech'] },
  { id: 'legal', title: 'Legal & Compliance', layer: 'Professional Services Layer', icon: Scale,
    items: ['Legal Document AI', 'Compliance Monitoring', 'Contract Management', 'Intellectual Property Tech'] },
  { id: 'education', title: 'Education', layer: 'EdTech & Learning Layer', icon: GraduationCap,
    items: ['Adaptive Learning Systems', 'Institutional Management', 'Student Engagement AI', 'Digital Certification'] },
])

export const catalogs = { services, industries }
