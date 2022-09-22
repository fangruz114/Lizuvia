from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Favorite, Product, db

favorite_routes = Blueprint('favorites', __name__)


@favorite_routes.route('/products/<int:id>', methods=['POST'])
@login_required
def add_favor(id):
    product = Product.query.get(id)
    if product:
        favorite = Favorite.query.filter(
            Favorite.product_id == id, current_user.id == Favorite.user_id).all()
        if favorite:
            db.session.delete(favorite)
        else:
            newFavor = Favorite(user_id=current_user.id, product_id=id)
            db.session.add(newFavor)
        db.session.commit()
    else:
        return {'message': 'Product Not Found'}, 404
