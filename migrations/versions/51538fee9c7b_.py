"""empty message

Revision ID: 51538fee9c7b
Revises: 9e697bcbd296
Create Date: 2023-01-22 16:47:11.796934

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '51538fee9c7b'
down_revision = '9e697bcbd296'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=999), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=False),
    sa.Column('id_packages', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_packages'], ['packages.id'], ),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comment')
    # ### end Alembic commands ###