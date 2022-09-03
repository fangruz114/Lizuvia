from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError


def url_verify(form, field):
    url = field.data
    if url and not url.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.bmp', '.gif')):
        raise ValidationError(
            'Invalid image url. Image urls must end with .jpg, .jpeg, .png, .gif, .tiff, .bmp.')


class ProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(
        min=1, max=100, message='name too long max 100 characters')])
    category = SelectField('category', validators=[DataRequired()], choices=[
                           'Furniture', 'Outdoor & Garden', 'Bedding', 'Bath', 'Pillows & Decor', 'Art & Mirrors', 'Halloween'])
    description = StringField('description', validators=[DataRequired()])
    price = DecimalField('price', validators=[DataRequired(), NumberRange(
        min=0, message='price has to be greater than 0')])
    url1 = StringField('url1', validators=[DataRequired(), url_verify])
    url2 = StringField('url2', validators=[url_verify])
    url3 = StringField('url3', validators=[url_verify])
    url4 = StringField('url4', validators=[url_verify])
    url5 = StringField('url5', validators=[url_verify])
