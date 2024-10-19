import { Link } from "react-router-dom";

function NotFoundPage(){
    return (
        <div>
            <h3>This Page does not exist</h3>
            <Link to={'/recipe-list'}>Go to List Page</Link>
        </div>
    )
}
export default NotFoundPage;