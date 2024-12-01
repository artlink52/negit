import { DevelopPOCardList } from "@/components/shared/DevelopPoCardList";
import { DevelopPOTitleSubtitle } from "@/components/shared/developPo-title-subtitle";
import { FirstBlockSoftwareDevelopment } from "@/components/shared/first-block-developPO";

export default function SoftwareDevelopment() {
  return (
    <main>
      <FirstBlockSoftwareDevelopment />
      <DevelopPOTitleSubtitle />
      <DevelopPOCardList />
    </main>
  );
}
