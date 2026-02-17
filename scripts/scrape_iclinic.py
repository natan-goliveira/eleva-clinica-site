import os
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps
from io import BytesIO
import unicodedata
import re
import datetime

# --- CONFIG ---
TARGET_URL = "https://blog.iclinic.com.br/"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(BASE_DIR, "../content/posts")
IMAGES_DIR = os.path.join(BASE_DIR, "../public/images/blog")

# OpenAI Mock (Se tiver chave, basta descomentar e usar a lib openai)
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY") 

# Cores da 73Code para o filtro Duotone
COLOR_DARK = (15, 23, 42)    # #0F172A (Navy)
COLOR_LIGHT = (65, 105, 225) # #4169E1 (Royal Blue)

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
}

def slugify(value):
    value = str(value)
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    return re.sub(r'[-\s]+', '-', value)

def apply_duotone_filter(image_url, myslug):
    try:
        response = requests.get(image_url, headers=headers)
        img = Image.open(BytesIO(response.content)).convert("L") # Converte para grayscale
        
        # Aplica efeito Duotone (Mapeia preto -> Dark Navy, branco -> Royal Blue)
        img = ImageOps.colorize(img, black=COLOR_DARK, white=COLOR_LIGHT)
        
        # Salva
        filename = f"{myslug}.jpg"
        filepath = os.path.join(IMAGES_DIR, filename)
        img.save(filepath, "JPEG", quality=85)
        
        return f"/images/blog/{filename}"
    except Exception as e:
        print(f"⚠️ Erro ao processar imagem para {myslug}: {e}")
        return None

def rewrite_content(title, body_text):
    """
    Simula uma reescrita por IA.
    Se tiver a chave da OpenAI, faria a chamada real aqui.
    """
    if OPENAI_API_KEY:
        # TODO: Implementar chamada real da OpenAI
        pass
    
    # Placeholder para demonstração (Adiciona introdução de IA)
    rewritten = f"""
> Este artigo foi adaptado e otimizado para o contexto da 73 Code.

{body_text[:500]}...

## O ponto de vista da 73 Code

Na nossa experiência, essa estratégia funciona muito bem quando alinhada a um software de gestão robusto.

(Conteúdo completo original abaixo para referência...)
"""
    return rewritten

def scrape_iclinic():
    print(f"🕵️  Acessando {TARGET_URL}...")
    response = requests.get(TARGET_URL, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Seletor específico do blog da iClinic (pode mudar, temos que inspecionar)
    # Supondo uma estrutura padrão de blog wordpress/hubspot
    articles = soup.find_all('article')
    
    if not articles:
        # Tenta fallback para estrutura comum caso não ache 'article'
        articles = soup.find_all('div', class_='post-item')

    print(f"🔍 Encontrados {len(articles)} artigos na home.")

    for article in articles[:3]: # Pega só os 3 primeiros para teste
        title_tag = article.find('h2') or article.find('h3')
        if not title_tag: continue
        
        title = title_tag.get_text().strip()
        link = article.find('a')['href']
        
        # Pega imagem (Tenta achar o atributo real da imagem, ignorando lazyload SVG)
        img_tag = article.find('img')
        img_url = None
        if img_tag:
            img_url = img_tag.get('data-src') or img_tag.get('src')
            if img_url and 'svg' in img_url: # Se ainda for SVG, tenta outro attributo ou pula
                 img_url = img_tag.get('data-lazy-src')

        
        print(f"📝 Processando: {title}")
        
        # Acessa o post individual para pegar o conteúdo
        post_response = requests.get(link, headers=headers)
        post_soup = BeautifulSoup(post_response.text, 'html.parser')
        
        # Tenta achar o corpo do texto
        content_div = post_soup.find('div', class_='entry-content') or post_soup.find('div', class_='post-content')
        body_text = content_div.get_text('\n\n').strip() if content_div else "Conteúdo não identificado."
        
        # Prepara dados
        myslug = slugify(title)
        
        # Filtro de Imagem
        local_image_path = ""
        if img_url:
            local_image_path = apply_duotone_filter(img_url, myslug) or ""
            
        # Reescrita
        final_content = rewrite_content(title, body_text)
        
        # Salva Markdown
        today = datetime.date.today().isoformat()
        md_content = f"""---
title: "{title}"
date: "{today}"
description: "Análise sobre: {title}. Descubra como aplicar isso na sua clínica."
coverImage: "{local_image_path}"
readTime: "5 min"
---

{final_content}
"""
        with open(os.path.join(CONTENT_DIR, f"{myslug}.md"), "w", encoding="utf-8") as f:
            f.write(md_content)
            
    print("\n✅ Scraper finalizado!")

if __name__ == "__main__":
    os.makedirs(CONTENT_DIR, exist_ok=True)
    os.makedirs(IMAGES_DIR, exist_ok=True)
    scrape_iclinic()
