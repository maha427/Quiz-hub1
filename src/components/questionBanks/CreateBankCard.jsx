






/////////////    هي الواجهة يلي رح يمقلني عليها بعد الدايلوف//////////////



import { Input } from "@/components/ui/input";

import { useState } from "react";

import {
  useCreateQuestionBankStore,
} from "@/store/CreateQuestionBankStore";
import { useLanguageStore } from "@/store/LanguageStore";

export default function CreateBankCard() {


  const {

  title,
  setTitle,

  

  subjects,
  addSubject,
  removeSubject,

} = useCreateQuestionBankStore();

  // const {
  //   title,
  //   setTitle,

  //   subjects,
  //   addSubject,
  //   removeSubject,

  // } = useCreateQuestionBankStore();

  const [subjectInput, setSubjectInput] =
    useState("");



    
      const { language } = useLanguageStore();
    
      const isArabic = language === "ar";

  return (

    <div  dir={isArabic ? "rtl" : "ltr"  }
    
    className="mt-10 bg-white rounded-3xl overflow-hidden border shadow-sm -translate-y-20">

      {/* Top Bar */}

      <div className="h-7 bg-gradient-to-l from-cyan-400 to-teal-100 w-full" />

      {/* Content */}

      <div className="p-8 text-start">

        <div className="space-y-9">

          {/* Colors

          <div className="space-y-4">

            <label className="font-bold text-sm">
              لون البنك
            </label>

            <div className="flex gap-4">

              {[
                "bg-green-400",
                "bg-cyan-400",
                "bg-purple-400",
                "bg-orange-400",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() =>
                    setColor(item)
                  }
                  className={`
                    w-10
                    h-10
                    rounded-full
                    ${item}
                  `}
                />

              ))}

            </div> */}

          </div>

          {/* Title */}

          <div className="space-y-3">

            <label className="text-sm font-bold text-slate-700">
              اسم بنك الأسئلة
            </label>

            <Input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="مثال: الكيمياء"
              className="
                h-14
                bg-slate-100
                border-0
                rounded-xl
              "
            />

          </div>

          {/* Subjects */}

          <div className="space-y-4">

            <label className="font-bold text-sm">
              إضافة مواضيع
            </label>

            {/* Tags */}

            <div className="flex flex-wrap gap-3">

              {subjects.map((subject) => (

                <div
                  key={subject}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-100
                    text-cyan-700
                    flex
                    items-center
                    gap-2
                  "
                >

                  {subject}

                  <button
                    onClick={() =>
                      removeSubject(subject)
                    }
                  >
                    ✕
                  </button>

                </div>

              ))}

            </div>

            {/* Input */}

            <div className="flex gap-3">

              <Input
                value={subjectInput}
                onChange={(e) =>
                  setSubjectInput(
                    e.target.value
                  )
                }
                placeholder="أدخل موضوع جديد"
                className="
                  bg-slate-100
                  border-0
                "
              />

              <button
                onClick={() => {

                  if (!subjectInput)
                    return;

                  addSubject(
                    subjectInput
                  );

                  setSubjectInput("");

                }}
                className="
                  px-5
                  rounded-xl
                  bg-cyan-500
                  text-white
                "
              >
                إضافة
              </button>

            </div>

          </div>

        </div>

      </div>

   

  );
}







