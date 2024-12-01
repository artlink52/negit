import { BenefitListDigitalization } from "@/components/shared/benefit-list-digitalization";
import { DevelopPOTitleSubtitle } from "@/components/shared/developPo-title-subtitle";
import { DigitalizationTitleSubtitle } from "@/components/shared/digitalization-title-subtitle";
import { DigitalizationCardList } from "@/components/shared/digitalizationCardList";
import { FirstBlockSoftwareDevelopment } from "@/components/shared/first-block-developPO";
import { FirstBlockDigitalization } from "@/components/shared/first-block-digitalization";

export default function SoftwareDevelopment() {
  return (
    <main>
      <FirstBlockDigitalization />
      <DigitalizationTitleSubtitle />
      <DigitalizationCardList />
      <BenefitListDigitalization />
    </main>
  );
}
