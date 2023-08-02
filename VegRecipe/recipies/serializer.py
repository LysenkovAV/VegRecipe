from rest_framework import serializers

from .models import Recipe, Category, RecipeCategory


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class RecipeSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)

    class Meta:
        model = Recipe
        fields = ['title', 'text', 'image', 'categories']


    def create(self, validated_data):
        categories = validated_data.pop('categories')
        recipe = Recipe.objects.create(**validated_data)
        for category in categories:
            current_category, status = Category.objects.get_or_create(**category)
            RecipeCategory.objects.create(category=current_category, recipe=recipe)
        return recipe
