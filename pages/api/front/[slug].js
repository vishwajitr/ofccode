import { store } from '../../../stores__data'

// hhttps://ofccode-api.vercel.app/api/store/2
export default function personHandler({ query: { slug } }, res) {
  const filtered = store.filter((p) => p.slug === slug)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    // res.status(404).json({ message: `User with slug: ${slug} not found.` })
  }
}