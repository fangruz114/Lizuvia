from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Favorite, Product, db

favorite_routes = Blueprint('favorites', __name__)


@favorite_routes.route('')
def get_all_favors():
    favorites = Favorite.query.filter(
        Favorite.user_id == current_user.id).all()
    return {'favorites': [f.to_dict() for f in favorites]}


@favorite_routes.route('/products/<int:id>', methods=['POST'])
@login_required
def update_favor(id):
    product = Product.query.get(id)
    if product:
        favorite = Favorite.query.filter(
            Favorite.product_id == id, current_user.id == Favorite.user_id).one_or_none()
        if favorite:
            id = favorite.id
            db.session.delete(favorite)
            db.session.commit()
            return {'id': id}
        else:
            newFavor = Favorite(user_id=current_user.id, product_id=id)
            db.session.add(newFavor)
            db.session.commit()
            return {'favor': newFavor.to_dict()}
    else:
        return {'message': 'Product Not Found'}, 404
