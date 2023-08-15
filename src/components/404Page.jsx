import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-red-400 text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-400 mb-2">Ooops, page not found!</p>
            <Link to="/" className="text-blue-500 underline">Back to Home</Link>
        </div>
    );
}

export default NotFound;