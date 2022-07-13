import {experiencia} from './EXPERIENCIAS'
import {estudio} from './ESTUDIOS'
import {skill} from './SKILLS'
import {proyecto} from './PROYECTOS'

export const EXPERIENCIAS: experiencia[] = [
    {
        id: 1,
        empresa: "Trabajo1",
        periodo: "05/09/2016 - Actualidad",
        cargo: "Puesto1",
        descripcion: "Venta al publico"
    },
]
export const ESTUDIOS: estudio [] = [
    {
        id: 1,
        titulo: "Estudio1",
        periodo: "01/03/2004 - 11/11/2007",
        descripcion: "Estudio con orientacion estudio"
    },
    {
        id: 2,
        titulo: "Estudio2",
        periodo: "01/05/2009-01/06/2009",
        descripcion: "Estudio2 con orientacion estudio2"
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
        nombre: "Skill1",
        nivel: 1
    },
    {
        id: 2,
        nombre: "Skill2",
        nivel: 2
    },
    {
        id: 3,
        nombre: "Skill3",
        nivel: 3
    },
    {
        id: 4,
        nombre: "Skill4",
        nivel: 5
    }
]
export const PROYECTOS:proyecto [] = [
    {
        id: 1,
        nombre: 'tasklist',
        enlace: 'enlace.com',
        imagen: 'imagen.com'
    },
    {
        id: 2,
        nombre: 'api',
        enlace: 'enlace.com',
        imagen: 'imagen.com'
        },
    {
        id: 3,
        nombre: 'api2',
        enlace: 'enlace.com',
        imagen: 'imagen.com'
        },

]