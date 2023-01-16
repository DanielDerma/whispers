import Contact from "./Contact";
import Plus from "@/utils/icons/Plus";

const App = () => {
  return (
    <div className="relative h-full overflow-hidden pt-6">
      <h1 className="mx-9 mb-4">Chatting Room</h1>
      <section className="flex h-full flex-col gap-y-6 overflow-y-auto px-10 pb-28">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15].map((_, i) => (
          <Contact key={i} lastMessage="Hello, how are you?" name="Cesar" />
        ))}
      </section>
      <div className="absolute bottom-0 z-50 flex h-8 w-full justify-center border-t-2 border-black bg-white">
        <div className="relative bottom-6 grid h-10 w-10 place-content-center rounded-full bg-[#ff5858] p-6">
          <div className="grid place-content-center rounded-full bg-white">
            <Plus className="h-6 w-6 text-[#ff5858]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
