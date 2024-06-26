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
def saveProducts():
    newItem = request.get_json()
    print (newItem)
    db.products.insert_one(newItem)
    # products.append(newItem)
    return json.dumps(fix_id(newItem))
    


@app.get("/api/products")
def get_Product():
    return json.dumps(products)

app.run(debug = True)