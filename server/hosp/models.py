from django.db import models

# Contacts Model
class Contact(models.Model):
    contact_id = models.AutoField(primary_key=True)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.email
    
# Appointments Model
class Appointment(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=15)
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return f"Appointment for {self.name} on {self.date}"