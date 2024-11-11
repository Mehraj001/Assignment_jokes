import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
        const [searchJoke, setSeachJokes] = useState('');
        const [jokes, setJokes] = useState([]);
        const searchJokes = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/search-jokes?term=${searchJoke}`);
                setJokes(response.data);
            } catch (error) {
                console.error('Error fetching jokes:', error);
            }
        };
    
        const saveFavorite = async (joke) => {
            try {
                await axios.post('http://localhost:5000/save-favorite', {
                    joke_id: joke.id,
                    joke_text: joke.joke
                });
            } catch (error) {
                console.error('Error saving favorite:', error);
            }
        };
    
        return (
            <div className="container">
                <h1>Search for Jokes</h1>
                <input 
                    type="text" 
                    className="form-control mb-3" 
                    value={searchJoke} 
                    onChange={(e) => setSeachJokes(e.target.value)} 
                    placeholder="Search for a joke" 
                />
                <button className="btn btn-primary" onClick={searchJokes}>Search</button>
                <div className="row mt-4" style={{ backgroundColor:'#cce7ff'  }}>
                    {jokes.map((joke) => (
                        <div className="col-md-4 mb-4"  key={joke.id}>
                            <div className="card">
                                <img 
                                    src={`https://icanhazdadjoke.com/j/${joke.id}.png`} 
                                    alt="Joke" 
                                    className="card-img-top" 
                                />
                      <div className="card-body">
                        <button className="btn btn-secondary " onClick={() => saveFavorite(joke)}>Save Joke</button>
                      </div>
                </div>
                 </div>
                    ))}
                </div>
            </div>
        );
    };

export default Search