import { useState, useEffect } from 'react';
import React from 'react'
import { forwardRef } from 'react';

const Recommender = forwardRef((props, ref) => {

    const [status, setStatus] = useState('idle') // 'idle', 'loading', 'success', 'error'
    const [movieInput, setMovieInput] = useState(''); // User input for movie title
    const [movieData, setMovieData] = useState([]); // Data for the recommended movies
    const [movieList, setMovieList] = useState([]); // List of movies for autocomplete
    const [suggestions, setSuggestions] = useState([]); // filtered suggestions

    useEffect(() => {
        // Fetch the list of movies for autocomplete when the component mounts
        async function fetchmovies() {
            const response = await fetch('https://watchnext-backend-p94i.onrender.com/movies');
            const data = await response.json();
            setMovieList(data.movies);
        }
        fetchmovies();
    }, [])
    // []= run once on mount, [movieInput] = "run this every time movieInput changes", nothing at all = "run this every single render"


    useEffect(() => {
        // Filter the movieList based on the current movieInput and update suggestions
        if (movieInput.trim() === '' || movieList.includes(movieInput)) {           //trim removes whitespace from both ends of a string.
            setSuggestions([]);
        } else {
            const filtered = movieList.filter(movie => movie.toLowerCase().includes(movieInput.toLowerCase()));
            setSuggestions(filtered);
        }
    }, [movieInput])
    // This useEffect runs every time the movieInput state changes. It filters the movieList based on the current value of movieInput and updates the suggestions state with the filtered list. This allows for real-time updating of suggestions as the user types.


    const handleRecommend = async () => {
        setStatus('loading')
        try {
            const response = await fetch('https://watchnext-backend-p94i.onrender.com/recommend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ movie: movieInput })
            });
            const data = await response.json();

            const movieDetails = await Promise.all(
                data.recommendations.map(async (title) => {
                    const omdbResponse = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
                    return await omdbResponse.json();
                })
            );
            const validMovies = movieDetails.filter(movie => movie.Response === "True");
            setMovieData(validMovies);
            setStatus('success');
        } catch (error) {
            console.error("Error:", error);
            setStatus('error');
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setMovieInput(suggestion);
        setSuggestions([]);
    };

    return (
        <div ref={ref}>
            <section>
                <div className='flex flex-col justify-center items-center px-6 py-20'>
                    <h2 className='text-white text-[40px] font-bold mt-10 text-center'>Find Your Next Binge</h2>
                    <div className='mt-8. text-white text-center w-full max-w-[500px]  p-16 flex flex-col justify-center items-center gap-10'>
                        <div className='relative flex flex-col gap-4 text-[22px] justify-center items-center'>

                            <input type="text" value={movieInput} onChange={(e) => setMovieInput(e.target.value)} placeholder='Enter a movie...' className='w-full bg-transparent border-b-2 text-center border-white/50 focus:outline-none focus:border-white' />
                            {suggestions.length > 0 && (
                                <div className='absolute top-full bg-black/90 w-[500px] max-h-40 overflow-y-auto shadow-lg'>
                                    {suggestions.map((suggestion, index) => (
                                        <p key={index} onClick={() => handleSuggestionClick(suggestion)} className='p-2 text-white hover:bg-white/10 cursor-pointer'>{suggestion}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button className='w-[200px] py-2.5 bg-[#E50914] rounded-[25px] hover:bg-white hover:text-black cursor-pointer transition-colors duration-300' onClick={handleRecommend}>Recommend</button>
                    </div>
                </div>
            </section>
            {status === 'loading' && <p className='text-white/50 text-[15px] text-center -mt-33'>Loading...</p>}
            {status === 'success' && <section>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-white text-[24px] font-semibold -mt-28'>Take a crack at these!</h3>
                    <div>
                        {movieData.map((movie, index) => (
                            <div key={index} className='flex m-8 rounded-[25px] p-10 gap-8 border border-white/10 rounded-[25px] shadow-lg ring-1 ring-white/40 shadow-white/10 max-w-[780px]'>
                                <img src={movie.Poster} alt="" className='rounded-[15px]' />
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-[#E50914] text-[28px] font-semibold'>{movie.Title} <span>({movie.Year})</span></h4>
                                    <p className='text-white/50 text-[17px] -mt-1.5'>{movie.Genre} • {movie.Runtime}</p>
                                    <p className='text-white mt-1'>{movie.Plot}</p>
                                    <p className='text-white mt-2'>IMDB Rating: {movie.imdbRating}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>}
        </div>
    )
})

export default Recommender














// LEARNING OUTCOMES:

// 1. Conditional Rendering: The component demonstrates how to conditionally render content based on the status of an asynchronous operation (loading, success, error).   [{status === 'loading' && <p>Loading...</p>}]

// 2. State Management: It shows how to manage multiple pieces of state (status, movieInput, movieData) using the useState hook.

// 3. map Function: The component uses the map function to iterate over an array of movie data and render a list of recommended movies without needing to write repetitive code for each movie.  [movieData.map((movie, index) => ( ... )) and key={index} ... )]

// 4. Forwarding Refs: The component is wrapped in forwardRef, allowing it to receive a ref from its parent component, which can be useful for scrolling or other DOM manipulations.

// 5. User Input Handling: It demonstrates how to handle user input through controlled components, where the input value is tied to the component's state and updates as the user types. [onChange={(e) => setMovieInput(e.target.value)}]

// 6. Use of useEffect: The component uses the useEffect hook to perform side effects, such as fetching data when the component mounts or when the movieInput changes, allowing for dynamic updates based on user interaction. Dependency arrays in useEffect control when the effect runs, enabling efficient data fetching and state updates. 