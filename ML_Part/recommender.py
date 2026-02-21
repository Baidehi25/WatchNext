import pandas as pd

resultsdb=pd.read_csv('resultsdb.csv')


def get_recommendations(movie):
    movie=movie.lower()  #This line converts the input movie title to lowercase to ensure that the search is case-insensitive. This way, if the user inputs "Inception", "inception", or "INCEPTION", it will all be treated as the same movie when searching for matches in the results database.
    matches=resultsdb[(resultsdb['Movie 1'].str.lower()==movie)|(resultsdb['Movie 2'].str.lower()==movie)]  #This line filters the results database to find all rows where either "Movie 1" or "Movie 2" matches the input movie title (after converting both to lowercase for case-insensitive comparison). The resulting DataFrame, matches, will contain all pairs of movies that are associated with the input movie in the results database.
    print(resultsdb['Movie 1'].head(20).tolist())
    matches=matches.sort_values('Lift',ascending=False)
    matches = matches.drop_duplicates(subset=['Movie 1', 'Movie 2']).reset_index(drop=True)
    matches=matches.head(5)
    recommendations=[]
    for i in range(len(matches)):
        if movie==matches['Movie 1'][i].lower():
            recommendations.append(matches['Movie 2'][i])
        else:
            recommendations.append(matches['Movie 1'][i])
    recommendations = list(dict.fromkeys(recommendations))     #This line removes duplicates from the recommendations list while preserving the original order. It does this by converting the list to a dictionary (which automatically removes duplicates) and then back to a list. The dict.fromkeys() method creates a new dictionary with keys from the recommendations list, effectively removing duplicates while maintaining the order of first occurrence.
    return recommendations
