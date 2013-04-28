#!/usr/bin/python
# -*- coding: utf-8 -*-
from datetime import date
class User:
	"""
	author:Cesar Vargas
	name:User
	----------------------------------------------------------------
	This class was made to represent a User.
	initiate it with a dictionary like this:
		{
		'username'      :     'cesarvargas00',
		'password'      :     '8(hrn3u2fUHAOS#@!#4512b32',
	    'firstName'      :    'Cesar',
	    'lastName'       :    'Vargas',
	    'isAdmin'       :    False,
	    'avatar'     :    'http://avatar.url',
		'born'			: date(1987, 11, 15)
	    }

	"""
	def __init__(self,param = None):
		self.username = param['username']
		self.password = param['password']
		self.firstName = param['firstName']
		self.lastName = param['lastName']
		self.isAdmin = param['isAdmin']
		#self.avatar = param['avatar']
		#self.born = param['born'].__str__()
