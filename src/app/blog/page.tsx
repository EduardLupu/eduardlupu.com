import { BlogPosts } from "src/app/components/posts";
import { LandingBackground } from "@/app/background";

export default function Page() {
  return (
    <section>
      <LandingBackground variant="layout" />
      <BlogPosts />
    </section>
  );
}
