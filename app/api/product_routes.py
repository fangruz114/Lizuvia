from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Product, Image, db
from app.forms import ProductForm
from app.api.auth_routes import validation_errors_to_error_messages

product_routes = Blueprint('products', __name__)


@product_routes.route('')
def get_all_products():
    products = Product.query.all()
    return {'products': [p.to_dict_with_images() for p in products]}


@product_routes.route('/categories/<string:category>')
def get_products_by_category(category):
    category_map = {
        'furniture': 'Furniture',
        'outdoor': 'Outdoor & Garden',
        'bedding': 'Bedding',
        'bath': 'Bath',
        'decor': 'Pillows & Decor',
        'mirrors-wall-art': 'Art & Mirrors',
        'halloween': 'Halloween'
    }
    category_products = Product.query.filter(
        Product.category == category_map[category]).all()
    return {'products': [product.to_dict_with_images() for product in category_products]}


@product_routes.route('/<int:id>')
def get_product_by_id(id):
    product = Product.query.filter(Product.id == id).one_or_none()
    if product:
        return product.to_dict()
    else:
        return {'id': id, "message": "product not found"}, 404


@product_routes.route('', methods=['POST'])
@login_required
def add_products():
    form = ProductForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_product = Product(name=form.data['name'], category=form.data['category'],
                              description=form.data['description'], price=form.data['price'], user_id=current_user.id)
        db.session.add(new_product)
        db.session.commit()

        image1 = Image(url=form.data['url1'], product_id=new_product.id)
        db.session.add(image1)

        if form.data['url2']:
            image2 = Image(url=form.data['url2'], product_id=new_product.id)
            db.session.add(image2)

        if form.data['url3']:
            image3 = Image(url=form.data['url3'], product_id=new_product.id)
            db.session.add(image3)

        if form.data['url4']:
            image4 = Image(url=form.data['url4'], product_id=new_product.id)
            db.session.add(image4)

        if form.data['url5']:
            image5 = Image(url=form.data['url5'], product_id=new_product.id)
            db.session.add(image5)

        db.session.commit()

        return new_product.to_dict()

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@product_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_products(id):
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product = Product.query.get(id)
        product.name = form.data['name']
        product.category = form.data['category']
        product.description = form.data['description']
        product.price = form.data['price']

        db.session.commit()
        return product.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@product_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_products(id):
    product = Product.query.get(id)
    if product:
        db.session.delete(product)
        db.session.commit()
        return {'message': "Successfully Deleted"}
    else:
        return {'message': 'Product Not Found'}, 404
