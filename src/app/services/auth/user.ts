export interface User {
    idCliente:number;
    nombreCliente: String,
    apellidoCliente?:string;
    ccCliente?:string;
    emailCliente:string;
    direccionCliente: String;
    role?: String
}