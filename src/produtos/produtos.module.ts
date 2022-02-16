import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { ProdutosModel, ProdutosSchema } from "./produtos.model";
import { ProdutosController } from "./produtos.controller";
import { ProdutosService } from "./produtos.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: ProdutosModel.name, schema: ProdutosSchema}])
    ],
    providers: [ProdutosService],
    controllers: [ProdutosController],
    exports: [ProdutosService],
})
export class ProdutosModule { }