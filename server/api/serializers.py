from rest_framework import serializers

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model=Quiz
        fields=('id','topic','difficulty_level','questions')