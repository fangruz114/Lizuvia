from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError


def check_type(form, field):
    quantity = field.data
    if not isinstance(quantity, int) or quantity <= 0 or quantity >= 100:
        raise ValidationError(
            'quantity has to be an integer number between 1 to 99.')


class CartForm(FlaskForm):
    quantity = IntegerField('quantity', validators=[check_type])
