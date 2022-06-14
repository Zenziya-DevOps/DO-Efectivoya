export const preguntasFrecuentes = [
  {
    Accion: null,
    Id: 11,
    Id_Icon: null,
    Numero: null,
    Header: "¿Cuánto dinero puedo pedir?",
    Contenido: "Puedes solicitar entre RD$ 5,000 y RD$10,000.",
    KeyOrigen: null,
    Id_Estado: "1",
    Source: null,
    Texto: null,
  },
  {
    Accion: null,
    Id: 12,
    Id_Icon: null,
    Numero: null,
    Header: "¿Cuánto tardan en aprobar un préstamo?",
    Contenido: "¡Te aprobamos sólo con tu cédula en menos de un minuto!",
    KeyOrigen: null,
    Id_Estado: "1",
    Source: null,
    Texto: null,
  },
  {
    Accion: null,
    Id: 13,
    Id_Icon: null,
    Numero: null,
    Header: "¿Qué necesito para solicitar un préstamo?",
    Contenido:
      "Ser mayor de 18 años, dominicano, tener teléfono celular con línea activa,  tu cédula de identidad y una cuenta bancaria en RD$ y a tu nombre.",
    KeyOrigen: null,
    Id_Estado: "1",
    Source: null,
    Texto: null,
  },
  {
    Accion: null,
    Id: 14,
    Id_Icon: null,
    Numero: null,
    Header: "¿En cuánto tiempo acreditan el dinero en mi cuenta?",
    Contenido:
      "Una vez formalizado el préstamo, recibes el dinero en menos de 24 horas.",
    KeyOrigen: null,
    Id_Estado: "1",
    Source: null,
    Texto: null,
  },
  {
    Accion: null,
    Id: 15,
    Id_Icon: null,
    Numero: null,
    Header: "¿Qué plazos puedo manejar para devolver el préstamo?",
    Contenido:
      "Puedes elegir entre un plazo mínimo de 3 meses a un máximo de 6 y tus cuotas pueden ser quincenales o mensuales",
    KeyOrigen: null,
    Id_Estado: "1",
    Source: null,
    Texto: null,
  },
]

export const keyOrigen =
  new URLSearchParams(window.location.search).get("p") ||
  "DO000003000001000001000001000001"

export const step = {
  VISITA: "Visita",
  OFERTA: "Oferta",
  INGRESA_IDENTIFICACION: "IngresaIdentificacion",
  IDENTIFICACION_INVALIDA: "IdentificacionInvalida",
  VALIDA_IDENTIFICACION: "ValidaIdentificacion",
  INSERTA_TELEFONO: "InsertaTelefono",
  VALIDA_TELEFONO: "ValidaTelefono",
  ENVIO_MOTOR: "EnvioMotor",
  RECEPCION_MOTOR: "RecepcionMotor",
  INICIO_CHATBOT: "InicioChatBot",
  INSERTA_TELEFONO_AUTOMATICO: "InsertaTelefonoAutomatico",
  VALIDA_IDENTIFICACION_AUTOMATICO: "ValidaIdentificacionAutomatico",
  INICIO_CHATBOT_AUTOMATICO: "InicioChatBotAutomatico",
  VALIDA_TELEFONO_AUTOMATICO: "ValidaTelefonoAutomatico",
}
