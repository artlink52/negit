import { BenefitListSupport } from "@/components/shared/benefit-list-support";
import { FirstBlockSupport } from "@/components/shared/first-block-support";
import { SupportTitleSubtitle } from "@/components/shared/support-title-subtitle";
import { SupportCardList } from "@/components/shared/supportCardList";

export default function SoftwareDevelopment() {
  return (
    <main>
      <FirstBlockSupport />
      <SupportTitleSubtitle />
      <SupportCardList />
      <BenefitListSupport />
    </main>
  );
}
