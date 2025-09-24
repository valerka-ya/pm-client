import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";

// TODO: сделать возможность прокидывать хлебные крошки в проект как ссылки на разные части в приложении
interface LayoutProps {
  children: React.ReactNode;
  headerProps?: { title?: string; description?: string };
}

const MainLayout: React.FC<LayoutProps> = ({
  children,
  headerProps,
}: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Header {...headerProps} />
    <main className="container mx-auto px-8 w-full flex-1 overflow-y-auto">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
