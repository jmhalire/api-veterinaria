import { Request, Response } from "express"
import request from "request"
import { getRepository, createQueryBuilder, getConnection } from "typeorm";
import { DetalleVenta } from "../models/detalleVenta";
import config from '../config/configs';
import { getHeapStatistics } from "v8";

export class ReporteController {

    constructor() {
    }

    //obtenemos los cinco productos mas vendidos
    public async getProductFavory(req: Request, res: Response) {
        try {
            const productSuma = await getRepository(DetalleVenta)
                .createQueryBuilder("DetalleVenta")
                .limit(10)
                .orderBy("ProductCantidad", "DESC")
                .select("DetalleVenta.id")
                .leftJoinAndSelect("DetalleVenta.producto", "producto")
                .addSelect("SUM(DetalleVenta.Cantidad)", "ProductCantidad")
                .groupBy("DetalleVenta.producto")
                .getRawMany();

            return res.json(productSuma);

        } catch (error) {
            return res.status(404).json(error);
        }
    }

    //GET CLIMA
    public async getWether(req: Request, res: Response) {
        const url = `http://api.openweathermap.org/data/2.5/weather?appid=6c62145b0b732a9d0f6423f95b66372a&units=metric&q=cusco`;
        try {
            ///request.get()
            request({
				url: url,
				json: true
			}, function (error, response, body) {
				if (!error && response.statusCode === 200) {
					// Pintamos la respuesta JSON en navegador.
					res.send(body)
				}else{
					res.send([]);
				}
			});

        } catch (error) {
            return res.status(404).json(error)
        }
    }
}
