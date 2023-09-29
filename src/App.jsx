import MainLayout from "./layouts/Main.layout";
import TrendPage from "./pages/TrendPage";
import NotifikasiPage from "./pages/NotifikasiPage";
import BerandaPage from "./pages/BerandaPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TweetPage from "./pages/TweetPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<BerandaPage />} />
                <Route path="/tweet/:id" element={<TweetPage />} />
                <Route path="/trend" element={<TrendPage />} />
                <Route path="/notifikasi" element={<NotifikasiPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
