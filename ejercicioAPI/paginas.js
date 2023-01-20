
const next = async() =>{
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    const page = {...data}
    const info = page['info'];
    console.log(info)
}

next()

export default next;
