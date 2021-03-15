import { offers } from '../../../../offers__data'

export default function handler(req, res) {
  res.status(200).json(offers)
}
