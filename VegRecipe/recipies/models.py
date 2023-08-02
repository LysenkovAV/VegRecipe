from django.db import models
from django.contrib.auth.models import User

from ckeditor_uploader.fields import RichTextUploadingField


class Category(models.Model):  # categories of recipes
    name = models.CharField(max_length=255)
    image = models.URLField(default='http://127.0.0.1:8000/media/uploads/2023/07/31/default.png')
    description = models.TextField(max_length=10000, default='Description coming soon')

    def __str__(self):
        return f'{self.name}'


class Recipe(models.Model):
    title = models.CharField(max_length=255)
    text = RichTextUploadingField()
    image = models.URLField(default='http://127.0.0.1:8000/media/uploads/2023/07/31/default.png')
    categories = models.ManyToManyField(Category, through='RecipeCategory')

    def __str__(self):
        return f'{self.title}: {self.text[:50]}'


class RecipeCategory(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.recipe.title}: {self.category.name}'
