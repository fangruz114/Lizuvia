from email import contentmanager
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

    db.session.add(r1)
    db.session.add(r2)
    db.session.add(r3)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
