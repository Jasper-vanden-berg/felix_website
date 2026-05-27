from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote_plus

db_conf = {
    "dbname": "mysql_to_postgres",
    "user": "jasper_vd_berg",
    "password": quote_plus("Climpaloon@nin121"),
    "host": "localhost",
    "port": 5432
}

DATABASE_URL = (
    f"postgresql+psycopg2://{db_conf['user']}:{db_conf['password']}"
    f"@{db_conf['host']}:{db_conf['port']}/{db_conf['dbname']}"
)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)