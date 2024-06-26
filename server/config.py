import pymongo
import certifi


con_str="mongodb+srv://kosborne:Afireinside5@cluster0.s2whos7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())
db = client.get_database("project2")