# -*- coding: utf-8 -*-
import pymongo
from models.marker import Marker
from models.user import User
import json
from bson import json_util
from pymongo.errors import ConnectionFailure, DuplicateKeyError

def getDatabase(host='localhost',port=27017):
    '''Connects to a database. Defaults: host='localhost',port=27017. Returns pymongo.database.Database'''
    ans = None
    try:
        ans = pymongo.MongoClient(host, port).database
    except ConnectionFailure:
        print 'Could not connect to database!'
    finally:
        return ans

def getAllRecordsFrom(db, x, asJSON = False):
    '''Gets all records (x is a String) from given database. Returns a list or Json string'''
    xs = list(getattr(db, x).find())
    return json.dumps(xs, default = json_util.default) if asJSON else xs

def createUpdateUser(db, user):
    '''Creates or updates a user. Updates it only if it exists. Returns bson.objectid.ObjectId, or -1 if fails'''
    if isinstance(user,User) and isinstance(db,pymongo.database.Database): # this because marker could not be a Marker and still work.
        users = db.users
    else:
        raise TypeError('The arguments must be of types pymongo.database.Database and models.Marker')
    try:
        return users.update({'username':user.username},
            {'$set':user.__dict__},
            upsert=True) # returns the id of the added marker
    except DuplicateKeyError:
        return -1

def deleteUserFrom(db, all=False, x=None):
    '''Delete user from database. Can be used with all = True. If that`s the case, removes all users from given database'''
    if all:
        return db.users.remove()
    else:
        if x is not None:
            '''not implemented yet'''
            pass
            #return db.users.remove(x)

'''MARKERS'''

def createUpdateMarker(db, marker):
    '''Creates or updates a marker. Updates it only if it exists. Returns bson.objectid.ObjectId, or -1 if fails'''
    if isinstance(marker,Marker) and isinstance(db,pymongo.database.Database): # this because marker could not be a Marker and still work.
        markers = db.markers
    else:
        raise TypeError('The arguments must be of types pymongo.database.Database and models.Marker')
    try:
        return markers.save(marker.__dict__) # returns the id of the added marker
    except DuplicateKeyError:
        return -1

def deleteMarkerFrom(db, all=False, x=None):
    '''Delete marker from database. Can be used with all = True. If that`s the case, removes all markers from given database'''
    if all:
        return db.markers.remove()
    else:
        if x is not None:
            '''not implemented yet'''
            pass
            #return db.markers.remove(x)

def getMarkersWithin(db, boundaries):
    '''http://api.mongodb.org/python/1.7/examples/geo.html'''
    pass

"""
from databases.mongodb_config import getDatabase, getAllMarkersFrom, createUpdateMarker
from models.marker import Marker
marker = Marker({
    'name'      :    'X',
    'lat'       :    -25.551635,
    'lng'       :    -46.2376252,
    'photo'     :    'http://3.bp.blogspot.com/-nmnXr2OhjNs/Tr61VPICMQI/AAAAAAAAAME/x0TGecXDWj0/s1600/Pista-do-Sumar%25C3%25A9-divulga%25C3%25A7%25C3%25A3o.jpg',
    'obstacles' :    'obstacles',
    'security'  :    'security',
    'endereco'  :    'Av. Dr. Arnaldo, 1300 - Perdizes São Paulo'
    })
db = getDatabase()
createUpdateMarker(db,marker)
"""
