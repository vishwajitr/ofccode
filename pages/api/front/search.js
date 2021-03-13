import { store } from '../../../stores__data'

// const posts = process.env.NODE_ENV === 'production' ? require('../../cache/stores__data').store : store
const posts = store
//http://127.0.0.1:3000/api/people/search?q=obi
// ref  https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210
export default (req, res) => {
  const results = req.query.q ?
    posts.filter(post => post.name.toLowerCase().includes(req.query.q))  : []
    if (results.length > 0) {
      res.status(200).json({results})
    } else {
      // res.status(404).json({ message: `User with slug: ${slug} not found.` })
    }
}


