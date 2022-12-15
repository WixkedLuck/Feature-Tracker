const db = require('./connection');

const { Task, Project, User, Workspace } = require('../models');

db.once('open', async () => {

    await Task.deleteMany();

    const tasks = await Task.insertMany([
    {
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
     
      status: false,
      priority: "Medium"
    },
    {
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        
        status: true,
        priority: "Low"
      },
      {
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        
        status: true,
        priority: "High"
      },
    ]
   );

   console.log("You've seeded the tasks, WOW.")

  await Project.deleteMany();
  

  const projects = await Project.insertMany([
    {
    name: "Trusty Notetaker",
    description: "Create a personalized and fastastic note",
    tasks: []


  },
  {
    name: "Old video game simulator!",
    description: "Simulate a video game in the style of 1980 graphics.",
    tasks: []
  },
  {
    name: "AI co-writing companion",
    description: "An artifiicial intelligence that helps you write.",
    tasks: []
  },
  ]);

  console.log('Projects seeded, congratulations');

  await Workspace.deleteMany();

  await Workspace.create(
    {
      name: 'Main Page',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      projects: [projects[0]._id.toString(), projects[1]._id.toString(), projects[2]._id.toString()]
    },
   );

  console.log('Workspace seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Susan',
    lastName: 'Davinci',
    email: 'ALEX123@gmail.com',
    password: 'password1234567',
    tasks: [
      tasks[0]._id.toString(), tasks[1]._id.toString(), tasks[2]._id.toString()
    ],
    projects: [
       projects[0]._id.toString(), projects[1]._id.toString(), projects[2]._id.toString()
        
      ]
  });

  console.log('users seeded, phenomenal');

  process.exit();
});
