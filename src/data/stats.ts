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
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
}
