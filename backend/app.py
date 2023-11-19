from flask import Flask, request
import json
import openai
import os

api = Flask(__name__)

openai.api_type = "azure"
openai.api_key = 'APIKEY2'
openai.api_base = 'https://api.umgpt.umich.edu/azure-openai-api/ptu'
openai.api_version = '2023-03-15-preview'

@api.route('/questions')
def questions():
    with open("qas.json", "r") as file:
        return json.load(file)

@api.route('/accuracy')
def accuracy():
    given = request.args.get('given')
    real = request.args.get('real')
    return gpt_accuracy(given, real)

def gpt_accuracy(answer1, answer2):
    response = openai.ChatCompletion.create(
            engine='gpt-4',
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f"Determine the accuracy of the given answer to the real answer. Accuracy should be on a scale of 1 to 10 with 10 being almost same. Only return the number. Given answer:{answer1} True answer: {answer2}"}
            ]
        )
    return response['choices'][0]['message']['content']

@api.route('/search')
def search():
    query = request.args.get('query')
    
    ref = {}
    for folder1 in os.listdir(os.getcwd() + "\\summary\\"):
        for file in os.listdir(os.getcwd() + "\\summary\\" + folder1):
            ref["\\summary\\" + folder1 + '\\' + file] = open(file, "r").read()

    response = openai.ChatCompletion.create(
            engine='gpt-4',
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f"In which file is the answer to the following question contained: File and content dictionary {ref}. Question: {query}"}
            ]
        )
    return response['choices'][0]['message']['content']