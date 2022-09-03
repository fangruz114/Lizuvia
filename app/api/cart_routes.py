from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Cart, db
from app.forms import CartForm
from app.api.auth_routes import validation_errors_to_error_messages

cart_routes = Blueprint('carts', __name__)


@cart_routes.route('')
@login_required
def get_all_cart_items():
    carts = Cart.query.filter(Cart.user_id == current_user.id).all()
    return {'cart': [c.to_dict() for c in carts]}


@cart_routes.route('/products/<int:id>', methods=['POST'])
@login_required
def add_item_to_cart(id):
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_cart_item = Cart(
            product_id=id, user_id=current_user.id, quantity=form.data['quantity'])
        db.session.add(new_cart_item)
        db.session.commit()
        return new_cart_item.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@cart_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_item_in_cart(id):
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        cart_item = Cart.query.get(id)
        cart_item.quantity = form.data['quantity']
        db.session.commit()
        return cart_item.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@cart_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def remove_item_in_cart(id):
    cart_item = Cart.query.get(id)
    if cart_item:
        db.session.delete(cart_item)
        db.session.commit()
        return {'message': "Successfully Deleted"}
    else:
        return {'message': 'Item in Cart Not Found'}, 404


@cart_routes.route('', methods=['DELETE'])
@login_required
def remove__all_item_in_cart():
    carts = Cart.query.filter(Cart.user_id == current_user.id).all()
    if carts:
        for item in carts:
            db.session.delete(item)
        db.session.commit()
        return {'message': "Successfully Deleted"}
    else:
        return {'message': 'No Item in Shipping Cart'}, 404
