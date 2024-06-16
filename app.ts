import { Application,Request,Response } from "express";
import { config } from "./config/config";

import express from "express";
export function App(app:Application){
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.get("/",(req:Request,res:Response)=>{
        return res.json({
            "message":"server working",
        })
    })
    
    app.get("/test",(req:Request,res:Response)=>{
        return res.json({
            "message":"Health is fine",
        })
    })
    
    app.listen(3000,()=>{
        console.log(`Server is listening on port ${config.server_port} `)
    })
}