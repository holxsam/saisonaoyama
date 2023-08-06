export const OwnerMessage = () => {
  return (
    <div className="flex justify-center py-10 px-4 mt-12 bg-zinc-100/80 dark:bg-zinc-800/50 ">
      <figure className="flex flex-col gap-4 max-w-md backdrop-blur-sm text-sm text-zinc-900 dark:text-zinc-300 font-medium">
        <blockquote className="flex flex-col gap-4">
          <span>
            Thank you for your continued patronage of Saison Aoyama. Aoyama
            celebrated its 20th anniversary on January 4, 2023. We would like to
            take this opportunity to express our deepest gratitude for the
            support of everyone who has visited our salon.
          </span>
          <span>
            All of our stylists will serve you with the utmost care and
            hospitality, and we look forward to your continued patronage in the
            future.
          </span>
        </blockquote>
        <figcaption className="self-end dark:text-white mt-4">
          &mdash; Mari Takahashi, <cite>Owner</cite>
        </figcaption>
      </figure>
    </div>
  );
};
