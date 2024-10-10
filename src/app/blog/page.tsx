import { BlogPosts } from "src/app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="text-xl mb-8 text-neutral-800 dark:text-neutral-300">
        thoughts, music, tech... etc.
      </h1>
      <BlogPosts />
    </section>
  );
}
