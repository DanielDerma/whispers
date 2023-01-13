import Image from "next/image";
import qrcode from "public/qrcode.png";

const Company = () => {
  return (
    <div className="hidden lg:absolute lg:bottom-6 lg:right-6 lg:flex lg:flex-col lg:items-center">
      <Image src={qrcode} alt="logo" width={132} height={132} />
      <p>Open on your phone 🚀</p>
    </div>
  );
};

export default Company;
