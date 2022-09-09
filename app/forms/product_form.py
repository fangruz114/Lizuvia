from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError


def url1_verify(form, field):
    url = field.data
    if url and not url.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.gif')):
        raise ValidationError(
            'Image #1 has invalid image url. Image urls must end with .jpg, .jpeg, .png, .gif, .tiff.')


def url2_verify(form, field):
    url = field.data
    if url and not url.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.gif')):
        raise ValidationError(
            'Image #2 has invalid image url. Image urls must end with .jpg, .jpeg, .png, .gif, .tiff.')


def url3_verify(form, field):
    url = field.data
    if url and not url.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.gif')):
        raise ValidationError(
            'Image #3 has invalid image url. Image urls must end with .jpg, .jpeg, .png, .gif, .tiff.')


def url4_verify(form, field):
    url = field.data
    if url and not url.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.gif')):
        raise ValidationError(
            'Image #4 has invalid image url. Image urls must end with .jpg, .jpeg, .png, .gif, .tiff.')


def url5_verify(form, field):
    url = field.data
    if url and not url.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.gif')):
        raise ValidationError(
            'Image #5 has invalid image url. Image urls must end with .jpg, .jpeg, .png, .gif, .tiff.')


class ProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired('Name is required.'), Length(
        min=1, max=100, message='Name is too long. Max 100 characters.')])
    category = SelectField('category', validators=[DataRequired('Category is required.')], choices=[
                           'Furniture', 'Outdoor & Garden', 'Bedding', 'Bath', 'Pillows & Decor', 'Art & Mirrors', 'Halloween'])
    description = StringField('description', validators=[
                              DataRequired('Description is required.'), Length(
                                  min=1, max=2000, message='Description is too long. Max 2000 characters')])
    price = DecimalField('price', validators=[DataRequired('Price is required.'), NumberRange(
        min=0, max=9999, message='price has to be greater than $0 and less than or equal to $9,999')])
    url1 = StringField('url1', validators=[DataRequired(
        'Image #1 url is required.'), url1_verify])
    url2 = StringField('url2', validators=[url2_verify])
    url3 = StringField('url3', validators=[url3_verify])
    url4 = StringField('url4', validators=[url4_verify])
    url5 = StringField('url5', validators=[url5_verify])
