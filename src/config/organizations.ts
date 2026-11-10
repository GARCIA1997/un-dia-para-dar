/**
 * Organizaciones beneficiarias de Un Día para Dar Colima 2026.
 *
 * Por decisión del comité no se publican montos, teléfonos, correos ni
 * nombres de personas: el contacto es siempre el WhatsApp del comité.
 */
export interface Organization {
  id: string;
  name: string;
  shortName: string;
  /** Una línea que resume la causa. */
  causeLabel: string;
  /** Dónde trabaja. */
  where: string;
  /** Qué hace la organización hoy. */
  summary: string;
  /** A quién acompaña. */
  beneficiaries: string;
  /** Qué se logra con lo que reúnan los círculos. */
  campaignTitle: string;
  campaignIntro: string;
  /** Destino de los recursos, sin montos. */
  uses: string[];
  /** Datos de trayectoria para mostrar como chips. */
  facts: string[];
  accent: string;
  /** Mensaje de WhatsApp al elegir esta causa. */
  whatsappCause: string;
}

export const ORGANIZATIONS: Organization[] = [
  {
    id: "comedor-cristo-rey",
    name: "Comedor Solidario Cristo Rey",
    shortName: "Comedor Cristo Rey",
    causeLabel: "Alimentación",
    where: "Col. Solidaridad, Villa de Álvarez",
    summary:
      "Un comedor comunitario que sostiene el plato de cada día para las familias de su zona. Se apoya del centro de acopio junto al templo de San Juan Diego, cuyos recursos se destinan a mantenerlo abierto.",
    beneficiaries:
      "Unas 60 personas de las colonias Solidaridad, Lomas Altas, Linda Vista y Villa Izcalli.",
    campaignTitle: "Que la cocina no se apague",
    campaignIntro:
      "Lo que reúnan los círculos se convierte en comida y en lo necesario para prepararla y mantener limpio el comedor.",
    uses: [
      "Alimentos frescos: pollo, carne, huevo, verduras, frutas, queso y tortillas",
      "Alimentos no perecederos: arroz, frijol, pasta, atún, aceite, azúcar, lentejas, avena y más",
      "Artículos de limpieza: detergente, cloro, fibras, servilletas y servitoalla",
      "Gas: alrededor de un cilindro al mes",
    ],
    facts: ["≈ 60 personas atendidas", "4 colonias", "Villa de Álvarez"],
    accent: "from-brand-amber to-brand-orange",
    whatsappCause: "el Comedor Solidario Cristo Rey",
  },
  {
    id: "red-desaparecidos",
    name: "Red Desaparecidos en Colima A.C.",
    shortName: "Red Desaparecidos",
    causeLabel: "Memoria y búsqueda",
    where: "Colima · 10 municipios",
    summary:
      "Familias que buscan a sus seres queridos desde 2018: salen a búsquedas en campo y en vida, acompañan a otras familias que viven una desaparición y mantienen abierto el diálogo con las autoridades.",
    beneficiaries:
      "Las familias con personas desaparecidas en Colima y, de manera indirecta, toda la población, en especial las juventudes.",
    campaignTitle: "Campaña “Fosa Común”",
    campaignIntro:
      "Dos acciones: renovar la Plaza de las y los Desaparecidos, espacio de memoria y exigencia de verdad y justicia, y llevar información a los 10 municipios.",
    uses: [
      "Pintura y mejora de la Plaza de las y los Desaparecidos",
      "Lámparas e iluminación para la parte posterior de la plaza",
      "Lonas con los rostros y datos de las personas desaparecidas, y material de difusión",
      "Jornada itinerante por los 10 municipios: módulos informativos, orientación para denunciar y para donar muestras de ADN",
    ],
    facts: ["Desde 2018", "10 municipios", "Plaza de las y los Desaparecidos"],
    accent: "from-brand-red to-brand-redDark",
    whatsappCause: "la Red Desaparecidos en Colima",
  },
  {
    id: "fhadi",
    name: "FHADI · Fundación Humanista de Ayuda a Personas con Discapacidad, I.A.P.",
    shortName: "FHADI",
    causeLabel: "Movilidad y autonomía",
    where: "Colima y Villa de Álvarez",
    summary:
      "Desde 1997 acompaña a personas adultas con discapacidad motriz para que reconstruyan su proyecto de vida: atención psicológica, capacitación para el trabajo, autoempleo y manejo de la silla de ruedas.",
    beneficiaries:
      "Personas adultas con discapacidad motriz que estudian, trabajan y emprenden en el estado.",
    campaignTitle: "Fondo de Movilidad",
    campaignIntro:
      "Una silla descompuesta puede dejar a una persona días sin salir de casa, sin trabajo, sin estudio. El fondo permite repararla a tiempo.",
    uses: [
      "Kits de reparación y mantenimiento de sillas de ruedas: llantas, baleros, cámaras y vestiduras",
      "Insumos de cuidado personal, como sondas y bolsas de colostomía",
    ],
    facts: ["Desde 1997", "+5,400 personas atendidas", "Convenios con ayuntamientos y DIF"],
    accent: "from-brand-teal to-brand-blue",
    whatsappCause: "FHADI",
  },
];
