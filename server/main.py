from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from register import router as register_router

app = FastAPI()  # ✅ Initialize FastAPI first

# ✅ Apply CORS middleware after app is created
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, change to specific origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Include your register routes
app.include_router(register_router)

@app.get("/")
def read_root():
    return {"Hello": "World"}
