"use client";

import { Dialog } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageProps } from "next/image";
import { cloneElement, isValidElement, useState } from "react";
import { useTranslation } from "../DictionaryProvider/DictionaryProvider";

const replaceImageProps: Partial<ImageProps> = {
  fill: false,
  width: 700,
  height: 700,
  className: "w-full h-full object-contain",
};

export type PhotoEnlargeProps = {
  children: React.ReactElement<ImageProps>;
};

export const PhotoEnlarge = ({ children }: PhotoEnlargeProps) => {
  const t = useTranslation();
  let [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  // just doing this so prettier doesn't make the ternary ugly:
  const isValid = isValidElement(children);
  const Photo = isValid ? cloneElement(children, replaceImageProps) : <></>;

  return (
    <>
      <button type="button" onClick={open} className="relative h-full w-full">
        {children}
      </button>

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
                  {Photo}
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
                    className="absolute top-3 right-0 flex gap-1 justify-center items-center w-full text-zinc-400 hover:text-white uppercase font-medium text-sm"
                  >
                    <span className="">{t?.["close"]}</span>
                    <IconX size={20} stroke={2.5} />
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
