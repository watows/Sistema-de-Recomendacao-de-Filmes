import React, { useState } from 'react';
import { getRecommendations } from '../services/api';
import MovieList from '../components/MovieList';
import '../styles.css';

const Home = () => {
  const [movieName, setMovieName] = useState('');
  const [nRecommendations, setNRecommendations] = useState(5);
  const [movies, setMovies] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommend = async () => {
    setIsLoading(true);
    setIsSearched(false);
    try {
      const recommendations = await getRecommendations(movieName, parseInt(nRecommendations));
      setMovies(recommendations);
      setIsSearched(true);
    } catch (error) {
      console.error('Erro ao buscar recomendações:', error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Recomendação de Filmes</h1>
      <input
        type="text"
        placeholder="Digite o nome de um filme"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número de recomendações"
        value={nRecommendations}
        onChange={(e) => setNRecommendations(e.target.value)}
        min={1}
        max={12}
      />
      <button onClick={handleRecommend}>Buscar</button>
      <div className="movie-list">
        {isLoading ? (
          <p>Carregando...</p>
        ) : isSearched && movies.length === 0 ? (
          <p>Nenhuma recomendação encontrada.</p>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </div>
  );
};

export default Home;