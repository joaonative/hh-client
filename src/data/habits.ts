import axios from "axios";

const apiUrl = "http://localhost:8080/api";

const token = localStorage.getItem("token-acesso");

export interface Habit {
  name: string;
  author: string;
  frequency: number;
  description: string;
}

export async function getHabits(author: string): Promise<Habit[]> {
  try {
    const res = await axios.get(`${apiUrl}/habits`, {
      headers: {
        Authorization: token,
        author: author,
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Erro ao obter hábitos:", error);
    throw error;
  }
}

export async function createHabit(data: Habit) {
  await axios.post(`${apiUrl}/habits`, data, {
    headers: {
      Authorization: token,
    },
  });
  return;
}
