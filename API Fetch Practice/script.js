document.querySelector("#button").addEventListener("click", getData)

function getData() {
    fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw Error('ERROR');
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data.data);
            const html = data.data.map(user =>{
                return `
                <ul>
                <img src="${user.avatar}" alt="${user.first_name}"  />
                <li>ID: ${user.id}</li>
                <li>First Name: ${user.first_name}</li>
                <li>Last Name: ${user.last_name}</li>
                <li>Email: ${user.email}</li>
                </ul>
                `; 
            }).join('')
            console.log(html)
            document
                .querySelector('#list')
                .innerHTML = html
        })
        .catch(error => {
            console.log(error);
        });
}