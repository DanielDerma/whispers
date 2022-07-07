import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../../components/app/Navbar";
import Input from "../../components/app/Input";
import Chat from "../../components/app/Chat";
import Card from "../../components/app/Card/Card";
import photo from "../../utils/img/profileMock.jpg";
import { useApp } from "../../context/AppContext";

const Play = () => {
  const { handleOpen, open } = useApp();

  const handleShare = () => {
    navigator.clipboard.writeText("a");
  };

  return (
    <div className="h-screen">
      <div className="p-4 h-[calc(100vh_-_128px)] w-screen grid grid-rows-[35%_1fr] gap-y-4">
        <div className="w-full p-4 rounded-xl bg-gradient-to-b from-twich2-grad-0 to-twich2-grad-100 grid place-content-center">
          <div className="ring-4 ring-white rounded-full block w-16 mx-auto">
            <Image
              src={photo}
              className="rounded-full"
              width={30}
              height={30}
              alt="portada"
              layout="responsive"
            ></Image>
          </div>
          <p className="mt-3 text-white text-xl text-center ">dark0w0!</p>
        </div>

        <div className="grid grid-rows-[32px_1fr] gap-y-2 ">
          <p className="text-2xl text-red-600 text-center">
            Get anonymous messages!
          </p>
          <Card />
        </div>
      </div>
      <Chat />
      {open ? <Input /> : <Navbar />}
    </div>
  );
};

export default Play;
