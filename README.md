# Caixa eletrônico 💰

O objetivo do projeto é que o usuário possa sacar um valor inteiro com as notas disponiveis e visualize quantas e quais notas ele ira receber.



## A função sacar() vai validar

Os campos obrigatórios: Não deixar o input vazio; Não permitir strings; Permitir apenas números inteiros.

### Sobre a lógica:

Primeiramente e feito a divisão do saque por 50 e o valor e convertido para inteiro;
Em seguida e feito o resto da divisão por 50 divido por 20 e convertido para inteiro; 
E por último e feito o resto da divisão de 50 pelo resto da divisão de 20 divido para 10 e convertido para inteiro.