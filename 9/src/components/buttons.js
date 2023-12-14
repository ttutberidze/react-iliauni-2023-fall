import {useDispatch} from 'react-redux';
import {update} from '../store/actions/counterActions';

const Buttons = ()  => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(update(-5))}>-5</button>
            <button onClick={() => dispatch(update(-1))}>-</button>
            <button onClick={() => dispatch(update(1))}>+</button>
            <button onClick={() => dispatch(update(5))}>+5</button>
        </div>
    )
}

export default Buttons;