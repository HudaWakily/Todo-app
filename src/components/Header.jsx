export const Header = ({todos}) =>{
    
    return(
        <header className="header">
            <h1>You have {todos.length} open {todos.length != 1 ? 'tasks' : 'task'}.</h1>
        </header>
    )
}