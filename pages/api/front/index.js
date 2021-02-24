import { store } from '../../../stores__data'

export default function handler(req, res) {
  res.status(200).json(store)
}
