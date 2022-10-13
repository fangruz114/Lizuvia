from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange


class ReviewForm(FlaskForm):
    rating = IntegerField('rating', validators=[DataRequired('Star rating is required.'), NumberRange(
        min=1, max=5, message='Star rating has to be between 1 to 5.')])
    title = StringField('title', validators=[DataRequired('Title is required.'), Length(
        min=1, max=50, message='Title is too long. Max 50 characters')])
    content = StringField('content', validators=[DataRequired('Review content is required.'), Length(
        min=1, max=990, message='Review content is too long. Max 990 characters')])
