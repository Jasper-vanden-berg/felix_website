from sqlalchemy.ext.automap import automap_base
from app.db import engine

Base = automap_base()

# reflect ALL tables from database
Base.prepare(autoload_with=engine)

# now you can access tables as Python classes
ObductieK = Base.classes.obductie_k