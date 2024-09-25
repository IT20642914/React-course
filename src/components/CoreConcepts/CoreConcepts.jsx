import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
    return (
        <section id='core-concepts'>
            <h2>Core concepts </h2>
            <ul>
                {CORE_CONCEPTS && CORE_CONCEPTS.map((concept)=>(
                    <CoreConcept {...concept} key={concept.title}/>
                ))}
            </ul>
        </section>
    );
}

export default CoreConcepts;