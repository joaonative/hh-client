import axios, { AxiosError } from "axios";

const apiUrl = "http://localhost:8080/api";

const token = localStorage.getItem("token-acesso");

export interface Habit {
  name: string;
  author: string;
  frequency?: number;
  description: string;
  _id?: string;
  goal: number;
  isGood: boolean;
  lastPerformed?: Date;
}

export interface HabitsApiResponse {
  data?: Habit[];
  error?: {
    type: string;
    message: string;
  } | null;
}

export async function getHabits(
  author: string | undefined
): Promise<HabitsApiResponse> {
  try {
    const res = await axios.get(`${apiUrl}/habits`, {
      headers: {
        Authorization: token,
        author: author,
      },
    });

    const data = res.data;
    console.log(data);
    return { data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      let errorMessage: string;

      if (axiosError.code === "ECONNABORTED") {
        errorMessage = "Request timed out. Please try again later.";
      } else if (axiosError.response?.status === 401) {
        errorMessage = "Unauthorized";
      } else {
        errorMessage = "Network error, please try again later.";
      }

      return {
        error: {
          type: axiosError.code || "NetworkError",
          message: errorMessage,
        },
      };
    } else {
      return {
        error: {
          type: "CommunicationError",
          message: "Error while communicating",
        },
      };
    }
  }
}

export async function createHabit(data: Habit) {
  try {
    await axios.post(`${apiUrl}/habits`, data, {
      headers: {
        Authorization: token,
      },
    });
    return;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      let errorMessage: string;

      if (axiosError.code === "ECONNABORTED") {
        errorMessage = "Request timed out. Please try again later.";
      } else {
        errorMessage = "Network error, please try again later.";
      }

      return {
        error: {
          type: axiosError.code || "NetworkError",
          message: errorMessage,
        },
      };
    }
  }
}

export async function markAsDone(habitId: string) {
  try {
    await axios.put(`${apiUrl}/habits/${habitId}`, null, {
      headers: {
        Authorization: token,
      },
    });
  } catch (err) {
    return err;
  }
}
