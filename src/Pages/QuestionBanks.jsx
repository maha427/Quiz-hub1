

// import { useTranslation } from "react-i18next";

// import { useLanguageStore } from "@/store/LanguageStore";

// import { useQuestionBanks } from "@/hooks/useQuestionBanks";

// import QuestionBankCard from "@/components/questionBanks/QuestionBankCard";

// import { COLORS } from "../Constant/Colors";

// import QuestionBanksTabs from "@/components/questionBanks/QuestionBanksTabs";

// import { useQuestionBanksStore } from "@/store/QuestionBanksStore";

// import QuestionBankSkeleton from "@/components/questionBanks/QuestionBankSkeleton";

// import QuestionBanksControls from "@/components/questionBanks/QuestionBanksControls";

// import EmptyState from "@/components/questionBanks/EmptyState";

// import AddQuestionBankCard from "@/components/questionBanks/AddQuestionBankCard";

// import QuestionBanksStats from "@/components/questionBanks/QuestionBanksStats";

// import { CARD_COLORS } from "@/Constant/CardColors";

// export default function QuestionBanks() {

//   const { t } =
//     useTranslation("questionBank");

//   const { language } =
//     useLanguageStore();

//   const isArabic =
//     language === "ar";

//   const {
//     activeTab,

//     selectedSubject,

//     sortBy,

//     viewMode,

//   } = useQuestionBanksStore();

//   // 🔥 API
//   const {

//     data = [],

//     isLoading,

//     isError,

//     error,

//   } = useQuestionBanks();

//   console.log(
//     "✅ API DATA:",
//     data
//   );

//   // 🔥 FILTER + SORT
//   const filteredBanks = data

//     .filter((bank) => {

//       const matchesSubject =

//         selectedSubject ===
//           "all" ||

//         bank.subject_id ===
//           Number(selectedSubject);

//       // 🔥 بنوكي
//       if (
//         activeTab ===
//         "myBanks"
//       ) {

//         return (

//           matchesSubject &&

//           (

//             bank.visibility ===
//               "WORKSPACE" ||

//             bank.visibility ===
//               "COMMUNITY"

//           )
//         );
//       }

//       // 🔥 المجتمع
//       if (
//         activeTab ===
//         "community"
//       ) {

//         return (

//           matchesSubject &&

//           bank.visibility ===
//             "COMMUNITY"
//         );
//       }

//       return false;
//     })

//     .sort((a, b) => {

//       if (
//         sortBy ===
//         "latest"
//       ) {

//         return (

//           new Date(
//             b.created_at
//           ) -

//           new Date(
//             a.created_at
//           )
//         );
//       }

//       return (

//         new Date(
//           a.created_at
//         ) -

//         new Date(
//           b.created_at
//         )
//       );
//     });

//   const totalBanks =
//     filteredBanks.length;

//   // 🔥 ERROR
//   if (isError) {

//     return (

//       <div
//         className="
//           p-10
//           text-red-500
//         "
//       >
//         Error:
//         {error?.message}
//       </div>
//     );
//   }

//   return (

//     <div
//       dir={
//         isArabic
//           ? "rtl"
//           : "ltr"
//       }

//       className="
//         min-h-screen
//         pe-6
//         pe-3
//         -translate-y-5
//       "
//     >

//       {/* HEADER */}

//       <section
//         dir={
//           isArabic
//             ? "rtl"
//             : "ltr"
//         }

//         className="
//           w-full
//           text-start
//         "
//       >

//         <div
//           className="
//             max-w-7xl
//             mx-auto
//             leading-2
//             -translate-y-15
//           "
//         >

//           <p
//             className="
//               text-sm
//             "

//             style={{
//               color:
//                 COLORS.primary,
//             }}
//           >
//             {t("badge")}
//           </p>

//           <h1
//             className="
//               !text-3xl
//               !font-extrabold
//               leading-2
//               !text-black
//             "
//           >
//             {t("title")}
//           </h1>

//           <p
//             className="
//               text-sm
//               text-slate-500
//               text-lg
//               leading-2
//               max-w-2xl
//             "
//           >
//             {t("description")}
//           </p>

//         </div>

//       </section>

//       {/* CONTENT */}

//       <div
//         className="
//           mt-10
//           -translate-y-15
//         "
//       >

//         <QuestionBanksTabs />

//         <QuestionBanksControls />

//         {/* GRID */}

//         <div
//           className={

//             viewMode ===
//             "grid"

//               ? `
//                 grid
//                 grid-cols-1
//                 md:grid-cols-2
//                 xl:grid-cols-3
//                 gap-6
//                 mt-10
//               `

//               : `
//                 flex
//                 flex-col
//                 gap-5
//                 mt-10
//               `
//           }
//         >

//           {/* LOADING */}

//           {isLoading ? (

