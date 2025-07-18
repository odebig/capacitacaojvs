type Pessoa = {
  nome: string;
  idade: number;
};

type Funcionario = {
  cargo: string;
  salario: number;
};

type Gerente = Pessoa &
  Funcionario & {
    departamento: string;
  };
const gerente: Gerente = {
  nome: "João",
  idade: 35,
  cargo: "Gerente de Projetos",
  salario: 75000,
  departamento: "Desenvolvimento",
};
