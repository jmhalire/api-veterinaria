"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functions = void 0;
var Functions = /** @class */ (function () {
    function Functions() {
    }
    Functions.prototype.nombreMeses = function () {
        return [
            'Enero', 'Febero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
    };
    /**
     * fechaNombres
     */
    Functions.prototype.datosFecha = function (datos) {
        var fec = this.nombreMeses();
        var dat = new Date().toLocaleDateString();
        var fecha = dat.split('/');
        //en heroku
        var mes = parseInt(fecha[0]);
        //localhost
        //let mes =  parseInt(fecha[1]);
        var anio = parseInt(fecha[2]);
        for (var i = 0; i < 12; i++) {
            if (mes === 0) {
                mes = 12;
                anio = anio - 1;
            }
            var dato = {
                nombreMes: fec[mes - 1],
                nroMes: mes,
                anio: anio,
                acumulado: 0
            };
            mes -= 1;
            datos.push(dato);
        }
        return datos.reverse();
    };
    //calculoDatos para obtener total de ingrsos por mese
    Functions.prototype.calculoDatos = function (datos, ventas) {
        ventas.forEach(function (element) {
            var dat = new Date(element.CreatedAt).toLocaleString().split(' ')[0].split('/');
            for (var i = 0; i < datos.length; i++) {
                //en heroku
                if (datos[i].nroMes.toString() === dat[0].toString() &&
                    datos[i].anio.toString() === dat[2].toString()) {
                    datos[i].acumulado += element.Total;
                }
                //localhost
                /*if(datos[i].nroMes.toString()===dat[1].toString() &&
                  datos[i].anio.toString()===dat[2].toString()){
                  datos[i].acumulado += element.Total;
                }*/
            }
        });
        return datos;
    };
    //calculo para obtener numero de clientes que visitan por meses
    Functions.prototype.calculoClientesXmeses = function (datos, visitas) {
        visitas.forEach(function (visita, index) {
            var dat = new Date(visita.CreatedAt).toLocaleString().split(' ')[0].split('/');
            for (var i = 0; i < datos.length; i++) {
                if (datos[i].nroMes.toString() === dat[1].toString() &&
                    datos[i].anio.toString() === dat[2].toString()) {
                    datos[i].acumulado += 1;
                }
            }
        });
        return datos;
    };
    //bacgroundColor
    Functions.prototype.backgroundColor = function () {
        var colors = [];
        for (var i = 0; i < 12; i++) {
            colors.push('rgba(0, 139, 139, 0.5)');
        }
        return colors;
    };
    /**
     * borderColor
     */
    Functions.prototype.borderColor = function () {
        var colors = [];
        for (var i = 0; i < 12; i++) {
            colors.push('rgba(0, 150, 150, 1)');
        }
        return colors;
    };
    /**
     * labels
     */
    Functions.prototype.getlabels = function (datos) {
        var labels = [];
        for (var i = 0; i < datos.length; i++) {
            var dato = datos[i].nombreMes + " del " + datos[i].anio;
            labels.push(dato);
        }
        return labels;
    };
    Functions.prototype.ventasDeHoy = function (ventas) {
        var HorasVenta = [];
        var ventasHoy = [];
        var totalVentas = 0;
        var hoy = new Date().toLocaleString().split(' ');
        ventas.forEach(function (element) {
            var dato = new Date(element.CreatedAt).toLocaleString().split(' ');
            if (dato[0] === hoy[0]) {
                HorasVenta.push(dato[1]);
                totalVentas += element.Total;
                ventasHoy.push(element);
            }
        });
        return {
            ventasHoy: ventasHoy,
            HorasVenta: HorasVenta,
            totalVentas: totalVentas
        };
    };
    Functions.prototype.visitasDeHoy = function (visitas) {
        var HorasVisita = [];
        var visitasHoy = [];
        var totalVisitas = 0;
        var hoy = new Date().toLocaleString().split(' ');
        visitas.forEach(function (element) {
            var dato = new Date(element.UpdatedAt).toLocaleString().split(' ');
            if (dato[0] === hoy[0] && element.EstaPagado === 'SI') {
                HorasVisita.push(dato[1]);
                totalVisitas += element.Costo;
                visitasHoy.push(element);
            }
        });
        return {
            visitasHoy: visitasHoy,
            HorasVisita: HorasVisita,
            totalVisitas: totalVisitas
        };
    };
    return Functions;
}());
exports.Functions = Functions;
