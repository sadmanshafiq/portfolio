module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'blog_backend'),
      user: env('DATABASE_USERNAME', 'sshafiq'),
      password: env('DATABASE_PASSWORD', 'ynt845'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
