# -*- coding: utf-8 -*-
import pymongo
from models.marker import Marker
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

def getAllMarkersFrom(db, asJSON=False):
    '''Gets all markers from given database. Returns list or Json string'''
    markers = []
    for marker in db.markers.find():
        markers.append(marker)
    if not asJSON:
        return markers
    else:
        return json.dumps(markers, default=json_util.default)

def createUpdateMarker(db, marker):
    '''Creates or updates a marker. Updates it only if it exists. Returns bson.objectid.ObjectId, or -1 if fails'''
    if isinstance(marker,models.Marker) and isinstance(db,pymongo.database.Database): # this because marker could not be a Marker and still work.
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
            return db.markers.remove(x)

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
