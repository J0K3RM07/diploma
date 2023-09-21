from django.db import models
from django.contrib.postgres.fields import ArrayField

class Placeholder(models.Model):
    geometry = ArrayField(models.FloatField())
    properties = models.JSONField(blank=True)
    options = models.JSONField(blank=True)


