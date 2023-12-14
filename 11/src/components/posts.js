import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../services/postsService';

const Posts = () => {

    const {data, isLoading} = useQuery({
        queryKey: ['fetchPosts'],
        queryFn: fetchPosts,
        refetchOnMount: false,
    })

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <ul className='post'>
            {data.map((listItem) => (
                <li key={listItem.id}>{listItem.title}</li>
            ))}
        </ul>
    )
}

export default Posts;