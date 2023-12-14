import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePosts } from "../services/postsService";

const Home = () => {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationKey: ['update'],
        mutationFn: updatePosts,
        onSuccess: (response) => {
            console.log(response);
            queryClient.invalidateQueries({
                queryKey: ['fetchPosts'],
                type: 'all'
            })
        }
    })

    return (
        <div>
            <div>Home</div>
            <button onClick={() => mutate({hello: 'World'})}>Update</button>
        </div>
    )
}

export default Home;