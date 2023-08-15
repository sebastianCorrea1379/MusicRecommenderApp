import { Navigate, Route, Routes } from "react-router-dom"
import { JournalSearchPage } from "../pages/JournalSearchPage"
import { JournalPageHome } from "../pages/JournalHomePage"
import { JournalRecommenderPage } from "../pages/JournalRecommenderPage"
import { JournalFavoritesPage } from "../pages/JournalFavoritesPage"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<JournalPageHome />} />
        <Route path="/buscar" element={<JournalSearchPage />} />
        <Route path="/recomendacion" element={<JournalRecommenderPage />} />
        <Route path="/favorites" element={<JournalFavoritesPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
