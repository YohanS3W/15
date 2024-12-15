import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exist. </p>
      <Link href="/">Return Home</Link>
      <p>Sorry, you want Login first to use this feature</p>
      <Link href="/">Login</Link>
    </div>
  )
}

export default NotFound