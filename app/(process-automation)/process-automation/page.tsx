import { BenefitListProcess } from "@/components/shared/benefit-list-process";
import { FirstBlockProcess } from "@/components/shared/first-block-process";
import { ProcessTitleSubtitle } from "@/components/shared/process-title-subtitle";
import { ProcessCardList } from "@/components/shared/processCardList";

export default function SoftwareDevelopment() {
  return (
    <main>
      <FirstBlockProcess />
      <ProcessTitleSubtitle />
      <ProcessCardList />
      <BenefitListProcess />
    </main>
  );
}
