import { Metadata } from "next";
import { getDictionary } from "../../../../get-dictionary";
import { LParam } from "../layout";
import {
  IconHeart,
  IconPalette,
  IconPhone,
  IconPhoneCall,
  IconPhoneFilled,
  IconRipple,
  IconScissors,
} from "@tabler/icons-react";
import { TEL, TELADDR } from "@/components/Footer/Footer";
import { cn } from "@/utils/utils";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Saison Aoyama offers many different services, including perms, hair styling, hair massage and shampoo, and much more.",
};

type ServicePriceProps = {
  label: string;
  price: string;
};

const ServicePrice = ({ label, price }: ServicePriceProps) => {
  return (
    <div className="flex flex-col transition-[transform] sm:hover:scale-110 cursor-default">
      <span className="text-2xl font-bold capitalize whitespace-nowrap text-zinc-500/50 dark:text-zinc-500">
        {label}
      </span>
      <span className="text-5xl font-extrabold text-zinc-800 dark:text-white">
        ${price}
      </span>
    </div>
  );
};

export default async function Services({ params }: { params: LParam }) {
  const t = await getDictionary(params.lang);

  const s = t["services"];

  const services = t["navbar"]["services"];
  const disclaimer = s["disclaimer"];

  const haircut = s["haircut"];
  const women = s["womens-haircut"];
  const men = s["mens-haircut"];
  const kids = s["kids-haircut"];

  const haircare = s["haircare"];
  const washblow = s["wash-blow"];
  const headspa = s["head-spa"];
  const retouch = s["retouch"];

  const hairdye = s["hair-dye"];
  const singlecolor = s["single-color"];
  const doublecolor = s["double-color"];
  const treatment = s["treatment"];

  const perm = s["perm"];
  const regperm = s["regular-perm"];
  const strperm = s["straight-perm"];

  const appointment = s["appointment"];
  const appointment_only = s["appointment-only"];

  const location = s["location"];
  const locationdesc = s["location-desc"];

  return (
    <div className="pack-content py-16">
      <div className="flex flex-col">
        <ol className="flex flex-col gap-32">
          <li className="flex flex-col gap-12">
            <span className="flex justify-normal sm:justify-center gap-8 text-5xl sm:text-5xl font-extrabold ">
              <span className="w-4 text-zinc-300 dark:text-zinc-700">1</span>
              <h2 className="capitalize text-zinc-800 dark:text-white">
                {services}
              </h2>
            </span>

            <div className="text-zinc-700 font-extralight dark:text-zinc-200 dark:font-thin sm:text-center">
              *{disclaimer}
            </div>

            <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(180px,100%),1fr))] gap-20">
              <li className="group flex flex-col gap-4 min-w-[180px]">
                <h3 className="flex gap-2 items-center text-base uppercase font-medium whitespace-nowrap text-blue-500 dark:text-blue-500">
                  <IconScissors
                    size={24}
                    className="sm:group-hover:animate-bounce-origin"
                  />
                  {haircut}
                </h3>
                <ul className="flex flex-col gap-8">
                  <li className="">
                    <ServicePrice label={women} price="45" />
                  </li>
                  <li className="">
                    <ServicePrice label={men} price="65" />
                  </li>
                  <li className="">
                    <ServicePrice label={kids} price="35" />
                  </li>
                </ul>
              </li>
              <li className="group flex flex-col gap-4 min-w-[180px]">
                <h3 className="flex gap-2 items-center text-base uppercase font-medium whitespace-nowrap text-rose-500 dark:text-rose-500">
                  <IconHeart
                    size={24}
                    className="sm:group-hover:animate-bounce-origin"
                  />
                  {haircare}
                </h3>
                <ul className="flex flex-col gap-8">
                  <li className="">
                    <ServicePrice label={washblow} price="28" />
                  </li>
                  <li className="">
                    <ServicePrice label={headspa} price="68" />
                  </li>
                  <li className="">
                    <ServicePrice label={retouch} price="77" />
                  </li>
                </ul>
              </li>
              <li className="group flex flex-col gap-4 min-w-[180px]">
                <h3 className="flex gap-2 items-center text-base uppercase font-medium whitespace-nowrap text-yellow-400 dark:text-yellow-400">
                  <IconPalette
                    size={24}
                    className="sm:group-hover:animate-bounce-origin"
                  />
                  {hairdye}
                </h3>
                <ul className="flex flex-col gap-8">
                  <li className="">
                    <ServicePrice label={singlecolor} price="100" />
                  </li>
                  <li className="">
                    <ServicePrice label={doublecolor} price="120" />
                  </li>
                  <li className="">
                    <ServicePrice label={treatment} price="65" />
                  </li>
                </ul>
              </li>

              <li className="group flex flex-col gap-4 min-w-[180px]">
                <h3 className="flex gap-2 items-center text-base uppercase font-medium whitespace-nowrap text-emerald-500 dark:text-emerald-500">
                  <IconRipple
                    size={24}
                    className="sm:group-hover:animate-bounce-origin"
                  />
                  {perm}
                </h3>
                <ul className="flex flex-col gap-8">
                  <li className="">
                    <ServicePrice label={regperm} price="127" />
                  </li>
                  <li className="">
                    <ServicePrice label={strperm} price="235" />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-8 sm:items-center">
            <span className="flex justify-normal sm:justify-center gap-8 text-5xl sm:text-5xl font-extrabold ">
              <span className="w-4 text-zinc-300 dark:text-zinc-700">2</span>
              <h2 className="capitalize text-zinc-800 dark:text-white">
                {appointment}
              </h2>
            </span>

            <p className="font-light max-w-lg text-zinc-500 dark:text-zinc-400 sm:text-center">
              {appointment_only}
            </p>

            <a
              href={`tel:${TELADDR}`}
              className={cn(
                "rounded-full flex items-center gap-2 outline-none appearance-none pl-4 pr-6 py-3 font-mono font-bold text-2xl hover:underline focus-visible:underline whitespace-nowrap w-min ",
                "text-white animate-gradient-x bg-gradient-to-r from-rose-500 to-blue-500"
              )}
            >
              <span className="grid place-items-center bg-white rounded-full w-10 aspect-square text-pink-500">
                <IconPhone size={28} />
              </span>

              {TEL}
            </a>
          </li>
          <li className="flex flex-col gap-8 sm:items-center">
            <span className="flex justify-normal sm:justify-center gap-8 text-5xl sm:text-5xl font-extrabold ">
              <span className="w-4 text-zinc-300 dark:text-zinc-700">3</span>
              <h2 className="capitalize text-zinc-800 dark:text-white">
                {location}
              </h2>
            </span>

            <p className="font-light max-w-lg text-zinc-500 dark:text-zinc-400 sm:text-center">
              {locationdesc}
            </p>

            <iframe
              lang="ja"
              className="w-full h-[600px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1657.247144727183!2d-118.35534482268343!3d33.82536134106728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4b2f9e0e2437%3A0x923fb6f7c0851759!2sSaison%20de%20Aoyama!5e0!3m2!1sen!2sus!4v1691398680661!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </li>
        </ol>
      </div>
    </div>
  );
}
