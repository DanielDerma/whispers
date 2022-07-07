import { useApp } from "../../context/AppContext";

const Chat = () => {
  const { open, handleOpen } = useApp();

  return (
    <div
      className={`${
        open === null ? "h-0 p-0" : open ? "h-[calc(100vh-64px)]" : "h-16"
      } w-full transition-all  bg-red-100 fixed bottom-16 rounded-t-2xl	`}
    >
      {open !== null && (
        <div
          onClick={handleOpen}
          className="flex items-center justify-around h-16"
        >
          <button
            className={`${
              open ? "rotate-180" : "rotate-0"
            } transition-all inline-block`}
          >
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <p className="inline">Grupo Tecnico</p>
          <div className="flex -space-x-4">
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://joeschmoe.io/api/v1/random"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://joeschmoe.io/api/v1/random"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://joeschmoe.io/api/v1/random"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://joeschmoe.io/api/v1/random"
              alt=""
            />
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +99
            </a>
          </div>
        </div>
      )}
      {open && (
        <div className="overflow-auto h-[calc(100vh-128px)]">
          {" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            illo saepe repellendus vel necessitatibus ipsam iure aspernatur
            voluptatibus minus? Velit, animi labore dolorem molestiae earum qui,
            explicabo quibusdam rem fuga quos quaerat tempora eaque fugiat
            saepe. Repellat tempora officiis consectetur, aliquam recusandae est
            ullam. Modi quam voluptates eos odio saepe at sunt cum cumque qui.
            Adipisci odit vel fuga nulla inventore perferendis blanditiis ullam
            deserunt aspernatur labore. Facere iste ipsum eaque dolor quod error
            eos repudiandae ducimus laudantium excepturi aliquam aut repellendus
            tempore voluptatum adipisci, doloremque nobis ea? Quis laudantium
            perspiciatis, vitae autem consequatur laboriosam maxime, deleniti,
            nobis accusantium ullam officiis neque earum ab facere quam. Id,
            facilis placeat labore doloremque omnis consequuntur impedit, esse,
            alias quibusdam odit nemo! Provident! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dolor amet nam optio consequuntur quis
            excepturi ab minus voluptatum ipsam maxime corrupti, quo unde
            aspernatur quaerat ex officia, velit est natus. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Veritatis neque perspiciatis
            veniam ipsam, error sed aliquid nulla fugit animi, quasi minus, in
            laboriosam! Repellat quo dolore harum fugiat porro aliquam obcaecati
            ab odit eos. Hic atque officiis quae consequuntur pariatur molestiae
            assumenda, sunt ut rem veritatis soluta et nisi temporibus, fuga
            nihil reiciendis culpa aliquid reprehenderit illum doloribus fugit
            autem dicta quaerat? Repudiandae repellendus minima inventore
            laudantium perferendis numquam rerum dolorem, dolores tempora!
            Facere dolorem sunt nihil, cupiditate ea sed fuga veritatis
            obcaecati et quo, deserunt molestias? Doloremque deleniti libero vel
            quaerat perspiciatis beatae quas fugit unde illo accusamus officia
            nostrum aliquid laboriosam facilis fuga, dolore tempora deserunt
            voluptatum debitis quibusdam. Debitis aliquam velit deleniti eaque,
            minima explicabo. Repudiandae, modi!
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
