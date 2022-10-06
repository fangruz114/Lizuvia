from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms import ReviewForm
from app.api.auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)


@review_routes.route('')
@login_required
def get_user_reviews():
    reviews = Review.query.filter(Review.user_id == current_user.id).all()
    return {'reviews': [r.to_dict() for r in reviews]}


@review_routes.route('/products/<int:id>')
def get_product_reviews(id):
    reviews = Review.query.filter(Review.product_id == id).all()
    return {'reviews': [r.to_dict() for r in reviews]}


@review_routes.route('/products/<int:id>', methods=['POST'])
@login_required
def add_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_review = Review(
            rating=form.data['rating'],
            title=form.data['title'],
            content=form.data['content'],
            product_id=id,
            user_id=current_user.id
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review.query.get(id)
        if review:
            review.rating = form.data['rating']
            review.title = form.data['title']
            review.content = form.data['content']

            db.session.commit()
            return review.to_dict()
        else:
            return {'message': 'Review Not Found'}, 404
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    if review:
        db.session.delete(review)
        db.session.commit()
        return {'message': "Successfully Deleted"}
    else:
        return {'message': 'Review Not Found'}, 404
