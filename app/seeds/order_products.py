from app.models import db, Order_Product


def seed_order_products():
    op1 = Order_Product(
        order_id=1,
        product_id=1,
        product_name='Cameron Roll Arm Upholstered Sleeper Sofa with Air Topper',
        product_price=2999,
        image_url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202211/0032/cameron-roll-arm-upholstered-sleeper-sofa-with-air-topper-z.jpg',
        quantity=1,

    )
    op2 = Order_Product(
        order_id=1,
        product_id=7,
        product_name='Belgian Flax Linen Waffle Duvet Cover',
        product_price=299,
        image_url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202224/0005/belgian-flax-linen-waffle-duvet-cover-5-z.jpg',
        quantity=1
    )
    op3 = Order_Product(
        order_id=1,
        product_id=17,
        product_name='White Barn Framed Print',
        product_price=399,
        image_url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202230/0023/white-barn-framed-print-1-z.jpg',
        quantity=2
    )
    op4 = Order_Product(
        order_id=2,
        product_id=10,
        product_name='Linden Handcrafted Marble Triple Tier Shelf',
        product_price=159,
        image_url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202224/0074/linden-handcrafted-marble-triple-tier-shelf-1-z.jpg',
        quantity=1
    )
    op5 = Order_Product(
        order_id=2,
        product_id=15,
        product_name='Mongolian Patchwork Faux Fur Bean Bag',
        product_price=299,
        image_url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202221/0049/mongolian-patchwork-faux-fur-bean-bag-z.jpg',
        quantity=3
    )
    op6 = Order_Product(
        order_id=3,
        product_id=17,
        product_name='White Barn Framed Print',
        product_price=399,
        image_url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202230/0023/white-barn-framed-print-1-z.jpg',
        quantity=2
    )
    op7 = Order_Product(
        order_id=3,
        product_id=20,
        product_name='NEWLit Black Wire Pumpkins',
        product_price=89,
        image_url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202224/0146/lit-black-wire-pumpkins-z.jpg',
        quantity=1
    )
    op8 = Order_Product(
        order_id=3,
        product_id=19,
        product_name='Pre-Lit Black Glitter Branch Wreath with Bats',
        product_price=59,
        image_url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202225/0850/pre-lit-black-glitter-branch-wreath-with-bats-1-z.jpg',
        quantity=1
    )
    op9 = Order_Product(
        order_id=3,
        product_id=21,
        product_name='Ghost Shaped Stoneware Individual Bowls',
        product_price=60,
        image_url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202225/0840/ghost-shaped-stoneware-individual-bowls-z.jpg',
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
