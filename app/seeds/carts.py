from app.models import db, Cart


def seed_carts():
    c1 = Cart(
        product_id=1,
        user_id=1,
        quantity=1
    )

    db.session.add(c1)
    db.session.commit()


def undo_carts():
    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    db.session.commit()
