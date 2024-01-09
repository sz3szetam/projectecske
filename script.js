let currentPage = 1;
const itemsPerPage = 20;

function Fetcheles(page) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${itemsPerPage}`)
    .then(valasz => valasz.json())
    .then(valasz => Adatmegjelenites(valasz))
    .catch(hiba => console.log(hiba));
} 

function Adatmegjelenites(valasz) {
    console.log(valasz);
    let table = '<table>';
    table += '<tr><td>Felhasználó</td><td>Sorszám</td><td>Leírás</td></tr>';
    valasz.forEach(item => {
        table += `<tr>
        <td>${item.userId}</td>
        <td>${item.id}</td>
        <td>${item.title}</td>
        </tr>`;
    });
    table += '</table>';
    document.getElementById('content').innerHTML = table;
}

document.getElementById("elozo").addEventListener("click",() =>
{
    if (currentPage > 1) {
        currentPage--;
        Fetcheles(currentPage);
    }
});
document.getElementById("kovetkezo").addEventListener("click",() =>
{
    currentPage++;
    Fetcheles(currentPage);
})

window.onload = Fetcheles(currentPage);