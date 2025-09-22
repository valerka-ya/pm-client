import Footer from "@/widgets/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default AuthLayout;
