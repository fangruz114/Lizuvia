from .db import db


class Favorite(db.Model):
    __tablename__ = "favorites"

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(
        'products.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates='favorites')
    product = db.relationship('Product', back_populates='favorites')

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'userId': self.user_id,
            'user': self.user.to_dict_no_additions(),
            'product': self.product.to_dict_no_additions()
        }

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'userId': self.user_id,
        }
