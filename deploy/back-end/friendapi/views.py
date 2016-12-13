from django.shortcuts import render
from friendship.models import Friend, FriendshipRequest
from rest_framework import viewsets
from friendapi.serializers import UserFriendsSerializer, FriendshipRequestsSerializer


# Create your views here.


class UserFriendsViewSet(viewsets.ModelViewSet):
   serializer_class = UserFriendsSerializer
   queryset = Friend.objects.all()

class FriendshipRequestsViewSet(viewsets.ModelViewSet):
   serializer_class = FriendshipRequestsSerializer
   queryset = FriendshipRequest.objects.all()