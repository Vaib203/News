import { useState, useEffect } from 'react';
import './App.css';
import News from './News';
function App() {

  let [articles,setArticles]=useState([]);
  let [category,setCategory]=useState("india");
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-09&apiKey=5087b96862e54d6f912a2bfb50164533`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[category])
  return (
    <div className="App">
      <header className='header'>

        <h1>Hello folks..You can get the information on any topic</h1>
        <input type='text' onChange={(event)=>{
          if(event.target.value!==""){
            setCategory(event.target.value);
          }
          else{
            setCategory("india");
          }
        }} placeholder='Search News'></input>

      </header>
      <section className='news_articles'>
        
        {
          articles.length!==0?
          articles.map((article)=>{
            return(
              <News article={article}></News>
            )
          })
          :
          <h2>No News Found For Searched Text</h2>
        }       
        
      </section>
    </div>
  );
}

export default App;
