import { Address } from "./address.type";
import { Status } from "./status.type";

export type User = {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    endereco: Address;
    telefone: string;
    ativo: boolean;
    funcao: string;
    dataCadastro: string;
    status: Status;
}
