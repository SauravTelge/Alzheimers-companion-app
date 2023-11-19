from flask import Flask
import json

api = Flask(__name__)

@api.route('/')
def hello():

    return 'Hello, World!'
