from fastapi import FastAPI

app = FastAPI()

@app.get("/test")
def read_root():
    return {"message": "Hello, World!"}

@app.post("/test")
def create_test_item():
    return {"message": "POST request received."}