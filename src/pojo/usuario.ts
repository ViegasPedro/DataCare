export class Usuario{

	public id: string;
	public nome: string;
	public senha: string;
	public email: string;
	public cpf: string;
	public telefone: string;
	public responsavel: Usuario;
	public pacientes: Array<Usuario>;
	public tipos: Array<String>;

	constructor(){
 	}

 	getNome(){
 		return this.nome;
 	}

	getId(){
		return this.id;
	}

}
