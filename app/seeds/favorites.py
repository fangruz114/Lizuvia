from app.models import db, Favorite


def seed_favorites():
    f1 = Favorite(
        product_id=2,
        user_id=1
    )
    f2 = Favorite(
        product_id=15,
        user_id=1
    )
    f3 = Favorite(
        product_id=7,
        user_id=1
    )

    db.session.add(f1)
    db.session.add(f2)
    db.session.add(f3)

    db.session.commit()


def undo_favorites():
    db.session.execute('TRUNCATE favorites RESTART IDENTITY CASCADE;')
    db.session.commit()
