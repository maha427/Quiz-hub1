import { Card } from "../components/ui/card";

import { useExamStore } from "../store/ExamStore";

export default function ExamPage() {
  const { exam } = useExamStore();

  if (!exam) {
    return (
      <div className="p-10">
        No Exam Generated
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <Card className="p-8 rounded-3xl">
        <h1 className="text-3xl font-bold">
          {exam.title}
        </h1>

        <p className="text-slate-500 mt-3">
          Duration: {exam.duration}
        </p>

        <div className="space-y-6 mt-10">
          {exam.questions.map((question) => (
            <Card
              key={question.id}
              className="p-5 rounded-2xl"
            >
              <h2 className="font-bold text-lg">
                {question.question}
              </h2>

              <div className="space-y-3 mt-4">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-3 hover:bg-slate-50 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}