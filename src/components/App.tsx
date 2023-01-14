import Message from "./Message";
import Plus from "@/utils/icons/Plus";

const App = () => {
  return (
    <div>
      <h1>Chatting Room</h1>
      <section>
        <Message />
        <Message />
        <Message />
        <Message />
      </section>
      <nav className="absolute bottom-0 flex h-12 w-full justify-center border-2 border-white border-t-black">
        <div className="absolute -top-6">
          <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-[#fd5958] ">
            <Plus className="h-8 w-8 rounded-full bg-white text-red-400 " />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
