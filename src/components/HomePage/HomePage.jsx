import { Link } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
    
    return(
        <>
            <div className="link-container">
                <Link to="/new-character">New Character</Link><br></br>
                <Link to="/select-character">Existing Characters</Link>
            </div>
        </>
    )
}

export default HomePage;