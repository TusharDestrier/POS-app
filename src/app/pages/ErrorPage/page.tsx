import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  return <div>ErrorPage</div>
}

export default ErrorPage
