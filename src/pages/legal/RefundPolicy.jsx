import { RotateCcw, HeartHandshake, Clock, ListChecks, XCircle, Headphones } from 'lucide-react'
import { LegalPage, LegalArticle, LegalList, InfoTiles, LegalContact } from '../../components/sections/Legal'

export default function RefundPolicy() {
  return (
    <LegalPage badge="Cancellation & Refunds" badgeIcon={RotateCcw} title="Refund" updated="Last Updated: October 24, 2023">
      <LegalArticle icon={HeartHandshake} title="Commitment to Satisfaction">
        <p>We strive to provide exceptional value through our services. If you feel that our services have not met the promised standards, we offer a transparent refund process. Please review the terms outlined below to understand your eligibility and the steps involved.</p>
      </LegalArticle>

      <LegalArticle icon={Clock} title="Refund Timeline & Process" highlighted>
        <p>Once a refund is approved, the processing time depends on the financial institutions involved:</p>
        <LegalList
          items={[
            ['Review Period', 'All requests are reviewed by our compliance team within 24-48 business hours.'],
            ['Original Method', 'Approved refunds are credited back only to the original payment method (Bank Account, Card, or UPI) used during the transaction.'],
            ['Standard Timeline', 'As per Razorpay and banking protocols, it typically takes 5 to 7 working days for the amount to reflect in your account.'],
          ]}
        />
      </LegalArticle>

      <LegalArticle icon={ListChecks} title="Eligibility Criteria">
        <InfoTiles
          items={[
            { title: 'Eligible Requests', text: 'Duplicate transactions, accidental over-billing, or failure to deliver service due to verified technical errors on our end.' },
            { title: 'Non-Eligible', text: 'Refunds will not be issued for "change of mind" once digital content has been accessed or services have been partially consumed.' },
          ]}
        />
      </LegalArticle>

      <LegalArticle icon={XCircle} title="Cancellation Rights">
        <p>You may cancel your subscription or service at any time. Upon cancellation, you will not be charged for the subsequent billing cycle. Eligibility for a refund of previously paid amounts remains subject to the criteria mentioned above.</p>
      </LegalArticle>

      <LegalContact
        icon={Headphones}
        label="Direct Assistance"
        description="Have questions regarding a specific transaction? Our support team is available to assist you with any billing inquiries within 24 hours."
        heading="Initiate Refund"
        prompt="Please include your Order ID in the email:"
        buttonLabel="Contact Support"
      />
    </LegalPage>
  )
}
