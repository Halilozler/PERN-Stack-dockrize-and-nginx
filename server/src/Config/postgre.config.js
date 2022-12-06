const env = process.env;

module.exports = DATABASE_CONFIG = {
    user: env.POSTGRE_USER,
    host: env.POSTGRE_HOST,
    database: env.POSTGRE_DATABASE,
    password: env.POSTGRE_PASSWORD,
    port: env.POSTGRE_PORT || 5432,
};