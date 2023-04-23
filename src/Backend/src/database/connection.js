import sql from "mssql"

const dbSettings = {
    user,
    password,
    server,
    database
}

const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.error(error)
    }
}