import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-blue-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/">booking sys</Link>
                </span>
                <span className="flex space-x-2">
                    <Link to="/sign-in" className="flex items-center bg-white text-blue-600 px-3 font-bold hover:bg-gray-100">Sign in</Link>
                </span>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Header;