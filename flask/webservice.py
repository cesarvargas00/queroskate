import md5
from flask import Flask, Response, request,  render_template, redirect
import databases.mongodb_config as mongodb
from models.marker import Marker
from models.user import User
from forms import InsertMarkerForm, InsertUserForm
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
        db = mongodb.getDatabase()
        return Response(mongodb.getAllRecordsFrom(db, 'users', asJSON=True), mimetype="application/json")
    except Exception, e:
        return e

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/insertMarker', methods=['GET','POST'])
def insertMarker():
    form = InsertMarkerForm()
    if form.validate_on_submit():
      marker = Marker({
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

@app.route('/insertUser', methods=['GET','POST'])
def insertUser():
    form = InsertUserForm()
    if form.validate_on_submit():
      m = md5.new()
      m.update(form.password.data)
      password = m.hexdigest()
      user = User({
           'firstName':form.firstName.data,
           'lastName':form.lastName.data,
           'username':form.username.data,
           'password':password,
           'isAdmin':form.isAdmin.data
            })
      db = mongodb.getDatabase()
      mongodb.createUpdateUser(db,user)
      return redirect('/')
    return render_template('createUsers.html',form = form)

if __name__ == '__main__':
    app.debug = True
    app.run()
