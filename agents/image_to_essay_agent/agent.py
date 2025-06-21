from google.adk.agents import ToolAgent
from tools.upload_file_to_bucket import upload_file_to_bucket
from tools.extract_text_from_image import extract_text_from_image
from agents.essay_evaluator_agent.agent import root_agent as essay_agent

root_agent = ToolAgent(
    name="image_to_essay_agent",
    model="gemini-2.5-flash",
    description="Extrai redação de imagem e envia para correção automática",
    instruction="""
Você recebe o caminho de um arquivo local (imagem ou PDF). Siga os passos:
1. Use a tool `upload_file_to_bucket(file_path, file_name)` para subir o arquivo
2. Use a tool `extract_text_from_image(url)` para extrair o texto via OCR
3. Envie o texto para o `essay_evaluator_agent`
4. Retorne a nota e o feedback estruturado.
""",
    tools=[
        upload_file_to_bucket,
        extract_text_from_image,
        essay_agent
    ]
)
