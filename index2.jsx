import {useState} from 'react';


function Header({title}){
    console.log(title)
    return <h1>{createTitle(title)}</h1>;

}

function HomePage(){
    const names = ['AdaLovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);
    function handleClick(){
        setLikes(likes + 1);
    }
    return (<div>
        <Header title="Develop. Preview. Ship. 🚀"/>
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li> 
            ))}
        </ul>
        <button onClick={handleClick}>Like({likes})</button>
        </div>
    )
}
