import { useState } from "react"
import AccordionItem from "./AccordionItem"

const data = [
  {
    title: 'Data 1',
    body: 'This is the body for Data 1 Title Component'
  },
  {
    title: 'Data 2',
    body: 'This is the body for Data 2 Title Component'
  },
  {
    title: 'Data 3',
    body: 'This is the body for Data 3 Title Component'
  },
  {
    title: 'Data 4',
    body: 'This is the body for Data 4 Title Component'
  },
  {
    title: 'Data 5',
    body: 'This is the body for Data 5 Title Component'
  }
]

const Accordion = () => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div>
      <h2>Accordion Component:</h2>
      {
        data.map((item, index) => (
          <AccordionItem
            title={item.title}
            body={item.body}
            isOpen={activeItem == index} 
            handleClick={activeItem==index ? () => setActiveItem(null) : () => setActiveItem(index)}  
          />
        ))
      }
    </div>
  )
}

export default Accordion