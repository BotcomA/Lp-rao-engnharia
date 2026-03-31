import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SectorsPage from "./pages/SectorsPage";
import ResourcesPage from "./pages/ResourcesPage";
import AnalysisPage from "./pages/AnalysisPage";

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [location.pathname]);

    return null;
}

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/a-rao" element={<AboutPage />} />
                <Route path="/servicos" element={<ServicesPage />} />
                <Route path="/setores" element={<SectorsPage />} />
                <Route path="/recursos" element={<ResourcesPage />} />
                <Route path="/solicitar-analise" element={<AnalysisPage />} />
            </Routes>
        </>
    );
}
