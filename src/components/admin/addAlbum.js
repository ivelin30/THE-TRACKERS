import axios from "axios";
import { useState, useEffect, useContext} from "react";
import DataProvider from "../../DataProvider";
import "../../styles/addAlbum.css"
const AddAlbum = () => {
  const [name, setName] = useState("");
  const [cover, setCover] = useState(null);
  const [image, setImage] = useState(null);
  const { allImage, renderAlbums } = useContext(DataProvider);
  
  useEffect(() => {
    renderAlbums();
  }, []);
  
  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("cover", cover);

    for (let i = 0; i < image.length; i++) {
      formData.append(`image`, image[i]);
    }

    const result = await axios.post(
      "http://localhost:5000/albums",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    setName("");
    setTimeout(() => {
      renderAlbums();
    },1000);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onCoverChange = (e) => {
    setCover(e.target.files[0]);
  };
  const onImageChange = (e) => {
    setImage(e.target.files);
  };
  
  const DelateAlbum = async (album) => {

    const id = album._id;
    const cover = album.cover;
    const photos = album.photo;
    await axios.delete(`http://localhost:5000/albums/${id}`, {
        params: {
          id: id,
          cover: cover,
          photos: photos
        }
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response.data);
    });
    renderAlbums();
  };

  return (
    
    <div className="add-album-container">
      <form className="upload-file-box" onSubmit={submitImage}>
        <h1>ADD ALBUM</h1>
        <p>name</p>
        <input type="text" value={name} required onChange={onNameChange}></input>
        <p>cover</p>
        <input type="file" required accept="image/*" onChange={onCoverChange}></input>
        <p>photos</p>
        <input type="file" required accept="image/*" multiple onChange={onImageChange}></input>
        <button type="submit">SUBMIT</button>
      </form>
      
      <div className="album-control">
        <h1>ALBUMS</h1>
        <div className="control-albums-list">
            {allImage == undefined
                ? ""
                : allImage.map((album) => {
                    return (
                    <div key={album._id} className="control-album">

                            <img src={require(`../../resource/albums/${album.cover}`)}/>
                            <p>{album.name}</p>
                            <form onSubmit={(e) => {e.preventDefault();DelateAlbum(album)}}>
                            <button type="submit">DELETE</button>
                            </form>
                            
                        </div>
                    
                    );
                })
            }
        </div>
        
      </div>
    </div>
  )
}

export default AddAlbum