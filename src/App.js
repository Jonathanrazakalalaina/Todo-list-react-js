import { useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";


function App() {

  const [cards, setCards] = useState([
    {
      title: 'Mandeha miantsena',
      detail: 'Mividy laoka atoandro'
    },
    {
      title: 'Mianatra lesona',
      detail: "Manao devoirs"
    },
    {
      title: 'Mandeha mikotrana',
      detail: 'Manomboka @ 9 maraina'
    }
  ])

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const createCard = (e) => {
    e.preventDefault()
    if(title === '' && details === '') return
    const newCard = [{title: title, detail: details}, ...cards]
    setCards(newCard)
    setTitle('')
    setDetails('')
  }

  const deleteCard = (index) => {
    const leftCard = [...cards]
    leftCard.splice(index, 1)
    setCards(leftCard)
  }

  return (
    <div className="App">

      <h1>zavatra tokony ataoko</h1>

      <Form
        createCardFunc={createCard}
        title={title}
        details={details}
        setTitleFunc={(e) => setTitle(e.target.value)}
        setDetailsFunc={(e) => setDetails(e.target.value)}
      />

      <div className="cards">
        {cards.map((card, index) => (
          <Card title={card.title} details={card.detail} deleteCard={deleteCard} key={index} />
        ))}
      </div>

    </div>
  );
}

export default App;
