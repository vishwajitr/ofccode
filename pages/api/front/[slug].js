import { store } from '../../../stores__data'

// http://127.0.0.1:3000/api/store/2
export default function personHandler({ query: { slug } }, res) {
  const filtered = store.filter((p) => p.slug === slug)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    // res.status(404).json({ message: `User with slug: ${slug} not found.` })
  }
}