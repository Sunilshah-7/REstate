import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//     'X-RapidAPI-Key': '9e5eed35b7msh84378e9d9a47e17p1c2246jsnf1d36bcdfbe1',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }

export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "9e5eed35b7msh84378e9d9a47e17p1c2246jsnf1d36bcdfbe1",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return response.data;
};
