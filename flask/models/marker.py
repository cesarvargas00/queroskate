#!/usr/bin/python
# -*- coding: utf-8 -*-
import datetime
class Marker(object):
    """
    author:Cesar Vargas
    name:Marker
    ----------------------------------------------------------------
    This class was made to represent a Marker on the google maps API.
    initiate it with a dictionary like this:
marker = Marker({
   'name':'marker',                                                            
   'description':'abcd',
   'lat':-24.551635,
   'lng':-46.676252,
   'photo':'photoemalgumlugar',
   'misc' : {
      'rank' : '4',
      'floor':'5',
      'galera':'3',
      'boolCoberto':'false',
      'corrimao':'true',
      'borda':'true',
      'mini':'false',
      'bowl':'false',
      'manual':'true'
    }
    })

    """
    def __init__(self,param = None):
        self.name = param['name']
        self.description = param['description']
        self.lat = param['lat']
        self.lng = param['lng']
        self.photo = param['photo']
        self.misc = param['misc']