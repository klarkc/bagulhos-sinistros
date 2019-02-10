# language: pt
Funcionalidade: Série interativa bagulhos sinistros
    Sendo assinante jovem
    Quero interagir com o stream de vídeo
    Para escolher o final do episódio

    Cenário: Recebe uma pergunta
        Dado que o cliente recebeu uma pergunta no episódio
        E essa pergunta contém o tempo para exibição
        E essa pergunta contém 4 respostas
        E cada resposta possui um vídeo relacionado
        Quando o assinante assiste ao episódio
        E o vídeo está no tempo de exibição da pergunta
        Então o vídeo pausa
        E o cliente exibe a pergunta com as quatro respostas para o assinante

    Cenário: Seleciona uma opção de resposta
        Dado que o assinante selecionou uma opção de resposta
        Quando o assinante clica em enviar
        Então o cliente muda o vídeo em reprodução para o vídeo da resposta selecionada
        E o cliente resume a reprodução