import {CORE_CONCEPTS,EXAMPLES} from './data';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';
function App() {
  const [selectedBtn, setSelectedBtn] = useState();
  const handleSelect = (selectedBtn) => {
    setSelectedBtn(selectedBtn);
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
      <TabButton onClick={()=>handleSelect("components")} isSelected={selectedBtn==="components"}>Components</TabButton>
      <TabButton onClick={()=>handleSelect("jsx")}isSelected={selectedBtn==="jsx"}>JSX</TabButton>
      <TabButton onClick={()=>handleSelect("props")}isSelected={selectedBtn==="props"}>Props</TabButton>
      <TabButton onClick={()=>handleSelect("state")}isSelected={selectedBtn==="state"}>State</TabButton>
      </menu>
        
       {!selectedBtn?(<p>Please Select a topic.</p>):( 
        <div id='tab-content'>
        <h3>{EXAMPLES[selectedBtn]?.title}</h3>
        <p>{EXAMPLES[selectedBtn]?.description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedBtn]?.code}
          </code>
        </pre>
        </div>
       )} 
        

      </section>
      </main>
    </div>
  );
}

export default App;
