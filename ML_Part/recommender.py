import pandas as pd
from apyori import apriori

db=pd.read_csv('netflix_db.csv',header=None,encoding='latin-1')  #encoding is required to read special characters
bucket=[]
for i in range(len(db)):
    row=[]
    for j in range(0,20):
        if str(db.values[i,j])!='nan':
            row.append(str(db.values[i,j]))
    bucket.append(row)


rules=apriori(bucket,minsup=0.003,minconf=0.2,minlift=3,minlen=2)
results=list(rules)

def inspect(results):
    inspected = []
    for result in results:
        if len(result[2][0][0]) == 1 and len(result[2][0][1]) == 1:
            movie1 = tuple(result[2][0][0])[0]
            movie2 = tuple(result[2][0][1])[0]
            support = result[1]
            confidence = result[2][0][2]
            lift = result[2][0][3]
            inspected.append((movie1, movie2, support, confidence, lift))
    return inspected

resultsdb=pd.DataFrame(inspect(results),columns=['Movie 1','Movie 2','Support','Confidence','Lift'])



def get_recommendations(movie):
    matches=resultsdb[(resultsdb['Movie 1']==movie)|(resultsdb['Movie 2']==movie)]
    print(resultsdb['Movie 1'].head(20).tolist())
    matches=matches.sort_values('Lift',ascending=False).reset_index(drop=True)
    matches=matches.head(5)
    recommendations=[]
    for i in range(len(matches)):
        if movie==matches['Movie 1'][i]:
            recommendations.append(matches['Movie 2'][i])
        else:
            recommendations.append(matches['Movie 1'][i])
    return recommendations
