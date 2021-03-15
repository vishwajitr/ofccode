import { stores } from '../../../../stores__data'
const posts = stores
// http://localhost:3002/api/front/search/stores__by__query?q=myn

export default (req, res) => {
  const results = req.query.q ?
    posts.filter(post => post.name.toLowerCase().includes(req.query.q))  : []
  res.status(200).json({ results })
}