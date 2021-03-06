# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-25 11:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userapi', '0009_remove_location_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='status',
            field=models.IntegerField(default=None, null=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='lat',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='lng',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
