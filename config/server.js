module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5a4c6bd9c2d6c7be80c660f7f5dbe9a2'),
    },
  },
});
