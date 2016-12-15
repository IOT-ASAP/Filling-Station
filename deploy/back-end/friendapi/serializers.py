from friendship.models import Friend, FriendshipRequest
from rest_framework import serializers

class UserFriendsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Friend
        fields = ('to_user_id',)

class FriendshipRequestsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FriendshipRequest
        fields = ('url', 'from_user_id', 'to_user_id')