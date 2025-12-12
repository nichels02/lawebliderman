export interface ErroresFormulario {
    nombreVacio: boolean,
    apellidoVacio: boolean,
    correoVacio: boolean,
    FormatoDeCorreo: boolean,
    RazonSocialEmpresaVacio: boolean,
    RUCEmpresaVacio: boolean,
    RegionVacio: boolean,
    DistritoVacio: boolean,
    DireccionVacio: boolean,

    interesesVacio: boolean,

    RequerimientoVacio: boolean,
    CodigoVacio:boolean,
    telefonoVacio: boolean,
    TelefonoSoloNumeros: boolean,
    TelefonoCantidadDeDigitos: boolean,

    PorDondeContactarVacio: boolean,



    ErrorGuardando: boolean,
    ErrorDeConexion: boolean
}
