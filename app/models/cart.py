from .db import db


class Cart(db.Model):
    __tablename__ = "carts"

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(
        "products.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates='carts')
    product = db.relationship("Product", back_populates='products')

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'userId': self.user_id,
            'quantity': self.quantity,
            'user': self.user.to_dict_no_additions(),
            'product': self.product.to_dict_with_images(),
        }

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'userId': self.user_id,
            'quantity': self.quantity,
        }
