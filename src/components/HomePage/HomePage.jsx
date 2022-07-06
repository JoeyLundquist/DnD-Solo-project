import { Link } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
    
    return(
        <>
            <div className="link-container">
                <Link>New Character</Link><br></br>
                <Link>Existing Characters</Link>
            </div>
        </>
    )
}

export default HomePage;