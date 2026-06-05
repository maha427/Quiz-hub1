export const generateExam = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    title: "JavaScript Basics Exam",

    duration: "30 min",

    questions: [
      {
        id: 1,
        question: "What is JavaScript?",

        options: [
          "Programming Language",
          "Database",
          "Server",
          "Operating System",
        ],

        correctAnswer: "Programming Language",
      },

      {
        id: 2,
        question: "Which keyword declares a variable?",

        options: ["let", "image", "style", "json"],

        correctAnswer: "let",
      },

      {
        id: 3,
        question: "Which company developed JavaScript?",

        options: ["Google", "Netscape", "Microsoft", "Apple"],

        correctAnswer: "Netscape",
      },
    ],
  };
};







export const getRecentExams = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,

      title: "الاقتصاد الكلي المتقدم - منتصف الفصل 1",

      date: "12 أكتوبر 2023",

      students: 142,

      successRate: "92%",

      status: "مكتمل",
    },

    {
      id: 2,

      title: "مقدمة في ميكانيكا الكم - اختبار 4",

      date: "10 أكتوبر 2023",

      students: null,

      successRate: "جاهز للنشر",

      status: "مسودة",
    },

    {
      id: 3,

      title: "الاقتصاد السلوكي 101 - الاختبار النهائي",

      date: "05 أكتوبر 2023",

      students: 210,

      successRate: "78%",

      status: "تم التصحيح",
    },
  ];
};