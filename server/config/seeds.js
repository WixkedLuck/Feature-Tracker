const db = require('./connection');
const { Task, Project, User } = require('../models');

db.once('open', async () => {
  await Project.deleteMany();

  const projects = await Project.insertMany([
    {
    name: "String!",
    description: "String",
    tasks: []
  },
  {
    name: "String!",
    description: "String",
    tasks: []
  },
  ]);

  console.log('categories seeded');

  await Workspace.deleteMany();

  const workspaces = await Workspace.insertOne(
    {
      name: 'Main Page',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      projects: []
    },
   );

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
