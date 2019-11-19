                function calcular(){
                    var Frases = [ 'A sorte no jogo só depende da competência do próprio jogador.',
                                    'Quer descobrir se tem sorte? Jogue os dados.',
                                    'O jogo não mente, é ai que descobrimos se termos sorte ou não.',
                                    'Todo mundo tem a sorte de principiante em todo jogo que inicia.',
                                    'Sorte no jogo é saber perder!',
                                    'Nem todas as flores têm a mesma sorte, umas enfeitam a vida e outras enfeitam a morte.',
                                    'A sorte bate em cada porta uma vez na vida, mas, em muitos casos, a pessoa está se divertindo por aí e não a ouve.!',
                                    'Sorte é estar pronto quando a oportunidade vem.'];
                    var aux = Frases[Math.floor(Math.random() * Frases.length)];
                    document.getElementById("fraseSorte").textContent = aux;
                }             
