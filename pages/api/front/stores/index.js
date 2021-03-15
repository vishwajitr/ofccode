import { stores } from '../../../../stores__data'
// http://localhost:3002/api/front/stores
export default function handler(req, res) {
  res.status(200).json(stores)
}