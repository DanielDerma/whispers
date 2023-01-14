import Github from "@/utils/icons/Github";
import Twitter from "@/utils/icons/Twitter";

const Links = () => {
  return (
    <div className="hidden lg:absolute lg:top-6 lg:left-6 lg:flex lg:items-center lg:space-x-8">
      <a
        href="https://github.com/DanielDerma/whispers"
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2"
      >
        <Github className="h-5 w-5" />
        <p>View in Github</p>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2"
      >
        <Twitter className="h-5 w-5" />
        <p>Share</p>
      </a>
    </div>
  );
};

export default Links;
