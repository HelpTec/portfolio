import {experiencia} from './EXPERIENCIAS'
import {estudio} from './ESTUDIOS'
import {skill} from './SKILLS'

export const EXPERIENCIAS: experiencia[] = [
    {
        id: 1,
        empresa: "CelularPork",
        periodo: "05/09/2016 - Actualidad",
        cargo: "Vendedor",
        descripcion: "Venta al publico"
    },
]
export const ESTUDIOS: estudio [] = [
    {
        id: 1,
        titulo: "Maestro Mayor De Obras",
        periodo: "01/03/2004 - 11/11/2007",
        descripcion: "Secundario Con Orientacion a MMO"
    },
    {
        id: 2,
        titulo: "Vendedor",
        periodo: "01/05/2009-01/06/2009",
        descripcion: "Estudio De Tecnica De Ventas PICCADDERO"
    }
    ,{
        id: 3,
        titulo: "Programador FullStack",
        periodo: "05/05/2021 - Actualidad",
        descripcion: "Estudio Curso ARGENTINA PROGRAMA"
    }
]
export const SKILLS: skill [] = [
    {
        id: 1,
        nombre: "Java",
        nivel: 1
    },
    {
        id: 2,
        nombre: "Python",
        nivel: 2
    },
    {
        id: 3,
        nombre: "Angular",
        nivel: 3
    },
    {
        id: 4,
        nombre: "SQL",
        nivel: 5
    }
]