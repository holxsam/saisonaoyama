import { Dictionary } from "@/app/[lang]/layout";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconPhoneOutgoing,
  IconMail,
  IconMap,
  IconMapPinFilled,
} from "@tabler/icons-react";
import { ReactNode } from "react";
import { Logo } from "../Logo/Logo";
import { JapaneseLogo } from "../Logo/JapaneseLogo";

const HOURS: { [key: string]: string } = {
  mon: "9 AM - 6 PM",
  tues: "9 AM - 6 PM",
  wed: "9 AM - 6 PM",
  thurs: "9 AM - 6 PM",
  fri: "9 AM - 6 PM",
  sat: "9 AM - 6 PM",
  sun: "9 AM - 6 PM",
};

const ADDRESS = "3934 Sepulveda Blvd.";
const CITY = "Torrance, CA 90505";
export const TEL = "310-791-0118";
export const TELADDR = "+3107910118";
const EMAIL = "saisonaoyama@gmail.com";

const FAQLIST = [
  "wifi-available",
  "no-walk-ins",
  "appointment-only",
  "closed-on-national-holdiays",
] as const;

type SocialsInfo = {
  name: string;
  link: string;
  icon: any;
};

const SOCIALS: SocialsInfo[] = [
  {
    name: "instagram",
    link: "https://www.instagram.com/karate_mari/?igshid=YmMyMTA2M2Y%3D",
    icon: (
      <IconBrandInstagram className="hover:text-fuchsia-600"></IconBrandInstagram>
    ),
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/saisonaoyama",
    icon: (
      <IconBrandFacebook className="hover:text-blue-700"></IconBrandFacebook>
    ),
  },
  {
    name: "yelp",
    link: "https://www.yelp.com/biz/saison-de-aoyama-torrance",
    icon: (
      <div className="h-[1.5em] w-[1.5em] flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.25em"
          width="1.25em"
          viewBox="0 0 384 512"
          className="fill-current hover:text-red-600"
        >
          <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z" />
        </svg>
      </div>
    ),
  },
];

const hours = () => {
  return Object.keys(HOURS).map((day) => {
    return (
      <div key={day} className="w-[12rem] flex justify-between">
        <dt className="uppercase font-semibold">{day}</dt>
        <dd className="">{HOURS[day]}</dd>
      </div>
    );
  });
};

const sectionH = (title: string) => {
  return (
    <h3 className="text-zinc-900 dark:text-zinc-200 w-[15rem] text-md font-bold dark:font-medium uppercase">
      {title}
    </h3>
  );
};

export const Footer = ({ dictionary: t }: { dictionary: Dictionary }) => {
  const s = t["footer"];
  const socialMedia = s["social-media"];
  const contactUs = s["contact-us"];
  const operatingHours = s["operating-hours"];
  const faq = s["faq"];
  const mon = s["mon"];
  const tues = s["tues"];
  const wed = s["wed"];
  const thurs = s["thurs"];
  const fri = s["fri"];
  const sat = s["sat"];
  const sun = s["sun"];
  const am = s["am"];
  const pm = s["pm"];
  const wifiAvailable = s["wifi-available"];
  const noWalkIns = s["no-walk-ins"];
  const appointmentOnly = s["appointment-only"];
  const closedOnNationalHolidays = s["closed-on-national-holdiays"];

  return (
    <div
      id="footer"
      className="w-full bg-zinc-100 dark:text-zinc-500 dark:bg-zinc-800/20 scroll-mt-24"
    >
      <nav className="pack-content w-full flex flex-col min-h-[20rem] py-[4rem] px-[2rem]">
        <div className="w-full flex flex-col pb-[3rem] gap-20 items-center">
          <div className="md:w-full w-[300px] flex flex-col justify-between">
            <Logo />
            <JapaneseLogo />
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 justify-center">
                {SOCIALS.map((social, index) => {
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-[300px] gap-20 md:flex-row md:gap-0 md:w-full">
            <div className="flex flex-col gap-4">
              {sectionH(contactUs)}
              <ul className="text-sm flex flex-col w-[15rem] gap-1">
                <li>
                  <a
                    className="flex flex-row nowrap gap-2 hover:underline"
                    href={`https://www.google.com/maps/search/?api=1&query=${ADDRESS.split(
                      " "
                    )}+${CITY.split(" ")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <IconMap height="1.2rem" width="1.2rem"></IconMap> */}
                    <IconMapPinFilled
                      height="1.2rem"
                      width="1.2rem"
                      className="mt-1"
                    ></IconMapPinFilled>
                    <address className="not-italic leading-normal">
                      {ADDRESS} <br /> {CITY}
                    </address>
                  </a>
                </li>
                <li>
                  <a
                    className="flex flex-row nowrap gap-2 items-center hover:underline"
                    href={`tel:${TELADDR}`}
                  >
                    <IconPhoneOutgoing
                      height="1.2rem"
                      width="1.2rem"
                    ></IconPhoneOutgoing>
                    {TEL}
                  </a>
                </li>
                <li className="italic">
                  <a
                    className="flex flex-row nowrap gap-2 items-center hover:underline"
                    href={`mailto:${EMAIL}`}
                  >
                    <IconMail height="1.2rem" width="1.2rem"></IconMail>
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              {sectionH(operatingHours)}
              <dl className="text-sm w-[15rem] grid grid-rows-7 gap-1 text-zinc-500">
                {/* {hours()} */}
                <div className="w-[12rem] flex justify-between">
                  <dt className="capitalize font-bold">{mon}</dt>
                  <dd className="">{`9am - 6pm`}</dd>
                </div>
                <div className="w-[12rem] flex justify-between">
                  <dt className="capitalize font-bold">{tues}</dt>
                  <dd className="">{`9am - 6pm`}</dd>
                </div>
                <div className="w-[12rem] flex justify-between">
                  <dt className="capitalize font-bold">{wed}</dt>
                  <dd className="">{`9am - 6pm`}</dd>
                </div>
                <div className="w-[12rem] flex justify-between">
                  <dt className="capitalize font-bold">{thurs}</dt>
                  <dd className="">{`9am - 6pm`}</dd>
                </div>
                <div className="w-[12rem] flex justify-between">
                  <dt className="capitalize font-bold">{fri}</dt>
                  <dd className="">{`9am - 6pm`}</dd>
                </div>
                <div className="w-[12rem] flex justify-between">
                  <dt className="capitalize font-bold">{sat}</dt>
                  <dd className="">{`9am - 6pm`}</dd>
                </div>
                <div className="w-[12rem] flex justify-between">
                  <dt className="capitalize font-bold">{sun}</dt>
                  <dd className="">{`9am - 6pm`}</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col gap-4">
              {sectionH(faq)}
              <ul className="text-sm w-[15rem] flex flex-col gap-2">
                {FAQLIST.map((faq, index) => (
                  <li key={faq} className="capitalize">
                    {s[faq]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
