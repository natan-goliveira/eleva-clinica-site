import os
import datetime
import unicodedata
import re
import random

# Configuração
# Garante que o caminho seja relativo à localização deste script (site73/scripts) -> site73/content/posts
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(BASE_DIR, "../content/posts")
KEYWORDS = [
    "sistemas para clínica de estética",
    "software para clínica veterinária",
    "melhores sistemas de gestão para clínicas",
    "prontuário eletrônico para fisioterapia",
    "agenda online para consultório médico",
    "como reduzir faltas na clínica",
    "sistema para controle financeiro de clínica",
]

# Imagens profissionais (Unsplash)
IMAGES = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80", # Medical
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80", # Tech team
    "https://images.unsplash.com/photo-1576091160550-2187d80aeff2?auto=format&fit=crop&w=1200&q=80", # Hospital corridor
    "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80", # Abstract tech
    "https://images.unsplash.com/photo-1551076805-e1869030e2f4?auto=format&fit=crop&w=1200&q=80", # Modern office
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80", # Patient interaction
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80", # Medical tools
]

def slugify(value):
    value = str(value)
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    return re.sub(r'[-\s]+', '-', value)

def create_post(keyword):
    slug = slugify(keyword)
    filename = f"{slug}.md"
    filepath = os.path.join(CONTENT_DIR, filename)
    
    # Seleciona imagem aleatória
    cover_image = random.choice(IMAGES)

    today = datetime.date.today().isoformat()
    read_time = random.randint(5, 12)
    
    # Template mais robusto
    content = f"""---
title: "{keyword.title()} - O Guia Definitivo para 2025"
date: "{today}"
description: "Tudo o que você precisa saber sobre {keyword}. Aumente a produtividade da sua clínica em até 40% com as ferramentas certas."
coverImage: "{cover_image}"
readTime: "{read_time} min"
---

A gestão de clínicas mudou. Se você ainda depende de papel ou planilhas para organizar {keyword}, você está perdendo dinheiro e pacientes.

Neste guia completo, vamos mergulhar fundo em como a tecnologia está revolucionando o mercado de saúde e bem-estar.

## O Cenário Atual

Clínicas modernas enfrentam três grandes desafios:

1. **Agenda Ociosa**: Faltas de pacientes que não são repostas a tempo.
2. **Glosa de Prontuários**: Erros no preenchimento que geram prejuízo.
3. **Experiência do Paciente**: A demora no atendimento e a falta de personalização.

Investir em **{keyword}** não é mais um luxo, é uma necessidade de sobrevivência.

## Vantagens da Tecnologia na Gestão

### 1. Automação de Lembretes
Sistemas inteligentes enviam mensagens automáticas via WhatsApp, reduzindo o "no-show" em até 30%. Isso impacta diretamente o faturamento no final do mês.

### 2. Prontuário Integrado
Todas as informações do paciente em um só lugar. Histórico, fotos, exames e financeiro. Mais segurança jurídica para o profissional e melhor atendimento para o paciente.

### 3. Controle Financeiro
Saiba exatamente quanto entra e quanto sai. Relatórios de DRE, fluxo de caixa e comissionamento automático para profissionais parceiros.

## Como escolher a melhor opção?

Não existe sistema perfeito, existe o sistema perfeito **para você**. 

> "A tecnlogia deve se adaptar ao seu processo, e não o contrário."

Ao avaliar **{keyword}**, pergunte:
- O suporte é rápido e em português?
- O sistema roda na nuvem (acesso de qualquer lugar)?
- Existe fidelidade contratual?

## Conclusão

A 73 Code nasceu para resolver exatamente esses problemas. Desenvolvemos soluções sob medida que se encaixam como uma luva na sua operação.

Não perca mais tempo com processos manuais. A transformação digital da sua clínica começa agora.
"""

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"✅ Gerado (Atualizado): {filename}")

def main():
    os.makedirs(CONTENT_DIR, exist_ok=True)
    print(f"🚀 Atualizando posts com imagens profissionais...")
    
    for keyword in KEYWORDS:
        create_post(keyword) # Vai sobrescrever os antigos

    print("\n✨ Conteúdo atualizado com sucesso!")

if __name__ == "__main__":
    main()
