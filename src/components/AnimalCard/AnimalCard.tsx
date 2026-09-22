import "./styles.css";
import type { AnimalCardProps } from "./types"

function AnimalCard({name, species="unknown animal", imgSrc, children}: AnimalCardProps) {
  return (
    <div className="animal-card-wrapper">
      <h3>{name}</h3>
      <div>{species}</div>
      <img src={imgSrc}/>
      {children}
    </div>
  );
}

export default AnimalCard

// props - это единственный параметр, который может присутствовать в компоненте
// props - это объект и все значения которы мы передаём в компонент, просто будут
// находиться внутри этого объекта
// props = {
//   name: <в момент вызова компонента>
//   species: <в момент вызова компонента>
//   imgSrc: <в момент вызова компонента>// 
// }

// Чтобы не прописывать каждый раз обращение к объекту props, в круглых скобках
// компонента сразу делают деструктуризацию - {name, species, imgSrc}

// children - позволяет передавать внутрь компонента JSX