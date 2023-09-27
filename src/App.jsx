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

function App() {
    return (
        <Routes>
            {/* protected routenya  */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Middleware page={<MainLayout />} />}>
                <Route path="/" element={<BerandaPage />} />
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
