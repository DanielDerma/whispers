import { getRandomImage } from "../../utils/ProfileUtils";
import { useApp } from "../../context/AppContext";
import Random from "../../utils/icons/Random";
import { useEffect, useState } from "react";
import ThemeBtn from "./buttons/ThemeBtn";
import LogoutBtn from "./buttons/LogoutBtn";
import SaveBtn from "./buttons/SaveBtn";

const Profile = () => {
  const { showProfile, updateProfile, session, url: urlCtx } = useApp();
  const [url, setUrl] = useState<string>("");
  const [displayUrl, setDisplayUrl] = useState(url);

  useEffect(() => {
    if (session && urlCtx) {
      showProfile().then((elem: string) => {
        setUrl(elem);
        setDisplayUrl(elem);
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const changed = url !== displayUrl;

  const handleRandom = () => {
    const url = getRandomImage();
    setDisplayUrl(url);
  };

  const handleChange = () => {
    updateProfile(displayUrl).then((elem: string) => {
      setUrl(displayUrl);
    });
  };

  return (
    <div className="w-full p-4 rounded-xl bg-gradient-to-b from-twich2-grad-0 to-twich2-grad-100 grid place-content-center">
      <div className="ring-4 ring-[#FFD700] rounded-full block w-16 mx-auto relative">
        <img
          src={displayUrl}
          className="rounded-full w-16 h-16"
          alt="portada"
        />
        <button onClick={handleRandom} className="absolute -bottom-2 -right-2">
          <Random className="text-red-400 w-6 h-6" />
        </button>
      </div>
      <p className="mt-3 text-white text-xl text-center ">
        {session?.user?.user_metadata.name}
      </p>
      <div className="absolute top-8 right-8">
        <ThemeBtn />
        <LogoutBtn />
        <SaveBtn changed={changed} update={handleChange} />
      </div>
    </div>
  );
};

export default Profile;
