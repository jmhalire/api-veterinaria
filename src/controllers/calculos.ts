import { Venta } from "../models/venta";
import { Visita } from "../models/visita";

type Pormeses = {
    nombreMes: string,
    nroMes: number,
    anio: number,
    acumulado: number
}
export class Functions {

    constructor(
    ) { 
    }
  
    private nombreMeses() {
      return [
        'Enero','Febero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
      ]
    }
  
    /**
     * fechaNombres
     */
    public datosFecha(datos: Pormeses[]): Pormeses[] {
      const fec = this.nombreMeses();
      let dat = new Date().toLocaleDateString();
      let fecha = dat.split('/');
      //en heroku
      let mes =  parseInt(fecha[0]);
      //localhost
      //let mes =  parseInt(fecha[1]);
      let anio = parseInt( fecha[2]);
      for (let i = 0; i < 12; i++) {
        if(mes===0){
          mes = 12;
          anio = anio - 1;
        }
        let dato : Pormeses = {
          nombreMes: fec[mes-1],
          nroMes: mes,
          anio: anio,
          acumulado: 0
        }
        mes -= 1
        datos.push(dato)
      }
      return datos.reverse();
    }
  
    //calculoDatos para obtener total de ingrsos por mese
    public calculoDatos(datos: Pormeses[],ventas: Venta[]): Pormeses[] {
      ventas.forEach((element)=> {
        //en heroku
        let dat = new Date(element.CreatedAt).toLocaleString().split(',')[0].split('/');
        //local
        //let dat = new Date(element.CreatedAt).toLocaleString().split(' ')[0].split('/');
        for (let i = 0; i < datos.length; i++) {
          //en heroku
          if(datos[i].nroMes.toString()===dat[0].toString() && 
            datos[i].anio.toString()===dat[2].toString()){
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
    }
  
    //calculo para obtener numero de clientes que visitan por meses
    public calculoClientesXmeses(datos: Pormeses[],visitas: Visita[]): any{
      visitas.forEach((visita,index)=>{
        let dat = new Date(visita.CreatedAt).toLocaleString().split(' ')[0].split('/');
        for (let i = 0; i < datos.length; i++) {
          if(datos[i].nroMes.toString()===dat[1].toString() && 
            datos[i].anio.toString()===dat[2].toString()){
            datos[i].acumulado += 1;
          }
        }
      });
      return datos;
    }
  
    //bacgroundColor
    public backgroundColor() {
      let colors = [];
      for (let i = 0; i < 12; i++) {
        colors.push('rgba(0, 139, 139, 0.5)');  
      }
      return colors
    }
  
    /**
     * borderColor
     */
    public borderColor() {
      let colors = [];
      for (let i = 0; i < 12; i++) {
        colors.push('rgba(0, 150, 150, 1)');  
      }
      return colors
    }
  
    /**
     * labels
     */
    public getlabels(datos: Pormeses[]): string[] {
      let labels: string[] = []
      for (let i = 0; i < datos.length; i++) {
        let dato = `${datos[i].nombreMes} del ${datos[i].anio}`;
        labels.push(dato)      
      }
      return labels;
    }
  
    public ventasDeHoy(ventas: Venta[]): any{
        let HorasVenta: string[] = [];
        let ventasHoy: Venta[] = [];
        let totalVentas = 0;
        let hoy = new Date().toLocaleString().split(' ');
        ventas.forEach(element => {
          let dato = new Date(element.CreatedAt).toLocaleString().split(' ');      
          if(dato[0]===hoy[0]){
            HorasVenta.push(dato[1])
            totalVentas += element.Total;
            ventasHoy.push(element);
          }
        });
        return {
            ventasHoy,
            HorasVenta,
            totalVentas            
        }
      }
    
      public visitasDeHoy( visitas: Visita[]){
        let HorasVisita: string[] = [];
        let visitasHoy: Visita[] = [];
        let totalVisitas = 0;
        let hoy = new Date().toLocaleString().split(' ');
        visitas.forEach(element => {
          let dato = new Date(element.UpdatedAt).toLocaleString().split(' ');   
          if(dato[0]===hoy[0] && element.EstaPagado === 'SI'){
            HorasVisita.push(dato[1])
            totalVisitas += element.Costo;
            visitasHoy.push(element);
          }
        });
        return {
            visitasHoy,
            HorasVisita,
            totalVisitas            
        }
      }
  }