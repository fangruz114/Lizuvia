from app.models import db, Review


def seed_reviews():
    r1 = Review(
        rating=5,
        title='Petite and perfect',
        content='This chair is soft, supple, supportive all in a petite package - exactly as pictured. I loved the design of the chair because of its organic textured shapes and neotenic legs in light ash wood tone. I placed it in the master bedroom as an accent piece, and i regret not getting a second one. It would perfectly complement other neutral color palettes and sure to be a conversation piece. It is on the short side, so if you are very tall or have difficulty sitting down low, this may not be for you. As I am short myself, this chair actually supports my back just fine, and the cushion is so soft from the shearling.',
        product_id=2,
        user_id=3
    )
    r2 = Review(
        rating=5,
        title='Sherry chairs',
        content='Love these chairs! My adult children fight over sitting in them. Really different, comfortable and fits smaller spaces!',
        product_id=2,
        user_id=2
    )
    r3 = Review(
        rating=5,
        title='Adorable chair',
        content='This chair is so soft and cute in real life. I love it! It is very high quality and super sturdy.',
        product_id=2,
        user_id=4
    )

    r4 = Review(
        rating=4,
        title='Unstable product quality',
        content='I ordered 2 sofas in June 2021. Receive the first one in April, 2022 and the second one about one month later. The first one was great and very comfortable. However the second one was collapsed in the middle upon arrival. The customer service was great, and agreed to order a replacement for me. However I have to wait a longtime again which is estimated in stock by end of this year, but I can keep the current one until then. It’s a very disappointed to receive defected sofa after such a long waiting time. The first one is great, and very comfortable with a lot of support and relative firm which is what I want.',
        product_id=1,
        user_id=1
    )

    db.session.add(r1)
    db.session.add(r2)
    db.session.add(r3)
    db.session.add(r4)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
