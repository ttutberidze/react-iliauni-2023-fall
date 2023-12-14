import { useSelector } from "react-redux";

const Display = () => {

    const value = useSelector((state) => state.counter.value)

    return (
        <div>
            {value}
        </div>
    )
}

export default Display;