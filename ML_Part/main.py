# -------------------------------------------------------
# LEARNING PART
# -------------------------------------------------------

# Fast API needs to do 3 things before handling requests:
# 1. Setup + CORS — create the FastAPI app and tell it to allow requests from React
# CORS — Your browser blocks React from talking to FastAPI because they're on different ports. You tell FastAPI to allow requests from React's origin so the browser stops blocking.

# 2. Pydantic model — A blueprint that defines what data you expect from React. If React sends anything that doesn't match, FastAPI rejects it automatically.

# 3. The route — The actual endpoint /recommend. When React sends a POST request there, FastAPI calls get_recommendations, gets the results, and sends them back as JSON.


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from recommender import get_recommendations


#1. Setup+CORS

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],  # React's origin
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
    return recommendations