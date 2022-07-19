import type { NextPage } from "next";
import Portal from "../components/Portal";
import useAuth from "../hooks/useAuth";

const Home: NextPage = () => {
  useAuth({ ref: "/play" });

  return (
    <div className="">
      <Portal />
    </div>
  );
};

export default Home;
