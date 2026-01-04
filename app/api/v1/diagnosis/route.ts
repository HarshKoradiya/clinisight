import { prisma } from "@/app/lib/prisma";

export async function GET(){
    try{
        const data:any = await prisma.diagnosistypes.findMany();
        console.log(`Data : ${data.data}`);
            return Response.json({
           "status" : "true",
           "length" : data.length,
           "data" : data 
        });
    }
    catch(e){
        return Response.error();
    }
}