import Image from "next/image";
import logo from "public/whispers.png";

const Company = () => {
  return (
    <div className="hidden lg:absolute lg:bottom-6 lg:left-6 lg:flex lg:items-center lg:space-x-8">
      <Image src={logo} alt="logo" width={48} height={48} />
      <div className="flex flex-col">
        <p>Whispers</p>
        <p>
          Made by
          <b className="ml-1">
            <a
              href="https://github.com/danielderma"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              DanielDerma
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Company;
