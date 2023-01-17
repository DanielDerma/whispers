import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Plus from "@/utils/icons/Plus";
import Copy from "@/utils/icons/Copy";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isCpy, setIsCpy] = useState(false);

  function closeModal() {
    setIsAdd(false);
    setIsCpy(false);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function hadleCreateRoom(e: any) {
    e.preventDefault();
    console.log(e.target[0].value);
    setIsAdd(true);
  }

  function copyLink() {
    navigator.clipboard.writeText("https://whispers.vercel.app/");
    setIsCpy(true);
  }

  return (
    <>
      <div className="absolute bottom-0 z-50 flex h-8 w-full justify-center border-t-2 border-black bg-white">
        <button
          onClick={openModal}
          className="relative bottom-6 grid h-10 w-10 place-content-center rounded-full bg-[#ff5858] p-6"
        >
          <div className="grid place-content-center rounded-full bg-white">
            <Plus className="h-6 w-6 text-[#ff5858]" />
          </div>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 text-gray-900"
                  >
                    {isAdd ? "Room created 🎉🎉🎉" : "Create a room"}
                  </Dialog.Title>
                  {isAdd ? (
                    <>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Your room has been created. You can now invite your
                          friends with the link below.
                        </p>
                        <div className="my-2 flex items-center gap-x-2">
                          <p className="text-sm text-[#49beb7]">
                            www.google.com
                          </p>
                          <button onClick={copyLink}>
                            <Copy />
                          </button>
                          {isCpy && (
                            <p className="text-sm text-green-400">Copied!</p>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 text-right">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </>
                  ) : (
                    <form onSubmit={hadleCreateRoom}>
                      <div className="mt-2">
                        <input
                          type="search"
                          id="default-search"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Name of the room"
                          required
                        />
                      </div>

                      <div className="mt-4 text-right">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
