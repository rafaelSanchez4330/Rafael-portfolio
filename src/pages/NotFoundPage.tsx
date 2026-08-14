import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <Link className="button button--primary" to="/">
        Back to Home
      </Link>
    </section>
  )
}
