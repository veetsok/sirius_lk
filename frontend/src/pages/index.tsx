import Header from "@/user.InterfaceLayer/Components/Header";
import MenuBlock from "@/user.InterfaceLayer/Libraries/Widgets/MenuBlock.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import MainLayout from "@/user.InterfaceLayer/Libraries/Layouts/Main.layout";
import { useProducts } from "@/business.InterfaceLayer/useProducts";
import ScheduleLayout from "@/user.InterfaceLayer/Libraries/Layouts/Schedule.layout";
import { useCallback, useMemo, useState } from "react";
import Spinner from "@/user.InterfaceLayer/Libraries/UI_KIT/Molecules/Spinner.Molecule";

export default function Home() {
  const { products, isLoading } = useProducts();
  const [selectedSection, setSelectedSection] = useState("main");

  const handleSectionChange = useCallback((section: string) => {
    setSelectedSection(section);
  }, []);

  const renderSection = useMemo(() => {
    switch (selectedSection) {
      case "main":
        return <MainLayout lessons={products} />;
      case "schedule":
        return <ScheduleLayout lessons={products} />;
      default:
        return <MainLayout lessons={products} />;
    }
  }, [selectedSection, products]);

  if (isLoading) return <Spinner />;

  return (
    <main className={`${globalContainer} text-text_primary`}>
      <div className="flex">
        <MenuBlock
          activeSection={selectedSection}
          onSectionChange={handleSectionChange}
        />
        <div className="flex flex-col w-full">
          <Header />
          <div className="ml-8 mt-5">{renderSection}</div>
        </div>
      </div>
    </main>
  );
}
