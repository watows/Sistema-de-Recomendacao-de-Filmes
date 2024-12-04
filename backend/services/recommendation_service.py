from utils.preprocessing import preprocess_movies
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

movies = preprocess_movies('data/movies.csv')

def get_recommendations(movie_title, n_recommendations=5):
    cv = CountVectorizer()
    count_matrix = cv.fit_transform(movies['combined_features'])
    cosine_sim = cosine_similarity(count_matrix)
    
    if movie_title not in movies['title'].values:
        raise ValueError("Filme não encontrado no dataset.")
    
    movie_index = movies[movies['title'] == movie_title].index[0]
    similar_movies = list(enumerate(cosine_sim[movie_index]))
    sorted_similar_movies = sorted(similar_movies, key=lambda x: x[1], reverse=True)
    recommendations = [movies.iloc[i[0]].title for i in sorted_similar_movies[1:n_recommendations + 1]]
    return recommendations