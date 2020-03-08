
from rest_framework import serializers
from to_do_list.models import Task

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('name','description','category','task_priority','task_status','deadline')