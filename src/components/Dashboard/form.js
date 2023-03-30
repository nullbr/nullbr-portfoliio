const Form = ({ submitPortfolio, auth }) => {
  return (
    <>
      <form onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" id="name" name="name" />
        </p>
        <p>
          <textarea
            placeholder="Description English"
            id="description_en"
            name="description_en"
          />
        </p>
        <p>
          <textarea
            placeholder="Description Portuguese"
            id="description_pt"
            name="description_pt"
          />
        </p>
        <p>
          <input type="text" placeholder="Url" id="url" name="url" />
        </p>
        <p>
          <input
            type="text"
            placeholder="GitHub"
            id="repo_url"
            name="repo_url"
          />
        </p>
        <p>
          <input type="file" placeholder="Image" id="image" name="image" />
        </p>
        <p>
          <input
            type="number"
            placeholder="Position"
            id="position"
            name="position"
          />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </>
  )
}
export default Form
