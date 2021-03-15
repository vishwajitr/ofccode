import { coupons } from '../../../../coupons__data'

const couponsData = coupons
export default (req, res) => {
  const results = req.query.q ?
  couponsData.filter(post => post.Merchant.toLowerCase().includes(req.query.q))  : []
  res.status(200).json({ results })
}