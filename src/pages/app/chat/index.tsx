import type { NextPageWithLayout } from "../../../pages/_app";
import Layout from "../../../components/layouts/AppNavbar";
import type { ReactElement } from "react";
import Card from "../../../components/app/Chats/Card";
import useAuth from "../../../hooks/useAuth";

const Page: NextPageWithLayout = () => {
  useAuth({ ref: "/chat" });

  return (
    <div className="p-4 pb-16">
      <Card />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
