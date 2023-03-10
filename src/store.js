// import { nanoid } from "nanoid";
import { create } from "zustand";
import dver2 from "../src/image/dver2.jpg"
import smes2 from "../src/image/smes2.jpg"
import basket from "../src/image/basket.png"
import wpatel from "../src/image/wpatel.jpg"

import klei from "../src/image/klei.png"
import germetik123 from "../src/image/germetik123.jpg"
import klei123 from "../src/image/klei123.jpg"
import klei123456 from "../src/image/klei123456.jpg"
import kleigermetik from "../src/image/klei-germetik.jpg"
import alinex from "../src/image/alinex.jpeg"
import minvata from "../src/image/minvata.jpg"
import ventilytor from "../src/image/ventilytor.jpg"
import wrup from "../src/image/wrup.jpg"
import lak from "../src/image/lak.png"
import panel from "../src/image/panel.jpg"
import oboi2 from "../src/image/oboi2.jpg"
import plitka from "../src/image/plitka.png"
import moika from "../src/image/moika.jpg"
import lampochka from "../src/image/lampochka.jpg"
import dver3 from "../src/image/dver3.jpg"
import dver4 from "../src/image/dver4.jpg"

import voidVoid from "../src/image/void.jpg"


export const useCartOne = create(set => ({
    materail:[
        {
            id:1,
            title:"Дверь межком Палитра№11-4",
            url:dver2,
            count: 1,
            price:15350,
            basket:basket,
            product:"Двери"
            
        },
        {
            id:2,
            title:"Клей плиточный Серезит",
            url:smes2,
            count: 1,
            price:1450,
            basket:basket,
            product:"Герметики, клей и пены"
        },
        {
            id:3,
            title:"Шпатель",
            url:wpatel,
            count: 1,
            price:680,
            basket:basket,
            product:"Инструменты"
        },
        {
            id:4,
            title:"Шпаклевка",
            url:alinex,
            count: 1,
            price:750,
            basket:basket,
            product:"Строительные материалы"
        },
        {
            id:5,
            title:"Клей",
            url:klei,
            count: 1,
            price:800,
            basket:basket,
            product:"Герметики, клей и пены"
        },
       
    ],
    loading:false,
    error:null,
  
}))

export const useCartTwo = create(set => ({
    materail:[
        {
            id:6,
            title:"Минплита ISOVER",
            url:minvata,
            count: 45,
            price:5088,
            basket:basket,
            product:"Строительные материалы"

        },
        {
            id:7,
            title:"Клей",
            url:klei,
            count: 1,
            price:800,
            basket:basket
        },
        {
            id:8,
            title:"Герметик",
            url:germetik123,
            count: 1,
            price:800,
            basket:basket
        }
       
    ],
    loading:false,
    error:null,
   
}))

export const useCartThree = create((set) => ({
    materailCart:[],
    loading:false,
    error:null,
    addMaterail: (id,title,price,url) =>set(state =>(
        {
            materailCart:[
                ...state.materailCart, 
                {id:id,title:title, price:price,url:url}
                
            ]
        }
        )),
    
}))

export const useCatalogOne = create((set)=>({
    catalogCart:[
        {
        id:1,
        title:"Клей",
        url:klei,
        count: 1,
        price:800,
        basket:basket,
        product:"Герметики, клей и пены"
        },
        {
        id:2,
        title:"Дверь межком Палитра№11-4",
        url:dver2,
        count: 1,
        price:15350,
        basket:basket,
        product:"Двери"    
            
        },
        {
        id:3,
        title:"Вентилятор",
        url:ventilytor,
        count: 1,
        price:15350,
        basket:basket,
        product:"Инженерные сети"   
        },
        {
        id:4,
        title:"Шпатель",
        url:wpatel,
        count: 1,
        price:680,
        basket:basket,
        product:"Инструменты"
        },
        {
        id:5,
        title:"Шуруп",
        url:wrup,
        count: 1,
        price:5,
        basket:basket,
        product:"Крепеж"
        },
        {
        id:6,
        title:"Краска",
        url:lak,
        count: 1,
        price:500,
        basket:basket,
        product:"Краски"
        },
        {
        id:7,
        title:"Ламинат",
        url:panel,
        count: 1,
        price:1000,
        basket:basket,
        product:"Напольные покрытия"
        },
        {
        id:8,
        title:"Обой",
        url:oboi2,
        count: 1,
        price:1000,
        basket:basket,
        product:"Обой, отделка стен и потолка"
        },
        {
        id:9,
        title:"Плитка",
        url:plitka,
        count: 1,
        price:1000,
        basket:basket,
        product:"Плитка и керамогранит"
        },
        {
        id:10,
        title:"Мойка",
        url:moika,
        count: 1,
        price:1000,
        basket:basket,
        product:"Сантехника"
        },
        {
        id:11,
        title:"Шпаклевка",
        url:alinex,
        count: 1,
        price:750,
        basket:basket,
        product:"Строительные материалы"
        },
        {
        id:12,
        title:"Лампочка",
        url:lampochka,
        count: 1,
        price:750,
        basket:basket,
        product:"Электротовары и освещение"
        },
    ],
    loading:false,
    error:null,
    addCatalog:(id,title,price,url) =>set(state =>(
        {
            catalogCart:[
                ...state.catalogCart, 
                {id:id,title:title, price:price,url:url}
                
            ]
        }
        )),
}))

