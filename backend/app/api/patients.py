from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db import SessionLocal
from app.automap import ObductieK
from sqlalchemy import exists
import os
import platform
import subprocess

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/patients/search")
def search_patients(q: str, db: Session = Depends(get_db)):
    if not q:
        return {"results": [], "exact_match": False}

    # prefix search (autocomplete)
    rows = (
        db.query(ObductieK.nhb)
        .filter(ObductieK.nhb.ilike(f"{q}%"))
        .limit(10)
        .all()
    )

    results = [r[0] for r in rows]

    # exact match check (replaces /exists endpoint)
    exact_match = q in results

    return {
        "results": results,
        "exact_match": exact_match
    }

@router.get("/patients/{patient_id}")
def get_patient(patient_id: str, db: Session = Depends(get_db)):
    row = (
        db.query(ObductieK)
        .filter(ObductieK.nhb == patient_id)
        .first()
    )

    if not row:
        return {"found": False}

    return {
        "found": True,

        # GROUP 1: general info tab
        "general_info": {
            "nhb": row.nhb,
            "dcode_protocol": row.dcodeprotocol,
            "dcode_pathological": row.dcodepa,
        },

        # GROUP 2: tracker tab (example structure)
        "tracker": {
            "medicine": row.medicatie24 if hasattr(row, "medicatie24") else None,
        }
    }

@router.get("/patients/open-folder/{patient_id}")
def open_folder(patient_id: str):
    folder = patient_id.split("-")[0]
    path = f"/mnt/p/Obducties/{folder}/{patient_id}"

    if platform.system() == "Windows":
        os.startfile(path)
    elif platform.system() == "Darwin":
        subprocess.run(["open", path])
    else:
        subprocess.run(["xdg-open", path])

    return {"opened": True}