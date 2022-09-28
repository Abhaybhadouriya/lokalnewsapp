
import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import Catagory from './components/additionalComponents/Catagory';
import Footer from "./components/additionalComponents/Footer";
import Header from "./components/additionalComponents/Header";
import SorryNoNews from './components/additionalComponents/SorryNoNews';
import NewsTileShort from './components/newsTiles/NewsTileShort';
export default function Home() {
  const apiKey = '6a1d4f2afd3b4379bd04f56e72a8bb6d'
  const country = 'in'
  const topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?country='
  const [NewsJson, setNewsJson] = useState([]);
  const [category, setcategory] = useState('topheadlines');
  async function searchNews(query) {
    let url= topHeadlinesUrl + country + '&q='+query+'&apiKey=' + apiKey;
    if(category!=='topheadlines') 
         url = topHeadlinesUrl + country + '&category=' +category+'&q='+query+'&apiKey=' + apiKey;
    let response = await fetch(url);
    let data = await response.json();
    
    console.log(data['articles'])
    setNewsJson(data['articles'])

  }
  async function fetchText() {
    const url = topHeadlinesUrl + country + '&apiKey=' + apiKey;
    let response = await fetch(url);
    let data = await response.json();
    setNewsJson(data['articles'])
  }
  async function getCategoryNews(e){
    // GET https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=API_KEY
    const url = topHeadlinesUrl + country + '&category='+e+'&apiKey='+apiKey;
    let response = await fetch(url);
    let data = await response.json();
    setNewsJson(data['articles'])
  }
  useEffect(() => {
    fetchText();
  }, [])

  const changeCategory = (e) => {
    setcategory(e);
    if (e === 'topheadlines') fetchText();
    else getCategoryNews(e);
  }
  return (
    <div>
      <Head>
      <title>News</title>
      </Head>
      <Header searchNews={searchNews}/>
      <Catagory changeCategory={changeCategory} setcategory={setcategory} />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcdea9',
        paddingBottom: 15

      }}>
        {NewsJson!== undefined&& NewsJson.length > 0 ? NewsJson.map((e,index) =>
          <NewsTileShort
            key={index}
            title={e['title']}
            date={e['publishedAt']}
            by={e['source']['name']}
            url={e['url']}
            urlpic={e['urlToImage']===null?'news.jpg':e['urlToImage']}
            desc={e['description']}
            content={e['content']}
          />
        ) : <SorryNoNews/>
        }
      </div>
      <Footer />

    </div>
  )
}
