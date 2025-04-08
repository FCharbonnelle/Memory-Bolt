import { Theme } from '@/types';

export const themes: Theme[] = [
  {
    id: 'animals',
    title: 'Les Animaux du Monde',
    emoji: '🦁',
    categories: [
      {
        id: 'farm',
        title: 'Les animaux de la ferme',
        emoji: '🐄',
        questions: [
          {
            id: 'farm-1',
            question: 'Quel animal donne du lait ?',
            options: [
              {
                id: 'cow',
                image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e',
                description: 'La vache broute de l\'herbe',
                isCorrect: true
              },
              {
                id: 'chicken',
                image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7',
                description: 'La poule pond des œufs',
                isCorrect: false
              },
              {
                id: 'pig',
                image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a',
                description: 'Le cochon aime la boue',
                isCorrect: false
              }
            ],
            explanation: 'La vache est un animal qui nous donne du lait ! C\'est grâce à ce lait qu\'on peut faire du fromage, du beurre et du yaourt.'
          },
          {
            id: 'farm-2',
            question: 'Quel animal pond des œufs ?',
            options: [
              {
                id: 'chicken',
                image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=500&auto=format&fit=crop&q=80',
                description: 'La poule dans le poulailler',
                isCorrect: true
              },
              {
                id: 'sheep',
                image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=500&auto=format&fit=crop&q=80',
                description: 'Le mouton dans le pré',
                isCorrect: false
              },
              {
                id: 'rabbit',
                image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=80',
                description: 'Le lapin dans sa cage',
                isCorrect: false
              }
            ],
            explanation: 'La poule pond des œufs presque tous les jours ! C\'est grâce à ces œufs qu\'on peut faire beaucoup de délicieux plats.'
          },
          {
            id: 'farm-3',
            question: 'Quel animal donne de la laine ?',
            options: [
              {
                id: 'sheep',
                image: 'https://images.unsplash.com/photo-1559699076-9e7c8282e961?w=500&auto=format&fit=crop&q=80',
                description: 'Le mouton blanc et duveteux',
                isCorrect: true
              },
              {
                id: 'horse',
                image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=500&auto=format&fit=crop&q=80',
                description: 'Le cheval au galop',
                isCorrect: false
              },
              {
                id: 'goat',
                image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=500&auto=format&fit=crop&q=80',
                description: 'La chèvre dans l\'enclos',
                isCorrect: false
              }
            ],
            explanation: 'Le mouton nous donne sa laine qui est ensuite tondue pour fabriquer des vêtements chauds comme les pulls et les écharpes !'
          },
          {
            id: 'farm-4',
            question: 'Quel animal est connu pour dire "cocorico" ?',
            options: [
              {
                id: 'rooster',
                image: 'https://images.unsplash.com/photo-1595352480685-8895e9864a56?w=500&auto=format&fit=crop&q=80',
                description: 'Le coq au plumage coloré',
                isCorrect: true
              },
              {
                id: 'duck',
                image: 'https://images.unsplash.com/photo-1557583964-0f3486da6490?w=500&auto=format&fit=crop&q=80',
                description: 'Le canard qui nage',
                isCorrect: false
              },
              {
                id: 'turkey',
                image: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500&auto=format&fit=crop&q=80',
                description: 'La dinde qui se promène',
                isCorrect: false
              }
            ],
            explanation: 'Le coq chante "cocorico" tous les matins pour réveiller les fermiers et annoncer le lever du soleil !'
          },
          {
            id: 'farm-5',
            question: 'Quel animal aime se vautrer dans la boue ?',
            options: [
              {
                id: 'pig',
                image: 'https://images.unsplash.com/photo-1593115590229-5b4fb6325df3?w=500&auto=format&fit=crop&q=80',
                description: 'Le cochon rose et rondelet',
                isCorrect: true
              },
              {
                id: 'duck',
                image: 'https://images.unsplash.com/photo-1591879606241-b33355b4056f?w=500&auto=format&fit=crop&q=80',
                description: 'Le canard qui barbote',
                isCorrect: false
              },
              {
                id: 'cow',
                image: 'https://images.unsplash.com/photo-1546445317-30d632fe2ee8?w=500&auto=format&fit=crop&q=80',
                description: 'La vache noire et blanche',
                isCorrect: false
              }
            ],
            explanation: 'Le cochon adore se rouler dans la boue ! Ce n\'est pas parce qu\'il est sale, mais parce que la boue le rafraîchit et le protège des insectes et du soleil.'
          },
          {
            id: 'farm-6',
            question: 'Quel animal tire la charrue dans les champs ?',
            options: [
              {
                id: 'horse',
                image: 'https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?w=500&auto=format&fit=crop&q=80',
                description: 'Le cheval fort et puissant',
                isCorrect: true
              },
              {
                id: 'dog',
                image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=80',
                description: 'Le chien fidèle',
                isCorrect: false
              },
              {
                id: 'goose',
                image: 'https://images.unsplash.com/photo-1559088467-308e96fa8af1?w=500&auto=format&fit=crop&q=80',
                description: 'L\'oie au bec orange',
                isCorrect: false
              }
            ],
            explanation: 'Le cheval est connu pour sa force et son endurance ! Depuis des siècles, il aide les agriculteurs à labourer les champs avant de planter les graines.'
          },
          {
            id: 'farm-7',
            question: 'Quel animal produit du miel ?',
            options: [
              {
                id: 'bee',
                image: 'https://images.unsplash.com/photo-1588967871606-bb42483cfaa3?w=500&auto=format&fit=crop&q=80',
                description: 'L\'abeille qui butine une fleur',
                isCorrect: true
              },
              {
                id: 'butterfly',
                image: 'https://images.unsplash.com/photo-1563217906-b204120e78e2?w=500&auto=format&fit=crop&q=80',
                description: 'Le papillon aux ailes colorées',
                isCorrect: false
              },
              {
                id: 'ant',
                image: 'https://images.unsplash.com/photo-1566407528571-ecd2a325240a?w=500&auto=format&fit=crop&q=80',
                description: 'La fourmi qui travaille',
                isCorrect: false
              }
            ],
            explanation: 'L\'abeille est très importante pour notre planète ! Elle butine les fleurs et transforme le nectar en miel délicieux dans sa ruche.'
          },
          {
            id: 'farm-8',
            question: 'Quel animal garde les troupeaux de moutons ?',
            options: [
              {
                id: 'sheepdog',
                image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=500&auto=format&fit=crop&q=80',
                description: 'Le chien de berger intelligent',
                isCorrect: true
              },
              {
                id: 'cat',
                image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=80',
                description: 'Le chat qui se repose',
                isCorrect: false
              },
              {
                id: 'rabbit',
                image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=80',
                description: 'Le lapin aux grandes oreilles',
                isCorrect: false
              }
            ],
            explanation: 'Le chien de berger est très malin ! Il aide le berger à rassembler les moutons et à les protéger des dangers.'
          },
          {
            id: 'farm-9',
            question: 'Quel animal chasse les souris dans la ferme ?',
            options: [
              {
                id: 'cat',
                image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=80',
                description: 'Le chat aux yeux perçants',
                isCorrect: true
              },
              {
                id: 'duck',
                image: 'https://images.unsplash.com/photo-1500794612222-217056952728?w=500&auto=format&fit=crop&q=80',
                description: 'Le canard qui se balade',
                isCorrect: false
              },
              {
                id: 'chicken',
                image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=500&auto=format&fit=crop&q=80',
                description: 'La poule qui picore',
                isCorrect: false
              }
            ],
            explanation: 'Le chat est un excellent chasseur ! À la ferme, il est très utile pour attraper les souris et protéger les réserves de grains.'
          },
          {
            id: 'farm-10',
            question: 'Quel animal fait "coin-coin" ?',
            options: [
              {
                id: 'duck',
                image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?w=500&auto=format&fit=crop&q=80',
                description: 'Le canard au bec jaune',
                isCorrect: true
              },
              {
                id: 'goose',
                image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=500&auto=format&fit=crop&q=80',
                description: 'L\'oie au long cou',
                isCorrect: false
              },
              {
                id: 'turkey',
                image: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500&auto=format&fit=crop&q=80',
                description: 'La dinde colorée',
                isCorrect: false
              }
            ],
            explanation: 'Le canard fait "coin-coin" pour communiquer ! C\'est un oiseau aquatique qui adore nager dans les mares de la ferme.'
          }
        ]
      },
      {
        id: 'jungle',
        title: 'Les animaux de la jungle',
        emoji: '🐘',
        questions: [
          {
            id: 'jungle-1',
            question: 'Qui est le roi de la jungle ?',
            options: [
              {
                id: 'lion',
                image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60',
                description: 'Le lion rugit fort',
                isCorrect: true
              },
              {
                id: 'monkey',
                image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9',
                description: 'Le singe grimpe aux arbres',
                isCorrect: false
              },
              {
                id: 'elephant',
                image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46',
                description: 'L\'éléphant est très grand',
                isCorrect: false
              }
            ],
            explanation: 'Le lion est appelé le roi de la jungle car c\'est un grand prédateur très fort et courageux !'
          },
          {
            id: 'jungle-2',
            question: 'Quel est l\'animal le plus grand de la jungle ?',
            options: [
              {
                id: 'elephant',
                image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&auto=format&fit=crop&q=80',
                description: 'L\'éléphant avec sa trompe',
                isCorrect: true
              },
              {
                id: 'giraffe',
                image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=500&auto=format&fit=crop&q=80',
                description: 'La girafe au long cou',
                isCorrect: false
              },
              {
                id: 'hippo',
                image: 'https://images.unsplash.com/photo-1536252487280-5b7052b9df13?w=500&auto=format&fit=crop&q=80',
                description: 'L\'hippopotame dans l\'eau',
                isCorrect: false
              }
            ],
            explanation: 'L\'éléphant est le plus grand animal terrestre ! Il peut peser jusqu\'à 6 tonnes et atteindre 3 mètres de hauteur.'
          },
          {
            id: 'jungle-3',
            question: 'Quel animal a le plus long cou ?',
            options: [
              {
                id: 'giraffe',
                image: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=500&auto=format&fit=crop&q=80',
                description: 'La girafe qui mange des feuilles',
                isCorrect: true
              },
              {
                id: 'zebra',
                image: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=500&auto=format&fit=crop&q=80',
                description: 'Le zèbre avec ses rayures',
                isCorrect: false
              },
              {
                id: 'tiger',
                image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&auto=format&fit=crop&q=80',
                description: 'Le tigre qui se repose',
                isCorrect: false
              }
            ],
            explanation: 'La girafe a le cou le plus long de tous les animaux ! Il peut mesurer jusqu\'à 2,4 mètres et lui permet d\'atteindre les feuilles en haut des arbres.'
          },
          {
            id: 'jungle-4',
            question: 'Quel animal est connu pour ses rayures noires et blanches ?',
            options: [
              {
                id: 'zebra',
                image: 'https://images.unsplash.com/photo-1526833099686-6832a985c0bd?w=500&auto=format&fit=crop&q=80',
                description: 'Le zèbre dans la savane',
                isCorrect: true
              },
              {
                id: 'panda',
                image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?w=500&auto=format&fit=crop&q=80',
                description: 'Le panda qui mange du bambou',
                isCorrect: false
              },
              {
                id: 'tiger',
                image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&auto=format&fit=crop&q=80',
                description: 'Le tigre aux rayures oranges',
                isCorrect: false
              }
            ],
            explanation: 'Le zèbre a des rayures qui sont uniques comme nos empreintes digitales ! Chaque zèbre a un motif différent.'
          },
          {
            id: 'jungle-5',
            question: 'Quel animal se déplace en se balançant d\'arbre en arbre ?',
            options: [
              {
                id: 'monkey',
                image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=500&auto=format&fit=crop&q=80',
                description: 'Le singe agile',
                isCorrect: true
              },
              {
                id: 'parrot',
                image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&auto=format&fit=crop&q=80',
                description: 'Le perroquet coloré',
                isCorrect: false
              },
              {
                id: 'snake',
                image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=500&auto=format&fit=crop&q=80',
                description: 'Le serpent qui rampe',
                isCorrect: false
              }
            ],
            explanation: 'Le singe est très agile et utilise ses bras puissants pour se balancer d\'arbre en arbre dans la jungle ! C\'est ce qu\'on appelle la brachiation.'
          },
          {
            id: 'jungle-6',
            question: 'Quel animal a la peau couverte de taches ?',
            options: [
              {
                id: 'leopard',
                image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
                description: 'Le léopard tacheté',
                isCorrect: true
              },
              {
                id: 'elephant',
                image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&auto=format&fit=crop&q=80',
                description: 'L\'éléphant gris',
                isCorrect: false
              },
              {
                id: 'lion',
                image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&auto=format&fit=crop&q=80',
                description: 'Le lion à la crinière',
                isCorrect: false
              }
            ],
            explanation: 'Le léopard a une magnifique fourrure couverte de taches noires appelées "rosettes" ! Elles lui permettent de se camoufler dans la jungle.'
          },
          {
            id: 'jungle-7',
            question: 'Quel animal est connu pour son nez très long ?',
            options: [
              {
                id: 'elephant',
                image: 'https://images.unsplash.com/photo-1559471584-369de6e0035e?w=500&auto=format&fit=crop&q=80',
                description: 'L\'éléphant avec sa trompe',
                isCorrect: true
              },
              {
                id: 'crocodile',
                image: 'https://images.unsplash.com/photo-1505148230895-d9a785a555fa?w=500&auto=format&fit=crop&q=80',
                description: 'Le crocodile à la gueule ouverte',
                isCorrect: false
              },
              {
                id: 'rhino',
                image: 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?w=500&auto=format&fit=crop&q=80',
                description: 'Le rhinocéros avec sa corne',
                isCorrect: false
              }
            ],
            explanation: 'La trompe de l\'éléphant est en fait son nez et sa lèvre supérieure fusionnés ! Il l\'utilise pour respirer, manger, boire et même se doucher.'
          },
          {
            id: 'jungle-8',
            question: 'Quel animal peut changer de couleur pour se camoufler ?',
            options: [
              {
                id: 'chameleon',
                image: 'https://images.unsplash.com/photo-1581321825690-944511645947?w=500&auto=format&fit=crop&q=80',
                description: 'Le caméléon multicolore',
                isCorrect: true
              },
              {
                id: 'parrot',
                image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&auto=format&fit=crop&q=80',
                description: 'Le perroquet aux plumes vives',
                isCorrect: false
              },
              {
                id: 'snake',
                image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=500&auto=format&fit=crop&q=80',
                description: 'Le serpent qui rampe',
                isCorrect: false
              }
            ],
            explanation: 'Le caméléon est incroyable ! Il peut changer de couleur pour se camoufler, se protéger des prédateurs ou même selon son humeur et la température.'
          },
          {
            id: 'jungle-9',
            question: 'Quel animal dort suspendu à l\'envers ?',
            options: [
              {
                id: 'bat',
                image: 'https://images.unsplash.com/photo-1566251037378-5e04e3bec343?w=500&auto=format&fit=crop&q=80',
                description: 'La chauve-souris aux ailes déployées',
                isCorrect: true
              },
              {
                id: 'sloth',
                image: 'https://images.unsplash.com/photo-1579551294875-a12014708c77?w=500&auto=format&fit=crop&q=80',
                description: 'Le paresseux qui grimpe lentement',
                isCorrect: false
              },
              {
                id: 'monkey',
                image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=500&auto=format&fit=crop&q=80',
                description: 'Le singe qui saute',
                isCorrect: false
              }
            ],
            explanation: 'La chauve-souris dort suspendue la tête en bas ! C\'est un mammifère qui vole et qui est actif la nuit pour chasser les insectes.'
          },
          {
            id: 'jungle-10',
            question: 'Quel animal a une corne sur le nez ?',
            options: [
              {
                id: 'rhino',
                image: 'https://images.unsplash.com/photo-1577976793843-486a4e8c3430?w=500&auto=format&fit=crop&q=80',
                description: 'Le rhinocéros imposant',
                isCorrect: true
              },
              {
                id: 'hippo',
                image: 'https://images.unsplash.com/photo-1536252487280-5b7052b9df13?w=500&auto=format&fit=crop&q=80',
                description: 'L\'hippopotame dans l\'eau',
                isCorrect: false
              },
              {
                id: 'elephant',
                image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&auto=format&fit=crop&q=80',
                description: 'L\'éléphant avec ses défenses',
                isCorrect: false
              }
            ],
            explanation: 'Le rhinocéros a une ou deux cornes sur son nez ! Ce n\'est pas vraiment une corne comme celle des vaches, mais des poils très durs collés ensemble.'
          }
        ]
      },
      {
        id: 'marine',
        title: 'Les animaux marins',
        emoji: '🐬',
        questions: [
          {
            id: 'marine-1',
            question: 'Quel est le plus grand animal marin ?',
            options: [
              {
                id: 'whale',
                image: 'https://images.unsplash.com/photo-1568430328012-21ed450453ea',
                description: 'La baleine bleue nage dans l\'océan',
                isCorrect: true
              },
              {
                id: 'dolphin',
                image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2',
                description: 'Le dauphin saute hors de l\'eau',
                isCorrect: false
              },
              {
                id: 'shark',
                image: 'https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae',
                description: 'Le requin chasse dans la mer',
                isCorrect: false
              }
            ],
            explanation: 'La baleine bleue est le plus grand animal qui ait jamais existé sur Terre ! Elle peut mesurer jusqu\'à 30 mètres de long.'
          },
          {
            id: 'marine-2',
            question: 'Quel animal marin a huit tentacules ?',
            options: [
              {
                id: 'octopus',
                image: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10',
                description: 'La pieuvre avec ses tentacules',
                isCorrect: true
              },
              {
                id: 'jellyfish',
                image: 'https://images.unsplash.com/photo-1501561942-ec1065c4f3cb',
                description: 'La méduse qui flotte',
                isCorrect: false
              },
              {
                id: 'starfish',
                image: 'https://images.unsplash.com/photo-1598977123118-4e779e1f81c5',
                description: 'L\'étoile de mer sur le sable',
                isCorrect: false
              }
            ],
            explanation: 'La pieuvre a huit tentacules qu\'elle utilise pour se déplacer, attraper sa nourriture et même manipuler des objets ! C\'est un animal très intelligent.'
          },
          {
            id: 'marine-3',
            question: 'Quel animal marin peut changer de couleur ?',
            options: [
              {
                id: 'octopus',
                image: 'https://images.unsplash.com/photo-1606371499737-d361826653c4',
                description: 'La pieuvre qui se camoufle',
                isCorrect: true
              },
              {
                id: 'whale',
                image: 'https://images.unsplash.com/photo-1568430328012-21ed450453ea',
                description: 'La baleine qui plonge',
                isCorrect: false
              },
              {
                id: 'turtle',
                image: 'https://images.unsplash.com/photo-1496196614460-48988a57fccf',
                description: 'La tortue qui nage',
                isCorrect: false
              }
            ],
            explanation: 'La pieuvre peut changer de couleur en quelques secondes pour se camoufler dans son environnement ! C\'est une façon de se protéger des prédateurs.'
          },
          {
            id: 'marine-4',
            question: 'Quel animal marin a une coquille en spirale ?',
            options: [
              {
                id: 'nautilus',
                image: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10',
                description: 'Le nautile avec sa belle coquille',
                isCorrect: true
              },
              {
                id: 'crab',
                image: 'https://images.unsplash.com/photo-1550042765-d0e848939b6e',
                description: 'Le crabe avec ses pinces',
                isCorrect: false
              },
              {
                id: 'starfish',
                image: 'https://images.unsplash.com/photo-1598977123118-4e779e1f81c5',
                description: 'L\'étoile de mer avec ses bras',
                isCorrect: false
              }
            ],
            explanation: 'Le nautile a une magnifique coquille en spirale ! C\'est un animal très ancien qui existe depuis des millions d\'années.'
          },
          {
            id: 'marine-5',
            question: 'Quel animal marin peut donner un choc électrique ?',
            options: [
              {
                id: 'electric-ray',
                image: 'https://images.unsplash.com/photo-1571160456891-32aae6e49fef',
                description: 'La raie électrique qui se cache',
                isCorrect: true
              },
              {
                id: 'seahorse',
                image: 'https://images.unsplash.com/photo-1506880135364-c908f05cef17',
                description: 'L\'hippocampe qui se tient droit',
                isCorrect: false
              },
              {
                id: 'pufferfish',
                image: 'https://images.unsplash.com/photo-1516408388733-2f8364f2e00b',
                description: 'Le poisson-globe qui se gonfle',
                isCorrect: false
              }
            ],
            explanation: 'La raie électrique peut produire un choc électrique pour se défendre ou pour étourdir ses proies ! Certaines peuvent générer jusqu\'à 200 volts.'
          },
          {
            id: 'marine-6',
            question: 'Quel animal marin est connu pour son chant ?',
            options: [
              {
                id: 'whale',
                image: 'https://images.unsplash.com/photo-1568430328012-21ed450453ea',
                description: 'La baleine qui chante',
                isCorrect: true
              },
              {
                id: 'dolphin',
                image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2',
                description: 'Le dauphin qui siffle',
                isCorrect: false
              },
              {
                id: 'fish',
                image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00',
                description: 'Le poisson qui nage',
                isCorrect: false
              }
            ],
            explanation: 'Les baleines à bosse sont célèbres pour leurs chants complexes ! Ces mélodies peuvent durer jusqu\'à 30 minutes et s\'entendre à des kilomètres sous l\'eau.'
          },
          {
            id: 'marine-7',
            question: 'Quel animal marin respire par des branchies ?',
            options: [
              {
                id: 'fish',
                image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00',
                description: 'Le poisson dans l\'eau',
                isCorrect: true
              },
              {
                id: 'dolphin',
                image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2',
                description: 'Le dauphin qui respire par un évent',
                isCorrect: false
              },
              {
                id: 'turtle',
                image: 'https://images.unsplash.com/photo-1496196614460-48988a57fccf',
                description: 'La tortue qui remonte à la surface',
                isCorrect: false
              }
            ],
            explanation: 'Les poissons respirent grâce à leurs branchies ! Elles leur permettent d\'extraire l\'oxygène dissous dans l\'eau pour respirer.'
          },
          {
            id: 'marine-8',
            question: 'Quel animal marin a une carapace dure ?',
            options: [
              {
                id: 'turtle',
                image: 'https://images.unsplash.com/photo-1496196614460-48988a57fccf',
                description: 'La tortue marine avec sa carapace',
                isCorrect: true
              },
              {
                id: 'jellyfish',
                image: 'https://images.unsplash.com/photo-1501561942-ec1065c4f3cb',
                description: 'La méduse transparente',
                isCorrect: false
              },
              {
                id: 'seahorse',
                image: 'https://images.unsplash.com/photo-1506880135364-c908f05cef17',
                description: 'L\'hippocampe petit et fragile',
                isCorrect: false
              }
            ],
            explanation: 'La tortue marine a une carapace dure qui la protège des prédateurs ! Certaines peuvent vivre plus de 100 ans.'
          },
          {
            id: 'marine-9',
            question: 'Quel animal marin a un corps en forme d\'étoile ?',
            options: [
              {
                id: 'starfish',
                image: 'https://images.unsplash.com/photo-1598977123118-4e779e1f81c5',
                description: 'L\'étoile de mer sur le récif',
                isCorrect: true
              },
              {
                id: 'jellyfish',
                image: 'https://images.unsplash.com/photo-1501561942-ec1065c4f3cb',
                description: 'La méduse qui flotte',
                isCorrect: false
              },
              {
                id: 'seahorse',
                image: 'https://images.unsplash.com/photo-1506880135364-c908f05cef17',
                description: 'L\'hippocampe qui se tient vertical',
                isCorrect: false
              }
            ],
            explanation: 'L\'étoile de mer a un corps en forme d\'étoile avec généralement cinq bras ! Elle peut faire repousser ses bras si elle en perd un.'
          },
          {
            id: 'marine-10',
            question: 'Quel animal marin peut se gonfler comme un ballon ?',
            options: [
              {
                id: 'pufferfish',
                image: 'https://images.unsplash.com/photo-1516408388733-2f8364f2e00b',
                description: 'Le poisson-globe gonflé',
                isCorrect: true
              },
              {
                id: 'dolphin',
                image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2',
                description: 'Le dauphin qui nage',
                isCorrect: false
              },
              {
                id: 'seahorse',
                image: 'https://images.unsplash.com/photo-1506880135364-c908f05cef17',
                description: 'L\'hippocampe qui se cache',
                isCorrect: false
              }
            ],
            explanation: 'Le poisson-globe peut se gonfler d\'eau ou d\'air quand il se sent menacé ! Cela le fait paraître plus gros et dissuade les prédateurs.'
          }
        ]
      }
    ]
  },
  {
    id: 'space',
    title: 'L\'Espace et l\'Univers',
    emoji: '🚀',
    categories: [
      {
        id: 'planets',
        title: 'Les planètes du système solaire',
        emoji: '🪐',
        questions: [
          {
            id: 'planets-1',
            question: 'Quelle est la planète la plus proche du Soleil ?',
            options: [
              {
                id: 'mercury',
                image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                description: 'Mercure est une petite planète rocheuse',
                isCorrect: true
              },
              {
                id: 'venus',
                image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
                description: 'Vénus est couverte de nuages',
                isCorrect: false
              },
              {
                id: 'earth',
                image: 'https://images.unsplash.com/photo-1614642240262-a452c2c11724',
                description: 'La Terre est notre planète',
                isCorrect: false
              }
            ],
            explanation: 'Mercure est la planète la plus proche du Soleil ! Il y fait très chaud le jour et très froid la nuit.'
          },
          {
            id: 'planets-2',
            question: 'Quelle planète est connue comme la planète rouge ?',
            options: [
              {
                id: 'mars',
                image: 'https://images.unsplash.com/photo-1617313765643-8969732d0f94',
                description: 'Mars avec sa surface rouge',
                isCorrect: true
              },
              {
                id: 'jupiter',
                image: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0',
                description: 'Jupiter avec ses bandes colorées',
                isCorrect: false
              },
              {
                id: 'venus',
                image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
                description: 'Vénus avec son atmosphère dense',
                isCorrect: false
              }
            ],
            explanation: 'Mars est appelée la planète rouge à cause de l\'oxyde de fer (rouille) qui recouvre sa surface !'
          },
          {
            id: 'planets-3',
            question: 'Quelle est la plus grande planète du système solaire ?',
            options: [
              {
                id: 'jupiter',
                image: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0',
                description: 'Jupiter, géante gazeuse',
                isCorrect: true
              },
              {
                id: 'saturn',
                image: 'https://images.unsplash.com/photo-1614728894747-a83421789345',
                description: 'Saturne avec ses anneaux',
                isCorrect: false
              },
              {
                id: 'earth',
                image: 'https://images.unsplash.com/photo-1614642240262-a452c2c11724',
                description: 'La Terre bleue',
                isCorrect: false
              }
            ],
            explanation: 'Jupiter est la plus grande planète ! Elle est si grande que toutes les autres planètes du système solaire pourraient tenir à l\'intérieur.'
          },
          {
            id: 'planets-4',
            question: 'Quelle planète a de magnifiques anneaux ?',
            options: [
              {
                id: 'saturn',
                image: 'https://images.unsplash.com/photo-1614728894747-a83421789345',
                description: 'Saturne et ses anneaux spectaculaires',
                isCorrect: true
              },
              {
                id: 'uranus',
                image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
                description: 'Uranus, planète bleue-verte',
                isCorrect: false
              },
              {
                id: 'neptune',
                image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6',
                description: 'Neptune, planète bleue foncée',
                isCorrect: false
              }
            ],
            explanation: 'Saturne est célèbre pour ses magnifiques anneaux ! Ils sont faits de millions de morceaux de glace et de roche.'
          },
          {
            id: 'planets-5',
            question: 'Quelle planète est connue comme notre planète bleue ?',
            options: [
              {
                id: 'earth',
                image: 'https://images.unsplash.com/photo-1614642240262-a452c2c11724',
                description: 'La Terre vue de l\'espace',
                isCorrect: true
              },
              {
                id: 'neptune',
                image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6',
                description: 'Neptune, grande planète bleue',
                isCorrect: false
              },
              {
                id: 'uranus',
                image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
                description: 'Uranus, planète bleu-vert',
                isCorrect: false
              }
            ],
            explanation: 'La Terre est appelée la planète bleue car vue de l\'espace, elle apparaît bleue à cause de tous ses océans qui couvrent 70% de sa surface !'
          },
          {
            id: 'planets-6',
            question: 'Quelle planète a un jour plus court que son année ?',
            options: [
              {
                id: 'mercury',
                image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                description: 'Mercure proche du soleil',
                isCorrect: true
              },
              {
                id: 'mars',
                image: 'https://images.unsplash.com/photo-1617313765643-8969732d0f94',
                description: 'Mars la planète rouge',
                isCorrect: false
              },
              {
                id: 'venus',
                image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
                description: 'Vénus la planète chaude',
                isCorrect: false
              }
            ],
            explanation: 'Sur Mercure, un jour dure environ 176 jours terrestres, tandis qu\'une année ne dure que 88 jours terrestres ! C\'est la seule planète où cela se produit.'
          },
          {
            id: 'planets-7',
            question: 'Quelle planète tourne "couchée" sur le côté ?',
            options: [
              {
                id: 'uranus',
                image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
                description: 'Uranus avec son axe incliné',
                isCorrect: true
              },
              {
                id: 'saturn',
                image: 'https://images.unsplash.com/photo-1614728894747-a83421789345',
                description: 'Saturne avec ses anneaux',
                isCorrect: false
              },
              {
                id: 'neptune',
                image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6',
                description: 'Neptune et ses vents rapides',
                isCorrect: false
              }
            ],
            explanation: 'Uranus est inclinée à presque 90 degrés sur son côté ! C\'est comme si elle roulait plutôt que de tourner comme les autres planètes.'
          },
          {
            id: 'planets-8',
            question: 'Quelle planète a la plus grande tempête du système solaire ?',
            options: [
              {
                id: 'jupiter',
                image: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0',
                description: 'Jupiter avec sa Grande Tache Rouge',
                isCorrect: true
              },
              {
                id: 'saturn',
                image: 'https://images.unsplash.com/photo-1614728894747-a83421789345',
                description: 'Saturne avec ses tempêtes',
                isCorrect: false
              },
              {
                id: 'neptune',
                image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6',
                description: 'Neptune avec sa Grande Tache Sombre',
                isCorrect: false
              }
            ],
            explanation: 'Jupiter a la Grande Tache Rouge, une énorme tempête qui existe depuis au moins 400 ans ! Elle est si grande que trois Terres pourraient y tenir.'
          },
          {
            id: 'planets-9',
            question: 'Quelle est la planète la plus chaude du système solaire ?',
            options: [
              {
                id: 'venus',
                image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
                description: 'Vénus et son atmosphère dense',
                isCorrect: true
              },
              {
                id: 'mercury',
                image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                description: 'Mercure, la plus proche du Soleil',
                isCorrect: false
              },
              {
                id: 'mars',
                image: 'https://images.unsplash.com/photo-1617313765643-8969732d0f94',
                description: 'Mars avec ses déserts',
                isCorrect: false
              }
            ],
            explanation: 'Même si Mercure est plus proche du Soleil, Vénus est la planète la plus chaude ! Son atmosphère épaisse piège la chaleur comme une serre, créant des températures de plus de 450°C.'
          },
          {
            id: 'planets-10',
            question: 'Quelle planète a les vents les plus rapides du système solaire ?',
            options: [
              {
                id: 'neptune',
                image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6',
                description: 'Neptune, planète des vents violents',
                isCorrect: true
              },
              {
                id: 'jupiter',
                image: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0',
                description: 'Jupiter et ses bandes nuageuses',
                isCorrect: false
              },
              {
                id: 'saturn',
                image: 'https://images.unsplash.com/photo-1614728894747-a83421789345',
                description: 'Saturne et ses anneaux',
                isCorrect: false
              }
            ],
            explanation: 'Neptune a les vents les plus rapides du système solaire, pouvant atteindre plus de 2000 km/h ! C\'est plus rapide que les avions de chasse sur Terre.'
          }
        ]
      }
    ]
  },
  {
    id: 'nature',
    title: 'La Nature et l\'Environnement',
    emoji: '🌲',
    categories: [
      {
        id: 'seasons',
        title: 'Les saisons et la météo',
        emoji: '🌞',
        questions: [
          {
            id: 'seasons-1',
            question: 'En quelle saison les feuilles tombent-elles des arbres ?',
            options: [
              {
                id: 'autumn',
                image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408',
                description: 'L\'automne et ses feuilles colorées',
                isCorrect: true
              },
              {
                id: 'summer',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                description: 'L\'été et son soleil',
                isCorrect: false
              },
              {
                id: 'spring',
                image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
                description: 'Le printemps et ses fleurs',
                isCorrect: false
              }
            ],
            explanation: 'En automne, les feuilles changent de couleur et tombent des arbres pour préparer l\'hiver !'
          },
          {
            id: 'seasons-2',
            question: 'En quelle saison fait-il le plus chaud ?',
            options: [
              {
                id: 'summer',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                description: 'L\'été avec la plage',
                isCorrect: true
              },
              {
                id: 'spring',
                image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
                description: 'Le printemps avec ses fleurs',
                isCorrect: false
              },
              {
                id: 'winter',
                image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d',
                description: 'L\'hiver avec la neige',
                isCorrect: false
              }
            ],
            explanation: 'L\'été est la saison la plus chaude de l\'année ! Le soleil brille fort et nous pouvons aller à la plage.'
          },
          {
            id: 'seasons-3',
            question: 'En quelle saison peut-on faire un bonhomme de neige ?',
            options: [
              {
                id: 'winter',
                image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d',
                description: 'L\'hiver tout blanc',
                isCorrect: true
              },
              {
                id: 'autumn',
                image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408',
                description: 'L\'automne avec ses feuilles',
                isCorrect: false
              },
              {
                id: 'summer',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                description: 'L\'été ensoleillé',
                isCorrect: false
              }
            ],
            explanation: 'On fait des bonhommes de neige en hiver ! C\'est la saison où il fait froid et où la neige tombe.'
          },
          {
            id: 'seasons-4',
            question: 'En quelle saison les fleurs poussent-elles ?',
            options: [
              {
                id: 'spring',
                image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
                description: 'Le printemps coloré',
                isCorrect: true
              },
              {
                id: 'winter',
                image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d',
                description: 'L\'hiver glacial',
                isCorrect: false
              },
              {
                id: 'autumn',
                image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408',
                description: 'L\'automne venteux',
                isCorrect: false
              }
            ],
            explanation: 'Au printemps, la nature se réveille et les fleurs commencent à pousser ! C\'est la saison du renouveau après l\'hiver.'
          },
          {
            id: 'seasons-5',
            question: 'Quel phénomène météo produit de l\'électricité dans le ciel ?',
            options: [
              {
                id: 'lightning',
                image: 'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e',
                description: 'L\'éclair lumineux',
                isCorrect: true
              },
              {
                id: 'rainbow',
                image: 'https://images.unsplash.com/photo-1546614425-ded38bc297b0',
                description: 'L\'arc-en-ciel coloré',
                isCorrect: false
              },
              {
                id: 'wind',
                image: 'https://images.unsplash.com/photo-1505672984986-b7c468c7a134',
                description: 'Le vent qui souffle',
                isCorrect: false
              }
            ],
            explanation: 'L\'éclair est une décharge électrique qui se produit pendant un orage ! Il est accompagné du tonnerre, qui est le bruit de l\'air qui chauffe très rapidement.'
          },
          {
            id: 'seasons-6',
            question: 'Quel phénomène météo apparaît après la pluie avec le soleil ?',
            options: [
              {
                id: 'rainbow',
                image: 'https://images.unsplash.com/photo-1546614425-ded38bc297b0',
                description: 'L\'arc-en-ciel multicolore',
                isCorrect: true
              },
              {
                id: 'fog',
                image: 'https://images.unsplash.com/photo-1487621167305-5d248087c724',
                description: 'Le brouillard qui cache tout',
                isCorrect: false
              },
              {
                id: 'snow',
                image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d',
                description: 'La neige qui tombe',
                isCorrect: false
              }
            ],
            explanation: 'L\'arc-en-ciel apparaît quand le soleil brille à travers les gouttes de pluie ! Il est composé de 7 couleurs: rouge, orange, jaune, vert, bleu, indigo et violet.'
          },
          {
            id: 'seasons-7',
            question: 'Comment s\'appelle l\'eau qui tombe du ciel ?',
            options: [
              {
                id: 'rain',
                image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e695',
                description: 'La pluie qui mouille',
                isCorrect: true
              },
              {
                id: 'cloud',
                image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda',
                description: 'Le nuage dans le ciel',
                isCorrect: false
              },
              {
                id: 'sun',
                image: 'https://images.unsplash.com/photo-1522124624696-7ea32eb9592c',
                description: 'Le soleil qui brille',
                isCorrect: false
              }
            ],
            explanation: 'La pluie est de l\'eau qui tombe des nuages ! Les gouttes se forment quand les nuages deviennent trop lourds pour retenir l\'eau.'
          },
          {
            id: 'seasons-8',
            question: 'Qu\'est-ce qui fait bouger les feuilles des arbres ?',
            options: [
              {
                id: 'wind',
                image: 'https://images.unsplash.com/photo-1505672984986-b7c468c7a134',
                description: 'Le vent qui souffle',
                isCorrect: true
              },
              {
                id: 'sun',
                image: 'https://images.unsplash.com/photo-1522124624696-7ea32eb9592c',
                description: 'Le soleil qui brille',
                isCorrect: false
              },
              {
                id: 'rain',
                image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e695',
                description: 'La pluie qui tombe',
                isCorrect: false
              }
            ],
            explanation: 'Le vent est de l\'air qui se déplace ! Il peut être doux comme une brise ou fort comme une tempête.'
          },
          {
            id: 'seasons-9',
            question: 'Quels cristaux blancs tombent en hiver ?',
            options: [
              {
                id: 'snow',
                image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d',
                description: 'La neige blanche',
                isCorrect: true
              },
              {
                id: 'hail',
                image: 'https://images.unsplash.com/photo-1556485689-33e55ab56127',
                description: 'La grêle dure',
                isCorrect: false
              },
              {
                id: 'rain',
                image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e695',
                description: 'La pluie liquide',
                isCorrect: false
              }
            ],
            explanation: 'La neige est faite de cristaux d\'eau gelée ! Chaque flocon a une forme unique et différente de tous les autres.'
          },
          {
            id: 'seasons-10',
            question: 'Qu\'est-ce qui rend la route glissante en hiver ?',
            options: [
              {
                id: 'ice',
                image: 'https://images.unsplash.com/photo-1549641685-d1baad8167cd',
                description: 'La glace transparente',
                isCorrect: true
              },
              {
                id: 'leaves',
                image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408',
                description: 'Les feuilles mortes',
                isCorrect: false
              },
              {
                id: 'mud',
                image: 'https://images.unsplash.com/photo-1553856250-3e7f07b9a4a6',
                description: 'La boue marron',
                isCorrect: false
              }
            ],
            explanation: 'La glace se forme quand l\'eau gèle ! Elle est très glissante et peut être dangereuse pour les voitures et les piétons.'
          }
        ]
      }
    ]
  },
  {
    id: 'tales',
    title: 'Les Contes et Légendes',
    emoji: '🐉',
    categories: [
      {
        id: 'creatures',
        title: 'Les créatures mythiques',
        emoji: '🦄',
        questions: [
          {
            id: 'creatures-1',
            question: 'Quelle créature magique peut voler et cracher du feu ?',
            options: [
              {
                id: 'dragon',
                image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145',
                description: 'Le dragon est puissant',
                isCorrect: true
              },
              {
                id: 'unicorn',
                image: 'https://images.unsplash.com/photo-1525278070609-779c7adb7b71',
                description: 'La licorne a une corne magique',
                isCorrect: false
              },
              {
                id: 'phoenix',
                image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
                description: 'Le phénix renaît de ses cendres',
                isCorrect: false
              }
            ],
            explanation: 'Le dragon est une créature légendaire qui peut voler avec ses grandes ailes et cracher du feu !'
          },
          {
            id: 'creatures-2',
            question: 'Quelle créature a une corne magique sur le front ?',
            options: [
              {
                id: 'unicorn',
                image: 'https://images.unsplash.com/photo-1525278070609-779c7adb7b71',
                description: 'La licorne blanche',
                isCorrect: true
              },
              {
                id: 'mermaid',
                image: 'https://images.unsplash.com/photo-1570741066052-817c6de995c8',
                description: 'La sirène dans l\'eau',
                isCorrect: false
              },
              {
                id: 'griffin',
                image: 'https://images.unsplash.com/photo-1559126758-0e542bf8f5a9',
                description: 'Le griffon avec ses ailes',
                isCorrect: false
              }
            ],
            explanation: 'La licorne est un cheval magnifique avec une corne sur le front ! Sa corne serait magique et pourrait guérir les maladies.'
          },
          {
            id: 'creatures-3',
            question: 'Quelle créature magique peut renaître de ses cendres ?',
            options: [
              {
                id: 'phoenix',
                image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
                description: 'Le phénix flamboyant',
                isCorrect: true
              },
              {
                id: 'dragon',
                image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145',
                description: 'Le dragon cracheur de feu',
                isCorrect: false
              },
              {
                id: 'fairy',
                image: 'https://images.unsplash.com/photo-1639631834838-0b2934ce9ace',
                description: 'La fée ailée',
                isCorrect: false
              }
            ],
            explanation: 'Le phénix est un oiseau de feu qui vit très longtemps ! Quand il devient vieux, il brûle et renaît de ses propres cendres.'
          },
          {
            id: 'creatures-4',
            question: 'Quelle créature a le corps d\'un lion et les ailes d\'un aigle ?',
            options: [
              {
                id: 'griffin',
                image: 'https://images.unsplash.com/photo-1559126758-0e542bf8f5a9',
                description: 'Le griffon majestueux',
                isCorrect: true
              },
              {
                id: 'centaur',
                image: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c',
                description: 'Le centaure mi-homme mi-cheval',
                isCorrect: false
              },
              {
                id: 'dragon',
                image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145',
                description: 'Le dragon écailleux',
                isCorrect: false
              }
            ],
            explanation: 'Le griffon est une créature fantastique avec la tête et les ailes d\'un aigle, et le corps d\'un lion ! Il représente la force et la sagesse.'
          },
          {
            id: 'creatures-5',
            question: 'Quelle créature est mi-femme mi-poisson ?',
            options: [
              {
                id: 'mermaid',
                image: 'https://images.unsplash.com/photo-1570741066052-817c6de995c8',
                description: 'La sirène aux écailles brillantes',
                isCorrect: true
              },
              {
                id: 'fairy',
                image: 'https://images.unsplash.com/photo-1639631834838-0b2934ce9ace',
                description: 'La fée minuscule',
                isCorrect: false
              },
              {
                id: 'unicorn',
                image: 'https://images.unsplash.com/photo-1525278070609-779c7adb7b71',
                description: 'La licorne à la crinière colorée',
                isCorrect: false
              }
            ],
            explanation: 'La sirène a le haut du corps d\'une femme et le bas du corps d\'un poisson ! Elle vit dans l\'océan et est connue pour son chant magnifique.'
          },
          {
            id: 'creatures-6',
            question: 'Quelle créature est mi-homme mi-cheval ?',
            options: [
              {
                id: 'centaur',
                image: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c',
                description: 'Le centaure galopant',
                isCorrect: true
              },
              {
                id: 'minotaur',
                image: 'https://images.unsplash.com/photo-1548256458-e59276004ddb',
                description: 'Le minotaure cornu',
                isCorrect: false
              },
              {
                id: 'mermaid',
                image: 'https://images.unsplash.com/photo-1570741066052-817c6de995c8',
                description: 'La sirène nageant',
                isCorrect: false
              }
            ],
            explanation: 'Le centaure a le torse et la tête d\'un homme et le corps d\'un cheval ! Dans les légendes, ils sont connus pour être de grands guerriers et des guérisseurs.'
          },
          {
            id: 'creatures-7',
            question: 'Quelle créature est mi-homme mi-taureau ?',
            options: [
              {
                id: 'minotaur',
                image: 'https://images.unsplash.com/photo-1548256458-e59276004ddb',
                description: 'Le minotaure puissant',
                isCorrect: true
              },
              {
                id: 'centaur',
                image: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c',
                description: 'Le centaure rapide',
                isCorrect: false
              },
              {
                id: 'griffin',
                image: 'https://images.unsplash.com/photo-1559126758-0e542bf8f5a9',
                description: 'Le griffon royal',
                isCorrect: false
              }
            ],
            explanation: 'Le minotaure a un corps d\'homme et une tête de taureau ! Dans la mythologie grecque, il vivait dans un labyrinthe sur l\'île de Crète.'
          },
          {
            id: 'creatures-8',
            question: 'Quelle petite créature ailée peut faire de la magie ?',
            options: [
              {
                id: 'fairy',
                image: 'https://images.unsplash.com/photo-1639631834838-0b2934ce9ace',
                description: 'La fée lumineuse',
                isCorrect: true
              },
              {
                id: 'goblin',
                image: 'https://images.unsplash.com/photo-1562043236-559c3b60a6eb',
                description: 'Le gobelin rusé',
                isCorrect: false
              },
              {
                id: 'elf',
                image: 'https://images.unsplash.com/photo-1608153488161-703b3b93d8b3',
                description: 'L\'elfe des forêts',
                isCorrect: false
              }
            ],
            explanation: 'Les fées sont de minuscules créatures ailées qui peuvent voler et faire de la magie ! Elles vivent souvent dans la nature et peuvent être espiègles.'
          },
          {
            id: 'creatures-9',
            question: 'Quelle créature garde des trésors dans les montagnes ?',
            options: [
              {
                id: 'dragon',
                image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145',
                description: 'Le dragon sur son or',
                isCorrect: true
              },
              {
                id: 'goblin',
                image: 'https://images.unsplash.com/photo-1562043236-559c3b60a6eb',
                description: 'Le gobelin avec ses pièces',
                isCorrect: false
              },
              {
                id: 'giant',
                image: 'https://images.unsplash.com/photo-1623060790047-6528da579097',
                description: 'Le géant massif',
                isCorrect: false
              }
            ],
            explanation: 'Dans de nombreuses légendes, les dragons vivent dans des cavernes et gardent jalousement des trésors d\'or et de pierres précieuses !'
          },
          {
            id: 'creatures-10',
            question: 'Quelle créature a des oreilles pointues et vit très longtemps ?',
            options: [
              {
                id: 'elf',
                image: 'https://images.unsplash.com/photo-1608153488161-703b3b93d8b3',
                description: 'L\'elfe gracieux',
                isCorrect: true
              },
              {
                id: 'goblin',
                image: 'https://images.unsplash.com/photo-1562043236-559c3b60a6eb',
                description: 'Le gobelin malicieux',
                isCorrect: false
              },
              {
                id: 'fairy',
                image: 'https://images.unsplash.com/photo-1639631834838-0b2934ce9ace',
                description: 'La fée brillante',
                isCorrect: false
              }
            ],
            explanation: 'Les elfes sont des créatures magiques aux oreilles pointues qui vivent très longtemps ! Ils sont souvent représentés comme étant sages, gracieux et en harmonie avec la nature.'
          }
        ]
      }
    ]
  },
  {
    id: 'inventions',
    title: 'Les Inventions et Découvertes',
    emoji: '💡',
    categories: [
      {
        id: 'great-inventions',
        title: 'Les grandes inventions',
        emoji: '🚲',
        questions: [
          {
            id: 'inventions-1',
            question: 'Quelle invention nous permet de parler à distance ?',
            options: [
              {
                id: 'telephone',
                image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48',
                description: 'Le téléphone nous connecte',
                isCorrect: true
              },
              {
                id: 'radio',
                image: 'https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea',
                description: 'La radio diffuse de la musique',
                isCorrect: false
              },
              {
                id: 'tv',
                image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
                description: 'La télévision montre des images',
                isCorrect: false
              }
            ],
            explanation: 'Le téléphone a été inventé pour nous permettre de parler avec des personnes même très loin de nous !'
          },
          {
            id: 'inventions-2',
            question: 'Quelle invention nous permet de voir des images animées ?',
            options: [
              {
                id: 'tv',
                image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
                description: 'La télévision dans le salon',
                isCorrect: true
              },
              {
                id: 'camera',
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
                description: 'L\'appareil photo pour les souvenirs',
                isCorrect: false
              },
              {
                id: 'radio',
                image: 'https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea',
                description: 'La radio qui fait du son',
                isCorrect: false
              }
            ],
            explanation: 'La télévision a été inventée pour diffuser des images animées et du son dans nos maisons ! Avant, les familles se réunissaient pour écouter la radio.'
          },
          {
            id: 'inventions-3',
            question: 'Quelle invention permet de voyager sur l\'eau ?',
            options: [
              {
                id: 'boat',
                image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166',
                description: 'Le bateau qui flotte',
                isCorrect: true
              },
              {
                id: 'car',
                image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
                description: 'La voiture sur la route',
                isCorrect: false
              },
              {
                id: 'airplane',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
                description: 'L\'avion dans le ciel',
                isCorrect: false
              }
            ],
            explanation: 'Le bateau est l\'une des plus anciennes inventions de l\'humanité ! Il nous permet de traverser les océans, les lacs et les rivières.'
          },
          {
            id: 'inventions-4',
            question: 'Quelle invention nous permet de voir la nuit ?',
            options: [
              {
                id: 'lightbulb',
                image: 'https://images.unsplash.com/photo-1535050804459-06db46aac01a',
                description: 'L\'ampoule qui brille',
                isCorrect: true
              },
              {
                id: 'candle',
                image: 'https://images.unsplash.com/photo-1514534771118-4825afef819c',
                description: 'La bougie qui flambe',
                isCorrect: false
              },
              {
                id: 'flashlight',
                image: 'https://images.unsplash.com/photo-1545987088-d22a1b19fe72',
                description: 'La lampe de poche portable',
                isCorrect: false
              }
            ],
            explanation: 'L\'ampoule électrique a été inventée par Thomas Edison ! Avant, les gens utilisaient des bougies ou des lampes à huile pour s\'éclairer.'
          },
          {
            id: 'inventions-5',
            question: 'Quelle invention nous permet de voler dans le ciel ?',
            options: [
              {
                id: 'airplane',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
                description: 'L\'avion avec ses ailes',
                isCorrect: true
              },
              {
                id: 'car',
                image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
                description: 'La voiture sur terre',
                isCorrect: false
              },
              {
                id: 'train',
                image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
                description: 'Le train sur les rails',
                isCorrect: false
              }
            ],
            explanation: 'L\'avion a été inventé par les frères Wright en 1903 ! Aujourd\'hui, on peut voyager d\'un bout à l\'autre de la planète en quelques heures grâce à cette invention.'
          },
          {
            id: 'inventions-6',
            question: 'Quelle invention nous permet de prendre des photos ?',
            options: [
              {
                id: 'camera',
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
                description: 'L\'appareil photo et son objectif',
                isCorrect: true
              },
              {
                id: 'tv',
                image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
                description: 'La télévision qui diffuse',
                isCorrect: false
              },
              {
                id: 'telephone',
                image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48',
                description: 'Le téléphone pour appeler',
                isCorrect: false
              }
            ],
            explanation: 'L\'appareil photo capture des images en un instant ! Avant, il fallait des artistes pour peindre ou dessiner ce qu\'on voulait garder en souvenir.'
          },
          {
            id: 'inventions-7',
            question: 'Quelle invention roule sur deux roues sans moteur ?',
            options: [
              {
                id: 'bicycle',
                image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8',
                description: 'Le vélo et ses pédales',
                isCorrect: true
              },
              {
                id: 'car',
                image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
                description: 'La voiture à quatre roues',
                isCorrect: false
              },
              {
                id: 'train',
                image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
                description: 'Le train sur les rails',
                isCorrect: false
              }
            ],
            explanation: 'Le vélo est un moyen de transport écologique qui fonctionne grâce à notre force musculaire ! Il est bon pour la santé et ne pollue pas.'
          },
          {
            id: 'inventions-8',
            question: 'Quelle invention nous permet de conserver les aliments au froid ?',
            options: [
              {
                id: 'fridge',
                image: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2',
                description: 'Le réfrigérateur dans la cuisine',
                isCorrect: true
              },
              {
                id: 'oven',
                image: 'https://images.unsplash.com/photo-1585314540237-67903c565b20',
                description: 'Le four qui chauffe',
                isCorrect: false
              },
              {
                id: 'microwave',
                image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078',
                description: 'Le micro-ondes qui réchauffe',
                isCorrect: false
              }
            ],
            explanation: 'Le réfrigérateur garde nos aliments frais plus longtemps ! Avant son invention, les gens utilisaient des glacières ou des caves fraîches.'
          },
          {
            id: 'inventions-9',
            question: 'Quelle invention nous permet d\'écrire sans crayon ni stylo ?',
            options: [
              {
                id: 'computer',
                image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db',
                description: 'L\'ordinateur avec son clavier',
                isCorrect: true
              },
              {
                id: 'book',
                image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
                description: 'Le livre à lire',
                isCorrect: false
              },
              {
                id: 'telephone',
                image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48',
                description: 'Le téléphone pour parler',
                isCorrect: false
              }
            ],
            explanation: 'L\'ordinateur a révolutionné notre façon d\'écrire et de communiquer ! On peut taper du texte, l\'enregistrer et même l\'envoyer partout dans le monde en quelques secondes.'
          },
          {
            id: 'inventions-10',
            question: 'Quelle invention nous permet de voyager sur des rails ?',
            options: [
              {
                id: 'train',
                image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
                description: 'Le train et ses wagons',
                isCorrect: true
              },
              {
                id: 'car',
                image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
                description: 'La voiture sur la route',
                isCorrect: false
              },
              {
                id: 'airplane',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
                description: 'L\'avion dans les airs',
                isCorrect: false
              }
            ],
            explanation: 'Le train a été inventé pendant la révolution industrielle ! Il peut transporter beaucoup de personnes ou de marchandises sur de longues distances.'
          }
        ]
      }
    ]
  },
  {
    id: 'human-body',
    title: 'Le Corps Humain',
    emoji: '🫀',
    categories: [
      {
        id: 'organs',
        title: 'Les organes et leurs fonctions',
        emoji: '🧠',
        questions: [
          {
            id: 'organs-1',
            question: 'Quel organe pompe le sang dans tout le corps ?',
            options: [
              {
                id: 'heart',
                image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
                description: 'Le cœur bat sans arrêt',
                isCorrect: true
              },
              {
                id: 'lungs',
                image: 'https://images.unsplash.com/photo-1584555613497-7a7b0c38d7eb',
                description: 'Les poumons nous font respirer',
                isCorrect: false
              },
              {
                id: 'brain',
                image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc',
                description: 'Le cerveau nous fait penser',
                isCorrect: false
              }
            ],
            explanation: 'Le cœur est comme une pompe qui fait circuler le sang dans tout notre corps pour nous garder en vie !'
          },
          {
            id: 'organs-2',
            question: 'Quel organe nous permet de respirer ?',
            options: [
              {
                id: 'lungs',
                image: 'https://images.unsplash.com/photo-1584555613497-7a7b0c38d7eb',
                description: 'Les poumons se remplissent d\'air',
                isCorrect: true
              },
              {
                id: 'heart',
                image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
                description: 'Le cœur qui bat',
                isCorrect: false
              },
              {
                id: 'stomach',
                image: 'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e',
                description: 'L\'estomac qui digère',
                isCorrect: false
              }
            ],
            explanation: 'Les poumons sont les organes de la respiration ! Ils absorbent l\'oxygène de l\'air et rejettent le dioxyde de carbone quand nous expirons.'
          },
          {
            id: 'organs-3',
            question: 'Quel organe contrôle tout notre corps ?',
            options: [
              {
                id: 'brain',
                image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc',
                description: 'Le cerveau dans notre tête',
                isCorrect: true
              },
              {
                id: 'heart',
                image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
                description: 'Le cœur dans notre poitrine',
                isCorrect: false
              },
              {
                id: 'stomach',
                image: 'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e',
                description: 'L\'estomac dans notre ventre',
                isCorrect: false
              }
            ],
            explanation: 'Le cerveau est le centre de commande du corps ! Il contrôle nos mouvements, nos pensées, nos émotions et toutes les fonctions de notre corps.'
          },
          {
            id: 'organs-4',
            question: 'Quel organe digère les aliments que nous mangeons ?',
            options: [
              {
                id: 'stomach',
                image: 'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e',
                description: 'L\'estomac qui transforme la nourriture',
                isCorrect: true
              },
              {
                id: 'liver',
                image: 'https://images.unsplash.com/photo-1593032099438-0a7c24c9deb1',
                description: 'Le foie qui filtre',
                isCorrect: false
              },
              {
                id: 'kidneys',
                image: 'https://images.unsplash.com/photo-1631558556613-92c85eef6981',
                description: 'Les reins qui purifient',
                isCorrect: false
              }
            ],
            explanation: 'L\'estomac est comme un sac musculaire qui mélange la nourriture avec des acides et des enzymes pour commencer la digestion !'
          },
          {
            id: 'organs-5',
            question: 'Quel organe filtre les déchets de notre sang ?',
            options: [
              {
                id: 'kidneys',
                image: 'https://images.unsplash.com/photo-1631558556613-92c85eef6981',
                description: 'Les reins qui nettoient',
                isCorrect: true
              },
              {
                id: 'liver',
                image: 'https://images.unsplash.com/photo-1593032099438-0a7c24c9deb1',
                description: 'Le foie qui purifie',
                isCorrect: false
              },
              {
                id: 'lungs',
                image: 'https://images.unsplash.com/photo-1584555613497-7a7b0c38d7eb',
                description: 'Les poumons qui respirent',
                isCorrect: false
              }
            ],
            explanation: 'Les reins filtrent notre sang pour éliminer les déchets et l\'excès d\'eau ! Ils produisent l\'urine qui est ensuite évacuée par notre corps.'
          },
          {
            id: 'organs-6',
            question: 'Quel organe nous permet de voir ?',
            options: [
              {
                id: 'eyes',
                image: 'https://images.unsplash.com/photo-1559076900-7c926581aaf2',
                description: 'Les yeux qui observent',
                isCorrect: true
              },
              {
                id: 'ears',
                image: 'https://images.unsplash.com/photo-1516916759473-600c07bc12d4',
                description: 'Les oreilles qui écoutent',
                isCorrect: false
              },
              {
                id: 'nose',
                image: 'https://images.unsplash.com/photo-1616345097441-12a04a5c977b',
                description: 'Le nez qui sent',
                isCorrect: false
              }
            ],
            explanation: 'Les yeux sont nos organes de la vision ! Ils captent la lumière et envoient des signaux au cerveau qui les transforme en images.'
          },
          {
            id: 'organs-7',
            question: 'Quel organe nous permet d\'entendre les sons ?',
            options: [
              {
                id: 'ears',
                image: 'https://images.unsplash.com/photo-1516916759473-600c07bc12d4',
                description: 'Les oreilles attentives',
                isCorrect: true
              },
              {
                id: 'eyes',
                image: 'https://images.unsplash.com/photo-1559076900-7c926581aaf2',
                description: 'Les yeux qui voient',
                isCorrect: false
              },
              {
                id: 'tongue',
                image: 'https://images.unsplash.com/photo-1545061400-1dfa69e12e46',
                description: 'La langue qui goûte',
                isCorrect: false
              }
            ],
            explanation: 'Les oreilles captent les ondes sonores et les transforment en signaux que notre cerveau peut comprendre ! C\'est ainsi que nous pouvons entendre.'
          },
          {
            id: 'organs-8',
            question: 'Quel organe détoxifie notre corps ?',
            options: [
              {
                id: 'liver',
                image: 'https://images.unsplash.com/photo-1593032099438-0a7c24c9deb1',
                description: 'Le foie qui purifie',
                isCorrect: true
              },
              {
                id: 'kidneys',
                image: 'https://images.unsplash.com/photo-1631558556613-92c85eef6981',
                description: 'Les reins qui filtrent',
                isCorrect: false
              },
              {
                id: 'stomach',
                image: 'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e',
                description: 'L\'estomac qui digère',
                isCorrect: false
              }
            ],
            explanation: 'Le foie est comme l\'usine de traitement du corps ! Il détoxifie notre sang, produit des protéines importantes et aide à digérer les graisses.'
          },
          {
            id: 'organs-9',
            question: 'Quel organe nous permet de goûter les aliments ?',
            options: [
              {
                id: 'tongue',
                image: 'https://images.unsplash.com/photo-1545061400-1dfa69e12e46',
                description: 'La langue et ses papilles',
                isCorrect: true
              },
              {
                id: 'nose',
                image: 'https://images.unsplash.com/photo-1616345097441-12a04a5c977b',
                description: 'Le nez qui sent',
                isCorrect: false
              },
              {
                id: 'teeth',
                image: 'https://images.unsplash.com/photo-1590005354167-6da97870c757',
                description: 'Les dents qui mâchent',
                isCorrect: false
              }
            ],
            explanation: 'La langue est couverte de petites bosses appelées papilles gustatives qui nous permettent de reconnaître les saveurs comme le sucré, le salé, l\'acide et l\'amer !'
          },
          {
            id: 'organs-10',
            question: 'Quels organes soutiennent notre corps ?',
            options: [
              {
                id: 'bones',
                image: 'https://images.unsplash.com/photo-1530210124550-912dc1381fdb',
                description: 'Les os solides',
                isCorrect: true
              },
              {
                id: 'muscles',
                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
                description: 'Les muscles qui bougent',
                isCorrect: false
              },
              {
                id: 'skin',
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
                description: 'La peau qui protège',
                isCorrect: false
              }
            ],
            explanation: 'Les os forment notre squelette qui soutient tout notre corps ! Ils protègent aussi nos organes internes comme le cerveau et le cœur.'
          }
        ]
      }
    ]
  },
  {
    id: 'colors',
    title: 'Le Monde des Couleurs et des Formes',
    emoji: '🎨',
    categories: [
      {
        id: 'primary-colors',
        title: 'Les couleurs primaires et secondaires',
        emoji: '🖍️',
        questions: [
          {
            id: 'colors-1',
            question: 'Quelle couleur obtient-on en mélangeant du bleu et du jaune ?',
            options: [
              {
                id: 'green',
                image: 'https://images.unsplash.com/photo-1564951434112-64d74cc33f9c?w=500&auto=format&fit=crop&q=80',
                description: 'Le vert comme les feuilles',
                isCorrect: true
              },
              {
                id: 'purple',
                image: 'https://images.unsplash.com/photo-1551969014-7bd2a9d3a755?w=500&auto=format&fit=crop&q=80',
                description: 'Le violet comme les raisins',
                isCorrect: false
              },
              {
                id: 'orange',
                image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&auto=format&fit=crop&q=80',
                description: 'L\'orange comme le fruit',
                isCorrect: false
              }
            ],
            explanation: 'Quand on mélange du bleu et du jaune, on obtient du vert ! C\'est une couleur secondaire.'
          },
          {
            id: 'colors-2',
            question: 'Quelle couleur obtient-on en mélangeant du rouge et du jaune ?',
            options: [
              {
                id: 'orange',
                image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&auto=format&fit=crop&q=80',
                description: 'L\'orange comme le coucher de soleil',
                isCorrect: true
              },
              {
                id: 'purple',
                image: 'https://images.unsplash.com/photo-1551969014-7bd2a9d3a755?w=500&auto=format&fit=crop&q=80',
                description: 'Le violet comme les fleurs',
                isCorrect: false
              },
              {
                id: 'green',
                image: 'https://images.unsplash.com/photo-1564951434112-64d74cc33f9c?w=500&auto=format&fit=crop&q=80',
                description: 'Le vert comme l\'herbe',
                isCorrect: false
              }
            ],
            explanation: 'Quand on mélange du rouge et du jaune, on obtient de l\'orange ! C\'est une couleur secondaire vibrante et chaleureuse.'
          },
          {
            id: 'colors-3',
            question: 'Quelle couleur obtient-on en mélangeant du rouge et du bleu ?',
            options: [
              {
                id: 'purple',
                image: 'https://images.unsplash.com/photo-1551969014-7bd2a9d3a755?w=500&auto=format&fit=crop&q=80',
                description: 'Le violet comme le raisin',
                isCorrect: true
              },
              {
                id: 'green',
                image: 'https://images.unsplash.com/photo-1564951434112-64d74cc33f9c?w=500&auto=format&fit=crop&q=80',
                description: 'Le vert comme le sapin',
                isCorrect: false
              },
              {
                id: 'orange',
                image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&auto=format&fit=crop&q=80',
                description: 'L\'orange comme la carotte',
                isCorrect: false
              }
            ],
            explanation: 'Quand on mélange du rouge et du bleu, on obtient du violet ! C\'est une couleur secondaire souvent associée à la magie et au mystère.'
          },
          {
            id: 'colors-4',
            question: 'Quelle est la couleur du ciel par beau temps ?',
            options: [
              {
                id: 'blue',
                image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=80',
                description: 'Le bleu clair',
                isCorrect: true
              },
              {
                id: 'gray',
                image: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?w=500&auto=format&fit=crop&q=80',
                description: 'Le gris nuageux',
                isCorrect: false
              },
              {
                id: 'white',
                image: 'https://images.unsplash.com/photo-1518893494097-2ac00fddb655?w=500&auto=format&fit=crop&q=80',
                description: 'Le blanc lumineux',
                isCorrect: false
              }
            ],
            explanation: 'Le ciel est bleu par beau temps ! Cette couleur est l\'une des trois couleurs primaires avec le rouge et le jaune.'
          },
          {
            id: 'colors-5',
            question: 'Quelle est la couleur du soleil ?',
            options: [
              {
                id: 'yellow',
                image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=500&auto=format&fit=crop&q=80',
                description: 'Le jaune brillant',
                isCorrect: true
              },
              {
                id: 'orange',
                image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&auto=format&fit=crop&q=80',
                description: 'L\'orange du coucher de soleil',
                isCorrect: false
              },
              {
                id: 'red',
                image: 'https://images.unsplash.com/photo-1568548634530-9433c75e6a43?w=500&auto=format&fit=crop&q=80',
                description: 'Le rouge vif',
                isCorrect: false
              }
            ],
            explanation: 'Le soleil est de couleur jaune ! Le jaune est l\'une des trois couleurs primaires avec le rouge et le bleu.'
          },
          {
            id: 'colors-6',
            question: 'Quelle est la couleur des fraises ?',
            options: [
              {
                id: 'red',
                image: 'https://images.unsplash.com/photo-1568548634530-9433c75e6a43?w=500&auto=format&fit=crop&q=80',
                description: 'Le rouge fruité',
                isCorrect: true
              },
              {
                id: 'orange',
                image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&auto=format&fit=crop&q=80',
                description: 'L\'orange comme les mandarines',
                isCorrect: false
              },
              {
                id: 'purple',
                image: 'https://images.unsplash.com/photo-1551969014-7bd2a9d3a755?w=500&auto=format&fit=crop&q=80',
                description: 'Le violet comme les prunes',
                isCorrect: false
              }
            ],
            explanation: 'Les fraises mûres sont rouges ! Le rouge est l\'une des trois couleurs primaires avec le jaune et le bleu.'
          },
          {
            id: 'colors-7',
            question: 'Quelle est la couleur de l\'herbe ?',
            options: [
              {
                id: 'green',
                image: 'https://images.unsplash.com/photo-1564951434112-64d74cc33f9c?w=500&auto=format&fit=crop&q=80',
                description: 'Le vert de la nature',
                isCorrect: true
              },
              {
                id: 'blue',
                image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=80',
                description: 'Le bleu comme l\'eau',
                isCorrect: false
              },
              {
                id: 'yellow',
                image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=500&auto=format&fit=crop&q=80',
                description: 'Le jaune comme le soleil',
                isCorrect: false
              }
            ],
            explanation: 'L\'herbe est verte ! Cette couleur est obtenue en mélangeant deux couleurs primaires : le bleu et le jaune.'
          },
          {
            id: 'colors-8',
            question: 'Quelle couleur représente la nuit ?',
            options: [
              {
                id: 'black',
                image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=500&auto=format&fit=crop&q=80',
                description: 'Le noir profond',
                isCorrect: true
              },
              {
                id: 'blue',
                image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=80',
                description: 'Le bleu foncé',
                isCorrect: false
              },
              {
                id: 'gray',
                image: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?w=500&auto=format&fit=crop&q=80',
                description: 'Le gris sombre',
                isCorrect: false
              }
            ],
            explanation: 'La nuit est représentée par le noir ! Le noir n\'est pas une couleur primaire ou secondaire, mais l\'absence de couleur ou de lumière.'
          },
          {
            id: 'colors-9',
            question: 'Quelle couleur représente la neige ?',
            options: [
              {
                id: 'white',
                image: 'https://images.unsplash.com/photo-1518893494097-2ac00fddb655?w=500&auto=format&fit=crop&q=80',
                description: 'Le blanc pur',
                isCorrect: true
              },
              {
                id: 'blue',
                image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=80',
                description: 'Le bleu glacé',
                isCorrect: false
              },
              {
                id: 'gray',
                image: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?w=500&auto=format&fit=crop&q=80',
                description: 'Le gris clair',
                isCorrect: false
              }
            ],
            explanation: 'La neige est blanche ! Le blanc n\'est pas une couleur primaire ou secondaire, mais la présence de toutes les couleurs du spectre lumineux.'
          },
          {
            id: 'colors-10',
            question: 'Quelles sont les trois couleurs primaires ?',
            options: [
              {
                id: 'primary',
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=80',
                description: 'Rouge, jaune et bleu',
                isCorrect: true
              },
              {
                id: 'secondary',
                image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=500&auto=format&fit=crop&q=80',
                description: 'Vert, violet et orange',
                isCorrect: false
              },
              {
                id: 'rainbow',
                image: 'https://images.unsplash.com/photo-1546614425-ded38bc297b0?w=500&auto=format&fit=crop&q=80',
                description: 'Rouge, vert et bleu',
                isCorrect: false
              }
            ],
            explanation: 'Les trois couleurs primaires sont le rouge, le jaune et le bleu ! En les mélangeant entre elles, on peut créer toutes les autres couleurs.'
          }
        ]
      }
    ]
  },
  {
    id: 'dinosaurs',
    title: 'Les Dinosaures et la Préhistoire',
    emoji: '🦖',
    categories: [
      {
        id: 'species',
        title: 'Les différentes espèces de dinosaures',
        emoji: '🦕',
        questions: [
          {
            id: 'dino-1',
            question: 'Quel était le plus grand dinosaure carnivore ?',
            options: [
              {
                id: 'trex',
                image: 'https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb',
                description: 'Le T-Rex était très grand',
                isCorrect: true
              },
              {
                id: 'raptor',
                image: 'https://images.unsplash.com/photo-1519568262558-dc4b87dd85ca',
                description: 'Le Vélociraptor était rapide',
                isCorrect: false
              },
              {
                id: 'bronto',
                image: 'https://images.unsplash.com/photo-1519568262558-dc4b87dd85ca',
                description: 'Le Brontosaure mangeait des plantes',
                isCorrect: false
              }
            ],
            explanation: 'Le Tyrannosaurus Rex était le plus grand dinosaure carnivore ! Il pouvait mesurer jusqu\'à 12 mètres de long.'
          },
          {
            id: 'dino-2',
            question: 'Quel dinosaure avait un très long cou ?',
            options: [
              {
                id: 'bronto',
                image: 'https://images.unsplash.com/photo-1588422337006-88d311c7d427',
                description: 'Le Brontosaure au long cou',
                isCorrect: true
              },
              {
                id: 'trex',
                image: 'https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb',
                description: 'Le T-Rex aux petits bras',
                isCorrect: false
              },
              {
                id: 'stego',
                image: 'https://images.unsplash.com/photo-1583307359900-dbefebb3605f',
                description: 'Le Stégosaure aux plaques',
                isCorrect: false
              }
            ],
            explanation: 'Le Brontosaure avait un cou très long qui lui permettait d\'atteindre les feuilles en haut des arbres ! C\'était un herbivore géant.'
          },
          {
            id: 'dino-3',
            question: 'Quel dinosaure avait des plaques sur le dos ?',
            options: [
              {
                id: 'stego',
                image: 'https://images.unsplash.com/photo-1583307359900-dbefebb3605f',
                description: 'Le Stégosaure avec ses plaques',
                isCorrect: true
              },
              {
                id: 'ankylo',
                image: 'https://images.unsplash.com/photo-1543536471-8d84c7bc9d66',
                description: 'L\'Ankylosaure avec son armure',
                isCorrect: false
              },
              {
                id: 'triceratops',
                image: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44',
                description: 'Le Tricératops avec ses cornes',
                isCorrect: false
              }
            ],
            explanation: 'Le Stégosaure avait de grandes plaques osseuses sur son dos ! Ces plaques l\'aidaient probablement à réguler sa température corporelle.'
          },
          {
            id: 'dino-4',
            question: 'Quel dinosaure avait trois cornes sur le visage ?',
            options: [
              {
                id: 'triceratops',
                image: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44',
                description: 'Le Tricératops avec ses trois cornes',
                isCorrect: true
              },
              {
                id: 'stego',
                image: 'https://images.unsplash.com/photo-1583307359900-dbefebb3605f',
                description: 'Le Stégosaure avec ses plaques',
                isCorrect: false
              },
              {
                id: 'parasaur',
                image: 'https://images.unsplash.com/photo-1570482784941-a6c1adecadfc',
                description: 'Le Parasaurolophus avec sa crête',
                isCorrect: false
              }
            ],
            explanation: 'Le Tricératops avait trois cornes sur son visage - une petite sur le nez et deux grandes au-dessus des yeux ! Ces cornes lui servaient probablement à se défendre.'
          },
          {
            id: 'dino-5',
            question: 'Quel petit dinosaure était connu pour sa vitesse ?',
            options: [
              {
                id: 'raptor',
                image: 'https://images.unsplash.com/photo-1519568262558-dc4b87dd85ca',
                description: 'Le Vélociraptor rapide',
                isCorrect: true
              },
              {
                id: 'compy',
                image: 'https://images.unsplash.com/photo-1519568262558-dc4b87dd85ca',
                description: 'Le Compsognathus minuscule',
                isCorrect: false
              },
              {
                id: 'archae',
                image: 'https://images.unsplash.com/photo-1519568262558-dc4b87dd85ca',
                description: 'L\'Archaeopteryx ailé',
                isCorrect: false
              }
            ],
            explanation: 'Le Vélociraptor était un petit dinosaure carnivore très rapide ! Il courait à plus de 60 km/h et chassait en groupe.'
          },
          {
            id: 'dino-6',
            question: 'Quel dinosaure pouvait voler ?',
            options: [
              {
                id: 'ptero',
                image: 'https://images.unsplash.com/photo-1626118743657-0ebcb14cbe08',
                description: 'Le Ptéranodon volant',
                isCorrect: true
              },
              {
                id: 'raptor',
                image: 'https://images.unsplash.com/photo-1519568262558-dc4b87dd85ca',
                description: 'Le Vélociraptor terrestre',
                isCorrect: false
              },
              {
                id: 'trex',
                image: 'https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb',
                description: 'Le T-Rex imposant',
                isCorrect: false
              }
            ],
            explanation: 'Le Ptéranodon avait de grandes ailes membraneuses qui lui permettaient de voler ! En réalité, ce n\'était pas un dinosaure mais un reptile volant.'
          },
          {
            id: 'dino-7',
            question: 'Quel dinosaure avait une masse au bout de sa queue ?',
            options: [
              {
                id: 'ankylo',
                image: 'https://images.unsplash.com/photo-1543536471-8d84c7bc9d66',
                description: 'L\'Ankylosaure bien protégé',
                isCorrect: true
              },
              {
                id: 'stego',
                image: 'https://images.unsplash.com/photo-1583307359900-dbefebb3605f',
                description: 'Le Stégosaure avec ses pointes',
                isCorrect: false
              },
              {
                id: 'bronto',
                image: 'https://images.unsplash.com/photo-1588422337006-88d311c7d427',
                description: 'Le Brontosaure avec sa longue queue',
                isCorrect: false
              }
            ],
            explanation: 'L\'Ankylosaure avait une queue qui se terminait par une grosse boule osseuse ! Il pouvait l\'utiliser comme une massue pour se défendre contre les prédateurs.'
          },
          {
            id: 'dino-8',
            question: 'Quel dinosaure avait une grande crête sur la tête ?',
            options: [
              {
                id: 'parasaur',
                image: 'https://images.unsplash.com/photo-1570482784941-a6c1adecadfc',
                description: 'Le Parasaurolophus avec sa crête tubulaire',
                isCorrect: true
              },
              {
                id: 'triceratops',
                image: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44',
                description: 'Le Tricératops avec son bouclier',
                isCorrect: false
              },
              {
                id: 'raptor',
                image: 'https://images.unsplash.com/photo-1519568262558-dc4b87dd85ca',
                description: 'Le Vélociraptor avec sa tête fine',
                isCorrect: false
              }
            ],
            explanation: 'Le Parasaurolophus avait une longue crête tubulaire sur la tête ! Elle lui servait probablement à produire des sons pour communiquer avec les autres dinosaures.'
          },
          {
            id: 'dino-9',
            question: 'Quel était le plus grand dinosaure de tous les temps ?',
            options: [
              {
                id: 'argentin',
                image: 'https://images.unsplash.com/photo-1588422337006-88d311c7d427',
                description: 'L\'Argentinosaurus gigantesque',
                isCorrect: true
              },
              {
                id: 'bronto',
                image: 'https://images.unsplash.com/photo-1588422337006-88d311c7d427',
                description: 'Le Brontosaure massif',
                isCorrect: false
              },
              {
                id: 'trex',
                image: 'https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb',
                description: 'Le T-Rex imposant',
                isCorrect: false
              }
            ],
            explanation: 'L\'Argentinosaurus était probablement le plus grand dinosaure connu ! Il pouvait mesurer jusqu\'à 30-35 mètres de long et peser plus de 70 tonnes.'
          },
          {
            id: 'dino-10',
            question: 'Quel dinosaure avait un corps couvert d\'écailles et de pointes ?',
            options: [
              {
                id: 'ankylo',
                image: 'https://images.unsplash.com/photo-1543536471-8d84c7bc9d66',
                description: 'L\'Ankylosaure blindé',
                isCorrect: true
              },
              {
                id: 'trex',
                image: 'https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb',
                description: 'Le T-Rex féroce',
                isCorrect: false
              },
              {
                id: 'parasaur',
                image: 'https://images.unsplash.com/photo-1570482784941-a6c1adecadfc',
                description: 'Le Parasaurolophus avec sa crête',
                isCorrect: false
              }
            ],
            explanation: 'L\'Ankylosaure était comme un char d\'assaut vivant ! Son corps était couvert d\'écailles épaisses et de pointes osseuses qui le protégeaient des prédateurs.'
          }
        ]
      }
    ]
  },
  {
    id: 'countries',
    title: 'Les Pays et leurs Cultures',
    emoji: '🌍',
    categories: [
      {
        id: 'flags',
        title: 'Les drapeaux et capitales',
        emoji: '🏴',
        questions: [
          {
            id: 'flags-1',
            question: 'Quel est le drapeau de la France ?',
            options: [
              {
                id: 'france',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau bleu, blanc, rouge',
                isCorrect: true
              },
              {
                id: 'italy',
                image: 'https://images.unsplash.com/photo-1518730518541-d0843268c287?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau vert, blanc, rouge',
                isCorrect: false
              },
              {
                id: 'germany',
                image: 'https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau noir, rouge, jaune',
                isCorrect: false
              }
            ],
            explanation: 'Le drapeau de la France est bleu, blanc, rouge ! On l\'appelle aussi le drapeau tricolore.'
          },
          {
            id: 'flags-2',
            question: 'Quelle est la capitale de la France ?',
            options: [
              {
                id: 'paris',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=80',
                description: 'Paris avec la tour Eiffel',
                isCorrect: true
              },
              {
                id: 'rome',
                image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop&q=80',
                description: 'Rome avec le Colisée',
                isCorrect: false
              },
              {
                id: 'london',
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=80',
                description: 'Londres avec Big Ben',
                isCorrect: false
              }
            ],
            explanation: 'Paris est la capitale de la France ! On y trouve la tour Eiffel, le musée du Louvre et de nombreux autres monuments célèbres.'
          },
          {
            id: 'flags-3',
            question: 'Quel est le drapeau de l\'Italie ?',
            options: [
              {
                id: 'italy',
                image: 'https://images.unsplash.com/photo-1518730518541-d0843268c287?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau vert, blanc, rouge',
                isCorrect: true
              },
              {
                id: 'france',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau bleu, blanc, rouge',
                isCorrect: false
              },
              {
                id: 'ireland',
                image: 'https://images.unsplash.com/photo-1590074072786-a66914c0b5fb?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau vert, blanc, orange',
                isCorrect: false
              }
            ],
            explanation: 'Le drapeau de l\'Italie est vert, blanc et rouge avec trois bandes verticales de taille égale !'
          },
          {
            id: 'flags-4',
            question: 'Quelle est la capitale de l\'Espagne ?',
            options: [
              {
                id: 'madrid',
                image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=500&auto=format&fit=crop&q=80',
                description: 'Madrid avec ses beaux bâtiments',
                isCorrect: true
              },
              {
                id: 'barcelona',
                image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=500&auto=format&fit=crop&q=80',
                description: 'Barcelone et la Sagrada Familia',
                isCorrect: false
              },
              {
                id: 'lisbon',
                image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=500&auto=format&fit=crop&q=80',
                description: 'Lisbonne et ses tramways',
                isCorrect: false
              }
            ],
            explanation: 'Madrid est la capitale de l\'Espagne ! C\'est une grande ville au centre du pays, connue pour ses musées et sa place Puerta del Sol.'
          },
          {
            id: 'flags-5',
            question: 'Quel est le drapeau de l\'Allemagne ?',
            options: [
              {
                id: 'germany',
                image: 'https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau noir, rouge, jaune',
                isCorrect: true
              },
              {
                id: 'belgium',
                image: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau noir, jaune, rouge',
                isCorrect: false
              },
              {
                id: 'spain',
                image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau rouge et jaune',
                isCorrect: false
              }
            ],
            explanation: 'Le drapeau de l\'Allemagne est noir, rouge et or (jaune) avec trois bandes horizontales !'
          },
          {
            id: 'flags-6',
            question: 'Quelle est la capitale du Royaume-Uni ?',
            options: [
              {
                id: 'london',
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=80',
                description: 'Londres avec le Palais de Westminster',
                isCorrect: true
              },
              {
                id: 'paris',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=80',
                description: 'Paris avec l\'Arc de Triomphe',
                isCorrect: false
              },
              {
                id: 'dublin',
                image: 'https://images.unsplash.com/photo-1564959130747-897fb406b9e5?w=500&auto=format&fit=crop&q=80',
                description: 'Dublin avec ses pubs',
                isCorrect: false
              }
            ],
            explanation: 'Londres est la capitale du Royaume-Uni ! On y trouve le palais de Buckingham, Big Ben, le London Eye et bien d\'autres monuments célèbres.'
          },
          {
            id: 'flags-7',
            question: 'Quel est le drapeau des États-Unis ?',
            options: [
              {
                id: 'usa',
                image: 'https://images.unsplash.com/photo-1603792907757-d0c2fba50c15?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau avec des étoiles et des bandes',
                isCorrect: true
              },
              {
                id: 'uk',
                image: 'https://images.unsplash.com/photo-1526470498-9ae7eb5ee612?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau avec l\'Union Jack',
                isCorrect: false
              },
              {
                id: 'australia',
                image: 'https://images.unsplash.com/photo-1467991521834-fb8e202c7074?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau bleu avec des étoiles',
                isCorrect: false
              }
            ],
            explanation: 'Le drapeau des États-Unis a 13 bandes rouges et blanches et 50 étoiles blanches sur fond bleu ! Les étoiles représentent les 50 états et les bandes les 13 colonies originales.'
          },
          {
            id: 'flags-8',
            question: 'Quelle est la capitale du Japon ?',
            options: [
              {
                id: 'tokyo',
                image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=80',
                description: 'Tokyo avec ses gratte-ciels',
                isCorrect: true
              },
              {
                id: 'beijing',
                image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=500&auto=format&fit=crop&q=80',
                description: 'Pékin avec la Cité Interdite',
                isCorrect: false
              },
              {
                id: 'seoul',
                image: 'https://images.unsplash.com/photo-1543714225-992d2c8a2999?w=500&auto=format&fit=crop&q=80',
                description: 'Séoul avec ses marchés',
                isCorrect: false
              }
            ],
            explanation: 'Tokyo est la capitale du Japon ! C\'est l\'une des plus grandes villes du monde, connue pour ses avancées technologiques et sa culture unique.'
          },
          {
            id: 'flags-9',
            question: 'Quel est le drapeau du Canada ?',
            options: [
              {
                id: 'canada',
                image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau avec une feuille d\'érable',
                isCorrect: true
              },
              {
                id: 'usa',
                image: 'https://images.unsplash.com/photo-1603792907757-d0c2fba50c15?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau avec des étoiles',
                isCorrect: false
              },
              {
                id: 'japan',
                image: 'https://images.unsplash.com/photo-1556893385-7d6165b7dab2?w=500&auto=format&fit=crop&q=80',
                description: 'Le drapeau avec un cercle rouge',
                isCorrect: false
              }
            ],
            explanation: 'Le drapeau du Canada est rouge et blanc avec une feuille d\'érable rouge en son centre ! La feuille d\'érable est le symbole national du Canada.'
          },
          {
            id: 'flags-10',
            question: 'Quelle est la capitale de l\'Australie ?',
            options: [
              {
                id: 'canberra',
                image: 'https://images.unsplash.com/photo-1615730733464-2dce916e29c4?w=500&auto=format&fit=crop&q=80',
                description: 'Canberra avec son parlement',
                isCorrect: true
              },
              {
                id: 'sydney',
                image: 'https://images.unsplash.com/photo-1526958977630-bc61b30a2009?w=500&auto=format&fit=crop&q=80',
                description: 'Sydney avec son opéra',
                isCorrect: false
              },
              {
                id: 'melbourne',
                image: 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=500&auto=format&fit=crop&q=80',
                description: 'Melbourne avec ses rues',
                isCorrect: false
              }
            ],
            explanation: 'Canberra est la capitale de l\'Australie ! Beaucoup de gens pensent que c\'est Sydney, mais Canberra a été spécialement construite pour être la capitale du pays.'
          }
        ]
      }
    ]
  },
  {
    id: 'cartoons',
    title: 'Les Contes et Dessins Animés',
    emoji: '📺',
    categories: [
      {
        id: 'disney',
        title: 'Les personnages de Disney',
        emoji: '🏰',
        questions: [
          {
            id: 'disney-1',
            question: 'Qui est la souris la plus célèbre de Disney ?',
            options: [
              {
                id: 'mickey',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Mickey Mouse avec ses grandes oreilles',
                isCorrect: true
              },
              {
                id: 'jerry',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Jerry qui court après Tom',
                isCorrect: false
              },
              {
                id: 'stuart',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Stuart Little en costume',
                isCorrect: false
              }
            ],
            explanation: 'Mickey Mouse est la mascotte de Disney ! Il a été créé par Walt Disney en 1928.'
          },
          {
            id: 'disney-2',
            question: 'Qui est la princesse avec de longs cheveux magiques ?',
            options: [
              {
                id: 'rapunzel',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Raiponce et ses cheveux dorés',
                isCorrect: true
              },
              {
                id: 'ariel',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Ariel avec ses cheveux rouges',
                isCorrect: false
              },
              {
                id: 'belle',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Belle avec ses cheveux bruns',
                isCorrect: false
              }
            ],
            explanation: 'Raiponce a des cheveux magiques qui brillent quand elle chante ! Ils peuvent guérir les blessures et la garder jeune éternellement.'
          },
          {
            id: 'disney-3',
            question: 'Qui est le lion qui devient roi de la savane ?',
            options: [
              {
                id: 'simba',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Simba le courageux',
                isCorrect: true
              },
              {
                id: 'scar',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Scar le méchant',
                isCorrect: false
              },
              {
                id: 'mufasa',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Mufasa le sage',
                isCorrect: false
              }
            ],
            explanation: 'Simba est le héros du film "Le Roi Lion" ! Après de nombreuses aventures, il prend sa place légitime en tant que roi de la savane.'
          },
          {
            id: 'disney-4',
            question: 'Qui est la princesse qui a perdu sa chaussure de verre ?',
            options: [
              {
                id: 'cinderella',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Cendrillon au bal',
                isCorrect: true
              },
              {
                id: 'belle',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Belle à la bibliothèque',
                isCorrect: false
              },
              {
                id: 'jasmine',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Jasmine sur son tapis volant',
                isCorrect: false
              }
            ],
            explanation: 'Cendrillon perd sa chaussure de verre en s\'enfuyant du bal à minuit ! Le prince la retrouve grâce à cette chaussure qui ne va qu\'à son pied.'
          },
          {
            id: 'disney-5',
            question: 'Quel personnage Disney est un bonhomme de neige qui aime les câlins chauds ?',
            options: [
              {
                id: 'olaf',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Olaf qui sourit',
                isCorrect: true
              },
              {
                id: 'sven',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Sven le renne',
                isCorrect: false
              },
              {
                id: 'kristoff',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Kristoff le montagnard',
                isCorrect: false
              }
            ],
            explanation: 'Olaf est le bonhomme de neige du film "La Reine des Neiges" ! Il dit toujours qu\'il aime les "câlins chauds" même si la chaleur pourrait le faire fondre.'
          },
          {
            id: 'disney-6',
            question: 'Qui est le petit poisson orange qui se perd dans l\'océan ?',
            options: [
              {
                id: 'nemo',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Nemo le poisson-clown',
                isCorrect: true
              },
              {
                id: 'dory',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Dory qui oublie tout',
                isCorrect: false
              },
              {
                id: 'bruce',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Bruce le requin',
                isCorrect: false
              }
            ],
            explanation: 'Nemo est le petit poisson-clown du film "Le Monde de Nemo" ! Son papa Marin parcourt tout l\'océan pour le retrouver après qu\'il a été capturé.'
          },
          {
            id: 'disney-7',
            question: 'Qui est le jouet cowboy de Toy Story ?',
            options: [
              {
                id: 'woody',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Woody avec son chapeau',
                isCorrect: true
              },
              {
                id: 'buzz',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Buzz l\'astronaute',
                isCorrect: false
              },
              {
                id: 'rex',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Rex le dinosaure',
                isCorrect: false
              }
            ],
            explanation: 'Woody est le cowboy en tissu qui est le jouet préféré d\'Andy dans "Toy Story" ! Il porte un chapeau de cowboy et a une corde dans le dos.'
          },
          {
            id: 'disney-8',
            question: 'Qui est la princesse qui vit sous l\'océan ?',
            options: [
              {
                id: 'ariel',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Ariel la petite sirène',
                isCorrect: true
              },
              {
                id: 'moana',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Moana la navigatrice',
                isCorrect: false
              },
              {
                id: 'elsa',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Elsa la reine des neiges',
                isCorrect: false
              }
            ],
            explanation: 'Ariel est la princesse du film "La Petite Sirène" ! Elle est une sirène qui rêve de vivre sur terre parmi les humains.'
          },
          {
            id: 'disney-9',
            question: 'Quel personnage Disney est un éléphant qui vole avec ses grandes oreilles ?',
            options: [
              {
                id: 'dumbo',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Dumbo l\'éléphanteau',
                isCorrect: true
              },
              {
                id: 'colonel',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Colonel Hathi l\'éléphant',
                isCorrect: false
              },
              {
                id: 'abu',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Abu le singe',
                isCorrect: false
              }
            ],
            explanation: 'Dumbo est un petit éléphant né avec des oreilles exceptionnellement grandes ! Il découvre qu\'il peut les utiliser pour voler dans les airs.'
          },
          {
            id: 'disney-10',
            question: 'Qui est le génie bleu qui exauce les souhaits ?',
            options: [
              {
                id: 'genie',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Le Génie de la lampe',
                isCorrect: true
              },
              {
                id: 'jafar',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Jafar le sorcier',
                isCorrect: false
              },
              {
                id: 'aladdin',
                image: 'https://images.unsplash.com/photo-1576503918360-4f3a2f318c90',
                description: 'Aladdin le héros',
                isCorrect: false
              }
            ],
            explanation: 'Le Génie est un personnage du film "Aladdin" ! Il est enfermé dans une lampe magique et peut exaucer trois vœux à quiconque frotte la lampe.'
          }
        ]
      }
    ]
  }
];