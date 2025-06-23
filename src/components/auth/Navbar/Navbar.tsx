import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { CountrySelect } from "@/components/auth/Navbar/CountrySelect";

export default function Navbar() {
  return (
    <section className="flex justify-between">
      <div>
        <Image src={logo} alt="healco_logo" width={123} />
      </div>
      <>
        <CountrySelect />
      </>
    </section>
  );
}
