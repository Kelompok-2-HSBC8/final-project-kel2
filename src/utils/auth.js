const auth = {
    isAuthenticated: () => {
        const token = localStorage.getItem("token");
        return !!token;
    },
    storeAuthCredential: (token) => {
        localStorage.setItem("token", token);
    },
    logout: () => {
        localStorage.removeItem("token");
    },
};

export default auth;
