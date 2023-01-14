import Company from "@/components/Company";
import Links from "@/components/Links";
import App from "@/components/App";
import QR from "@/components/QR";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Links />
      <Company />
      <QR />
      <section className="relative z-10 h-screen w-screen border-2 border-black md:h-5/6 md:w-[550px]">
        <App />
      </section>
    </div>
  );
}
