import { Request, Response } from "express"
import request from "request"
import { getRepository, createQueryBuilder, getConnection } from "typeorm";

//type
import { DetalleVenta } from "../models/detalleVenta";
import { Venta } from "../models/venta";
import { Visita } from "../models/visita";
//controllers
import { Functions } from "./calculos";

const calc = new Functions();

type Pormeses = {
    nombreMes: string,
    nroMes: number,
    anio: number,
    acumulado: number
}
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

    //reporte de ingresos por meses
    public async getIngresoXmeses(req: Request, res: Response) {

        try {
            //obteneiendo todas las ventas
            const ventas = await <Venta[] | any>createQueryBuilder("Venta")
                .leftJoinAndSelect("Venta.cliente", "cliente")
                .leftJoinAndSelect("Venta.detalleVentas", "detalleVentas")
                .getMany();
            let datosFecha: Pormeses[] = calc.datosFecha([]);
            let labels: string[] = calc.getlabels(datosFecha);
            let datos: Pormeses[] = calc.calculoDatos(datosFecha, ventas);
            let backgroundColor = calc.backgroundColor();
            let borderColor = calc.borderColor()

            return res.json({ datos, labels, backgroundColor, borderColor })

        } catch (error) {
            return res.status(404).json(error);
        }
    }


    //reporte de ingresos del dia de hoy
    public async getIngresoHoy(req: Request, res: Response) {
        try {
            //obteniendo todas las ventas
            const ventas = await <Venta[] | any>createQueryBuilder("Venta")
                .leftJoinAndSelect("Venta.cliente", "cliente")
                .leftJoinAndSelect("Venta.detalleVentas", "detalleVentas")
                .getMany();
            const ventasHoy = calc.ventasDeHoy(ventas);

            //obteniendo todas las visitas
            const listVisitas = await <Visita[] | any>createQueryBuilder("Visita")
                .leftJoinAndSelect("Visita.mascota", "mascota")
                .leftJoinAndSelect("Visita.cliente", "cliente")
                .getMany();
            const visitasHoy = calc.visitasDeHoy(listVisitas);
            return res.json({ ventasHoy, visitasHoy })

        } catch (error) {
            return res.status(404).json(error);
        }
    }


    //reporte de ingresos por meses
    public async getvisitasXmeses(req: Request, res: Response) {

        try {
            //obteneiendo todas las ventas
            const listVisitas = await <Visita[] | any>createQueryBuilder("Visita")
                .leftJoinAndSelect("Visita.mascota", "mascota")
                .leftJoinAndSelect("Visita.cliente", "cliente")
                .getMany();
            let datosFecha: Pormeses[] = calc.datosFecha([]);
            let labels: string[] = calc.getlabels(datosFecha);
            let datos: Pormeses[] = calc.calculoClientesXmeses(datosFecha, listVisitas);
            let backgroundColor = calc.backgroundColor();
            let borderColor = calc.borderColor()

            return res.json({ datos, labels, backgroundColor, borderColor })

        } catch (error) {
            return res.status(404).json(error);
        }
    }

    //GET CLIMA
    public async getWether(req: Request, res: Response) {
        const TOKEN_API_WEATHER = process.env.TOKEN_API_WEATHER;
        const url = `http://api.openweathermap.org/data/2.5/weather?appid=${TOKEN_API_WEATHER}&units=metric&q=cusco`;
        try {
            ///request.get()
            request({
                url: url,
                json: true
            }, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    // Pintamos la respuesta JSON en navegador.
                    res.send(body)
                } else {
                    res.send([]);
                }
            });

        } catch (error) {
            return res.status(404).json(error)
        }
    }


}
