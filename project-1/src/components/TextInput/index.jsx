import './style.css';

export default function TextInput(props){
  const {handleChange, value} = props;

  return(
    <input
      autoFocus
      className='text-input'
      onChange={handleChange} 
      searchValue={value}
      placeholder="Digite o que está procurando..."
    />
  )
}