import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProdutosDocument = ProdutosModel & Document;

@Schema({ collection: 'Produtos' })
export class ProdutosModel {

    @Prop()
    codigo: string;

    @Prop()
    nome: string;

    @Prop()
    preco: number;   

    constructor(produto?: Partial<ProdutosModel>) {
        this.codigo = produto?.codigo;
        this.nome = produto?.nome;
        this.preco = produto?.preco;

    }
    
}
export const ProdutosSchema = SchemaFactory.createForClass(ProdutosModel);


