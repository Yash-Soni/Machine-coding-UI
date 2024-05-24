import './styles.css'

const Block = ({onClick, value}) => {
  return (
    <div className='block' onClick={() => onClick()}>
      {value}
    </div>
  )
}

export default Block