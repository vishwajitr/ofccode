import { stores } from '../../../../stores__data'
const posts = stores
// http://localhost:3002/api/front/search/store__by__slug?q=myntra

export default (req, res) => {

  const results = req.query.q ?
    posts.filter((p) => (p.slug) === req.query.q)  : []
console.log(results);
  // User with id exists
  if (results.length > 0) {
    res.status(200).json(results[0])
  } else {
    res.status(404).json({ message: `${req.query.q} not found.` })
  }
}
