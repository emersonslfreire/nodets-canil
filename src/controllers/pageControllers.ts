import { Request , Response } from "express";

export const home = (req: Request , res: Response)=>{
    res.send('Home no controller')
}
export const dogs = (req: Request , res: Response)=>{
    res.send('Doguinhos')
}
export const cats = (req: Request , res: Response)=>{
    res.send('GAtinhos')
}
export const fishes = (req: Request , res: Response)=>{
    res.send('Peixinhos')
}