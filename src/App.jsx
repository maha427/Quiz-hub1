
import Settings from "./Pages/Settings"
import Analytics from "./Pages/Analytics"
import QuestionBanks from "./Pages/QuestionBanks"
import Exams from "./Pages/Exams"


import {Routes,Route,} from "react-router-dom"
import { useLanguageStore }from "./store/LanguageStore"
import Sidebar from "./components/layout/Sidebar"
import Navbar from "./components/layout/Navbar"
import DashboardPage from "./Pages/DashboardPage"
import ExamPage from "./pages/ExamPage";
import CreateQuestionBank from "./Pages/CreateQuestionBank"
function App() {
   const language = useLanguageStore(
    (state) => state.language
  )


  const isArabic = language === "ar"


  return (

    <div  >
       <Navbar/>
      <Sidebar/>
       <div className="p-10">
     
                                   </div>
      <main     className={`
                         ${
                   isArabic
              ? "mr-[240px]"
                 : "ml-[240px]"
                    }
    pt-6
    px-0  
  `} >   
    <Routes>

      

          <Route
            path="/dashboard"
            element={<DashboardPage/>}
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

        

          <Route path="/exam" element={<ExamPage />} />

           <Route
      path="/create-bank"
  element={<CreateQuestionBank />}
/>

        </Routes> 

       


         </main>
 
    </div>
  )
}

export default App