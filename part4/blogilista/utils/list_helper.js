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
if(blogs.length > 0) {
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
} else {
    return 0
}

}


const mostLikes = (blogs) => {

    if(blogs.length > 0) {
    const blogsByAuthor = _.groupBy(blogs, 'author')
    const author = Object.keys(blogsByAuthor)
    let likes = []
    _.forEach(author, (auth) => {
      likes.push(_.sumBy(blogsByAuthor[auth], 'likes'))
    })
    return {
        author: author[_.indexOf(likes, _.max(likes))],
        likes: _.max(likes)
    } 
    } else {
        return null
    }
}

  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }

