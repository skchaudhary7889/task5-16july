import React, {  useEffect,useState } from 'react'
import axios from"axios";
import { ColorRing } from "react-loader-spinner";
const Api = () => {

    // state for fetch data and update data
    const [articles, setArticles] = useState([]);

    // state for laoding
const[loading,setLoading]=useState(false);

// use for continously data are fetch in loop from api
useEffect(() => {
    fetchNews()
  }, []);

//   this function for get the data from news api using news api key and axios and also show the loading 
    const fetchNews = async () => {
       
        try{
            setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=fc9c2c5f376549b2948feb1885f935b3`
      );
      setArticles(response.data.articles);
      setLoading(false);}
      catch(error){
        console.log(error);
      }
     
    
    

    
  return (
    <div className="news">
      <h2>Top Headlines</h2>
      {/* here apply ternary operator for show the loading if not data get and get data show the data and also use map method to popualte the data from news api */}
      {loading ? (<ColorRing
                visible={true}
                height="90"
                width="90"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              /> ): 
     ( <div className="articles">
        {articles.map((article) => (
          <div key={article.url} className="article">
            <img src={article.urlToImage} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
             <button style={{borderRadius:"5px",backgroundColor:"orange",color:"white"}}> Read More</button>
            </a>
          </div>
        ))}
      </div>)}
    </div>
  )
}}

export default Api;