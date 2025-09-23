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
  <>
    <Header {...headerProps} />
    <main className="mx-auto px-4">{children}</main>
    <Footer />
  </>
);

export default MainLayout;
