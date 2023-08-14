import { Navigate, Route, Routes } from "react-router-dom"
import { JournalSearchPage } from "../pages/JournalSearchPage"
import { JournalPageHome } from "../pages/JournalHomePage"
import { JournalRecommenderPage } from "../pages/JournalRecommenderPage"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<JournalPageHome />} />
        <Route path="/buscar" element={<JournalSearchPage />} />
        <Route path="/recomendacion" element={<JournalRecommenderPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
