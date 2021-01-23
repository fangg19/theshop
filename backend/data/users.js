import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123123', 10),
    isAdmin: true,
  },
  {
    name: 'Alex Johnny',
    email: 'Alex@test.com',
    password: bcrypt.hashSync('123123', 10),
  },
  {
    name: 'Gofi Goni',
    email: 'Gofi@test.com',
    password: bcrypt.hashSync('123123', 10),
  },
];

export default users;
