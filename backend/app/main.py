from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router
from app.api.patients import router as patients_router

app = FastAPI(
    title="Medical Summarizer API",
    version="0.1.0"
)

origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# Allow React frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(patients_router)

@app.get("/")
def root():
    return {
        "status": "running",
        "service": "medical-summarizer-backend"
    }
