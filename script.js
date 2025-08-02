let omdpkey ="3bf7d695"

function search() {
    const input = document.getElementById('input');
    const value = input.value;

    console.log(value);

    let url = "https://www.omdbapi.com/?apikey=" + omdpkey + "&s=" + value;
    console.log(url);
    
    // Add your search logic here
    console.log('Searching for:', value);
}
