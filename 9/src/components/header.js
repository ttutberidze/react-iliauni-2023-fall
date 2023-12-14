import {useNavigate} from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            Header
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Header;