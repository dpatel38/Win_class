async function showCity(){
    let cityName = 'seattle';
    let response = await fetch(`https://geocode.xyz/${cityName}?json=1`);
    let json = await response.json();
    
    console.log(json);

    let lati = document.createElement('h2');
    lati.innerHTML = `Latitude: ${json.latt}`;   
    lati.className = "fetch-latt-example";
    document.body.append(lati);

    let long = document.createElement('h2');
    long.innerHTML = `Longitude: ${json.longt}`;    
    long.className = "fetch-latt-example";
    document.body.append(long);
    
}
showCity();