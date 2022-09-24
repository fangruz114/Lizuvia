from .db import db


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String, nullable=False)
    bullet_points = db.Column(db.String)
    colors = db.Column(db.String)
    dimension = db.Column(db.String)
    price = db.Column(db.Float(precision=2, asdecimal=False), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates='products')
    carts = db.relationship(
        "Cart", back_populates="product", cascade='all, delete')
    images = db.relationship(
        "Image", back_populates="product", cascade='all, delete')
    reviews = db.relationship(
        "Review", back_populates='product', cascade='all, delete')
    favorites = db.relationship(
        "Favorite", back_populates='product', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'bulletPoints': self.bullet_points,
            'colors': self.colors,
            'dimension': self.dimension,
            'price': self.price,
            'userId': self.user_id,
            'user': self.user.to_dict_no_additions(),
            'carts': [c.to_dict_no_additions() for c in self.carts],
            'images': [i.to_dict_no_additions() for i in self.images],
            'reviews': [r.to_dict_no_additions() for r in self.reviews],
            'favorites': [f.to_dict_no_additions() for f in self.favorites],
        }

    def to_dict_with_images(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'bulletPoints': self.bullet_points,
            'colors': self.colors,
            'dimension': self.dimension,
            'price': self.price,
            'userId': self.user_id,
            'images': [i.to_dict_no_additions() for i in self.images],
        }

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'bulletPoints': self.bullet_points,
            'colors': self.colors,
            'dimension': self.dimension,
            'price': self.price,
            'userId': self.user_id,
        }
