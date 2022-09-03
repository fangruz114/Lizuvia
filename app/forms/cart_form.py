from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, NumberRange, ValidationError


class CartForm(FlaskForm):
    quantity = IntegerField('quantity', validators=[DataRequired(), NumberRange(
        min=1, message='quantity has to be greater than 1 or more')])
