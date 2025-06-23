from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from db import user_collection
from bson import ObjectId

router = APIRouter()

class User(BaseModel):
    username: str
    email: EmailStr
    password: str

@router.post("/register")
async def register_user(user: User):
    existing_user = await user_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    user_dict = user.dict()
    result = await user_collection.insert_one(user_dict)

    return {
        "message": "User registered successfully",
        "user_id": str(result.inserted_id)
    }

@router.post("/login")
async def login_user(user: User):
    existing_user = await user_collection.find_one({"email": user.email, "password": user.password})
    if not existing_user:
        raise HTTPException(status_code=400, detail="User Not found")
    
    return {
        "message": "Login Succesfull"
    }