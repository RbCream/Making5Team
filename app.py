from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('mongodb://admin:1q2w3e4r!@localhost', 27017)

db = client.WeatherLooK

## 어드미니스트레이터

## HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/About')
def About():
    return render_template('About.html')

# DB에 사진 저장.
@app.route('/order', methods=['POST'])
def save_data():
    number_receive = request.form['number_give']
    image_receive = request.form['image_give']

    doc = {
        'number':number_receive,
        'image':image_receive,
    }

    db.Cody.insert_one(doc)
    return jsonify({'result':'success', 'msg': '저장완료!'})

# DB에서 사진 불러오기.
@app.route('/order', methods=['GET'])
def view_data():
    weather = list(db.Cody.find({}, {'_id': False}))

    return jsonify({'result':'success', 'weather': weather})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)