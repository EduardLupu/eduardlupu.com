import Image from "next/image";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Page() {
  return (
    <section>
      <div className="flex items-center justify-between mb-5 tracking-tight">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-4xl font-bold">eduard lupu</h1>
          <p className="text-gray-400">
            full-stack developer @{" "}
            <Badge href={"https://bitstone.com/"}>BitStone</Badge>
          </p>
          <p className="text-gray-400">
            MSc in software engineering @{" "}
            <Badge href={"https://www.ubbcluj.ro/en/"}>BBU</Badge>
          </p>
        </div>
        <Image
          src={"/profile.webp"}
          alt="Eduard Lupu's profile pic"
          width={1362}
          height={1502}
          className="rounded-xl object-cover w-1/3 h-auto"
          quality={100}
        />
      </div>
    </section>
  );
}
