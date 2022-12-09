const db = require('./connection');
const { Task, Project, User } = require('../models');

db.once('open', async () => {

    await Task.deleteMany();

  await Task.insertMany([
    {
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      projects: Project,
      status: "Incomplete",
      priority: "Medium"
    },
    {
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        projects: Project,
        status: "Complete",
        priority: "Low"
      },
    ]
   );

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

  console.log('Projects seeded, congratulations');

  await Workspace.deleteMany();

  await Workspace.insertOne(
    {
      name: 'Main Page',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      projects: []
    },
   );

  console.log('Workspace seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Susan',
    lastName: 'Davinci',
    email: 'Susan@testmail.com',
    password: 'password12345',
    tasks: [
      {
        tasks: [tasks[0]._id, tasks[0]._id, tasks[1]._id]
      }
    ]
  });

  console.log('users seeded, phenomenal');

  process.exit();
});
