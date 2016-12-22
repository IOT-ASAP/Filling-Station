from django.contrib.auth.models import User
from friendship.models import Friend, FriendshipRequest
from rest_framework import serializers
from rest_framework.fields import CharField,IntegerField


class UserFriendsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Friend
        fields = ('to_user_id',)

class FriendshipRequestsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FriendshipRequest
        fields = ('id', 'from_user_id')

class SendRequestSerializer(serializers.ModelSerializer):
    from_user_id=IntegerField()
    to_user_id=IntegerField()
    class Meta:
        model = Friend
        fields = ['from_user_id', 'to_user_id', ]

    def create(self, validated_data):
        from_user_id = validated_data['from_user_id']
        to_user_id = validated_data['to_user_id']
        from_user=User.objects.get(pk=from_user_id)
        to_user=User.objects.get(pk=to_user_id)
        Friend.objects.add_friend(
            from_user=from_user,
            to_user=to_user,
        )
        return validated_data

class DeleteFriendSerializer(serializers.ModelSerializer):
    from_user_id=IntegerField()
    to_user_id=IntegerField()
    class Meta:
        model = Friend
        fields = ['from_user_id', 'to_user_id', ]

    def destroy(self, request):
        from_user_id = request['from_user_id']
        to_user_id = request['to_user_id']
        from_user=User.objects.get(from_user_id)
        to_user=User.objects.get(to_user_id)
        Friend.objects.remove_friend(
            from_user=from_user,
            to_user=to_user,
        )
        return request
