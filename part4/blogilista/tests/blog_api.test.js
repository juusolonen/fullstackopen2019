const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const User = require('../models/user')

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const initialBlogs = [
    {
    title: "testi1",
    author: "testi1",
    url: "testiurl1",
    likes: 1
    },
    {
    title: "testi2",
    author: "testi2",
    url: "testiurl2",
    likes: 2
    },
]

beforeAll(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(initialBlogs)
    await User.deleteMany({})
    await User.insertMany({
        username: "testijuuso",
        name: "juuso",
        pwd: "password"
    })
})

const api = supertest(app)


describe('blogs', () => {


test('are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(2)
})

test('are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-type', /application\/json/)
})

test('are returned with identifying field called id', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
})

})

describe('adding blogs', () => {

test('works', async () => {
    await api
    .post('/api/blogs')
    .send(initialBlogs[1])
    .expect(201)

    
    const response = await api.get('/api/blogs')

    const blogTitles = response.body.map(blog => blog.title)

    expect(response.body).toHaveLength(initialBlogs.length + 1)
    expect(blogTitles).toContain('testi2')
})

test('without likes will be assigned 0 likes', async () => {
    await api
    .post('/api/blogs')
    .send(    {
        title: "testi2",
        author: "testi2",
        url: "testiurl2"
        })
    .expect(201)

    const response = await api.get('/api/blogs')

    expect(response.body[response.body.length - 1].likes).toBeDefined()
    expect(response.body[response.body.length - 1].likes).toBe(0)
})

test('without url will get response code 400', async () => {
    await api
    .post('/api/blogs')
    .send(    {
        title: "testi2",
        author: "testi2",
        likes: 0
        })
    .expect(400)
})

test('without title will get response code 400', async () => {
    await api
    .post('/api/blogs')
    .send(    {
        author: "testi2",
        likes: 0,
        url: "testi2"
        })
    .expect(400)
})

})

describe('blog can', () => {

test('be deleted', async () => {
    const blogsAtStart = await api.get('/api/blogs')
    const blogToDelete = blogsAtStart.body[blogsAtStart.body.length -1]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const afterDelete = await api.get('/api/blogs')

    expect(afterDelete.body).toHaveLength(blogsAtStart.body.length -1)

})

test('be updated', async () => {

    const allBlogs = await api.get('/api/blogs')
    const blogToUpdate = allBlogs.body[allBlogs.body.length -1]

    await api
    .put(`/api/blogs/${blogToUpdate.id}`)
    .send({
        author: "testi2",
        likes: 66666,
        url: "testi2"
        })
    .expect(200)
})

test('be updated and will return new db entry', async ( ) => {

    const allBlogs = await api.get('/api/blogs')
    const blogToUpdate = allBlogs.body[allBlogs.body.length -1]

    const resp = await api.put(`/api/blogs/${blogToUpdate.id}`)

    expect(resp.body).toEqual(blogToUpdate)

})

})

describe('creating a new user', () => {



test('fails is user already exists', async () => {
    const usersAtStart = await api.get('/api/users')

    const newUser = {
        username: "testijuuso",
        name: "juuso",
        pwd: "password"
    }

    const result = await api
                    .post('/api/users')
                    .send(newUser)
                    .expect(400)

    const usersAtEnd = await api.get('/api/users')

    expect(result.body).toContain('`username` to be unique')
    expect(usersAtEnd.body).toHaveLength(usersAtStart.body.length)
})

test('fails without password', async () => {
    const usersAtStart = await api.get('/api/users')

    const newUser = {
        username: "testijuuso",
        name: "juuso"
    }

    const result = await api
    .post('/api/users')
    .send(newUser)
    .expect(400)

    const usersAtEnd = await api.get('/api/users')

    expect(result.body.error).toContain('missing password')
    expect(usersAtEnd.body).toHaveLength(usersAtStart.body.length)
})

test('fails without username', async () => {
    const usersAtStart = await api.get('/api/users')

    const newUser = {
        name: "juuso",
        password: "password"
    }

    const result = await api
    .post('/api/users')
    .send(newUser)
    .expect(400)

    const usersAtEnd = await api.get('/api/users')

    expect(result.body.error).toContain('missing username')
    expect(usersAtEnd.body).toHaveLength(usersAtStart.body.length)
})

})

afterAll(() => {
    mongoose.connection.close()
})