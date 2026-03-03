
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SectorsPage from "./pages/SectorsPage";
import ResourcesPage from "./pages/ResourcesPage";
import AnalysisPage from "./pages/AnalysisPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-rao" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/setores" element={<SectorsPage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/solicitar-analise" element={<AnalysisPage />} />
        </Routes>
    );
}
