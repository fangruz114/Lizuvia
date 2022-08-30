from app.models import db, Order_Product


def seed_order_products():
    op1 = Order_Product(
        order_id=1,
        product_id=1,
        quantity=1
    )
    op2 = Order_Product(
        order_id=1,
        product_id=7,
        quantity=1
    )
    op3 = Order_Product(
        order_id=1,
        product_id=17,
        quantity=2
    )
    op4 = Order_Product(
        order_id=2,
        product_id=10,
        quantity=1
    )
    op5 = Order_Product(
        order_id=2,
        product_id=15,
        quantity=3
    )
    op6 = Order_Product(
        order_id=3,
        product_id=17,
        quantity=2
    )
    op7 = Order_Product(
        order_id=3,
        product_id=20,
        quantity=1
    )
    op8 = Order_Product(
        order_id=3,
        product_id=19,
        quantity=1
    )
    op9 = Order_Product(
        order_id=3,
        product_id=21,
        quantity=2
    )

    db.session.add(op1)
    db.session.add(op2)
    db.session.add(op3)
    db.session.add(op4)
    db.session.add(op5)
    db.session.add(op6)
    db.session.add(op7)
    db.session.add(op8)
    db.session.add(op9)

    db.session.commit()


def undo_order_products():
    db.session.execute('TRUNCATE order_products RESTART IDENTITY CASCADE;')
    db.session.commit()
