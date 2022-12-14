from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Product

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/products')
@login_required
def user_products():
    userProducts = Product.query.filter(
        Product.user_id == current_user.id).all()
    return {'products': [product.to_dict() for product in userProducts]}
