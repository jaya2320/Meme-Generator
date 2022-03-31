import React, {useState, useEffect} from 'react';
import axios, { Axios } from 'axios';
import './Home.css';

function Home() {
// for post request

	const [topText , setTopText] = useState(' ');
	const [bottomText , setBottomText] = useState(' ');
    const [image, setImage] = useState(null);

	const handleTopTextChange =(e)=>{
	setTopText(e.target.value);
	}

	const handleBottomTextChange =(e)=>{
	setBottomText(e.target.value);
	}

        
	const handleSubmit=(e)=>{
		window.location.reload(false);
		e.preventDefault();
		
		const fd = new FormData();
		fd.append('image',image,image.name)
		fd.append('top_text',topText)
		fd.append('bottom_text',bottomText)
		
		axios.post('http://127.0.0.1:8000/postMemes/',fd, {
			headers: {
			  'content-type': 'multipart/form-data'
			}
		  }).
		then(response=>{console.log(response.data)}).
		catch(error => console.log(error));
		
		
	 
	}

	const imgStyle={
		height:"300px",
		width:"300px"
	
	}
	const containerStyle={
		display:"relative",
		float:"left", 
		paddingLeft:"30px",
		paddingRight:"30px",
		margin:"50px",
		borderStyle:"solid",
		backgroundColor:"#e0dfda"
	}
	const topStyle={
	
		top:"17px",
		textAlign:"center",
		fontSize:"16px"
		
	}
	
	const bottomStyle={
	
		top:"17px",
		textAlign:"center",
		fontSize:"16px"
		
	}
	
	// for get request
	const [data, setData] = useState([]);


  useEffect(() => {
      fetch(`http://127.0.0.1:8000/getMemes/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
        })
        
    }, []);

	const renderImages=(source)=>{
		return data.map((data, index) => (
			
			<>
			<div className='image-container' style={containerStyle} >
				<b><p style={topStyle}>{data.top_text}</p></b>
				<img src={data.image} style={imgStyle}></img>
				<b><p style={bottomStyle}>{data.bottom_text}</p></b>
				
			</div>
			</>
		))
	}
	
	
	

	
return (
	<div className="App">
	<header className="App-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{/*when user submit the form , handleSubmit()
		function will be called .*/}
	<h3> Meme Generator </h3>
		<label >
		Top Text:
		</label><br/>
		<textarea value={topText} onChange={(e)=> {handleTopTextChange(e)}} ><br/>
        </textarea>
		<label ><br/>
		Bottom Text:
		</label><br/>
		<textarea value={bottomText}  onChange={(e)=> {handleBottomTextChange(e)}} ><br/>
        </textarea>
		<label><br/>
		Upload Image:
		</label><br/>
		<input type="file" accept="image/png, image/gif, image/jpeg"  onChange={(e)=> {setImage(e.target.files[0])}} /><br/>

		
		<input type="submit" value="Submit"/>
	</form>

	</header>
{renderImages(image)}
	</div>
);
}

export default Home;
