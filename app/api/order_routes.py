from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Order, Order_Product, Cart, db
from app.forms import CartForm
from app.api.auth_routes import validation_errors_to_error_messages

order_routes = Blueprint('orders', __name__)


@order_routes.route('')
@login_required
def get_all_orders():
    orders = Order.query.filter(Order.user_id == current_user.id).all()
    return {'orders': [o.to_dict() for o in orders]}


@order_routes.route('/<int:id>')
@login_required
def get_order_details(id):
    order = Order.query.get(id)
    if order.user_id == current_user.id:
        order_products = Order_Product.query.filter(
            Order_Product.order_id == id).all()
        if order_products:
            return {'orderProducts': [op.to_dict() for op in order_products]}
        else:
            return {'message': 'Order Not Found'}, 404
    else:
        return {'message': 'You are not authorized to see this order.'}, 401


@order_routes.route('', methods=['POST'])
@login_required
def checkout():
    new_order = Order(user_id=current_user.id)
    db.session.add(new_order)
    db.session.commit()

    carts = Cart.query.filter(Cart.user_id == current_user.id).all()
    cart_items = [item.to_dict() for item in carts]

    for item in cart_items:
        order_item = Order_Product(
            order_id=new_order.id, product_id=item['productId'], quantity=item['quantity'])
        db.session.add(order_item)

    db.session.commit()

    return new_order.to_dict()


@order_routes.route('/products/<int:id>', methods=['PUT'])
@login_required
def modify_order_items(id):
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        order_product = Order_Product.query.get(id)
        order_id = order_product.order_id
        if order_product:
            if form.data['quantity'] == 0:
                db.session.delete(order_product)
                db.session.commit()
            else:
                order_product.quantity = form.data['quantity']
                db.session.commit()
                return order_product.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@order_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_order(id):
    order = Order.query.get(id)
    if order:
        db.session.delete(order)
        db.session.commit()
        return {'message': "Successfully Deleted"}
    else:
        return {'message': 'Order Not Found'}, 404
