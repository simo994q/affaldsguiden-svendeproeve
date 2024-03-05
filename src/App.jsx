import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./layout/MainLayout/MainLayout"
import { Frontpage } from "./pages/Frontpage/Frontpage"
import { Sortingpage } from "./pages/Sortingpage/Sortingpage"
import { Stationspage } from "./pages/Stationspage/Stationspage"
import { Orderpage } from "./pages/Orderpage/Orderpage"
import { Loginpage } from "./pages/Loginpage/Loginpage"
import { Sectionpage } from "./pages/Sectionpage/Sectionpage"
import { Searchpage } from "./pages/Searchpage/Searchpage"
import { UserContextProvider } from "./context/UserContextProvider"
import { Stationpage } from "./pages/Stationpage/Stationpage"

function App() {

  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Frontpage />} />
              <Route path="/sorting" element={<Sortingpage />} />
              <Route path="/sorting/:section_id" element={<Sectionpage />} />
              <Route path="/sorting/search/:query" element={<Searchpage />} />
              <Route path="/stations" element={<Stationspage />} />
              <Route path="/stations/:id" element={<Stationpage />} />
              <Route path="/order" element={<Orderpage />} />
              <Route path="/login" element={<Loginpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App
