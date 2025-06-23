from google.adk.agents import Agent
from tools.save_uploaded_file import save_uploaded_file
from tools.upload_file_to_bucket import upload_file_to_bucket
from tools.extract_text_from_image import extract_text_from_image
from agents.essay_evaluator_agent.agent import root_agent as essay_agent

root_agent = Agent(
    name="image_to_essay_agent",
    model="gemini-2.5-flash",
    description="Extrai redação de imagem e envia para correção automática",
    instruction="""
Você recebe uma imagem enviada pelo aluno. Faça o seguinte:
1. Use `save_uploaded_file(data, file_name)` para salvar localmente.
2. Use `upload_file_to_bucket(file_path, file_name)` para subir no GCS.
3. Use `extract_text_from_image(url)` para OCR.
4. Envie o texto para `essay_evaluator_agent`.
5. Retorne a nota e feedback.
""",
    tools=[
        save_uploaded_file,
        upload_file_to_bucket,
        extract_text_from_image
    ],
    sub_agents=[essay_agent]
)
