import pandas as pd

def preprocess_movies(file_path):

    df = pd.read_csv(file_path)

    df.fillna('', inplace=True)

    df['combined_features'] = df['title'] + " " + df['genres']
    
    return df