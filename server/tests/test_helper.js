/* eslint-disable import/no-extraneous-dependencies */
const bcrypt = require('bcrypt');
const Blog = require('../models/blog');
const User = require('../models/user');

const initialBlogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    content: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    content: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
];

const createInitUsers = async () => {
  const user1PwdHash = await bcrypt.hash('asdfasasd', 10);
  const user2PwdHash = await bcrypt.hash('sfasdasd', 10);

  const initialUsers = [
    {
      username: 'init1',
      passwordHash: user1PwdHash,
    },
    {
      username: 'init2',
      passwordHash: user2PwdHash,
    },
  ];
  return initialUsers;
};

const bloginDB = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

const getBlogById = async (id) => {
  const blog = await Blog.findById(id);
  return blog !== null ? blog.toJSON() : null;
};

const userInDB = async () => {
  const users = await User.find({});
  return users.map((user) => user.toJSON());
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user !== null ? user.toJSON() : null;
};

module.exports = {
  initialBlogs, bloginDB, userInDB, getUserById, createInitUsers, getBlogById,
};
