
import Settings from "./Pages/Settings"
import Analytics from "./Pages/Analytics"
import QuestionBanks from "./Pages/QuestionBanks"
import Exams from "./Pages/Exams"
import Dashboard from "./Pages/Dashboard"

import {Routes,Route,} from "react-router-dom"
import { useLanguageStore }from "./store/LanguageStore"
import Sidebar from "./components/layout/Sidebar"
import Navbar from "./components/layout/Navbar"

function App() {
   const language = useLanguageStore(
    (state) => state.language
  )


  const isArabic = language === "ar"


  return (

    <div>
       <Navbar/>
      <Sidebar/>

      <main    className={`
          p-6
          ${
            isArabic
              ? "mr-[260px]"
              : "ml-[260px]"
          }
        `}  >   
    <Routes>

          <Route
            path="/dashboard"
            element={<Dashboard/>}
          />

          <Route
            path="/questions"
            element={<QuestionBanks />}
          />

          <Route
            path="/exams"
            element={<Exams />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/"
            element={<h1>Dashboard</h1>}
          />

        </Routes> 
         </main>

    </div>
  )
}

export default App