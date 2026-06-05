import axios from "axios";

const API =
  "https://jsonplaceholder.typicode.com";

export const getStudentsStats =
  async () => {
    const response = await axios.get(
      `${API}/users`
    );

    return response.data;
  };

export const getExamsStats =
  async () => {
    const response = await axios.get(
      `${API}/posts`
    );

    return response.data;
  };

export const getQuestionsStats =
  async () => {
    const response = await axios.get(
      `${API}/comments`
    );

    return response.data;
  };


//للمنتصف
//   export const getDashboardAnalytics = async () => {
//   return {
//     students: 120,
//     successRate: 88,
//   };
// };
export const getDashboardAnalytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    students: 120,
    successRate: 88,
  };
};