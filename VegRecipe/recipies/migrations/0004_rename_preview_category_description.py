# Generated by Django 4.2.3 on 2023-07-28 12:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipies', '0003_category_preview_alter_category_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category',
            old_name='preview',
            new_name='description',
        ),
    ]
