from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .images import seed_images, undo_images
from .orders import seed_orders, undo_orders
from .order_products import seed_order_products, undo_order_products
from .reviews import seed_reviews, undo_reviews
from .carts import seed_carts, undo_carts
from .favorites import seed_favorites, undo_favorites

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_products()
    seed_images()
    seed_orders()
    seed_order_products()
    seed_reviews()
    seed_carts()
    # seed_favorites()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_products()
    undo_images()
    undo_orders()
    undo_order_products()
    undo_reviews()
    undo_carts()
    # undo_favorites()
    # Add other undo functions here
