import Axios from "axios"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

//const url='http://localhost:5000/pruebafirebase-30018/us-central1/app/api/products'
const todosProductos = async (setProductos) =>{

    const peticion =  Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5000/pruebafirebase-30018/us-central1/app/api/products",
    }).then(response => {
        if (!response.data.error) {
            console.log(response.data)
            setProductos(response.data)
        } else {
            console.log(response.data.error[0]);
        }
    })
        .catch(err => {
            console.log(err)
        });
   // state(peticion.data.results)
    console.log(peticion)

}
/*const todosProductos = async () => {
    const url = "http://localhost:5000/pruebafirebase-30018/us-central1/app/api/products"
        .then(Response => Response.json()
            .then(data => { console.log(data) })
        )
}*/
const unicoProducto = async (id, setProducto) => {
    console.log(id)
    //console.log(req.params.id)

    const peticion =  Axios({
        method: "GET",
        withCredentials: true,
        url: `http://localhost:5000/pruebafirebase-30018/us-central1/app/api/products/${id}`,
    }).then(response => {
        if (!response.data.error) {
            console.log(response.data)
            setProducto(response.data)
        } else {
            console.log(response.data.error[0]);
        }
    })
        .catch(err => {
            console.log(err)
        });
   // state(peticion.data.results)
    console.log(peticion)
}

export {

    todosProductos,
    unicoProducto
}

/*const peticion = await axios.get(`http://localhost:5000/pruebafirebase-30018/us-central1/app/api/products/${id}`)
state(peticion.data)*/
//https://rickandmortyapi.com/api/character