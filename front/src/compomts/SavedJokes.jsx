import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const SavedJokes = () => {
        const [favorites, setFavorites] = useState([]);

        useEffect(() => {
            const fetchFavorites = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/get-favorites');
                    setFavorites(response.data);
                } catch (error) {
                    console.error('Error retrieving favorites:', error);
                }
            };
            fetchFavorites();
        }, []);
    
        return (
            <div className="container">
                <h1>All Favorites Jokes Here</h1>
                <div className="row mt-4" style={{ backgroundColor:'#cce7ff'  }}>
                    {favorites.map((favorite) => (
                        <div className="col-md-4 mb-4" key={favorite.id}>
                            <div className="card">
                                <img 
                                    src={`https://icanhazdadjoke.com/j/${favorite.joke_id}.png`} 
                                    alt="Joke" 
                                    className="card-img-top" 
                                />
                                <div className="card-body">
                                    <p>{favorite.joke_text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

export default SavedJokes