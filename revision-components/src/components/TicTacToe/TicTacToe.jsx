import { useState } from 'react'
import Block from './Block'
import './styles.css'

const TicTacToe = () => {
	const [blocks, setBlocks] = useState(new Array(9).fill(null))
	const [currentP, setCurrentP] = useState('X')
	const [winner, setWinner] = useState(null)

	const handleReset = () => {
		setBlocks(new Array(9).fill(null))
		setWinner(null)
	}

	const changePlayer = () => {
		setCurrentP(currentP === 'X' ? 'O' : 'X')
	}

	const checkWin = (blocksCopy) => {
		const winArr = [[0,1,2], [3,4,5], [6,7,8],
										[0,3,6], [1,4,7], [2,5,8],
										[0,4,8], [2,4,6]]

		for(let i=0; i<8; i++) {
			const [a,b,c] = winArr[i]
			if(blocksCopy[a] && blocksCopy[a] === blocksCopy[b] && blocksCopy[a] === blocksCopy[c]) {
				return true
			}
		}
		return false
	}

	const handleClick = (index) => {
		let blocksCopy = blocks
		if(blocksCopy[index] || winner) {return}

		blocksCopy[index] = currentP
		setBlocks(blocksCopy)
		const didWin = checkWin(blocksCopy)
		if(didWin) {
			setWinner(currentP)
		} else {
			changePlayer()
		}
	}

  return (
		<>
			<h4>Winner: {winner}</h4>
			<div className='ticTacToe'>
				<div className="row">
					<Block value={blocks[0]} onClick={() => handleClick(0)} />
					<Block value={blocks[1]} onClick={() => handleClick(1)} />
					<Block value={blocks[2]} onClick={() => handleClick(2)} />
				</div>
				<div className="row">
					<Block value={blocks[3]} onClick={() => handleClick(3)} />
					<Block value={blocks[4]} onClick={() => handleClick(4)} />
					<Block value={blocks[5]} onClick={() => handleClick(5)} />
				</div>
				<div className="row">
					<Block value={blocks[6]} onClick={() => handleClick(6)} />
					<Block value={blocks[7]} onClick={() => handleClick(7)} />
					<Block value={blocks[8]} onClick={() => handleClick(8)} />
				</div>

			</div>
			<button className='resetButton' onClick={handleReset}>Reset</button>
		</>
  )
}

export default TicTacToe