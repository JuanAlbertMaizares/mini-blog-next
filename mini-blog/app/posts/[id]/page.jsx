export default function Post ({params}) {
    const {id} = params
    return (
      <h1>Esto es UN post: {id}.</h1>
    )
  }