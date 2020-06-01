const _= require('lodash')

const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog)=> {
        return sum + blog.likes
    }, 0)
}

const favoriteBlog = (blogs) => {
    return blogs.reduce((a, b) => {
        return (a.likes > b.likes) ? a : b
    }, 0)
}

const mostBlogs = (blogs) => {
  const authors =  _.countBy(blogs, 'author')
  const authorArray = _.toPairs(authors)
  const newAuthorArray = _.transform(authorArray, (result, input) => {
      let newAuthor = {
          author: input[0],
          blogs: input[1]
      }
      result.push(newAuthor)
  }, [])

    return _.maxBy(newAuthorArray, (blog) => {
        return blog.blogs
    })

}
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
  }

