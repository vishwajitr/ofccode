import { coupons } from '../../../../coupons__data'

export default function handler(req, res) {
  res.status(200).json(coupons)
}
