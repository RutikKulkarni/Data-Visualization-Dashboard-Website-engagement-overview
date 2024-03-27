import axios from "axios";

const baseURL = "https://website-engagement-overview.onrender.com/api";

const fetchData = async () => {
  try {
    const response = await axios.get(`${baseURL}/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };
