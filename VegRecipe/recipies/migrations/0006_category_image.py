# Generated by Django 4.2.3 on 2023-07-31 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipies', '0005_recipe_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.URLField(default='http://127.0.0.1:8000/media/uploads/2023/07/31/default.png'),
        ),
    ]
