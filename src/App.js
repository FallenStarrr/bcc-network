import question from './question.json'
import './App.css';
import Fuse from 'fuse.js'
import { useState } from 'react'
import { SearchItem } from './components/SearchItem';
function App() {
  const [query, setQuery] = useState("")
  

  const fuse = new Fuse(question, {
    keys: [
      'title',
      'tag'
    ]
  })

  
  
  const results = fuse.search(query)
  let characterResult = query ? results.map(result => result.item) : question
 

  function handleTags({ currentTarget = {}}) {  
    const { value } = currentTarget
    setQuery(value)
      
  }

  function handleSearch({ currentTarget = {}}) {
      const { value } = currentTarget
      setQuery(value)
      
  }


  return (
    <div className='container'>
      <input type="search" name="search" id="" value={query} onChange={handleSearch}  className="search" placeholder='Введите вопрос'/><br />
     
      <select name="select" onChange={handleTags} className="tags"> 
        <option value="SQL">SQL</option>
        <option value="Python" selected>Pyhton</option>
        <option value="Golang">Golang</option>
      </select>

      <div className='search-box'>
        <div className="container">

        
        <div className='search-headings'>
          <h3>Вопрос</h3>
          <h3>Категории</h3>
          <h3>Просмотры</h3>
          <h3>Ответы</h3>
          <h3>Активность</h3>
          
        </div>
        {
          
           characterResult.map(e => {
            return (
              <SearchItem 
              title={e.title} 
              tag={e.tag} 
              views={e.views}
              replies={e.replies}
              activity={e.activity}
              
              />
            )
          })
        }
      </div>
       </div>

          

        
    </div>
    
  );
}

export default App;
