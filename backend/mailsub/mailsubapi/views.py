from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework import status

from .serializers import SubscriberSerializer
from .models import Subscriber

from django.http import JsonResponse

# Create your views here.


@api_view(['GET'])
def subscriber_list(request):
    subscribers = Subscriber.objects.all().order_by('name')
    subscriber_serializer = SubscriberSerializer(subscribers, many=True)
    return JsonResponse(subscriber_serializer.data, safe=False)


@api_view(['POST'])
def add_subscriber(request):
    subscriber_data = JSONParser().parse(request)
    subscriber_serializer = SubscriberSerializer(data=subscriber_data)
    if subscriber_serializer.is_valid():
        subscriber_serializer.save()
        return JsonResponse(subscriber_serializer.data, status=status.HTTP_201_CREATED)

    return JsonResponse(subscriber_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
