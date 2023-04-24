import sql from "mssql"

export const dbSettings = {
    user: DB_USER,
    password: DB_PASSWORD,
    server: DB_SERVER,
    database: DB_NAME,
    options: {
        encrypt: true,
        trustSeverCertificate: true,
    }
}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.error(error)
    }
}

export {sql}