# Generated by Django 4.1.5 on 2023-01-08 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("bookmyticketapi", "0002_alter_city_name_alter_country_name_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="genre",
            name="name",
            field=models.CharField(default="", max_length=255),
            preserve_default=False,
        ),
    ]