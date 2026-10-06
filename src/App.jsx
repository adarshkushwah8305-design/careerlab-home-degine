import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import AIAgents from './pages/AIAgents'
import NeuralTraining from './pages/NeuralTraining'
import CustomLLMs from './pages/CustomLLMs'
import SecurityProtocol from './pages/SecurityProtocol'
import AIEmployers from './pages/AIEmployers'
import FreelancerPlatform from './pages/FreelancerPlatform'
import ProjectDevelopment from './pages/ProjectDevelopment'
import IndividualProjects from './pages/IndividualProjects'
import CaseStudies from './pages/CaseStudies'
import Documentation from './pages/Documentation'
import Contact from './pages/Contact'
import SolutionDetail from './pages/SolutionDetail'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfService from './pages/legal/TermsOfService'
import RefundPolicy from './pages/legal/RefundPolicy'
import ExaminationPolicy from './pages/legal/ExaminationPolicy'
import EscalationPolicy from './pages/legal/EscalationPolicy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        {/* Solutions */}
        <Route path="ai-agents" element={<AIAgents />} />
        <Route path="neural-training" element={<NeuralTraining />} />
        <Route path="custom-llms" element={<CustomLLMs />} />
        <Route path="security-protocol" element={<SecurityProtocol />} />

        {/* Business Hub */}
        <Route path="ai-employers" element={<AIEmployers />} />
        <Route path="freelancer-platform" element={<FreelancerPlatform />} />
        <Route path="project-development" element={<ProjectDevelopment />} />
        <Route path="individual-projects" element={<IndividualProjects />} />

        {/* Infrastructure */}
        <Route path="about" element={<About />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="contact" element={<Contact />} />

        {/* Mega-menu (dynamic) */}
        <Route path="services/:groupId/:slug" element={<SolutionDetail type="services" />} />
        <Route path="industries/:groupId/:slug" element={<SolutionDetail type="industries" />} />

        {/* Legal */}
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="examination-policy" element={<ExaminationPolicy />} />
        <Route path="escalation-policy" element={<EscalationPolicy />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
