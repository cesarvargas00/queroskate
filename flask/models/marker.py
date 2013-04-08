#!/usr/bin/python
# -*- coding: utf-8 -*-
import datetime
class Marker:
	"""
	author:Cesar Vargas
	name:Marker
	----------------------------------------------------------------
	This class was made to represent a Marker on the google maps API.
	initiate it with a dictionary like this:
		{
	    'name'      :    'marker',
	    'lat'       :    -24.551635,
	    'lng'       :    -46.676252,
	    'photo'     :    'http://3.bp.blogspot.com/-nmnXr2OhjNs/Tr61VPICMQI/AAAAAAAAAME/x0TGecXDWj0/s1600/Pista-do-Sumar%25C3%25A9-divulga%25C3%25A7%25C3%25A3o.jpg',
	    'obstacles' :    'obstacles',
	    'security'  :    'security',
	    'endereco'  :    'Av. Dr. Arnaldo, 1300 - Perdizes São Paulo'
	    }

	"""
	def __init__(self,param = None):
		self.name = param['name']
		self.lat = param['lat']
		self.lng = param['lng']
		self.photo = param['photo']
		self.obstacles = param['obstacles']
		self.security = param['security']
		self.endereco = param['endereco']

