import React, {useState} from 'react';
import axios, { Axios } from 'axios';
import './Home.css';

function Home() {
	const [topText , setTopText] = useState('');
	const [bottomText , setBottomText] = useState('');
    const [image, setImage] = useState(null);

	const handleTopTextChange =(e)=>{
	setTopText(e.target.value);
	}

	const handleBottomTextChange =(e)=>{
	setBottomText(e.target.value);
	}
	
	const handleImageChange =(e)=>{
		console.log("----------image------------",image)
        setImage(e.target.files[0]);
        }
        
	const handleSubmit=(e)=>{
		e.preventDefault();
		console.log("-----------ho gua");
		console.log("images--------",image)
		const fd = new FormData();
		fd.append('image',image)
		fd.append('top_text',topText)
		fd.append('bottom_text',bottomText)
		axios.post('http://127.0.0.1:8000/postMemes/',fd).
		then(response=>{console.log("response-----------",response.data)}).
		catch(error => console.log("error--------",error));
		
		setTopText('');
		setBottomText('');
		setImage(null);
	 
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
		<input type="file"  onChange={(e)=> {handleImageChange(e)}} /><br/>

		
		<input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
);
}

export default Home;
