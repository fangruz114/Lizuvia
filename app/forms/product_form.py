from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError


# def url_verify(form, field):
#     url = field.data
#     if url and not url.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.gif')):
#         raise ValidationError(
#             'Image  has invalid image url. Image urls must end with .jpg, .jpeg, .png, .gif, .tiff.')


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
        'At least one product image is required.')])
    url2 = StringField('url2')
    url3 = StringField('url3')
    url4 = StringField('url4')
    url5 = StringField('url5')
