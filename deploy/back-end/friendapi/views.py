from django.shortcuts import render
from friendship.models import Friend, FriendshipRequest
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from friendapi.serializers import UserFriendsSerializer, FriendshipRequestsSerializer, SendRequestSerializer, \
   DeleteFriendSerializer, AcceptFriendRequestSerializer


# Create your views here.


class UserFriendsViewSet(viewsets.ModelViewSet):
   serializer_class = UserFriendsSerializer
   queryset = Friend.objects.all()

class FriendshipRequestsViewSet(viewsets.ModelViewSet):
   serializer_class = FriendshipRequestsSerializer
   queryset = FriendshipRequest.objects.all()

class SendRequestAPIView(CreateAPIView):
   serializer_class = SendRequestSerializer
   queryset = Friend.objects.all()

class DeleteFriendAPIView(APIView):
   serializer_class = DeleteFriendSerializer
   queryset = Friend.objects.all()

class AcceptFriendRequestView(CreateAPIView):
   serializer_class = DeleteFriendSerializer
   queryset = FriendshipRequest.objects.all()