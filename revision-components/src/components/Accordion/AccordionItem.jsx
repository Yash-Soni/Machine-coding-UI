import './styles.css'

const AccordionItem = ({title, body, isOpen, handleClick}) => {
  return (
    <div className='accordionItem'>
      <span onClick={handleClick} className="titleDisplay">
        <h4>{title}</h4>
        <p>⌄</p>
      </span>
      {isOpen && <span className='bodyDisplay'>{body}</span>}
    </div>
  )
}

export default AccordionItem