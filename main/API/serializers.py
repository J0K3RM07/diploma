from rest_framework import serializers
from main.MCHS.models import *


class PlaceholderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Placeholder
        fields = '__all__'
