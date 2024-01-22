function erreurGeo(err) {

    let msg;

    switch (err.code) {
        case err.TIMEOUT:
            msg = 'Time for your request has expired';
            break;
        case err.UNKNOWN_ERROR:
            msg = 'Unknown error has occurred';
            break;
        case err.PERMISSION_DENIED:
            msg = 'You have refused us permission to access your location';
            break;
        case err.POSITION_UNVAILABLE:
            msg = 'technical error has occurred';
            break;
    }
    alert(msg);
}

async function getCityCoord(position) {

    try {

        const inputLocal = document.querySelector('.card__search__text');
        const inputVal = inputLocal.value;
        const API_Key = `5ae4efe85e0a37b88e4e2bcea85990bc`;
        const cityLat = position.coords.latitude;
        const cityLon = position.coords.longitude;
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${cityLat}&lon=${cityLon}&limit=1&appid=${API_Key}`)

        if (res.ok === false) {
            throw new Error(`Network response was not ok: ${res.status}`);
        }

        const data = await res.json();

        if (data.length === 0) {
            return alert(`No coordinates availables for ${inputVal}`);
        }

        if (cityLat === position.coords.latitude && cityLon === position.coords.longitude) {
            inputLocal.value = data[0].name;
            
        } else {
            alert('Error in your coordinates');
        }

    } catch (error) {
        alert(error)
    }
}

navigator.geolocation.getCurrentPosition(
    position => getCityCoord(position),erreurGeo,{maximumAge: 60000}
);