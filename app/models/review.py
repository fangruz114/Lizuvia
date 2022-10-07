from .db import db
from datetime import datetime


class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String(1000), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        'products.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", back_populates='reviews')
    product = db.relationship('Product', back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'rating': self.rating,
            'title': self.title,
            'content': self.content,
            'productId': self.product_id,
            'userId': self.user_id,
            'createdAt': self.created_at,
            'user': self.user.to_dict_no_additions(),
            'product': self.product.to_dict_with_images()
        }

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'rating': self.rating,
            'title': self.title,
            'content': self.content,
            'productId': self.product_id,
            'userId': self.user_id,
            'createdAt': self.created_at,
        }
