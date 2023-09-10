import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";

const Middleware = ({ page }) => {
    const location = useLocation();
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    }
    return page;
};

Middleware.propTypes = {
    page: PropTypes.element,
};

export default Middleware;
