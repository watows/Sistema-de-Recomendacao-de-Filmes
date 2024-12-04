import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/recommend';

export const getRecommendations = async (movieName, nRecommendations) => {
  try {
    console.log("Enviando requisição para o backend com:", { movieName, nRecommendations });
    const response = await axios.post(API_URL, {
      movie_name: movieName,
      n_recommendations: nRecommendations,
    });
    console.log("Resposta do backend:", response.data);
    return response.data.recommendations;
  } catch (error) {
    console.error('Erro ao se comunicar com o backend:', error.response || error.message);
    throw error;
  }
};