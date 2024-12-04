from flask import Flask, request, jsonify
from flask_cors import CORS
from services.recommendation_service import get_recommendations

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Bem-vindo ao Sistema de Recomendação de Filmes!"

@app.route('/api/recommend', methods=['POST'])
def recommend():
    data = request.json
    movie_name = data.get('movie_name')
    n_recommendations = data.get('n_recommendations', 5)

    try:
        recommendations = get_recommendations(movie_name, n_recommendations)
        return jsonify({'recommendations': recommendations})
    except ValueError as e:
        return jsonify({'error': str(e)}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)