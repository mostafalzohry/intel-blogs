import { Header } from "@/components/Header/Header";
import { TopTargetedSectors } from "@/components/TopTargetedSectors/TopTargetedSectors";
import { TopTargetedCountries } from "@/components/TopTargetedCountries/TopTargetedCountries";
import { ArticlesList } from "@/components/Articles/ArticlesList";
import { theme } from "@/styles/theme";

export default function IntelUpdatesDashboard() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Header title="Intel Updates" breadcrumb={["Home", "Intel Updates"]} />

      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <TopTargetedSectors totalSectors={122} />
          <TopTargetedCountries />
        </div>

        <ArticlesList />
      </div>
    </div>
  );
}