//             <>
//               <QuestionBankSkeleton />
//               <QuestionBankSkeleton />
//               <QuestionBankSkeleton />
//             </>

//           ) : filteredBanks.length === 0 ? (

//             <EmptyState />

//           ) : (

//             <>
//               {/* BANKS */}

//               {filteredBanks.map(
//                 (
//                   bank,
//                   index
//                 ) => (

//                   <QuestionBankCard
//                     key={bank.id}

//                     bank={bank}

//                     color={
//                       CARD_COLORS[
//                         index %
//                           CARD_COLORS.length
//                       ]
//                     }
//                   />

//                 )
//               )}

//               {/* ADD CARD */}

//               {activeTab ===
//                 "myBanks" && (

//                 <AddQuestionBankCard />

//               )}
//             </>

//           )}

//         </div>

//         {/* STATS */}

//         <QuestionBanksStats
//           totalBanks={
//             totalBanks
//           }
//         />

//       </div>

//     </div>
//   );
// }






import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/LanguageStore";

import { useQuestionBanks } from "@/hooks/useQuestionBanks";
import { useQuestionBanksStore } from "@/store/QuestionBanksStore";

import QuestionBankCard from "@/components/questionBanks/QuestionBankCard";
import QuestionBanksTabs from "@/components/questionBanks/QuestionBanksTabs";
import QuestionBanksControls from "@/components/questionBanks/QuestionBanksControls";
import QuestionBankSkeleton from "@/components/questionBanks/QuestionBankSkeleton";
import EmptyState from "@/components/questionBanks/EmptyState";
import AddQuestionBankCard from "@/components/questionBanks/AddQuestionBankCard";
import QuestionBanksStats from "@/components/questionBanks/QuestionBanksStats";

import { COLORS } from "../Constant/Colors";
import { CARD_COLORS } from "@/Constant/CardColors";

import CreateQuestionBankDialog from "@/components/questionBanks/CreateQuestionBankDialog";
import { useState } from "react";

export default function QuestionBanks() {

  const { t } = useTranslation("questionBank");
  const { language } = useLanguageStore();
  const isArabic = language === "ar";

  const {
    activeTab,
    selectedSubject,
    sortBy,
    viewMode,
  } = useQuestionBanksStore();

  // 🔥 Dialog state (IMPORTANT)
  const [open, setOpen] = useState(false);

  // 🔥 API
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuestionBanks();

  console.log("✅ API DATA:", data);

  // 🔥 FILTER + SORT
  const filteredBanks = data
    .filter((bank) => {
      const matchesSubject =
        selectedSubject === "all" ||
        bank.subject_id === Number(selectedSubject);

      if (activeTab === "myBanks") {
        return (
          matchesSubject &&
          (bank.visibility === "WORKSPACE" ||
            bank.visibility === "COMMUNITY")
        );
      }

      if (activeTab === "community") {
        return (
          matchesSubject &&
          bank.visibility === "COMMUNITY"
        );
      }

      return false;
    })
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.created_at) - new Date(a.created_at);
      }

      return new Date(a.created_at) - new Date(b.created_at);
    });

  const totalBanks = filteredBanks.length;

  if (isError) {
    return (
      <div className="p-10 text-red-500">
        Error: {error?.message}
      </div>
    );
  }

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen pe-6 pe-3 -translate-y-5"
    >

      {/* 🔥 DIALOG (MOVED HERE) */}
      <CreateQuestionBankDialog
        open={open}
        setOpen={setOpen}
      />

      {/* HEADER */}
      <section className="w-full text-start">
        <div className="max-w-7xl mx-auto leading-2 -translate-y-15">

          <p className="text-sm" style={{ color: COLORS.primary }}>
            {t("badge")}
          </p>

          <h1 className="!text-3xl !font-extrabold !text-black">
            {t("title")}
          </h1>

          <p className="text-sm text-slate-500 text-lg max-w-2xl">
            {t("description")}
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <div className="mt-10 -translate-y-15">

        <QuestionBanksTabs />
        <QuestionBanksControls />

        {/* GRID */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
              : "flex flex-col gap-5 mt-10"
          }
        >

          {isLoading ? (
            <>
              <QuestionBankSkeleton />
              <QuestionBankSkeleton />
              <QuestionBankSkeleton />
            </>
          ) : filteredBanks.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {filteredBanks.map((bank, index) => (
                <QuestionBankCard
                  key={bank.id}
                  bank={bank}
                  color={CARD_COLORS[index % CARD_COLORS.length]}
                />
              ))}

              {/* 🔥 OPEN DIALOG FROM HERE */}
              {activeTab === "myBanks" && (
                <AddQuestionBankCard setOpen={setOpen} />
              )}
            </>
          )}

        </div>

        <QuestionBanksStats totalBanks={totalBanks} />

      </div>
    </div>
  );
}


