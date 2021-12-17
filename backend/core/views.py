# views.py

from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
from rest_framework import status
from rest_framework.decorators import api_view

# Create your views here.
class ReactView(APIView):
	
	serializer_class = ReactSerializer

	def get(self, request):
		detail = [ {"name": detail.name,"detail": detail.detail}
		for detail in Quotes.objects.all()]
		return Response(detail)

	def post(self, request):
		serializer = ReactSerializer(data=request.data)
		if serializer.is_valid(raise_exception=True):
			serializer.save()
			return Response(serializer.data)

@api_view(('POST',))
def shit(request):
	'''
	INPUT: [num1, num2]
	'''
	if request.method == "POST":
		REQUIRED_KEYS = ["num1", "num2"]
		for x in REQUIRED_KEYS:
			if x not in request.data:
				print("BAD")
				return Response(status=status.HTTP_400_BAD_REQUEST)
		return Response(request.data["num1"] + request.data["num2"])

	else:
		return Response(status=status.HTTP_400_BAD_REQUEST)

