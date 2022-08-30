from app.models import db, Image


def seed_images():
    i1 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202211/0032/cameron-roll-arm-upholstered-sleeper-sofa-with-air-topper-z.jpg',
        product_id=1
    )
    i2 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202218/0030/cameron-roll-arm-upholstered-sleeper-sofa-with-air-topper-z.jpg',
        product_id=1
    )
    i3 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202228/0006/cameron-roll-arm-upholstered-sleeper-sofa-with-air-topper-z.jpg',
        product_id=1
    )
    i4 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202228/0006/cameron-roll-arm-upholstered-sleeper-sofa-with-reversible--z.jpg',
        product_id=1
    )
    i5 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202230/0020/cameron-roll-arm-upholstered-sleeper-sofa-with-memory-foam-z.jpg',
        product_id=1
    )
    i6 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202233/0002/cody-leather-armchair-z.jpg',
        product_id=2
    )
    i7 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202224/0201/toscana-40-console-table-5-z.jpg',
        product_id=3
    )
    i8 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202234/1164/indio-fsc-eucalyptus-single-chaise-lounge-z.jpg',
        product_id=4
    )
    i9 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202227/0119/malibu-metal-adirondack-lounge-chair-nerissa-fire-pit-tabl-z.jpg',
        product_id=5
    )
    i10 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202215/0155/huntington-all-weather-wicker-square-accent-table-z.jpg',
        product_id=6
    )
    i11 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202224/0005/belgian-flax-linen-waffle-duvet-cover-5-z.jpg',
        product_id=7
    )
    i12 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202225/0669/autumn-botanical-percale-duvet-cover-2-z.jpg',
        product_id=8
    )
    i13 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202226/0996/jaxson-quilt-z.jpg',
        product_id=9
    )
    i14 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202224/0074/linden-handcrafted-marble-triple-tier-shelf-1-z.jpg',
        product_id=10
    )
    i15 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202221/0433/img20xl.jpg',
        product_id=11
    )
    i16 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202234/1231/vanity-stool-z.jpg',
        product_id=12
    )
    i17 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202234/1261/doodle-faux-fur-dog-pillow-z.jpg',
        product_id=13
    )
    i18 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202226/0536/cozy-pumpkin-pillows-z.jpg',
        product_id=14
    )
    i19 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202221/0049/mongolian-patchwork-faux-fur-bean-bag-z.jpg',
        product_id=15
    )
    i20 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202225/0024/faux-pampas-grass-shadow-box-wall-art-z.jpg',
        product_id=16
    )
    i21 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202230/0023/white-barn-framed-print-1-z.jpg',
        product_id=17
    )
    i22 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202231/0002/layne-36-round-wall-mirror-2-z.jpg',
        product_id=18
    )
    i23 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202225/0850/pre-lit-black-glitter-branch-wreath-with-bats-1-z.jpg',
        product_id=19
    )
    i24 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202224/0146/lit-black-wire-pumpkins-z.jpg',
        product_id=20
    )
    i25 = Image(
        url='https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202225/0840/ghost-shaped-stoneware-individual-bowls-z.jpg',
        product_id=21
    )

    db.session.add(i1)
    db.session.add(i2)
    db.session.add(i3)
    db.session.add(i4)
    db.session.add(i5)
    db.session.add(i6)
    db.session.add(i7)
    db.session.add(i8)
    db.session.add(i9)
    db.session.add(i10)
    db.session.add(i11)
    db.session.add(i12)
    db.session.add(i13)
    db.session.add(i14)
    db.session.add(i15)
    db.session.add(i16)
    db.session.add(i17)
    db.session.add(i18)
    db.session.add(i19)
    db.session.add(i20)
    db.session.add(i21)
    db.session.add(i22)
    db.session.add(i23)
    db.session.add(i24)
    db.session.add(i25)

    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
