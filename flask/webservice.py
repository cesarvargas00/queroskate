from flask import Flask, Response, render_template
from databases.mongodb_config import getAllMarkersFrom, getDatabase
app = Flask(__name__)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/rest/json/all')
def allMarkers():
    try:
        db = getDatabase()
        return Response(getAllMarkersFrom(db, asJSON=True), mimetype="application/json")
    except Exception, e:
        return 'error'

@app.route('/test')
def test():
    return render_template('index.html')

@app.route('/hello')
def hello():
    return render_template('hello.html')

if __name__ == '__main__':
    app.run(debug=True)