import bg from "public/bg.jpg";
import Company from "@/components/Company";
import Links from "@/components/Links";
import App from "@/components/App";
import QR from "@/components/QR";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <Image
        src={bg}
        alt="background"
        className="max-w-screen absolute top-1/2 left-1/2 max-h-screen -translate-x-1/2 -translate-y-1/2 "
      />
      <Links />
      <Company />
      <QR />
      <section className="z-10 h-screen w-screen rounded-lg bg-white ring-1 ring-gray-900/5 md:h-[85%] md:max-w-[500px] md:shadow-2xl">
        <App />
      </section>
    </div>
  );
}
