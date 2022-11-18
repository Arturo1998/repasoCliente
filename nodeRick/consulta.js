import axios from "axios";

const cargar = async () => {
    let lista = [];
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      response.data.results.map((x)=> lista.push(x));
      let count=2;
      while(count<response.data.info.pages){
        const listaPaginas = await axios.get(
            `https://rickandmortyapi.com/api/character/?page=${count}`
            );
            listaPaginas.data.results.map((x)=>lista.push(x));
            count++;
        }
        return lista;
    } catch (e) {
      console.log(e);
    }
  }

  const personajes = await cargar();
  console.log(personajes)
