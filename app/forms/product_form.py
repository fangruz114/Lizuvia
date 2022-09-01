from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField
from wtforms.validators import DataRequired, Length, NumberRange


class ProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(
        min=1, max=100, message='name too long max 100 characters')])
    category = SelectField('category', validators=[DataRequired()], choices=[
                           'Furniture', 'Outdoor & Garden', 'Bedding', 'Bath', 'Pillows & Decor', 'Art & Mirrors', 'Halloween'])
    description = StringField('description', validators=[DataRequired()])
    price = DecimalField('price', validators=[DataRequired(), NumberRange(
        min=0, message='price has to be greater than 0')])
    url1 = StringField('url1', validators=[DataRequired()])
    url2 = StringField('url2')
    url3 = StringField('url3')
    url4 = StringField('url4')
    url5 = StringField('url5')
