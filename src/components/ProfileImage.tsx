import Image from "next/image";
import React, { useEffect, useState } from "react";

const PROFILES = [
  "jabala",
  "jacques",
  "jenni",
  "jolee",
  "jake",
  "jana",
  "jude",
  "josephine",
  "jack",
  "jerry",
  "jocelyn",
  "jess",
  "jia",
  "jeane",
  "jodi",
  "jon",
  "jeri",
  "joe",
  "julie",
  "josh",
  "james",
  "jazebelle",
  "jean",
  "jordan",
  "jaqueline",
  "jed",
  "jane",
  "jai",
];

const ProfileImage = ({ onUpload }: { onUpload: Function }) => {
  const [url, setUrl] = useState<string>("https://joeschmoe.io/api/v1/joe");

  useEffect(() => {
    onUpload(url); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomImage = () => {
    const random = Math.floor(Math.random() * PROFILES.length);
    const imageRandom = `https://joeschmoe.io/api/v1/${PROFILES[random]}`;
    console.log(imageRandom);
    setUrl(imageRandom);
  };

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
      <button onClick={getRandomImage}>random</button>
    </div>
  );
};

export default ProfileImage;
