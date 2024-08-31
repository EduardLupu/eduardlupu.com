import { BlogPosts } from 'src/app/components/posts'

export const metadata = {
  title: 'Blog',
  description: `Eduard's blog.`,
}

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  )
}
