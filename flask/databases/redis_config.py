#!/usr/bin/python
# -*- coding: utf-8 -*-
import redis
from models.marker import Marker
from redis.exceptions import ConnectionError

def getConnection(host='localhost',port=6379):
    return redis.Redis(host, port)

def getAllMarkersFrom(connection):
    markers = []
    for marker in connection.keys('key*'):
        markers.append(connection.hgetall(marker))
    return markers

def createMarker(connection,marker):
    #create an Id for the marker
    key = 'key' + str(marker.lat) + str(marker.lng)
    if connection.exists(key): 
        return False
    else:
        connection.hmset(key, marker.__dict__)
        return True

#def get

"""
from redis_config import getConnection, getAllMarkersFrom, createMarker
from models import Marker
marker = Marker({
    'name'      :    'Pista da Sumaré',
    'lat'       :    -24.551635,
    'lng'       :    -46.676252,
    'photo'     :    'http://3.bp.blogspot.com/-nmnXr2OhjNs/Tr61VPICMQI/AAAAAAAAAME/x0TGecXDWj0/s1600/Pista-do-Sumar%25C3%25A9-divulga%25C3%25A7%25C3%25A3o.jpg',
    'obstacles' :    'obstacles',
    'security'  :    'security',
    'endereco'  :    'Av. Dr. Arnaldo, 1300 - Perdizes São Paulo'
    })
con = getConnection()
createMarker(con,marker)
"""