// export const useCatalogTwo = create((set)=>({
//     catalogCart:[
//     ],
//     loading:false,
//     error:null,
//     addCatalog:(id,title,price,url) =>set(state =>(
//         {
//             catalogCart:[
//                 ...state.catalogCart, 
//                 {id:id,title:title, price:price,url:url}
                
//             ]
//         }
//         )),
// }))

export const useDoor = create((set)=>({
    catalogCart:[
        {
        id:2,
        title:"Дверь межком Палитра№11-4",
        url:dver2,
        count: 1,
        price:15350,
        basket:basket,
        product:"Двери",
        description:'Дверь металлическая Профи BMD 2050*850 левая антик медь'
        },
        {
        id:3,
        title:"Дверь 3",
        url:dver3,
        count: 1,
        price:20350,
        basket:basket,
        product:"Двери",
        description:'Дверь металлическая Профи BMD 2050*850 левая антик медь'    
            
        },
        
        {
        id:4,
        title:"Дверь 4",
        url:dver4,
        count: 1,
        price:10350,
        basket:basket,
        product:"Двери",
        description:'Дверь металлическая Профи BMD 2050*850 левая антик медь'    
            
        },

    ],
    loading:false,
    error:null,
}))

export const useGermetik = create((set)=>({
    catalogCart:[
        {
        id:2,
        title:"Клей",
        url:klei,
        count: 1,
        price:15350,
        basket:basket,
        product:"Клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'
        },
        {
        id:3,
        title:"Клей",
        url:germetik123,
        count: 1,
        price:20350,
        basket:basket,
        product:"Клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'    
        },
        {
        id:4,
        title:"Клей",
        url:klei123,
        count: 1,
        price:10350,
        basket:basket,
        product:"Клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'    
        },
        {
        id:5,
        title:"Клей",
        url:klei123456,
        count: 1,
        price:10350,
        basket:basket,
        product:"Клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'        
        },
        {
        id:6,
        title:"Клей",
        url:kleigermetik,
        count: 1,
        price:10350,
        basket:basket,
        product:"Клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'               
        }

    ],
    loading:false,
    error:null,
}))

export const useVoid = create((set)=>({
    catalogCart:[
        {
        id:1,
        title:"Просто картинка",
        url:voidVoid,
        count: 1,
        price:15350,
        basket:basket,
        product:"Просто",
        description:'Простое описание товара'
        },
        {
        id:2,
        title:"Просто картинка",
        url:voidVoid,
        count: 1,
        price:20350,
        basket:basket,
        product:"Просто",
        description:'Простое описание товара'    
            
        },
        {
        id:3,
        title:"Просто картинка",
        url:voidVoid,
        count: 1,
        price:10350,
        basket:basket,
        product:"Просто",
        description:'Простое описание товара'    
            
        },

    ],
    loading:false,
    error:null,
}))


export const useSearch = create((set)=>({
    catalogCart:[
        {
        id:2,
        title:"Дверь межком Палитра№11-4",
        url:dver2,
        count: 1,
        price:15350,
        basket:basket,
        product:"дверь",
        description:'Дверь металлическая Профи BMD 2050*850 левая антик медь'
        },
        {
        id:3,
        title:"Дверь 3",
        url:dver3,
        count: 1,
        price:20350,
        basket:basket,
        product:"дверь",
        description:'Дверь металлическая Профи BMD 2050*850 левая антик медь'    
            
        },
        
        {
        id:4,
        title:"Дверь 4",
        url:dver4,
        count: 1,
        price:10350,
        basket:basket,
        product:"дверь",
        description:'Дверь металлическая Профи BMD 2050*850 левая антик медь'    
            
        },
        {
        id:5,
        title:"Клей",
        url:klei,
        count: 1,
        price:15350,
        basket:basket,
        product:"клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'
        },
        {
        id:6,
        title:"Клей",
        url:germetik123,
        count: 1,
        price:20350,
        basket:basket,
        product:"клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'    
        },
        {
        id:7,
        title:"Клей",
        url:klei123,
        count: 1,
        price:10350,
        basket:basket,
        product:"клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'    
        },
        {
        id:8,
        title:"Клей",
        url:klei123456,
        count: 1,
        price:10350,
        basket:basket,
        product:"клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'        
        },
        {
        id:9,
        title:"Клей",
        url:kleigermetik,
        count: 1,
        price:10350,
        basket:basket,
        product:"клей",
        description:'Предназначены для соединения между собой различных элементов, их преимущество состоит в том, что они образуют между материалами прочную адгезию. Используются для обработки швов, трещин, стыков.'               
        }
    ],
    loading:false,
    error:null,
}))
export const useSearchInput = create((set)=>({
    catalogCart:[
        ],
    loading:false,
    error:null,
    addCatalog:(title) =>set(state =>(
                {
                    catalogCart:[
                        ...state.catalogCart, 
                        {title:title}
                        
                    ]
                }
                ))
}))