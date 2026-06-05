
import {Dialog, DialogContent,} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateQuestionBankStore,} from "@/store/CreateQuestionBankStore";
import { useLanguageStore }from "@/store/LanguageStore";
import {useCreateQuestionBank,} from "@/hooks/useCreateQuestionBank";
import { useTranslation }from "react-i18next";


export default function CreateQuestionBankDialog({open,setOpen,}) {

console.log("OPEN STATE:", open);

 const { title,setTitle,
         subject, setSubject,
         description, setDescription,
         visibility, setPrivacy,
         reset,
       } = useCreateQuestionBankStore();

  const { mutate, isPending } =useCreateQuestionBank();
  const { t }                 =useTranslation( "questionBank");
  const { language }          = useLanguageStore();
  const isArabic = language === "ar";

 
  const handleCreate = () => {
  const payload = {
   title,
   description,
   subject_id: 1,
   visibility,
                  };

  console.log(payload);

  mutate( payload, { onSuccess: () => 
    { console.log("✅ CREATED");
    reset();
   setOpen(false);
   },

      onError: (error) => {
       console.log( JSON.stringify( error.response?.data, null, 2 ) 
        );
      },
    }
  );
};


  return (

    <Dialog
      open={open}
      onOpenChange={(value) => {
           setOpen(value);
              if (!value) reset();
                }}
    >

      <DialogContent
        dir={isArabic ? "rtl" : "ltr"}

        className="
          max-w-2xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl

          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
       
        {/* Content */}

        <div className="p-6 -translate-y-7">

          {/* Title */}

          <div className="space-y-3">

            <h1 className="!text-black !text-xl">
               { t("createDialog.title")}
            </h1>

            <label className="font-bold text-sm">
                {t("createDialog.bankName")}
            </label>

            <Input
              value={title}

              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }

              placeholder={t("createDialog.bankPlaceholder")}

              className="
                h-11
                bg-slate-100
                border-0
                rounded-xl
              "
            />

          </div>

          {/* Subject */}

          <div className="space-y-3 mt-5">

            <label className="font-bold text-sm">
              {t("createDialog.subjectName")}
            </label>

            <Input
              value={subject}
              onChange={(e) =>
                setSubject(
                  e.target.value
                )
              }

              placeholder={t("createDialog.subjectPlaceholder")}

              className="
                h-11
                bg-slate-100
                border-0
                rounded-xl
              "
            />

          </div>

          {/* Description */}

          <div className="space-y-3 mt-5">

            <label className="font-bold text-sm">
              {t("createDialog.description")}
            </label>

            <Textarea
              value={description}

              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }

              placeholder={t("createDialog.descPlaceholder")}

              className="
                w-full
                min-h-[120px]
                p-4
                bg-slate-100
                border-0
                rounded-xl
                resize-none
                overflow-hidden
                break-all
              "
            />

          </div>

        
   {/* Privacy */}

<div className="grid grid-cols-2 gap-4 pt-5 pb-5">

  {/* COMMUNITY */}
  <button
    type="button"
    onClick={() => setPrivacy("COMMUNITY")}
    className={`
      rounded-2xl
      border
      p-5
      text-start
      transition-all

      ${
        visibility === "COMMUNITY"
          ? "border-cyan-500 bg-cyan-50 shadow-sm"
          : "border-slate-200"
      }
    `}
  >
    <h3 className="font-bold">
      {t("createDialog.community1")}
    </h3>

    <p className="text-sm text-slate-500 mt-2">
      {t("createDialog.community2")}
    </p>
  </button>

  {/* WORKSPACE */}
  <button
    type="button"
    onClick={() => setPrivacy("WORKSPACE")}
    className={`
      rounded-2xl
      border
      p-5
      text-start
      transition-all

      ${
        visibility === "WORKSPACE"
          ? "border-cyan-500 bg-cyan-50 shadow-sm"
          : "border-slate-200"
      }
    `}
  >
    <h3 className="font-bold">
      {t("createDialog.private")}
    </h3>

    <p className="text-sm text-slate-500 mt-2">
      {t("createDialog.private2")}
    </p>
  </button>

</div>

          {/* Submit */}

          <button

            onClick={handleCreate}

            disabled={isPending}

            className="
              w-full
              h-14
              rounded-2xl
              bg-cyan-500
              text-white
              font-bold
              hover:bg-cyan-600
              transition-all
              disabled:opacity-50
            "
          >

            {isPending
              ? "جاري الإنشاء..."
              : t("createDialog.done")  }

          </button>

        </div>

      </DialogContent>

    </Dialog>
  );
}


