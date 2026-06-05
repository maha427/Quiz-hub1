// import { useState } from "react";

// import { Input } from "@/components/ui/input";

// import { Textarea } from "@/components/ui/textarea";
// import { useTranslation } from "react-i18next";

// export default function CreateQuestionBank() {
//     const { t } = useTranslation("questionBank");

//   const [title, setTitle] = useState("");

//   const [subject, setSubject] = useState("");

//   const [description, setDescription] =
//     useState("");

//   return (  

//     <div className="max-w-3xl mx-auto py-10 space-y-6">

//       <h1 className="text-3xl font-bold">
//           {/* {t("create.title")} */}   انشاء ينك الأسئلة
//       </h1>

//       {/* Title */}

//       <div className="space-y-2">

//         <label className="text-sm font-medium">
//            {t("create.bankTitle")}
//         </label>

//         <Input
//           value={title}
//           onChange={(e) =>
//             setTitle(e.target.value)
//           }
//           placeholder={t("create.bankTitlePlaceholder")}
//         />

//       </div>

//       {/* Subject */}

//       <div className="space-y-2">

//         <label className="text-sm font-medium">
//           {t("create.subject")}
//         </label>

//         <Input
//           value={subject}
//           onChange={(e) =>
//             setSubject(e.target.value)
//           }
//           placeholder={t("create.subjectPlaceholder")}
//         />

//       </div>

//       {/* Description */}

//       <div className="space-y-2">

//         <label className="text-sm font-medium">
//           {t("create.description")}
//         </label>

//         <Textarea
//           value={description}
//           onChange={(e) =>
//             setDescription(e.target.value)
//           }
//           placeholder={t("create.descriptionPlaceholder")}
//         />

//       </div>

//     </div>
//   );
// }








import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/LanguageStore";


import CreateBankCard
from "@/components/questionBanks/CreateBankCard";




export default function CreateQuestionBank() {

  const { t } =useTranslation("questionBank");




  const { language } = useLanguageStore();

  const isArabic = language === "ar";





  return (

    <div className="min-h-screen  pe-6 ps-2 -translate-y-5">

      {/* Header */}

          <section
              dir={isArabic ? "rtl" : "ltr"}
              className="w-full    text-start   "
            > <div className="max-w-7xl mx-auto leading-2  -translate-y-15 ">
                <p className="  text-4xl   !font-extrabold !text-black"  
                >
                 {t("create.title")}
                </p>
        
                <p className=" text-sm text-slate-500  text-lg leading-5 max-w-[500px] pt-2">
                 {t("create.badge")}
              </p>

          <div className={` min-w-[90px]
                             ${isArabic ?  "text-left mr-auto": "text-right ml-auto" }
                              -translate-y-10
                             `}>
              <p  className=" 
            inline-flex  px-5 py-1 rounded-full bg-slate-200 text-slate-600 !text-sm" >      
                   مسودة • مادة الكيمياء
                   </p>

        </div>
               
              </div>
            </section>
              


              <CreateBankCard />



    </div>

  
  );
}