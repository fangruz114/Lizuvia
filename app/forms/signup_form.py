from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, Length, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def validate_email(form, field):
    email = field.data
    if '@' not in email:
        raise ValidationError("Invalid email address.")


def password_length(form, field):
    password = field.data
    if len(password) < 6:
        raise ValidationError("Password must be 6 characters or more.")


class SignUpForm(FlaskForm):
    first_name = StringField(
        'first_name', validators=[DataRequired('First name is required.'), Length(max=50, message='First name cannot exceed 50 characters.')])
    last_name = StringField(
        'last_name', validators=[DataRequired('Last name is required.'), Length(max=50, message='First name cannot exceed 50 characters.')])
    email = StringField('email', validators=[
                        DataRequired('Email is required.'), user_exists, validate_email, Length(max=200, message='Email length cannot exceed 200 characters.')])
    password = StringField('password', validators=[
                           DataRequired('Password is required.'), password_length, Length(max=200, message='Password length cannot exceed 200 characters.')])
