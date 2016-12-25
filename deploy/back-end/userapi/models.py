from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Location(models.Model):
    user = models.OneToOneField(User)
    lat = models.FloatField(blank=True, null=True)
    lng = models.FloatField(blank=True, null=True)
    status = models.IntegerField(null=True, default=None)
    def __str__(self):
        return str(self.user)
