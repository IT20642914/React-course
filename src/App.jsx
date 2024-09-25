import {CORE_CONCEPTS} from './data';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Header from './components/Header/Header';





function App() {
  return (
    <div>
    <Header/> 
      <main>
     <section id='core-concepts'>
      <h2>Core concepts </h2>
      <ul>
      {CORE_CONCEPTS && CORE_CONCEPTS.map((concept,index)=>(
          <CoreConcepts {...concept} key={index}/>
      ))}
    
      </ul>

     </section>
      </main>
    </div>
  );
}

export default App;
