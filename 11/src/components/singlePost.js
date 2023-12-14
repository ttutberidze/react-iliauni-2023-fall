import {useLocation, useParams} from 'react-router-dom';

const SinglePost = () => {
    const location = useLocation();
    const {postId, slug} = useParams();
    console.log(location, {postId, slug});
    return (
        <div>Single Page. Post ID: {postId}</div>
    )
}

export default SinglePost;