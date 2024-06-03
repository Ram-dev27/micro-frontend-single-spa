import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import CardReact from "./components/CardReact";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CardReact />} />
        <Route path="/react/recipe" element={<RecipeList />} />
        <Route path="/react/recipe/:id" element={<RecipeDetail />} />
        <Route path="*" element={<CardReact />} />
      </Routes>
    </BrowserRouter>
  );
}
