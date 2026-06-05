import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

export default function QuestionForm({
  question,
  updateQuestion,
  removeQuestion,
}) {

  return (

    <div className="bg-white rounded-3xl p-6 border space-y-5">

      {/* Question */}

      <div className="space-y-2">

        <label className="font-semibold text-sm">
          السؤال
        </label>

        <Textarea
          value={question.title}
          onChange={(e) =>
            updateQuestion("title", e.target.value)
          }
          placeholder="اكتب السؤال هنا"
        />

      </div>

      {/* Options */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {question.options.map((option, index) => (

          <Input
            key={index}
            value={option}
            onChange={(e) => {

              const newOptions = [
                ...question.options,
              ];

              newOptions[index] =
                e.target.value;

              updateQuestion(
                "options",
                newOptions
              );

            }}
            placeholder={`الخيار ${index + 1}`}
          />

        ))}

      </div>

      {/* Correct Answer */}

      <div className="space-y-2">

        <label className="font-semibold text-sm">
          الإجابة الصحيحة
        </label>

        <Input
          value={question.correctAnswer}
          onChange={(e) =>
            updateQuestion(
              "correctAnswer",
              e.target.value
            )
          }
          placeholder="مثال: الخيار الأول"
        />

      </div>

      {/* Explanation */}

      <div className="space-y-2">

        <label className="font-semibold text-sm">
          شرح الإجابة
        </label>

        <Textarea
          value={question.explanation}
          onChange={(e) =>
            updateQuestion(
              "explanation",
              e.target.value
            )
          }
          placeholder="شرح مختصر للإجابة"
        />

      </div>

      {/* Delete */}

      <button
        onClick={removeQuestion}
        className="
          bg-red-500
          text-white
          px-5
          py-2
          rounded-xl
        "
      >
        حذف السؤال
      </button>

    </div>
  );
}