import {renderFileToString} from "https://deno.land/x/dejs/mod.ts";
import { select } from '../models/pg_models.ts';
import TSql from '../models/sql.ts'

const home = async({response} : {response : any}) => {
    const dataTable = await select(
    [
        {text : TSql['KtgFindAll']},
        {text : TSql['BlogInfoFindAll']}
    ]);
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            
            Pemrograman : dataTable[0],
            blogInfo : dataTable[1]
            
        },
        subview : {
            namafile : "./views/blog-main.ejs",
            showjumbotron : true 
        }
    });
    response.body = new TextEncoder().encode(html);
}

const signup = async({response} : {response : any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            Pemrograman : await select({
                text : TSql['KtgFindInKode'],
                args : ['php', 'ts', 'js']
            }),
            blogInfo : await select({
                text : TSql['BlogInfoFindAll']
            })
        },
        subview : {
            namafile : "./views/signup.ejs",
            showjumbotron : false
        }
    });
    response.body = new TextEncoder().encode(html);
}

const saveuser = async({response,request} : {response : any, request : any}) => {
    const body = await request.body().value;
    const parseData = new URLSearchParams(body);

    const namalengkap = parseData.get("fullname");
    const namauser = parseData.get("username");
    const pwd = parseData.get("paswd");

    response.body = "Data yang diPOST : "+ namalengkap + " , "+ namauser +" , "+ pwd ;
}

const kategori = async({params, response} : {params : {id : string}, response : any}) => {
   response.body = "ID Parameter : "+ params.id
}

export { home, signup, saveuser, kategori };