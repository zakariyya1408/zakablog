import { Client } from 'https://deno.land/x/postgres/mod.ts';
import { QueryResult, QueryConfig } from 'https://deno.land/x/postgres/query.ts';

const client = new Client({
    hostname : "arjuna.db.elephantsql.com",
    port : 5432,
    user : "fftlnlsj",
    password : "AVnRLe7sjF3hC0_mH0QNvOuuj4EPtz4k",
    database : "fftlnlsj"
});

export async function select(qry : QueryConfig | QueryConfig[]) {
    await client.connect();
    let tables : any = [];
    let hasil : QueryResult | QueryResult[];
    if(Array.isArray(qry)){
        hasil = await client.multiQuery(qry);
        hasil.forEach((obj) => {
            tables.push(obj.rowsOfObjects());
        });
    } else {
        hasil  = await client.query(qry);
        tables = hasil.rowsOfObjects();
    }
    
    await client.end();
    return tables;
};