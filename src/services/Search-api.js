// services/Search-api.ts

export const searchExams = async (query) => {

  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`

    //`https://api.example.com/exams?search=${query}`

  )

  if (!response.ok) {

    throw new Error("Failed to fetch exams")

  }

  const data = await response.json()

  return data.products
}