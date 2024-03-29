import Message from "@/components/Message";
import SettingsButton from "@/components/Settings";
import LeftArrow from "@/utils/icons/LeftArrow";
import Micro from "@/utils/icons/Micro";
import Send from "@/utils/icons/Send";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const LIST = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    sender: "@daniel",
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor.",
    sender: "@nina",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit labore facilis quo!",
    sender: "@nina",
  },
  {
    id: 4,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum.",
    sender: "@daniel",
  },
  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?",
    sender: "@nina",
  },
  {
    id: 6,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?",
    sender: "@nina",
  },
  {
    id: 7,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?",
    sender: "@nina",
  },
  {
    id: 8,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?",
    sender: "@nina",
  },
  {
    id: 9,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?",
    sender: "@daniel",
  },
];

const ME = "@daniel";

const Settings = () => {
  const router = useRouter();
  const [input, setInput] = useState("")
  const chatScroll = useRef<HTMLDivElement>(null);
  const { uid } = router.query;

  useEffect(() => {
    chatScroll.current?.scrollTo(0, chatScroll.current.scrollHeight);
  }, []);

  return (
    <div className="relative h-full">
      <header className="px-5 flex h-16  items-center justify-between absolute bg-white w-full z-50">
        <div className="flex items-center gap-x-2">
          <Link href="/">
            <div className="grid h-8 w-8 place-content-center items-center">
              <LeftArrow />
            </div>
          </Link>

          <div className="flex items-center gap-x-3">
            <Image
              src="https://avatar.vercel.sh/whispers"
              width={35}
              height={35}
              alt="Avatar"
              className="rounded-full"
            />
            <div className="mx-auto flex flex-grow flex-col">
              <div className="text-sm font-semibold">Lorem, ipsum.</div>
              <div className="text-sm font-semibold text-gray-400">
                +50 participants
              </div>
            </div>
          </div>
        </div>
        <SettingsButton />
      </header>
      <section
        ref={chatScroll}
        className="flex max-h-[calc(100%_-_64px)] flex-col overflow-y-auto px-5 pt-14"
      >
        {LIST.map((elem) => (
          <Message
            key={elem.id}
            id={elem.id}
            content={elem.content}
            sender={elem.sender}
            time={"20/23/32"}
          />
        ))}
      </section>
      <div className="absolute bottom-0 z-50 h-20 w-full flex justify-center bg-white items-center">
        <div className="w-5/6 h-16 border-2 border-black rounded-3xl px-6 gap-x-3 flex items-center">
          <input
            type="search"
            className="block w-full rounded-lg bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none"
            placeholder="Name of the room"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {
            input === "" ? <Micro /> : <Send />
          }
        </div>
      </div>
    </div>
  );
};

export default Settings;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };

  return {
    props: {
      initialSession: session,
      user: session.user
    }
  };
};

