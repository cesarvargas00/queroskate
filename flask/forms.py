from flask.ext.wtf import Form, TextField, BooleanField, TextAreaField, SelectField, FloatField, PasswordField
from flask.ext.wtf import Required

class InsertMarkerForm(Form):
    name = TextField('name', validators = [Required()])
    description = TextAreaField('description', validators = [Required()])
    selectRank = SelectField(u'rank', choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')])
    selectFloor = SelectField(u'floor', choices=[('Muito Liso', 'Muito Liso'), ('Liso', 'Liso'), ('Normal', 'Normal'), ('Pouco aspero', 'Pouco aspero'), ('Muito aspero', 'Muito aspero')])
    selectGalera = SelectField(u'rank', choices=[('Bico', 'Bico'), ('Marrento', 'Marrento'), ('Normal', 'Normal'), ('Amigavel', 'Amigavel'), ('Sanguibom!', 'Sanguibom!')])
    boolCoberto = BooleanField('coberto', default = False)
    corrimao = BooleanField('corrimao', default = False)
    borda = BooleanField('borda', default = False)
    mini = BooleanField('mini', default = False)
    bowl = BooleanField('bowl', default = False)
    manual = BooleanField('manual', default = False)
    lat = FloatField('lat', validators = [Required()])
    lng = FloatField('lng', validators = [Required()])

class InsertUserForm(Form):
    firstName = TextField('firstName', validators = [Required()])
    lastName = TextField('lastName', validators = [Required()])
    username = TextField('username', validators = [Required()])
    password = PasswordField('password', validators = [Required()])
    isAdmin = BooleanField('isAdmin', default = False)
    #avatar = FileField(u'Image File', [validators.regexp(u'^[^/\\]\.jpg$')])