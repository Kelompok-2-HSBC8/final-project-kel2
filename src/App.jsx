import { useState, useEffect } from "react";
import MainLayout from "./layouts/Main.layout";
import Middleware from "./routers/Middleware.Router";
import LoginPage from "./pages/LoginPage";
import TrendPage from "./pages/TrendPage";
import NotifikasiPage from "./pages/NotifikasiPage";
import BerandaPage from "./pages/BerandaPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TweetPage from "./pages/TweetPage";
import supabase from "./services/supabase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/user";
import ProfilePageById from "./pages/ProfilePageById";

function App() {
    const [session, setSession] = useState(null);
    const location = useLocation();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            localStorage.setItem("token", session?.access_token);
        });

        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
    }, [])

    if (!session) {
        return (
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="*"
                    element={
                        <Navigate
                            to={"/login"}
                            state={{ from: location }}
                            replace
                        />
                    }
                ></Route>
            </Routes>
        );
    }
    return (
        <Routes>
            {/* protected routenya  */}
            {location.pathname === "/login" && (
                <Navigate to={"/"} state={{ from: location }} replace />
            )}
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<BerandaPage />} />
                <Route path="/tweet/:id" element={<TweetPage />} />
                <Route path="/trend" element={<TrendPage />} />
                <Route path="/notifikasi" element={<NotifikasiPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/:id" element={<ProfilePageById />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
