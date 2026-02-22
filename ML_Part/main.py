# -------------------------------------------------------
# LEARNING PART
# -------------------------------------------------------

# Fast API needs to do 3 things before handling requests:
# 1. Setup + CORS — create the FastAPI app and tell it to allow requests from React
# CORS — Your browser blocks React from talking to FastAPI because they're on different ports. You tell FastAPI to allow requests from React's origin so the browser stops blocking.

# 2. Pydantic model — A blueprint that defines what data you expect from React. If React sends anything that doesn't match, FastAPI rejects it automatically.

# 3. The route — The actual endpoint /recommend. When React sends a POST request there, FastAPI calls get_recommendations, gets the results, and sends them back as JSON.

import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from recommender import get_recommendations,resultsdb

#1. Setup+CORS

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['https://watchnext-project.vercel.app/'],  # React's origin
    allow_methods=['*'],        # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=['*']         # Allow all headers 
)


#2. Pydantic model

class MovieRequest(BaseModel):        #BaseModel is a class from Pydantic that allows us to define the structure of the data we expect. In this case, we expect a JSON object with a single field called "movie" which is a string.
    movie: str


#3. The route

@app.post("/recommend")                 #This decorator tells FastAPI that this function should be called when a POST request is made to the /recommend endpoint. /recommend is the URL path that React will call to get movie recommendations. It can be anything you want, but /recommend is descriptive and makes sense for this use case.
def recommend(request: MovieRequest):     #request: MovieRequest means the incoming data will be automatically validated against the Pydantic model and passed in as a MovieRequest object.
    movie=request.movie
    recommendations=get_recommendations(movie)
    return {"recommendations": recommendations}  #This returns a JSON response with a single field called "recommendations" which contains the list of recommended movies. FastAPI automatically converts the Python dictionary into JSON format when sending the response back to React.



@app.get("/movies")          #/movies is a GET endpoint
def get_movies():
    movies= pd.concat([resultsdb['Movie 1'], resultsdb['Movie 2']]).unique().tolist()  #This line combines the "Movie 1" and "Movie 2" columns from the results database, finds the unique movie titles (ensures no duplication), and converts them into a list.
    return {"movies": movies}  














# LEARNING OUTCOMES:
# 1. /recommend and /movies are two endpoints that React can call to get data from FastAPI.

# 2. The /recommend endpoint expects a POST request with a JSON body that matches the MovieRequest model, while the /movies endpoint responds to GET requests and returns a list of movies from the results database.

# 3. FastAPI automatically handles the conversion between Python data structures and JSON, making it easy to send and receive data between the backend and frontend.

# 4. Understppd the usage of virtual environments in Miniconda, how to create and activate them, and how to install dependencies within the virtual environment to keep the project organized and avoid conflicts with other Python projects on the same machine.

# 5. Start server -------> uvicorn main:app --reload