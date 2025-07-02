
export default function Input(props){
    return(
        <>
        
        <input type={props.type}
         required 
         placeholder={props.placeholder}
         value={props.value}
         onChange={props.onChange}
          className={`w-full ${props.className}  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100`} />
        
        </>
    )
}