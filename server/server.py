from flask import Flask, request
import json

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

@app.post("/api/products")
def saveProducts():
    product = request.get_json()
    print (product)
    # mock the save
    items.append(product)
    return json.dumps(product)
    


@app.get("/api/products")
def getProduct():
    return json.dumps()

app.run(debug = True)