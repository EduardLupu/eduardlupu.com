import Image from "next/image";
import Badge from "./components/badge";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col-reverse gap-8 md:flex-row items-center justify-between mb-5 tracking-tight">
        <div className="flex flex-col gap-2.5 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold">eduard lupu</h1>
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
          className="rounded-xl object-cover w-1/2 md:w-1/3 h-auto"
          quality={100}
        />
      </div>
    </section>
  );
}
