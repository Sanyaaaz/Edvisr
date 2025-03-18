from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["EdvisrDB"]  # Create/Use "EdvisrDB"
students_collection = db["students"]  # Create "students" collection
