import { keywords } from '../../../../keywords__data'
// http://localhost:3002/api/front/search/kw__search?q=myntra
const keywordSet = keywords
export default (req, res) => {
  const results = req.query.q ?
  keywordSet.filter((p) => (p.keyword_slug) === req.query.q)  : []
  // console.log(results);
  // User with id exists
  if (results.length > 0) {
    res.status(200).json(results[0])
  } else {
    res.status(404).json({ message: `${req.query.q} not found.` })
  }
}


