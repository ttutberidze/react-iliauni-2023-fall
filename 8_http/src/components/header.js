import { useTheme } from '../context/theme';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const {theme} = useTheme();

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    return (
        <div style={theme}>
            Header
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Header;