
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('tableBody');
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const tr = document.createElement('tr');
        tr.innerHTML = `<th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td   onclick="getFullDetails(${user.id})" class="btn btn-sm btn-success">More info</td>`
        ; 
        tableBody.appendChild(tr);
    }
});

function getFullDetails(userId) {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const userData = document.getElementById('user-details');
        userData.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <h4 class="text-center">name: ${data.name}</h4>
            <h6 class="text-center"> User id: ${data.id}</h6>
            <h6 class="text-center"> Username: ${data.username}</h6>
            <h6 class="text-center"> Email :${data.email}</h6>
            <h6 class="text-center"> Website: ${data.website}</h6>
            <h6 class="text-center"> Phone: ${data.phone}</h6> 
             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
             </button>
            </div>
        `; 

   

       

    });
}