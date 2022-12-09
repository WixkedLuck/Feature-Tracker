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
      {
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        projects: Project,
        status: "Complete",
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

  await Workspace.insertOne(
    {
      name: 'Main Page',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      projects: [projects[0]._id, projects[0]._id, projects[1]._id]
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
    ],
    projects: [
        {
            projects: [projects[0]._id, projects[0]._id, projects[1]._id]
        }
      ]
  });

  console.log('users seeded, phenomenal');

  process.exit();
});
