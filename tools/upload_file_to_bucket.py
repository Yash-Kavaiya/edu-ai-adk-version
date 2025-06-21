from google.cloud import storage
from datetime import datetime

def upload_file_to_bucket(file_path: str, file_name: str) -> dict:
    """Faz upload de uma imagem ou PDF para o Cloud Storage e retorna a URL pública"""
    client = storage.Client()
    bucket = client.bucket("edu-ai-essays")
    blob = bucket.blob(f"uploads/{datetime.utcnow().isoformat()}_{file_name}")
    blob.upload_from_filename(file_path)
    blob.make_public()
    return {"url": blob.public_url}
