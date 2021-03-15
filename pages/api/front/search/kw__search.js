import { keywords } from '../../../../keywords__data'
// http://localhost:3002/api/front/search/kw__search?q=myntra
const keywordSet = keywords
export default (req, res) => {
  const results = req.query.q ?
  keywordSet.filter(keyword => keyword.keyword.toLowerCase().includes(req.query.q))  : []
  res.status(200).json({ results })
}


