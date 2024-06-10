import Header from "@/user.InterfaceLayer/Components/Header";
import MenuBlockWidget from "@/user.InterfaceLayer/Libraries/Widgets/MenuBlock.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import MainLayout from "@/user.InterfaceLayer/Libraries/Layouts/Main.layout";

export default function Home() {
  return (
    <main className={`${globalContainer} text-text_primary`}>
      <div className="flex">
        <MenuBlockWidget />
        <div className="flex flex-col">
          <Header />
          <MainLayout />
        </div>
      </div>
    </main>
  );
}
