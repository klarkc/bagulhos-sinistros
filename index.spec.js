const { defineFeature, loadFeature } = require('jest-cucumber');

const feature = loadFeature('./features/serie_interativa_bagulhos_sinistros.feature');
const getClient = () => ({});
const getEpisode = () => ({});
const getPlayer = (client) => {
    let time = 0;

    return {
        play: () => {},
        setTime: (sec) => {
            time = sec;
            if (client.question.time === time)
                client.screenQuestion = client.question;
        },
        getStatus: () => 'pause',
    };
};

defineFeature(feature, test => {
    
    test('Recebe uma pergunta', ({ given, when, then, pending }) => {
        const client = getClient();
        const player = getPlayer(client);
        
        given('que o cliente recebeu uma pergunta no episódio', () => {
            client.question = {
                text: 'Você entra no upside down?',
            }
        });

        given('essa pergunta contém o tempo para exibição', () => {
            client.question.time = 45;
        });

        given(/^essa pergunta contém (.*) respostas$/, (arg0) => {
            client.question.answers = [
                { text: 'Sim, e corro em seguida', video: 'https://www.youtube.com/watch?v=ml992m95b4c' },
                { text: 'Sim, e chamo o will', video: 'https://www.youtube.com/watch?v=R1ZXOOLMJ8s' },
                { text: 'Não, volto para a delegacia', video: 'https://www.youtube.com/watch?v=3giXMVQT9Og' },
                { text: 'Não, fico escondido observando', video: 'https://www.youtube.com/watch?v=o5J5paX7Iok' },
            ];
        });

        given('cada resposta possui um vídeo relacionado', () => {
            const videos = [
                'https://www.youtube.com/watch?v=ml992m95b4c',
                'https://www.youtube.com/watch?v=R1ZXOOLMJ8s',
                'https://www.youtube.com/watch?v=3giXMVQT9Og',
                'https://www.youtube.com/watch?v=o5J5paX7Iok',
            ];
            client.question.answers.map((answer, index) => ({
                ...answer,
                video: videos[index],
            }));
        });

        when('o assinante assiste ao episódio', () => {
            client.episode = getEpisode();
            player.play(client.episode);
        });

        when('o vídeo está no tempo de exibição da pergunta', () => {
            player.setTime(client.question.time);
        });

        then('o vídeo pausa', () => {
            expect(player.getStatus()).toEqual('pause');
        });

        then('o cliente exibe a pergunta com as quatro respostas para o assinante', () => {
            expect(client.screenQuestion).toEqual(client.question);
        });
    });

    test('Seleciona uma opção de resposta', ({ given, when, then, pending }) => {
        given('que o assinante selecionou uma opção de resposta', () => {
            pending();
        });

        when('o assinante clica em enviar', () => {
            pending();
        });

        then('o cliente muda o vídeo em reprodução para o vídeo da resposta selecionada', () => {
            pending();
        });

        then('o cliente resume a reprodução', () => {
            pending();
        });
    });
});