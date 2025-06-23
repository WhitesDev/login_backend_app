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

class UserLogin(BaseModel):
    email: EmailStr
    password: str


@router.post("/login")
async def login_user(user: UserLogin):
    print(f"Trying login: {user.email} / {user.password}")  # Debug print
    
    existing_user = await user_collection.find_one({
        "email": user.email.strip(),
        "password": user.password.strip()
    })

    if not existing_user:
        raise HTTPException(status_code=400, detail="User not found or wrong password")

    return {
        "message": "Login Successful",
        "username": existing_user["username"]
    }
