from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from Summarize.summarize import summery
from Wordslist.wordslist import wordslist

app = FastAPI()

origins = [
    "http://localhost:8000",#백엔드 서버 주소
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# @app.post("/voice")
# async def vtt(file : UploadFile):
#     return None

@app.post("/summarize")
async def summarize(text : str):
    return summery(text)

@app.post("/wordslist")
async def makeWordsList(text : str):
    return wordslist(text)