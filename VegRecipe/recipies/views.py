from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Recipe, Category

from .serializer import RecipeSerializer, CategorySerializer


class RecipeView(APIView):
    def get(self, request):
        output = [
            {
                "title": output.title,
                "text": output.text,
                "image": output.image,
                "categories":
                    [
                        category.name for category in output.categories.all()
                    ],
            } for output in Recipe.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryView(APIView):
    def get(self, request):
        output = [
            {
                "name": output.name,
                "image": output.image,
                "description": output.description,
            } for output in Category.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)