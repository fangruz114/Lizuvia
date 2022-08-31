from app.models import db, Order


def seed_orders():
    o1 = Order(
        user_id=1,
    )
    o2 = Order(
        user_id=1,
    )
    o3 = Order(
        user_id=1,
    )

    db.session.add(o1)
    db.session.add(o2)
    db.session.add(o3)

    db.session.commit()


def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()
