"use client";
import { useHasMounted } from "@/hooks/useHasMounted";
import {
  AnimatePresence,
  AnimationProps,
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const BackgroundPlayback = () => {
  const scrollRef = useRef<HTMLElement>(null!);
  const { scrollY } = useScroll({
    container: scrollRef,
    layoutEffect: false,
  });
  const y = useTransform(scrollY, [0, 600], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useLayoutEffect(() => {
    scrollRef.current = document.body;
  }, []);

  return (
    <>
      <motion.div
        className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]"
        style={{ y, opacity }}
      >
        <div className="scale-[calc(16/9)] md:scale-100">
          <div className="flex aspect-square items-center md:aspect-video transition-[opacity] opacity-50 dark:opacity-40">
            <video
              tabIndex={-1}
              autoPlay={true}
              controls={false}
              loop={true}
              muted={true}
              className="w-full h-full pointer-events-none"
            >
              <source
                src="https://wnehbgvssdmlwbdtptjk.supabase.co/storage/v1/object/sign/videos/Aoyama.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlb3MvQW95YW1hLm1wNCIsImlhdCI6MTY5MTE5NzAwMSwiZXhwIjoyMDA2NTU3MDAxfQ.ElqSoh_xA3XcbrST-avxfDrNdwmsoqanJ_bKWDpyRNU&t=2023-08-05T00%3A56%3A40.799Z"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="absolute -inset-[3px] bg-gradient-to-b from-transparent via-white/50 to-white dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-900" />
        <div className="absolute -inset-[3px] hidden bg-gradient-to-l from-transparent via-white/50 to-white dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-900 lg:block" />
      </motion.div>
    </>
  );
};

export default function MountedPlayback() {
  const mounted = useHasMounted();

  return (
    <div id="hero-section-bg" className="-z-10 absolute inset-0 -top-16">
      {mounted && <BackgroundPlayback />}
    </div>
  );
}
