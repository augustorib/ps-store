export type GameModel = {
    id:number
    nickname: string
    name:string
    description:string
    price:string
    cover:string
    
}

export function defaultValue():GameModel
{
    const model:GameModel = {
        id: 0,
        cover:"",
        description:"",
        name:"",
        nickname:"",
        price:""
    }

    return model
}
