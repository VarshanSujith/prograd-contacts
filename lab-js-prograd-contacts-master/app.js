//Enter your code here..
window.addEventListener("load", async () => {
const URL = "https://jsonplaceholder.typicode.com/users";
const btn = document.getElementById("btnGet");

const handleClick = async (e) => {
    e.preventDefault();
    var fetchedData = await fetchData();
    if (fetchedData == 0) return;

    const customerdiv = document.getElementById("message");

    fetchedData.forEach((user) => {
    customerdiv.innerHTML += `<div class="player">
    <div class="strength">Name : ${user.name}</div>
    <div>Email   : ${user.email}</div>
    <div>Phone   : ${user.phone}</div>
    <div>Website : ${user.website}</div>
    <div>Company : ${user.company.name}</div>
    <div>City    : ${user.address.city}</div>
    <div>`;
    });
};

async function fetchData(){
    return new Promise((resolve,reject)=>{
        try {
            fetch(URL).then((data)=>{
                if(data) resolve(data.json());
            })
            
        } catch (error) {
            console.log("Promise Rejected"+error);
            reject(error);
            
        }
    })
} 

btn.addEventListener("click", handleClick);
});
