import { Navigate, Route, Routes } from "react-router-dom"
import { JournalSearchPage } from "../pages/JournalSearchPage"
import { JournalPageHome } from "../pages/JournalHomePage"
import { JournalRecommenderPage } from "../pages/JournalRecommenderPage"
import { JournalFavoritesPage } from "../pages/JournalFavoritesPage"
import { LettersPage } from "../pages/LettersPage"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<JournalPageHome />} />
        <Route path="/buscar" element={<JournalSearchPage />} />
        <Route path="/generador" element={<JournalRecommenderPage />} />
        <Route path="/letras" element={ <LettersPage /> } />
        <Route path="/favorites" element={<JournalFavoritesPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
