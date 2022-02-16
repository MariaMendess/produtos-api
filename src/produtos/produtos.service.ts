import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProdutosDocument, ProdutosModel } from "./produtos.model";


@Injectable()
export class ProdutosService {

    constructor(@InjectModel(ProdutosModel.name) private produtosCollection: Model<ProdutosDocument>) { }

    async cadastrarProduto(produto: any): Promise<any> {
        try {
            const produtosModel = await this.produtosCollection.insertMany({
                codigo: produto.codigo, 
                nome: produto.nome, 
                preco: produto.preco
            } as ProdutosModel)

            return produtosModel;

        } catch (err) { "Erro ao cadastrar Produto" + err }
    }

    async alterarProduto(produto: any): Promise<any> {
        try {
            const product = await this.produtosCollection.updateMany({ "_id": produto.id }, { codigo: produto.codigo, nome: produto.nome, preco: produto.preco });
            return product;

        } catch (err) { "Erro ao Atualizar o Produto" + err }
    }

    async getProduto(id: string): Promise<any> {
        try {
            const produto = await this.produtosCollection.findOne({ "_id": id });
            return produto

        } catch (err) { "Produto não encontrado" + err }
    }

    async delProduto(id: string): Promise<string> {
        try {
            await this.produtosCollection.deleteOne({ "_id": id });
            return "Produto deletado"

        } catch (err) { "Produto não encontrado" + err }
    }

    async allProduto(): Promise<any> {
        return await this.produtosCollection.find();



    }
}