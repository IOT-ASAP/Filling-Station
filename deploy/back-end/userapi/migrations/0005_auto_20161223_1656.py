# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-23 14:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userapi', '0004_location_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='status',
            field=models.IntegerField(default=None, null=True),
        ),
    ]