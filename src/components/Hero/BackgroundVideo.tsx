"use client";

import { useHasMounted } from "@/hooks/useHasMounted";
import { motion, useScroll, useTransform } from "framer-motion";

export const BackgroundVideo = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <motion.div
      className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]"
      style={{ y, opacity }}
    >
      <div className="scale-[calc(16/9)] md:scale-100">
        <div className="flex aspect-square items-center md:aspect-video transition-[opacity] opacity-50 dark:opacity-40 pointer-events-none">
          <video
            tabIndex={-1}
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
            className="w-full h-full"
          >
            <source
              src="https://wnehbgvssdmlwbdtptjk.supabase.co/storage/v1/object/sign/videos/Aoyama.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlb3MvQW95YW1hLm1wNCIsImlhdCI6MTY5MTE5NzAwMSwiZXhwIjoyMDA2NTU3MDAxfQ.ElqSoh_xA3XcbrST-avxfDrNdwmsoqanJ_bKWDpyRNU&t=2023-08-05T00%3A56%3A40.799Z"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="absolute -inset-[3px] bg-gradient-to-b from-transparent via-white/50 to-white dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-900" />
      <div className="absolute -inset-[3px] bg-gradient-to-l from-transparent via-white/50 to-white dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-900 hidden lg:block" />
    </motion.div>
  );
};

export const MountedBGVideo = () => {
  const mounted = useHasMounted();

  return (
    <div id="hero-section-bg" className="-z-10 absolute inset-0 -top-16">
      {mounted && <BackgroundVideo />}
    </div>
  );
};
