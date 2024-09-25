import {CORE_CONCEPTS} from './data';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
function App() {
  const handleSelect = (selectedBtn) => {
    console.log('clicked',selectedBtn)
        }
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
     <section id='examples'>
      <h2>Examples </h2>
      <menu>
      <TabButton onClick={()=>handleSelect("Components")}>Components</TabButton>
      <TabButton onClick={()=>handleSelect("JSX")}>JSX</TabButton>
      <TabButton onClick={()=>handleSelect("Props")}>Props</TabButton>
      <TabButton onClick={()=>handleSelect("Props")}>Props</TabButton>
      </menu>

      </section>
      </main>
    </div>
  );
}

export default App;
