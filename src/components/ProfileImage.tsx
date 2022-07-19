import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProfileImage = ({ onUpload }: { onUpload: Function }) => {
  const [url, setUrl] = useState<string>("https://joeschmoe.io/api/v1/joe");

  useEffect(() => {
    onUpload(url); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Image
        src={url}
        className="rounded-full"
        width={30}
        height={30}
        alt="portada"
        layout="responsive"
        priority
      ></Image>
    </div>
  );
};

export default ProfileImage;
