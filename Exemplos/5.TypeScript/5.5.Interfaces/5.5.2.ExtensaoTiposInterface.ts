interface Pessoa {
  nome: string;
  idade: number;
}

interface Funcionario {
  cargo: string;
  salario: number;
}

interface Gerente extends Pessoa, Funcionario {
  departamento: string;
}

const gerente: Gerente = {
  nome: "João",
  idade: 35,
  cargo: "Gerente de Projetos",
  salario: 75000,
  departamento: "Desenvolvimento",
};

interface EstudanteUNIFEI {
  nome: string;
  matricula: number;
  curso: string;
  anoIngresso: number;
}

interface ExMachina extends EstudanteUNIFEI {
  anoIngressoProjeto: number;
  anoSaidaProjeto: number;
}

const AlunoDoExMachina: ExMachina = {
  nome: "Ronaldo",
  matricula: 987654,
  curso: "Engenharia Elétrica",
  anoIngresso: 2019,
  anoIngressoProjeto: 2022,
  anoSaidaProjeto: 2023,
};
