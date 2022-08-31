from app.models import db, Product


def seed_products():
    p1 = Product(
        name='Cameron Roll Arm Upholstered Sleeper Sofa with Air Topper',
        category='Furniture',
        description='Get guest ready with our Cameron Sleeper Sofa, which is expertly built for superb comfort. The mattress features a lofty air topper that provides plenty of support. Crafted by our master upholsterers in North Carolina, this collection offers superb quality and customizing options at an unparalleled price.',
        bullet_points='Roll arm,Removable legs feature an Espresso finish,Loose cushions,Corner-blocked frame with mortise-and-tenon joinery provides exceptional structural integrity',
        colors='Beiges',
        dimension='74" w x 36.5" d x 38" h',
        price=2999,
        user_id=1,
    )
    p2 = Product(
        name='Cody Leather Armchair',
        category='Furniture',
        description='Wide and welcoming, our Cody Collection is a modern take on classic farmhouse design. Soft yet sculptural, down blend cushions add an inviting, cozy look that balances the clean, more traditional lines of its solid wood frame.',
        bullet_points='Fixed wood frame features a choice of a Drifted Brown or a Seadrift finish,Loose cushion,Polyester-wrapped cushions for a firmer feel,The frame is made from kiln dried solid and oak wood,Kiln-dried wood helps prevent warping, splitting, cracking and developing mildew',
        colors='Browns',
        dimension='30.5" w x 33" d x 31" h',
        price=1119,
        user_id=1,
    )
    p3 = Product(
        name='Toscana 54" Console Table',
        category='Furniture',
        description='Toscana is inspired by authentic Italian farmhouse furniture with its sawhorse legs and keyed-through tenons. The hand-distressed top and eased edges have a rustic look we love.',
        bullet_points='',
        colors='Neutrals',
        dimension='54" w x 30" d x 15" h',
        price=699,
        user_id=1,
    )
    p4 = Product(
        name='Indio FSC® Eucalyptus Single Chaise Lounge',
        category='Outdoor & Garden',
        description='Clean lines, a compact profile and customizable designs help our Indio Collection fit in anywhere. Versatile and durable, the bestselling chaise lounge is crafted of sustainable kiln-dried solid eucalyptus wood for weather resistance and a relaxed, sun-drenched vibe. Armrests keep you comfortable for hours.',
        bullet_points='Crafted of sustainably harvested Eucalyptus Grandis certified by the Forest Stewardship Council (FSC®),Kiln-dried hardwood and mortise-and-tenon joinery provide superb strength and durability,Features a hand applied Weathered Gray or Biscotti finish,Thick cushion (sold separately) is wrapped in water-repellent polyester canvas or Sunbrella® fabric,Essential Performance Canvas Fabric: This colorfast, water-repellent textile is soft enough for indoor use, while being durable enough to weather the elements,Premium Performance Slub Weave Fabric: Tough on spills yet soft to the touch, this fabric features a textural slub knit that’s colorfast and water repellent,Premium Sunbrella® Fabric: A respected leader in outdoor fabrics, Sunbrella\'s innovative design shrugs off spills and resists fading, mold, and mildew,Premium Sunbrella® Rain Fabric: A respected leader in outdoor fabrics, Sunbrella Rain shrugs off spills and resists fading and mold – plus it’s quick drying.',
        colors='Whites',
        dimension='Overall (open): 72.5" wide x 30.5" deep x 18.5" high',
        price=999,
        user_id=1,
    )
    p5 = Product(
        name='Malibu Metal Adirondack Lounge Chair + Nerissa Fire Pit Table Lounge Set',
        category='Outdoor & Garden',
        description='This weather-resistant set takes a classic chair and makes it modern. Iconic Adirondacks in a white finish are paired with sand-toned Sunbrella cushions, balancing the crisp and the casual. Adding the smooth, uncomplicated shapes of a sculptural console and curvilinear firepit updates the idea of what Adirondack lounging is like.',
        bullet_points='',
        colors='Whites',
        dimension='Overall: 31" w x 37" d x 37" h',
        price=4049,
        user_id=1,
    )
    p6 = Product(
        name='Huntington All-Weather Wicker Square Accent Table',
        category='Outdoor & Garden',
        description='Expertly crafted from aluminum and All-Weather Wicker with a Gray or Natural powder coated finish.',
        bullet_points='',
        colors='Neutrals',
        dimension='Overall: 22" sq, 17" h',
        price=349.99,
        user_id=1,
    )
    p7 = Product(
        name='Belgian Flax Linen Waffle Duvet Cover',
        category='Bedding',
        description='With its signature honeycomb weave, our linen bedding is woven from the world\'s finest Belgian flax. It\'s prewashed for incredible softness and has a lived-in look and feel that only gets better with time. Naturally insulating, this breathable bedding keeps you cool in the summer and cozy in the winter.',
        bullet_points='',
        colors='Whites',
        dimension='Full/Queen: 88" l x 92" w',
        price=299,
        user_id=1,
    )
    p8 = Product(
        name='Autumn Botanical Percale Duvet',
        category='Bedding',
        description='We\'re a proud member of the Better Cotton Initiative (BCI). The Better Cotton Initiative trains farmers to care for the environment and respect workers’ rights and wellbeing. BCI cotton is not physically traceable to final products.',
        bullet_points='',
        colors='Multi',
        dimension='Full/Queen: 88" l x 92" w',
        price=189,
        user_id=1,
    )
    p9 = Product(
        name='Jaxson Quilt',
        category='Bedding',
        description='Inspired by traditional American quilting techniques, this reversible keepsake has an inviting handcrafted look that layers well in any bedroom. Stitched in a geometric design, the mix of colors and patterns fuses a nostalgic coziness with a slightly modern touch.',
        bullet_points='',
        colors='Multi',
        dimension='Full/Queen: 88" l x 92" w',
        price=349,
        user_id=1,
    )
    p10 = Product(
        name='Linden Handcrafted Marble Triple Tier Shelf',
        category='Bath',
        description='Our Linden Collection’s use of mixed materials presents a look that’s clean and simple, making it the perfect complement to a modern, refined bath. Available in your choice of metal with marble or glass shelves, it offers three levels of storage and display for your favorite accessories.',
        bullet_points='',
        colors='Whites',
        dimension='Overall: 24" w x 6.5" d x 26" h',
        price=159,
        user_id=2,
    )
    p11 = Product(
        name='Ainsley Over-the-Toilet Ladder with Baskets',
        category='Bath',
        description='A compact way to add storage to smaller baths and powder rooms. The shelves fit select sizes of our woven basket collections – an attractive addition that adds visual interest to your space.',
        bullet_points='',
        colors='Neutrals',
        dimension='Overall: 29" w x 15" d x 75" h',
        price=229,
        user_id=2,
    )
    p12 = Product(
        name='Vanity Stool',
        category='Bath',
        description='Compact and comfortable, our vanity stool is a versatile addition to the bathroom or dressing area. Use it to set out towels for guests or as a perch for putting on shoes and touching up a manicure—the upholstered seat makes for a surprisingly cozy resting place.',
        bullet_points='',
        colors='Greys',
        dimension='Overall: 16.5" w x 14.5" d x 19" h',
        price=229,
        user_id=2,
    )
    p13 = Product(
        name='Doodle Faux Fur Dog Pillow',
        category='Pillows & Decor',
        description='As soft and curly as the real thing, our pup-shaped pillow is cute enough to cuddle. It’s an easy-add for bringing a touch of whimsy to your home, or gift it to the labradoodle lover in your life.',
        bullet_points='',
        colors='Beiges',
        dimension='Overall: 17" w x 11" h',
        price=45.50,
        user_id=2,
    )
    p14 = Product(
        name='Cozy Pumpkin Pillows Set',
        category='Pillows & Decor',
        description='We\'ve taken our favorite teddy bear–style fabric and created a festive pillow that’s the perfect autumnal update. The pumpkin stem is wrapped in contrasting jute twine for a rustic flourish.',
        bullet_points='',
        colors='Neutrals',
        dimension='5" diam, 8" h, 7.5" diam, 11" h, 9.5" diam, 14" h',
        price=115.5,
        user_id=2,
    )
    p15 = Product(
        name='Mongolian Patchwork Faux Fur Bean Bag',
        category='Pillows & Decor',
        description='Woven of silky long-strand fibers, our supersoft faux fur bean bag is made for lounging. The high-low texture and patchwork design sets this style apart.',
        bullet_points='',
        colors='Beiges',
        dimension='Overall: 41" diameter',
        price=299,
        user_id=2,
    )
    p16 = Product(
        name='Faux Pampas Grass Shadow Box Wall Art',
        category='Art & Mirrors',
        description='Indulge your dedication to botanical decor with a statement made for the wall instead of a vase. We’ve taken a feathery faux Pampas leaf and set it in a white-framed, neutral-backed shadow box. Slight variations make each piece your own original.',
        bullet_points='',
        colors='Whites',
        dimension='OVERALL: 28" w x 50" h x 2" t',
        price=199,
        user_id=2,
    )
    p17 = Product(
        name='White Barn Framed Print',
        category='Art & Mirrors',
        description='Giclee print that is artist enhanced on canvas.The canvas is gallery wrapped over solid hard wood.D-ring mounting; mounting hardware not included.',
        bullet_points='',
        colors='Whites',
        dimension='OVERALL:24" w x 24" h x 2" t',
        price=399,
        user_id=1,
    )
    p18 = Product(
        name='Layne 36” Round Wall Mirror',
        category='Art & Mirrors',
        description='Simple and chic, Layne draws attention with a striking shape. It’s sleek and minimalistic, right down to the slender frame and beveled glass that adds subtle detail.',
        bullet_points='',
        colors='Neutrals',
        dimension='OVERALL:36" dia, 0.5" thick',
        price=399,
        user_id=2,
    )
    p19 = Product(
        name='Pre-Lit Black Glitter Branch Wreath with Bats',
        category='Halloween',
        description='Flying bats set a perfectly eerie tone at Halloween festivities. Hang our lit wreath over a buffet table or in a covered porch for an easy and fun seasonal touch.',
        bullet_points='',
        colors='Blacks',
        dimension='OVERALL:22" diam, 4" t',
        price=59,
        user_id=3,
    )
    p20 = Product(
        name='NEWLit Black Wire Pumpkins',
        category='Halloween',
        description='Made of 70 percent iron and 30% plastic. Requires 4 D batteries (not included). For indoor and outdoor use.',
        bullet_points='',
        colors='Blacks',
        dimension='OVERALL: 16" w x 16" d x 20" h',
        price=89,
        user_id=3,
    )
    p21 = Product(
        name='Ghost Shaped Stoneware Individual Bowls',
        category='Halloween',
        description='Invite this friendly ghost to your next Halloween party. Crafted of ceramic and finished in a modern matte glaze, the bowl is perfectly sized to hold sweet treats and more.',
        bullet_points='',
        colors='Whites',
        dimension='Overall: 5.5" w x 6.5" d x 2.25" h',
        price=60,
        user_id=1,
    )

    db.session.add(p1)
    db.session.add(p2)
    db.session.add(p3)
    db.session.add(p4)
    db.session.add(p5)
    db.session.add(p6)
    db.session.add(p7)
    db.session.add(p8)
    db.session.add(p9)
    db.session.add(p10)
    db.session.add(p11)
    db.session.add(p12)
    db.session.add(p13)
    db.session.add(p14)
    db.session.add(p15)
    db.session.add(p16)
    db.session.add(p17)
    db.session.add(p18)
    db.session.add(p19)
    db.session.add(p20)
    db.session.add(p21)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
