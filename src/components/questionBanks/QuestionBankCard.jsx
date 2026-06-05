// import { Card } from "@/components/ui/card";
// import { COLORS } from "@/Constant/Colors";

// import { useLanguageStore } from "@/store/LanguageStore";

// export default function QuestionBankCard({  bank,color, }) {
//   const { language } = useLanguageStore();

//   const isArabic = language === "ar";

  

//   return (
//     <Card className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition-all">
      
//       <div className={`h-4 w-full ${color} -translate-y-5`} />

//       <div className="p-2 -translate-y-5 ">
//         <div className="flex items-start justify-between">
//           <span className="text-xs bg-slate-100 px-3 py-1 rounded-full  " style={{color:COLORS.primary}}>
//             {bank.subject}
//           </span>

//           <span>📚</span> 

//         </div>

//         <h2 className=" text-sm font-semibold !text-black  text-start p-2 ">
//           {bank.title}
//         </h2>

//         <p className="mt-3 text-slate-500 leading-7 text-sm font-semibold">
//           {bank.description}
//         </p>

//         <div className="mt-6 flex items-center justify-between text-sm text-slate-400 p-4">
//           <span  className="text-black font-semibold">
//             {bank.questions}{" "}
//             {isArabic ? "سؤال" : "Questions"}
//           </span>

//           <span>{bank.date}</span>
//         </div>
//       </div>
//     </Card>
//   );
// }













import { Card } from "@/components/ui/card";
import { COLORS } from "@/Constant/Colors";
import { useLanguageStore } from "@/store/LanguageStore";

export default function QuestionBankCard({ bank, color }) {
  const { language } = useLanguageStore();
  const isArabic = language === "ar";

  return (
    <Card className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition-all">

      {/* Top Color Bar */}
      <div className={`h-4 w-full ${color} -translate-y-5`} />

      <div className="p-2 -translate-y-5">

        {/* Header */}
        <div className="flex items-start justify-between">
          <span
            className="text-xs bg-slate-100 px-3 py-1 rounded-full"
            style={{ color: COLORS.primary }}
          >
            {/* subject_id (يمكن تحسينه لاحقًا إلى اسم المادة) */}
            {bank.subject_id}
          </span>

          <span>📚</span>
        </div>

        {/* Title */}
        <h2 className="text-sm font-semibold !text-black text-start p-2">
          {bank.title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-slate-500 leading-7 text-sm font-semibold">
          {bank.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between text-sm text-slate-400 p-4">

          {/* Questions (غير موجود في API حالياً) */}
          <span className="text-black font-semibold">
            {isArabic ? "غير متوفر" : "N/A"}
          </span>

          {/* Created Date */}
          <span>
            {bank.created_at
              ? new Date(bank.created_at).toLocaleDateString()
              : ""}
          </span>

        </div>

      </div>
    </Card>
  );
}