const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

mongoose.set('useFindAndModify', false);

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
})

const api = supertest(app)



test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(2)
})

test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-type', /application\/json/)
})

test('blog identifying field is called id', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
})

test('blogs can be added', async () => {
    await api
    .post('/api/blogs')
    .send(initialBlogs[1])
    .expect(201)

    
    const response = await api.get('/api/blogs')

    const blogTitles = response.body.map(blog => blog.title)

    expect(response.body).toHaveLength(initialBlogs.length + 1)
    expect(blogTitles).toContain('testi2')
})

test('if likes is not assigned a value it will be 0', async () => {
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
    expect(response.body[response.body.length - 1].likes).toBeGreaterThanOrEqual(0)
})

test('if new blog does not contain url will get response code 400', async () => {
    await api
    .post('/api/blogs')
    .send(    {
        title: "testi2",
        author: "testi2",
        likes: 0
        })
    .expect(400)
})

test('if new blog does not contain title will get response code 400', async () => {
    await api
    .post('/api/blogs')
    .send(    {
        author: "testi2",
        likes: 0,
        url: "testi2"
        })
    .expect(400)
})

test('blog can be deleted', async () => {
    const blogsAtStart = await api.get('/api/blogs')
    const blogToDelete = blogsAtStart.body[blogsAtStart.body.length -1]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const afterDelete = await api.get('/api/blogs')

    expect(afterDelete.body).toHaveLength(blogsAtStart.body.length -1)

})

afterAll(() => {
    mongoose.connection.close()
})