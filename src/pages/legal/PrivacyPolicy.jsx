import { Lock, Eye, CreditCard, Database, ShieldCheck, Cookie } from 'lucide-react'
import { LegalPage, LegalArticle, LegalList, InfoTiles, LegalContact } from '../../components/sections/Legal'

export default function PrivacyPolicy() {
  return (
    <LegalPage badge="Legal Compliance" badgeIcon={Lock} title="Privacy" updated="Last Updated: October 24, 2023">
      <LegalArticle icon={Eye} title="Overview">
        <p>Hamari priority aapki privacy hai. Yeh policy batati hai ki hum aapka data kaise collect, use aur protect karte hain jab aap hamari services use karte hain. Hamara goal transparent rehna hai taaki aap bina kisi fikar ke hamare platforms par grow kar sakein.</p>
      </LegalArticle>

      <LegalArticle icon={CreditCard} title="Payment Processing & Razorpay" highlighted>
        <p>Hum payment processing ke liye Razorpay ka use karte hain. Hum aapke card details apne servers par store nahi karte.</p>
        <LegalList
          items={[
            ['Encryption', 'Transaction ke waqt aapka data Razorpay ke secure PCI-DSS compliant environment mein process hota hai.'],
            ['Data Sharing', 'Hum sirf wahi info share karte hain jo payment confirm karne ke liye zaruri hoti hai (e.g., amount, billing details).'],
            ['Security', 'Razorpay industry-standard encryption protocols use karta hai taaki aapka financial data 100% safe rahe.'],
          ]}
        />
      </LegalArticle>

      <LegalArticle icon={Database} title="Data Hum Kya Collect Karte Hain?">
        <InfoTiles
          items={[
            { title: 'Personal Info', text: 'Name, Email, Phone number, aur Billing address jo aap humein provide karte hain.' },
            { title: 'Usage Data', text: 'IP address, browser type, aur page visit duration taaki hum UX behtar kar sakein.' },
          ]}
        />
      </LegalArticle>

      <LegalArticle icon={ShieldCheck} title="Security Standards">
        <p>Hum SSL encryption aur regular security audits ka use karte hain. Halanki koi bhi internet transmission 100% secure nahi hota, lekin hum best industry practices follow karte hain aapke data ko safeguard karne ke liye.</p>
      </LegalArticle>

      <LegalContact
        icon={Cookie}
        label="Cookies"
        description="Hum small cookies use karte hain aapke experience ko personalize karne ke liye. Aap inhe browser settings se disable kar sakte hain."
        heading="Questions?"
        prompt="Contact our compliance team:"
        buttonLabel="Email Compliance"
      />
    </LegalPage>
  )
}
