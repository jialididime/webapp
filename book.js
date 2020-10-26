import client from "./db.js";

class Book{
findAll(){
return client.execute("SELECT * FROM books");
}
creat({name}){
return client.excute(
`INSERT INTO books(name) VALUES(${name})`
)
}
}
export const BookAll = async(id) => {
console.info("@@Query id: ", id)
console.log(`SELECT * FROM books WHERE id = ${id}`);
return await client.execute(`SELECT * FROM books where id=${id}`);
}

