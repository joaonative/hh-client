import axios from "axios";

const apiUrl = "http://localhost:8080/api";

const token = localStorage.getItem("token-acesso");

export interface Report {
  imageUrl: string | undefined;
  author: string | undefined;
  report: string;
  name: string | undefined;
}

export interface ReportResponse {
  data: Report[];
}

export async function createReport(data: Report) {
  try {
    await axios.post(`${apiUrl}/motivational`, data, {
      headers: {
        Authorization: token,
      },
    });
    return;
  } catch (err) {
    return err;
  }
}

export async function getReports() {
  try {
    const res = await axios.get(`${apiUrl}/motivational`, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}
