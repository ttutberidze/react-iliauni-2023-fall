import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../store/actions/postActions';

const Posts = () => {

    const dispatch = useDispatch()
    const {data, state} = useSelector(state => state.post);

    useEffect(() => {
        if(state === 'INITIAL') {
            dispatch(fetchPosts())
        }
    }, [dispatch, state]);

    if(state === 'LOADING') {
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