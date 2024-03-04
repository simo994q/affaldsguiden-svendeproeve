import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./layout/MainLayout/MainLayout"
import { Frontpage } from "./pages/Frontpage/Frontpage"
import { Sortingpage } from "./pages/Sortingpage/Sortingpage"
import { Stationspage } from "./pages/Stationspage/Stationspage"
import { Orderpage } from "./pages/Orderpage/Orderpage"
import { Loginpage } from "./pages/Loginpage/Loginpage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />} />
            <Route path="/sorting" element={<Sortingpage />} />
            <Route path="/stations" element={<Stationspage />} />
            <Route path="/order" element={<Orderpage />} />
            <Route path="/login" element={<Loginpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
