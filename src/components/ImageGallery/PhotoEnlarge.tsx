"use client";
import { Dialog } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export type PhotoEnlargeProps = {
  src: string;
};

export const PhotoEnlarge = ({ src }: PhotoEnlargeProps) => {
  let [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <>
      <button
        type="button"
        className="absolute inset-0 cursor-pointer"
        onClick={open}
      ></button>

      <AnimatePresence>
        {isOpen && (
          <Dialog static open={isOpen} onClose={close} className="relative">
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <motion.div
              className="fixed inset-0 bg-black/80"
              aria-hidden="true"
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(2px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ ease: "easeOut" }}
            />
            <div
              className="fixed inset-0 grid place-items-center"
              onClick={close}
            >
              <div className="relative">
                <Dialog.Panel
                  onClick={(e) => {
                    if (e.target !== e.currentTarget) return;
                    setIsOpen(false);
                  }}
                  className="relative max-h-[90vh] h-min overflow-hidden"
                  as={motion.div}
                  initial={{ y: "100vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100vh", opacity: 0 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  <Image
                    src={src}
                    alt=""
                    width={700}
                    height={700}
                    quality={100}
                    className="w-full h-full object-contain"
                  />
                </Dialog.Panel>
                <motion.div
                  className="relative"
                  initial={{ y: "100vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100vh", opacity: 0 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  <button
                    type="button"
                    onClick={close}
                    className="absolute top-3 right-0 flex gap-1 justify-center items-center w-full text-zinc-300 hover:text-rose-500 hover:font-bold uppercase font-medium text-sm"
                  >
                    <span className="">Close</span>
                    <IconX />
                  </button>
                </motion.div>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
