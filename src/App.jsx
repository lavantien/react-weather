const App = () => {
    const list = ['a', 'b', 'c', 'd', 'e']

    return (
        <>
            <div className='text-5xl'>App</div>
            <ul>
                {list.map((str, index) => (
                    <li key={index}>{str}</li>
                ))}
            </ul>
        </>
    )
}
export default App
