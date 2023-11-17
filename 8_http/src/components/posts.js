import {useEffect, useState} from 'react';

const Posts = () => {

    const [list, setList] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((response) => {
    //             console.log(response);
    //         })
    // }, []);

    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        //     const data = await response.json();
        //     console.log(data);
        // }
        // fetchData();

        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setList(data);
        })()
    }, []);

    return (
        <ul className='post'>
            {list.map((listItem) => (
                <li key={listItem.id}>{listItem.title}</li>
            ))}
        </ul>
    )
}

export default Posts;