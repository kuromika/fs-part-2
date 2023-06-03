
export const Filter = ({ filter, handleFilterInput }) => {
  return (
          <input type='text' onChange={handleFilterInput} value={filter}></input>
  )
}