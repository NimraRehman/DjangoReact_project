from django.db import models

STATUS_CHOICES = (
    (1, 'Low'),
    (2, 'Medium'),
    (3, 'High'),
    (4, 'Urgent'),   
)

# Create your models here.
class Task(models.Model):
    name = models.CharField("Name",max_length=240)
    description = models.CharField("Description",max_length=1240)
    category = models.CharField("Description",max_length=240)
    task_priority = models.IntegerField(choices=STATUS_CHOICES ,default=1)
    task_status = models.BooleanField(default=True)
    deadline = models.DateField("Deadline Date", auto_now_add=True)

def __str__(self):
    return self.name