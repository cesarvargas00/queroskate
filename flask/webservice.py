from flask import Flask, Response, request,  render_template, redirect
import databases.mongodb_config as mongodb
import models.marker as model
from forms import InsertForm
app = Flask(__name__)
app.config.from_object('config')

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/rest/json/all/markers')
def allMarkers():
    try:
        db = mongodb.getDatabase()
        return Response(mongodb.getAllRecordsFrom(db, 'markers', asJSON=True), mimetype="application/json")
    except Exception, e:
        return 'error'

@app.route('/rest/json/all/users')
def allUsers():
    try:
        db = moongodb.getDatabase()
        return Response(mongodb.getAllRecordsFrom(db, 'users', asJSON=True), mimetype="application/json")
    except Exception, e:
        return 'error'

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/insert', methods=['GET','POST'])
def insert():
    form = InsertForm()
    if form.validate_on_submit():
      marker = model.Marker({
           'name':form.name.data,                                                            
           'description':form.description.data,
           'lat':form.lat.data,
           'lng':form.lng.data,
           'photo':'bla',
           'misc' : {
              'rank' : form.selectRank.data,
              'floor':form.selectFloor.data,
              'galera':form.selectGalera.data,
              'boolCoberto':form.boolCoberto.data,
              'corrimao':form.corrimao.data,
              'borda':form.borda.data,
              'mini':form.mini.data,
              'bowl':form.bowl.data,
              'manual':form.manual.data
            }
            })
      db = mongodb.getDatabase()
      mongodb.createUpdateMarker(db,marker)
      return redirect('/')
    return render_template('createLugares.html',form = form)

if __name__ == '__main__':
    app.debug = True
    app.run()
