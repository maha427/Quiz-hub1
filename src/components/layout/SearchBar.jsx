import { Search } from "lucide-react"

import { useTranslation }from "react-i18next"

import { useLanguageStore }from "../../store/LanguageStore"

import { useSearchStore} from "../../store/Search-store"

import { useSearch }from "../../hooks/useSearch"




export default function SearchBar() {

const { query, setQuery,} = useSearchStore()

const { data,isLoading,} = useSearch(query)

const { t } =useTranslation("navbar")

const language =useLanguageStore( (state) => state.language)

const isArabic = language === "ar"

 

return (

  <div className="relative">

    {/* SEARCH BOX */}

    <div
      dir={isArabic ? "rtl" : "ltr"}

      className="
        flex
        items-center

        w-[320px]
        h-[42px]

        rounded-xl

        bg-[#EEF1F4]

        px-3
      "
    >

      <input
        type="text"

        placeholder={t("search")}

        value={query}

        onChange={(e) =>
          setQuery(e.target.value)
        }

        className="
          flex-1

          bg-transparent

          outline-none

          text-sm

          text-slate-600

          placeholder:text-slate-400
        "
      />

      <Search
        className="
          h-4
          w-4

          text-slate-400
        "
      />

    </div>

    {/* SEARCH RESULTS */}

    {
      query && (

        <div
          className="
            absolute
            top-14

            w-full

            bg-white

            rounded-xl

            shadow-lg

            p-2

            z-50
          "
        >

          {
            isLoading

              ? (

                <p className="p-2 text-sm">
                  Loading...
                </p>

              )

              : (

                data?.map((item) => (

                  <div
                    key={item.id}

                    className="
                      p-2

                      rounded-lg

                      hover:bg-slate-100

                      cursor-pointer

                      text-sm
                    "
                  >

                    {item.title}

                  </div>
                ))
              )
          }

        </div>
      )
    }

  </div>
)




//     <div
//       dir={isArabic ? "rtl" : "ltr"}

//   className="
//     flex
//     items-center

//     w-[320px]
//     h-[42px]

//     rounded-xl

//     bg-[#EEF1F4]

//     px-3
//   "
// >
//     <input

//    type="text"
//       placeholder={t("search")}
//       value={query}
//       onChange={(e) =>
//         setQuery(e.target.value)
//       }
//     className="
//       flex-1

//       bg-transparent

//       outline-none

//       text-sm

//       text-slate-600

//       placeholder:text-slate-400
//     "

// />

//   {/* <input
//     type="text"

//     placeholder={t("search")}

//     className="
//       flex-1

//       bg-transparent

//       outline-none

//       text-sm

//       text-slate-600

//       placeholder:text-slate-400
//     "
//   /> */}

//   <Search
//     className="
//       h-4
//       w-4

//       text-slate-400
//     "
//   />

// </div>)
}


