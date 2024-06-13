export interface Pet {
    nombreMascota: String;
    edadMascota: number;
    razaMascota: String;
    colorMascota: String;
    ccMascota: String;
    id_cliente: {
        idCliente: number;
        role: String;
    }
}