import Badge from "./components/badge";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col-reverse gap-8 md:flex-row items-center justify-between mb-5 tracking-tight">
        <div className="flex flex-col gap-6 mb-4 md:mb-0">
          <h1 className="text-[42px] font-bold">eduard lupu</h1>
          <p className="text-sm dark:text-neutral-300">
            software engineer @{" "}
            <Badge href={"https://kingfisher.com/"}>Kingfisher</Badge>
          </p>
          <p className="text-sm dark:text-neutral-300">
            MSc in software engineering @{" "}
            <Badge href={"https://www.ubbcluj.ro/en/"}>BBU</Badge>
          </p>
        </div>
        <img
          src={"/profile.webp"}
          alt="eduard lupu's profile pic"
          className="rounded-xl object-cover w-1/2 md:w-1/3 h-auto"
        />
      </div>
    </section>
  );
}
