import type { NextPageWithLayout } from "../../pages/_app";
import Card from "../../components/app/Card/Card";
import Layout from "../../components/layouts/AppNavbar";
import { ReactElement } from "react";
import useAuth from "../../hooks/useAuth";
import Profile from "../../components/app/Profile";

const Page: NextPageWithLayout = () => {
  useAuth({ ref: "/play" });

  return (
    <div className="h-screen">
      <div className="p-4 h-[calc(100vh-128px)] w-screen grid grid-rows-[35%_1fr] gap-y-4">
        <Profile />
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
