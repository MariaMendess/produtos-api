import { Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private produtosSevice: ProdutosService) {}

    @Get()
    async obtertodos(): Promise<any> {
        return await this.produtosSevice.allProduto();
    }

    @Get(':id')
    async obterum(@Param() params): Promise<any> {
        return await this.produtosSevice.getProduto(params.id);
    }

    @Post()
    async criar(@Body() produto: any): Promise<any>{
        return await this.produtosSevice.cadastrarProduto(produto);
    }

    @Put()
    async alterar(@Body() produto: any): Promise<any> {
        return await this.produtosSevice.alterarProduto(produto);
    }

    @Delete(':id')
    async apagar(@Param() params): Promise<string> {
        return await this.produtosSevice.delProduto(params.id)
    }

}