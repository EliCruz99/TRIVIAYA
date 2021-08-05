import { useState } from "react"
import Layout from "../../components/Layout/Layout";
import { createPlaylist } from "../../services/playlists";
import CreateLink from "../FormLink/CreateLink";
// import { useHistory } from "react-router";

let defaultInput = {
  title: "",
  imgURL: "",
  description: "",
  category: "Music",
}

export default function CreatePlaylist(props) {
  const [category, setCategory] = useState("Select a category below")
  // const history = useHistory()
  const [input, setInput] = useState(defaultInput)
  const [newlist, setNewList] = useState({})

    function handleChange(event) {
        let {name, value} = event.target
        setInput(prevState => ({
            ...prevState,
            [name]: value,
        }))
      setCategory(event.target.value)
    }
    async function handleSubmit(event) {
        event.preventDefault()
      let newlist = await createPlaylist(input)
      setNewList(newlist)
      // history.push(`/`)
      myFunction()
    }
  
    function myFunction() {
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  
    return (
      <Layout user={props.user} setUser={props.setUser}>
        <br />
        <button  onClick={myFunction}>Hide/Show Form</button>
            <div id="myDIV">
            <h1>Create Playlist</h1>
            <form onSubmit={handleSubmit}>
                <label>Playlist Title</label>
                <br />
                <input type="text" name="title" value={input.title} onChange={handleChange}  />
                <br />
                <label>Image URL</label>
                <br />
                <input type="text" name="imgURL" value={input.imgURL} onChange={handleChange}  />                
                <br />
                <label>Description</label>
                <br />
                <input type="text" name="description" value={input.description} onChange={handleChange}  />      
                <br />
                <label>Category</label>
                <br />      
                <select type="text" name="category" value={input.category} onChange={handleChange}>
                  <option value="Music">Music</option>
                  <option value="Video">Video</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Education">Education</option>
                  <option value="Sport">Sport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Family">Family</option>
                </select>
                <br />
                <button type="submit">Create Playlist</button>
          </form>
        </div>
        <div>
          <h1>{input.title}</h1>
          <img src={input.imgURL} alt={input.title} />
          <p>{props.username}</p>
        </div>
        <CreateLink newlist={newlist} />
        </Layout>
    )
} 