import Company from "@/components/Company";
import Links from "@/components/Links";
import App from "@/components/App";
import QR from "@/components/QR";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Links />
      <Company />
      <QR />
      <section className="w-screen h-screen bg-black md:w-[550px] md:h-5/6 z-10">
        <App />
      </section>
    </div>
  );
}
