import Link from "next/link"

function Homepage(){
let firstName='Armeen'

  return(
    <div>
      <Link href="/about">about</Link>
      <Link href="/contact">contact</Link>
      <h1>hello world</h1>
      <h2>hello{firstName}</h2>

    </div>
  )
}
export default Homepage

