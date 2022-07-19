import { useRouter } from "next/router";
import useAuth from "../../../hooks/useAuth";

const Room = () => {
  const router = useRouter();
  const { room } = router.query;

  useAuth({ ref: `/chat/${room}` });

  const me = "daniel";

  const chat = [
    {
      author: "daniel",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt temporibus excepturi.",
      id: 1,
    },
    {
      author: "crlos",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt temporibus excepturi.",
      id: 2,
    },
    {
      author: "daniel",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt temporibus excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse libero placeat, voluptatibus nisi officia facilis sapiente quia harum a ex reprehenderit ipsum consequuntur minus quod necessitatibus aperiam iure possimus rem dolorum id quisquam earum deleniti? Alias accusamus velit excepturi recusandae labore? Sequi recusandae esse quibusdam aut non in, totam, libero itaque quia veniam blanditiis molestias repudiandae eaque rem? Repellat, inventore. Neque non ad nemo, autem quisquam officiis, a ab totam, numquam dolorum cumque odit natus aliquam adipisci facere. Non nulla sequi reprehenderit dolore cupiditate aspernatur, laborum ratione error, ad dicta necessitatibus facere vel nemo. Itaque cupiditate quo similique eveniet voluptates, enim quas ad corrupti, accusamus fugit officia accusantium? Accusantium deleniti voluptate sit mollitia suscipit eius accusamus aliquid libero ducimus possimus.",
      id: 3,
    },
    {
      author: "carlete",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt temporibus excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse libero placeat, voluptatibus nisi officia facilis sapiente quia harum a ex reprehenderit ipsum consequuntur minus quod necessitatibus aperiam iure possimus rem dolorum id quisquam earum deleniti? Alias accusamus velit excepturi recusandae labore? Sequi recusandae esse quibusdam aut non in, totam, libero itaque quia veniam blanditiis molestias repudiandae eaque rem? Repellat, inventore. Neque non ad nemo, autem quisquam officiis, a ab totam, numquam dolorum cumque odit natus aliquam adipisci facere. Non nulla sequi reprehenderit dolore cupiditate aspernatur, laborum ratione error, ad dicta necessitatibus facere vel nemo. Itaque cupiditate quo similique eveniet voluptates, enim quas ad corrupti, accusamus fugit officia accusantium? Accusantium deleniti voluptate sit mollitia suscipit eius accusamus aliquid libero ducimus possimus.",
      id: 4,
    },
  ];

  return (
    <div>
      <div className="h-16 bg-red-400 fixed top-0 w-full">{room}</div>
      <div className="my-16 py-2 px-4">
        {chat.map((item) => (
          <div
            key={item.id}
            className={`${item.author === me ? "text-right" : ""}`}
          >
            <p className="">{item.msg}</p>
            <p className="text-green-400">{item.author}</p>
          </div>
        ))}
      </div>
      <div className="h-16 bg-red-400 fixed bottom-0 w-full">
        <input type="text" className="border-2 border-red-400" />
        <button className="border-2 border-red-500">add</button>
      </div>
    </div>
  );
};

export default Room;
