module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'docker',
  password: 'docker',
  database: 'sqlnode',
  define: {
    timestamps: true,
    underscored: true,
  },
}