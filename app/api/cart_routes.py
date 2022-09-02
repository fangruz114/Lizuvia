from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Cart, db
# from app.forms import ProductForm
from app.api.auth_routes import validation_errors_to_error_messages

cart_routes = Blueprint('carts', __name__)


@cart_routes.route('')
@login_required
def get_all_cart_items():
    carts = Cart.query.filter(Cart.user_id == current_user.id).all()
    return {'cart': [c.to_dict() for c in carts]}
