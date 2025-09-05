"""Desenvolva um programa que colete dados da altura e o gênero (Masculino ou
Feminino) de 15 pessoas e apresente os seguintes resultados:

- A maior e a menor altura do grupo;
- A média de altura das pessoas do gênero Masculino;
- O número de pessoas do gênero Feminino."""


alturamasculina = 0
pessoasf = 0 
pessoasm = 0

print("=== Cadastro de Altura e Gênero de 15 Pessoas ===")


altura = float(input("Digite sua altura: "))
alturamaior=altura
alturamenor=altura
sexo = input("Digite seu sexo (M/F)").upper()
if sexo == "F":
     pessoasf= pessoasf + 1
elif sexo == "M":
     pessoasm= pessoasm + 1
     alturamasculina = altura + alturamasculina
else:
    print("Sexo inválido, considere apenas M ou F.")

for i in range(14):
       altura = float(input("Digite sua altura: "))
       if altura>alturamaior:
              alturamaior= altura
       elif altura<alturamenor:
                alturamenor = altura
       sexo = input("Digite seu sexo (M/F)").upper()
       if sexo == "F":
         pessoasf= pessoasf + 1
       elif sexo == "M":
             pessoasm= pessoasm + 1
             alturamasculina = altura + alturamasculina
       else:
        print("Sexo inválido, considere apenas M ou F.")

print("=== Resultado do Cadastro de Altura e Gênero de 15 Pessoas ===")
print("A pessoa com maior altura possui: ", alturamaior)
print("A pessoa com menor altura possui: " , alturamenor)
print("Tem " , pessoasf , " pessoas do sexo feminino")

if pessoasm > 0: 
    mediamasculina = alturamasculina/pessoasm
    print(f"A média de altura do sexo masculino é: {mediamasculina:.2f}")
else:
    print("Não houve homens no grupo.")


             
        
             



