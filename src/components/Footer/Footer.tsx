export const Footer = () => {
  return (
    <div className="w-full text-zinc-500 bg-zinc-800/20">
      <nav className="pack-content w-full flex flex-col min-h-[20rem]">
        <p className="py-8 mt-auto text-center">
          {
            "This is a demo site made for Lex Fridman created by Sam Alhaqab. All content belongs to Lex Fridman. You can contact me (the developer) here: "
          }
          <span className="text-white font-bold">
            {"holxsam.dev@gmail.com"}
          </span>
        </p>
      </nav>
    </div>
  );
};
