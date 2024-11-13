import blogs from '../data/blogs'
import BlogCard from './BlogCard/BlogCard'

export default function AppMain() {
    return (
        <main>
            <section>
            {blogs.map(blog => <BlogCard key={blog.id} img={blog.image} title={blog.title} content={blog.content} published={blog.published} />)}
            </section>
        </main>
    )
}