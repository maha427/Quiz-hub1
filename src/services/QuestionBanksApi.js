

import axios from "axios";

const API_URL = "http://127.0.0.1:5000";
 const Token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwianRpIjoiNmQ0YWU2MzktOGM4MC00YzMxLWJmOTEtZWI5MTlmNGRkY2I2IiwidHlwZSI6ImFjY2VzcyIsImlzX3N1cGVyYWRtaW4iOmZhbHNlLCJleHAiOjE3ODAxNDg0MTksImlhdCI6MTc4MDE0NDgxOX0.7vyZOzyZ85LaEjB9hlnIfdFw-LIRJZXaD16WYU10xRY"


export const fetchQuestionBanks = async () => {
  try {

    const token =Token

    const { data } = await axios.get(
      `${API_URL}/question-banks/my`,
      {
        headers: {
          Authorization: `Bearer ${token}`,

        "X-Workspace-Id": 1,
        },
      }
    );

    console.log("✅ DATA:", data);

    return data.question_banks || [];

  } catch (error) {

    console.log(
      "❌ BACKEND ERROR:",
      error.response?.data
    );

    console.log(
      "❌ STATUS:",
      error.response?.status
    );

    throw error;
  }
};







export const createQuestionBank =
  async (payload) => {
    const token =Token


    const { data } =
      await axios.post(
        `${API_URL}/question-banks`,
        payload,
        {
          headers: {

            Authorization:
              `Bearer ${token}`,

            "X-Workspace-Id": 1,
          },
        }
      );

    return data.question_banks || [];
  };





















