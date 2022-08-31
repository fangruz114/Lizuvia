from .db import db


class Order_Product(db.Model):
    __tablename__ = "order_products"

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey(
        "orders.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        "products.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    product = db.relationship("Product", back_populates='order_products')
    order = db.relationship("Order", back_populates='order_products')

    def to_dict(self):
        return {
            'id': self.id,
            'orderId': self.order_id,
            'productId': self.product_id,
            'quantity': self.quantity,
            'product': self.product.to_dict_with_images(),
            'order': self.order.to_dict_no_additions(),
        }

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'orderId': self.order_id,
            'productId': self.product_id,
            'quantity': self.quantity,
        }
