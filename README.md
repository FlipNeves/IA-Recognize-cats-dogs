# Como funciona a aplicação web de predição das imagens

## Sobre o projeto em si
Este tem o intuito de gerar uma pequena página web onde ela vai receber uma imagem PNG e apontar se ele é um cachorro ou gato, até o momento.

## Mas onde está o modelo da IA?
O arquivo do modelo excede o tamanho permitido do Git e por isso eu deixei dentro da pasta Models_ia o arquivo para se rodar no Jupyter. 

**Sobre Jupyter**
Para que seja possível o desenvolvimento deste modelo da IA, execute o primeiro Markdown apontado.
> Construindo e configurando bases para a IA
E depois pode ir para o Markdown apontando o desenvolvimento de um modelo VGG16, modelo base para a criação da nossa IA.

**Os arquivos de treino**
Para o treinamento dessa IA foi usado uma paste que contém 25 mil imagens, tanto de cachorros quanto gatos. Para que se tenha posse desta pasta, envie um email para _filipe.neves.bg@gmail.com_ ou acesse [Cats_and_dogs](https://www.kaggle.com/c/dogs-vs-cats/data) e faça o download do zip "train.zip".

## Como executar o projeto em flask
Depois de toda a configuração necessária no projeto, para rodar um projeto python utilizando flask, vá ao terminal e execute:
...
export FLASK_APP=predict_app.py
flask run --host=0.0.0.0
...

Depois acesse o primeiro endereço apontado pelo terminal e acrescente : _/static/predict.html_

### Tecnologias usadas
| Tecnologias | Versões |
|:-----------:|:-------:|
| Python      |  3.8.10 |
| pip         |  20.0.2 |
| Flask       |   2.2.2 |
| Werkzeug    |   2.2.2 |

_Se acha alguma outra tecnologia importante, acrescentar na tabela_


