function Fetcheles()
{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(valasz => valasz.json())
    .then(valasz => Adatmegjelenites(valasz))
    .catch(hiba => console.log(hiba));
} 
function Adatmegjelenites(valasz)
{
    console.log(valasz)
    let table = '<table>'
    table += '<tr><td><Felhasználó</td><td>Sorszám</td><td>Leírás</td></tr>'
    valasz.forEach(item =>
        {
            table += `<tr>
            <td>${item.userId}</td>
            <td>${item.title}</td>
            <td>${item.id}</td>
            </tr>`
        });
        table += '</table>'
        document.getElementById('content').innerHTML = table;
}
window.onload = Fetcheles()