import Navbar from "@/components/auth/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="container mx-auto py-6 px-2">
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
