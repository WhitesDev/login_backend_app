from motor.motor_asyncio import AsyncIOMotorClient
import os

MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://Mahi:1624@cluster0.7j10c.mongodb.net/")
client = AsyncIOMotorClient(MONGO_URI)
db = client["login_app"]
user_collection = db["users"]