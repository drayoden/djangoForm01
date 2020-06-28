from django import forms

class ContactForm(forms.Form):
    email = forms.EmailField(max_length=100)
    msg = forms.CharField(max_length=200)

