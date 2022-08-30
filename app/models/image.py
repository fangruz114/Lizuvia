from .db import db


class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        "products.id"), nullable=False)

    product = db.relationship('Product', back_populates='images')

    def to_dict(self):
        return {
            'id': self.id,
            'url': self.url,
            'productId': self.product_id,
            'product': self.product.to_dict_no_additions()
        }

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'url': self.url,
            'productId': self.product_id,
        }
