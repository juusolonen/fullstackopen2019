import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import CreateForm from './CreateForm'

describe('<Blog />', () => {

  const blog = {
    title: 'testititle',
    author: 'testiauthor',
    url: 'testiurl.com',
    likes: 0,
    user: {
      username: 'Juuso'
    }
  }


  test('renders title and author, not else', () => {

    const component = render(
      <Blog blog={blog} />
    )

    const element = component.getByText(`${blog.title}`)
    expect(element).toBeDefined()

    const element2 = component.getByText(`${blog.author}`)
    expect(element2).toBeDefined()

    expect(component.container).not.toHaveTextContent(`${blog.url}`)

    expect(component.container).not.toHaveTextContent(`${blog.likes}`)
  })


  test('renders url and likes after button is clicked', () => {

    const component = render(
      <Blog blog={blog} />
    )

    const button = component.getByText(`${blog.title}`)
    fireEvent.click(button)

    const element = component.getByText(`${blog.url}`)
    expect(element).toBeDefined()

    const element2 = component.getByText(`likes ${blog.likes}`)
    expect(element2).toBeDefined()
  })

  /* Tämä testi ei toimi, koska komponenttini ei saa tapahtumankäsittelijää propsina,
    vaan se määritellään komponentin sisällä. Tässä kuitenkin koodi joka tod.näk. toimisi!


  test('if like is clicked twice, event handler is called twice', () => {

    const setBlogs = jest.fn()

    const component = render(
      <Blog blog={blog} setBlogs={setBlogs} />
    )

    const button = component.getByText(`${blog.title}`)
    fireEvent.click(button)

    const button2 = component.getByText('like..')
    fireEvent.click(button2)
    fireEvent.click(button2)


    expect(setBlogs.mock.calls).toHaveLength(2)

  })*/
})

describe('<Createform />', () => {
  /* Tässä sama homma kuin ylemmässä testissä!


  test('callback is called with correct params', () => {

    const create = jest.fn()
    const token = 'asfaafsasf'

    const component = render(
      <CreateForm token={token} create={create} />
    )

    const form = component.container.querySelector('form')
    const title = component.container.querySelector('#title')
    const author = component.container.querySelector('#author')
    const url = component.container.querySelector('#url')

    fireEvent.change(title, {
      target: { value: 'testititle' }
    })
    fireEvent.change(author, {
      target: { value: 'testiauthor' }
    })
    fireEvent.change(url, {
      target: { value: 'testiurl' }
    })

    fireEvent.submit(form)

    const expected = ['testititle', 'testiauthor', 'testiurl']

    expect(create.mock.calls).toHaveLength(1)
    expect(create.mock.calls).toEqual(expect.arrayContaining(expected))
    expect(create.mock.calls).toEqual(expect.arrayContaining([token]))


  })*/
})

