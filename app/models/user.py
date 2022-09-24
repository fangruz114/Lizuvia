from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    products = db.relationship(
        'Product', back_populates='user', cascade='all, delete')
    carts = db.relationship(
        'Cart', back_populates='user', cascade='all, delete')
    orders = db.relationship(
        'Order', back_populates='user', cascade='all, delete')
    reviews = db.relationship(
        'Review', back_populates='user', cascade='all, delete')
    favorites = db.relationship(
        'Favorite', back_populates='user', cascade='all, delete')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'email': self.email,
            'products': [p.to_dict_no_additions() for p in self.products],
            'carts': [c.to_dict_no_additions() for c in self.carts],
            'orders': [o.to_dict_no_additions() for o in self.orders],
            'reviews': [r.to_dict_no_additions() for r in self.reviews],
            'favorites': [f.to_dict_no_additions() for f in self.favorites],
        }

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'email': self.email,
        }
