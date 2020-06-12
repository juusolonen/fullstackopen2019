<<<<<<< HEAD
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const Blog = require("../models/blog")
=======
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const User = require('../models/user')
>>>>>>> 0269b3cc8d4c7cef95d7964c3dd83d3559b3a9a3


mongoose.set("useFindAndModify", false)
mongoose.set("useCreateIndex", true)

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


describe("blogs", () => {


    test("are returned", async () => {
        const response = await api.get("/api/blogs")

        expect(response.body).toHaveLength(2)
    })

    test("are returned as json", async () => {
        await api
            .get("/api/blogs")
            .expect(200)
            .expect("Content-type", /application\/json/)
    })

    test("are returned with identifying field called id", async () => {
        const response = await api.get("/api/blogs")

        expect(response.body[0].id).toBeDefined()
    })

})

describe("adding blogs", () => {

<<<<<<< HEAD
    /*  const cred = {
        username: "testijuuso2",
        password: "password"
    }
*/

    const testi3 = {
        title: "testi3",
        author: "testi3",
        url: "testiurl3",
        likes: 3
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpanV1c28yIiwibmFtZSI6Imp1dXNvIiwiaWQiOiI1ZWRlMGI5ODNkMDU1ZDNlM2MzMTk1M2UiLCJpYXQiOjE1OTE2MTAzMzV9.9Q6BdMO-ijncy9h5N742cJ-voxhid9LVxjtS7sLCfqc"

    test("without a token fails and returns 401", async () => {

        const blogsAtStart = await api.get("/api/blogs")

        await api
            .post("/api/blogs")
            .send(testi3)
            .expect(401)

        const blogsAtEnd = await api.get("/api/blogs")

        expect(blogsAtEnd.body).toHaveLength(blogsAtStart.body.length)

    })

    test("works", async () => {
    /* const login = await api.post('/api/users')
                    .send({        username: "testijuuso2",
                    name: "juuso",
                    pwd: "password"})

    console.log(login.body)*/

        // const loggedIn = await api.post('/api/login')
        //.send(cred)

        // console.log(loggedIn.body)

   
        // console.log(jwt.verify(token, process.env.SECRET))



        await api
            .post("/api/blogs")
            .send(testi3)
            .set("Authorization", `Bearer ${token}`)
      
        const response = await api.get("/api/blogs")

        const blogTitles = response.body.map(blog => blog.title)

        expect(response.body).toHaveLength(initialBlogs.length + 1)
        expect(blogTitles).toContain("testi3")
    })

    test("without likes will be assigned 0 likes", async () => {
        await api
            .post("/api/blogs")
            .set("Authorization", `Bearer ${token}`)
            .send(    {
                title: "testi2",
                author: "testi2",
                url: "testiurl2"
            })
            .expect(201)

        const response = await api.get("/api/blogs")

        expect(response.body[response.body.length - 1].likes).toBeDefined()
        expect(response.body[response.body.length - 1].likes).toBe(0)
    })

    test("without url will get response code 400", async () => {
        await api
            .post("/api/blogs")
            .set("Authorization", `Bearer ${token}`)
            .send(    {
                title: "testi2",
                author: "testi2",
                likes: 0
            })
            .expect(400)
    })

    test("without title will get response code 400", async () => {
        await api
            .post("/api/blogs")
            .set("Authorization", `Bearer ${token}`)
            .send(    {
                author: "testi2",
                likes: 0,
                url: "testi2"
            })
            .expect(400)
    })
=======
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
>>>>>>> 0269b3cc8d4c7cef95d7964c3dd83d3559b3a9a3

})

describe("blog can", () => {

<<<<<<< HEAD
    const testi3 = {
        title: "testi3",
        author: "testi3",
        url: "testiurl3",
        likes: 3
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpanV1c28yIiwibmFtZSI6Imp1dXNvIiwiaWQiOiI1ZWRlMGI5ODNkMDU1ZDNlM2MzMTk1M2UiLCJpYXQiOjE1OTE2MTAzMzV9.9Q6BdMO-ijncy9h5N742cJ-voxhid9LVxjtS7sLCfqc"

    test("be deleted", async () => {

        await api
            .post("/api/blogs")
            .send(testi3)
            .set("Authorization", `Bearer ${token}`)

        const blogsAtStart = await api.get("/api/blogs")
        const blogToDelete = blogsAtStart.body[blogsAtStart.body.length -1]
   

        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(204)
=======
test('be deleted', async () => {
    const blogsAtStart = await api.get('/api/blogs')
    const blogToDelete = blogsAtStart.body[blogsAtStart.body.length -1]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)
>>>>>>> 0269b3cc8d4c7cef95d7964c3dd83d3559b3a9a3

        const afterDelete = await api.get("/api/blogs")

        expect(afterDelete.body).toHaveLength(blogsAtStart.body.length -1)

    })

    test("be updated", async () => {

        const allBlogs = await api.get("/api/blogs")
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

    test("be updated and will return new db entry", async ( ) => {

        const allBlogs = await api.get("/api/blogs")
        const blogToUpdate = allBlogs.body[allBlogs.body.length -1]

<<<<<<< HEAD
        const resp = await api.put(`/api/blogs/${blogToUpdate.id}`)
            .send({
                author: "testi2",
                likes: 66666,
                url: "testi2"
            })
            .expect(200)
=======
    const resp = await api.put(`/api/blogs/${blogToUpdate.id}`)
>>>>>>> 0269b3cc8d4c7cef95d7964c3dd83d3559b3a9a3

        expect(resp.body).toEqual(blogToUpdate)

    })

})

describe("creating a new user", () => {



    test("fails is user already exists", async () => {
        const usersAtStart = await api.get("/api/users")

        const newUser = {
            username: "testijuuso",
            name: "juuso",
            pwd: "password"
        }

        const result = await api
            .post("/api/users")
            .send(newUser)
            .expect(400)

        const usersAtEnd = await api.get("/api/users")

        expect(result.body).toContain("`username` to be unique")
        expect(usersAtEnd.body).toHaveLength(usersAtStart.body.length)
    })

    test("fails without password", async () => {
        const usersAtStart = await api.get("/api/users")

        const newUser = {
            username: "testijuuso",
            name: "juuso"
        }

        const result = await api
            .post("/api/users")
            .send(newUser)
            .expect(400)

        const usersAtEnd = await api.get("/api/users")

        expect(result.body.error).toContain("missing password")
        expect(usersAtEnd.body).toHaveLength(usersAtStart.body.length)
    })

    test("fails without username", async () => {
        const usersAtStart = await api.get("/api/users")

        const newUser = {
            name: "juuso",
            password: "password"
        }

        const result = await api
            .post("/api/users")
            .send(newUser)
            .expect(400)

        const usersAtEnd = await api.get("/api/users")

        expect(result.body.error).toContain("missing username")
        expect(usersAtEnd.body).toHaveLength(usersAtStart.body.length)
    })

})

afterAll(() => {
    mongoose.connection.close()
})