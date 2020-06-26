from django.db import models

class Contact(models.Model):
    email = models.EmailField(max_length=100)
    msg = models.CharField(max_length=200)
    def __str__(self):
        return self.email