import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./layout/MainLayout/MainLayout"
import { Frontpage } from "./pages/Frontpage/Frontpage"
import { Sortingpage } from "./pages/Sortingpage/Sortingpage"
import { Stationspage } from "./pages/Stationspage/Stationspage"
import { Orderpage } from "./pages/Orderpage/Orderpage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />} />
            <Route index element={<Sortingpage />} />
            <Route index element={<Stationspage />} />
            <Route index element={<Orderpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
