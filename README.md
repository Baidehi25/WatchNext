🚧 Work in Progress


# WatchNext
WatchNext is a machine learning powered movie recommendation system that uses association rule mining to identify relationships between films based on user viewing behaviour.
Unlike traditional recommendation systems that rely heavily on ratings or popularity metrics, WatchNext focuses on discovering hidden co-watching patterns. This approach helps generate recommendations that better reflect how audiences actually consume content.

## 🔗 Live Demo  
https://watchnext-project.vercel.app/

## Features
- Recommendations based on co-watching patterns
- API integration between ML and backend
- Dynamic UI built with React

## Tech Stack
- React + Vite
- Tailwind CSS
- Python (for ML)
- OMDb API (Movie metadata)

## How it Works
1. The user enters a movie title.
2. The frontend sends a request to the backend ML model.
3. The backend applies the Apriori algorithm to identify frequent co-watching patterns and generate association rules, which are then used to recommend related movies.
4. The app fetches additional metadata (poster, plot, rating, etc.) from the OMDb API.
5. The UI dynamically renders the recommendation card with loading states and smooth transitions.

## Future Improvements
1. Multiple recommendation cards
2. “Match Score” based on user patterns
3. Save to watchlist feature (localStorage)

## License
This project is for educational and portfolio purposes. 
