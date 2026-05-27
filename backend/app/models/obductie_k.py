from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.automap import ObductieK

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def clean(row):
    return {
        k: v
        for k, v in row.__dict__.items()
        if k != "_sa_instance_state"
    }


@router.get("/obductie")
def get_obductie(db: Session = Depends(get_db)):
    rows = db.query(ObductieK).limit(100).all()
    return [clean(r) for r in rows]