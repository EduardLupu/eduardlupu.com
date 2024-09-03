import { BlogPosts } from "src/app/components/posts";

export const metadata = {
  title: "Blog",
  description: `Eduard's blog.`,
};

export default function Page() {
  return (
    <section>
      <h1 className="text-xl mb-16 text-gray-400">work in progress...</h1>
      <BlogPosts />
    </section>
  );
}
