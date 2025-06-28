import Navbar from "@/components/auth/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="container mx-auto py-6">
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
