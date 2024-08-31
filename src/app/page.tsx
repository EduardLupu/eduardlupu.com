import { BlogPosts } from 'src/app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        eduard lupu
      </h1>
      <p className="mb-4">
       {'work in progress...'}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
