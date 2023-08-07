import { Metadata } from "next";
import { getDictionary } from "../../../../get-dictionary";
import { LParam } from "../layout";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Saison Aoyama offers many different services, including perms, hair styling, hair massage and shampoo, and much more.",
};

export default async function Services({ params }: { params: LParam }) {
  const t = await getDictionary(params.lang);

  const services = t["navbar"]["services"];

  return (
    <div className="pack-content mt-16">
      <div className="flex flex-col">
        <ol className="flex flex-col gap-32">
          <li className="">
            <span className="flex gap-8 text-7xl font-extrabold ">
              <span className="w-16 dark:text-zinc-700">1</span>
              <h2 className="capitalize">{services}</h2>
            </span>

            <ul className="flex gap-0">
              <li className=""></li>
            </ul>
          </li>
          <li className="">
            <span className="flex gap-8 text-7xl font-extrabold ">
              <span className="w-16 dark:text-zinc-700">2</span>
              <h2 className="capitalize">Appointment</h2>
            </span>
          </li>
          <li className="">
            <span className="flex gap-8 text-7xl font-extrabold ">
              <span className="w-16 dark:text-zinc-700">3</span>
              <h2 className="capitalize">Location</h2>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
