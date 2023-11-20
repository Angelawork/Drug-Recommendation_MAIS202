from flask import Flask, request, jsonify
from flask import render_template
import joblib
import ast
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import MultiLabelBinarizer

app = Flask(__name__, static_folder='static')

vocabulary = joblib.load('Fine-tune\Symptom_vocabulary.pkl')
model = joblib.load('Fine-tune\RandomForestClassifier_fine_tuned_weights.pkl')
csv_file_path ='WHO ATC-DDD 2021-12-03.csv'
mlb = joblib.load('Fine-tune\multilabel_binarizer.pkl')
count_vectorizer = CountVectorizer(tokenizer=lambda x: x, lowercase=False,vocabulary=vocabulary)

df = pd.read_csv(csv_file_path)
atc_dict = dict(zip(df['atc_code'].str.strip(), df['atc_name']))

def map_atc_code_to_name(atc_codes):
    mapped_names = [atc_dict.get(code, 'Unknown') for code in atc_codes]
    return mapped_names

def predict_symptoms(symptoms):
    print(symptoms)
    x = ast.literal_eval(symptoms)
    count_vectorizer = CountVectorizer(tokenizer=lambda x: x, lowercase=False, vocabulary=vocabulary)
    X_count = count_vectorizer.fit_transform(x)
    y = mlb.inverse_transform(model.predict(X_count))

    unique_y = list(set(item for sublist in y for item in sublist))
    print(unique_y)
    mapped_names = map_atc_code_to_name(unique_y)
    print(mapped_names)
    return ', '.join(mapped_names)

@app.route('/', methods=['GET'])
def page0():
    return render_template("index.html")

@app.route('/main', methods=['GET'])
def page1():
    return render_template("Main.html")

@app.route('/predict', methods=['GET'])
def page2():
    return render_template("symptoms.html")

@app.route('/result', methods=['GET'])
def page3():
    return render_template("result.html")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    symptoms = data.get('symptoms', [])
    predicted_atc = predict_symptoms(symptoms)

    return jsonify({'predicted_atc': predicted_atc})

if __name__ == '__main__':
    app.run(debug=True)

