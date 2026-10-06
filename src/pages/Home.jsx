import Hero from '../components/home/Hero'
import AudienceSection from '../components/home/AudienceSection'
import FeaturesSection from '../components/home/FeaturesSection'
import TimelineSection from '../components/home/TimelineSection'
import TrustSection from '../components/home/TrustSection'
import FrameworkSection from '../components/home/FrameworkSection'
import SuccessStories from '../components/home/SuccessStories'
import FounderSection from '../components/home/FounderSection'
import MethodologySection from '../components/home/MethodologySection'
import ServiceCategories from '../components/home/ServiceCategories'
import LLMServices from '../components/home/LLMServices'
import AwardsInsights from '../components/home/AwardsInsights'
import FAQSection from '../components/home/FAQSection'
import GlobalStats from '../components/home/GlobalStats'

export default function Home() {
  return (
    <main>
      <Hero />
      <AudienceSection />
      <FeaturesSection />
      <TimelineSection />
      <TrustSection />
      <FrameworkSection />
      <SuccessStories />
      <FounderSection />
      <MethodologySection />
      <ServiceCategories />
      <LLMServices />
      <AwardsInsights />
      <FAQSection />
      <GlobalStats />
    </main>
  )
}
