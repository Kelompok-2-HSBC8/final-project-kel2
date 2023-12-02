import { useState, useEffect } from "react";
import MainLayout from "./layouts/Main.layout";
import Middleware from "./routers/Middleware.Router";
import LoginPage from "./pages/LoginPage";
import TrendPage from "./pages/TrendPage";
import NotifikasiPage from "./pages/NotifikasiPage";
import BerandaPage from "./pages/BerandaPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TweetPage from "./pages/TweetPage";
import supabase from "./services/supabase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/user";

function App() {
    const [session, setSession] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session?.user);
            localStorage.setItem("token", session?.access_token);
        });

        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        dispatch(setUser(session));
    }, [dispatch, session]);

    if (!session) {
        return (
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/"
                    element={<Middleware page={<MainLayout />} />}
                />
            </Routes>
        );
    }
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            {/* protected routenya  */}
            <Route path="/" element={<Middleware page={<MainLayout />} />}>
                <Route path="/" element={<BerandaPage />} />
                <Route path="/tweet/:id" element={<TweetPage />} />
                <Route path="/trend" element={<TrendPage />} />
                <Route path="/notifikasi" element={<NotifikasiPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
