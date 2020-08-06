import {createPool} from 'mysql2/promise'

export async function connect(){
    const connections = await createPool({
        host : 'localhost',
        user : 'root',
        database : "node_mysql_ts",
        connectionLimit : 10
    })

    return connections;
}
