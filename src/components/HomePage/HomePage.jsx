import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import './HomePage.css'

const HomePage = () => {
    
    return(
        <>
            <div className="link-container">
                <Link to="/new-character"><Button sx={{m:1}} variant="contained">New Character</Button></Link><br></br>
                <Link to="/select-character"><Button sx={{m:1}} variant="contained">Existing Characters</Button></Link>
            </div>
        </>
    )
}

export default HomePage;