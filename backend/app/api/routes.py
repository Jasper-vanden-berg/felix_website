from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
def health_check():
    return {
        "healthy": True
    }

@router.get("/summaries")
def get_summaries():
    return {
        "summaries": []
    }
