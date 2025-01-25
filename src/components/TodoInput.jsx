import { useState } from "react"

export const TodoInput = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="input-container">
      <input
        placeholder="Add tasks"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)

        }} />
      <button>
        <h6 onClick={() => {
          if (!inputValue) { return }
          handleAddTodo(inputValue)
          setInputValue('')
        }}>Add</h6>
      </button>
    </div>
  )
}