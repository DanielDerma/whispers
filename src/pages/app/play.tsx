import Image from "next/image";
import Card from "../../components/app/Card/Card";
import Layout from "../../components/layouts/AppNavbar";
import { useApp } from "../../context/AppContext";
import type { NextPageWithLayout } from "../../pages/_app";
import type { ReactElement } from "react";

const Page: NextPageWithLayout = () => {
  const { user } = useApp();

  console.log(user, "entre play");

  return (
    <div className="h-screen">
      <div className="p-4 h-[calc(100vh_-_128px)] w-screen grid grid-rows-[35%_1fr] gap-y-4">
        <div className="w-full p-4 rounded-xl bg-gradient-to-b from-twich2-grad-0 to-twich2-grad-100 grid place-content-center">
          <div className="ring-4 ring-white rounded-full block w-16 mx-auto">
            {user && (
              <Image
                src={user?.avatar}
                className="rounded-full"
                width={30}
                height={30}
                alt="portada"
                layout="responsive"
              ></Image>
            )}
          </div>
          <p className="mt-3 text-white text-xl text-center ">{user?.name}</p>
        </div>

        <div className="grid grid-rows-[32px_1fr] gap-y-2 ">
          <p className="text-2xl text-red-600 text-center">
            Get anonymous messages!
          </p>
          <Card />
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
