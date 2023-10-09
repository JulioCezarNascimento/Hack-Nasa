from flask import Flask, render_template, jsonify
import requests
import csv
from io import StringIO

app = Flask(__name__)

@app.route('/')
def index():
    # Faz uma solicitação HTTP para obter o conteúdo do CSV a partir do link
    response = requests.get('https://www.citizenscience.gov/feed.csv')

    if response.status_code == 200:
        # Lê o conteúdo do CSV da resposta da solicitação
        csv_content = response.text

        # Processa o conteúdo do CSV usando a biblioteca CSV
        data = []
        csv_reader = csv.DictReader(StringIO(csv_content))
        
        for row in csv_reader:
            data.append(row)

        return render_template('index.html', data=data)
    else:
        return 'Erro ao buscar o CSV: ' + str(response.status_code)

if __name__ == '__main__':
    app.run(debug=True)
@app.route('/html_page')
def html_page():
    return render_template('lobby.html')