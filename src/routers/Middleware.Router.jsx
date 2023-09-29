//Middleware.Router.jsx
import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../utils/auth";

const Middleware = ({ page }) => {
    const location = useLocation();
    const isAuthenticated = auth.isAuthenticated();

    if (!isAuthenticated) {
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    }

    return page;
};

Middleware.propTypes = {
    page: PropTypes.element,
};

export default Middleware;
