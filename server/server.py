from flask import Flask, request
import json
from config import db

items = []

app = Flask(__name__)

@app.get("/")
def home():
    return "hello from flask"

@app.get("/test")
def test():
    return "hello from test page"

@app.get("/api/about")
def about():
    me = {"name": "KB Osborne"}
    return json.dumps(me)

# API endpoints
# JSON
# create an API to perfom a get request this utl: /api/about
# return your name as a message
products = []

def fix_id(obj):
    obj["_id"] =str(obj["_id"])
    return obj

@app.post("/api/products")
def save_product():
    newItem = request.get_json()
    db.products.insert_one(newItem)
    return json.dumps(fix_id(newItem))
    


@app.get("/api/products")
def get_Products():

    cursor = db.products.find({})
    results = []    
    for prod in cursor:
        results.append(fix_id(prod))


    return json.dumps(results)

@app.get("/api/categories")
def get_categories():

    cursor = db.products.find({})
    cats = []
    for prod in cursor:
        cat = prod["category"]
        if cat not in cats:
            cats.append(prod["category"])

    return json.dumps(cats)

app.run(debug = True)



