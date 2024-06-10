import Header from "@/user.InterfaceLayer/Components/Header";
import MenuBlockWidget from "@/user.InterfaceLayer/Libraries/Widgets/MenuBlock.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import MainLayout from "@/user.InterfaceLayer/Libraries/Layouts/Main.layout";
import { useProducts } from "@/business.InterfaceLayer/useProducts";

export default function Home() {
  const { products, isLoading } = useProducts();

  console.log(products);
  if (isLoading) return <div className="">Loading...</div>;

  return (
    <main className={`${globalContainer} text-text_primary`}>
      <div className="flex">
        <MenuBlockWidget />
        <div className="flex flex-col">
          <Header />
          <MainLayout lessons={products} />
        </div>
      </div>
    </main>
  );
}
