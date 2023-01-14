import Message from "./Message";
import Plus from "@/utils/icons/Plus";

const App = () => {
  return (
    <div className="p-8 pt-4">
      <h1 className="mb-4">Chatting Room</h1>
      <section className="flex flex-col">
        <Message />
        <Message />
        <Message />
        <Message />
      </section>
    </div>
  );
};

export default App;
