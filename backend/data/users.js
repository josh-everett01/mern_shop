import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Dan Goe',
    email: 'dan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Van Poe',
    email: 'van@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
