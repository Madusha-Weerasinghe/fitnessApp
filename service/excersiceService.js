import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com";
const RAPIDAPI_HOST = "exercisedb.p.rapidapi.com";
const RAPIDAPI_KEY = "1ff250cf3amsh9cb7739bffb385bp140a75jsn1fba3ba23b78";

const exerciseService = {
  getStatus: async () => {
    try {
      const response = await axios.get(
        `https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0`,
        {
          headers: {
            "x-rapidapi-host": RAPIDAPI_HOST,
            "x-rapidapi-key": RAPIDAPI_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  },
};

module.exports = exerciseService;
