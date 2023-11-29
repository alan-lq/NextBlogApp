import type {Post} from '@prisma/client';
import Link from 'next/link';

type Props = {
   post: Post,
   className?: string,
}

const PostCard = ({post, className}: Props) => {
  return (
    <Link href={`/blog/${post.id}`} className={`${className} hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black ease-out hover:translate-y-1 transition-all rounded p-4  border-2 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]`}>
      <h3 className='text-2xl sm:text-3xl mb-3'>{post.title}</h3>
      <p>{post.content}</p>
    </Link>
  )
}

export default PostCard