import Header from "@/user.InterfaceLayer/Components/Header";
import MenuBlock from "@/user.InterfaceLayer/Libraries/Widgets/MenuBlock.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import MainLayout from "@/user.InterfaceLayer/Libraries/Layouts/Main.layout";
import { useProducts } from "@/business.InterfaceLayer/useProducts";
import ScheduleLayout from "@/user.InterfaceLayer/Libraries/Layouts/Schedule.layout";
import { useCallback, useMemo, useState } from "react";

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
        return <ScheduleLayout />;
      default:
        return <MainLayout lessons={products} />;
    }
  }, [selectedSection, products]);

  if (isLoading) return <div className="">Loading...</div>;

  return (
    <main className={`${globalContainer} text-text_primary`}>
      <div className="flex">
        <MenuBlock onSectionChange={handleSectionChange} />
        <div className="flex flex-col">
          <Header />
          {renderSection}
        </div>
      </div>
    </main>
  );
}
