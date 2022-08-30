from .db import db
from datetime import datetime


class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", back_populates='orders')
    order_products = db.relationship(
        "Order_Product", back_populates='order', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'createdAt': self.created_at,
            'user': self.user.to_dict_no_additions(),
            'orderProducts': [op.to_dict_no_additions() for op in self.order_products]
        }

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'createdAt': self.created_at
        }
