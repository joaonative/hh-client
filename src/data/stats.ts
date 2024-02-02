import axios from "axios";

const apiUrl = "http://localhost:8080/api";

const token = localStorage.getItem("token-acesso");

export interface Stats {
  totalMonthlyOccurrences: number;
  totalGoodOccurrences: number;
  totalBadOccurrences: number;
  percentChangeGood: number | null;
  percentChangeBad: number | null;
  percentChangeTotal: number | null;
}

export async function getUserStats(userId: string | undefined) {
  try {
    const res = await axios.get(`${apiUrl}/users/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

export interface Streak {
  author: string;
  streakCount: number;
  weeklyDays: boolean[];
  lastUpdate: Date;
}

export async function getUserStreak(author: string | undefined) {
  try {
    const res = await axios.get(`${apiUrl}/streak`, {
      headers: {
        Authorization: token,
        author: author,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function getUserYearStats(email: string | undefined) {
  try {
    const res = await axios.get(`${apiUrl}/stats/${email}`, {
      headers: {
        Authorization: token,
      },
    });

    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
}
