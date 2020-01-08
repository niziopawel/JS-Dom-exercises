const citiesElements = cities.map(mapCitiesDataToLinks);

function mapCitiesDataToLinks(city) {
    const elem = document.createElement('a');
    elem.classList.add('map-marker');
    elem.href = `${city.href}`;
    elem.dataset.name = `${city.name}`;
    elem.dataset.population = `${city.population}`;
    elem.style.left = `${city.map_x}px`;
    elem.style.top = `${city.map_y}px`;

    return elem;
}

function addCitiesMarkers(map, mapMarker) {
    citiesElements.forEach(citiesElements => {
        map.append(mapMarker.appendChild(citiesElements))
    });
}

function createToolTip() {
    const toolTip = document.createElement('div');
    const body = document.querySelector('body');
    toolTip.classList.add('map-tooltip');
    toolTip.style.left = `-9999999px`;
    toolTip.style.top = `-9999999px`;
    body.append(toolTip);

    return toolTip;
}

function setToolTipInfo(toolTip, marker) {
    toolTip.innerHTML = `<h2>${marker.dataset.name}</h2>
    <div>Population: <strong>${marker.dataset.population}</strong></div>`;
}

function showToolTip(toolTip, position, marker) {
    setToolTipInfo(toolTip, marker);
    
    toolTip.style.top = `${position.y}px`;
    toolTip.style.left = `${position.x}px`;
}

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const map = document.querySelector('.map');
    const toolTip = createToolTip();
    const mapMarker = document.createElement('div');
    
    addCitiesMarkers(map, mapMarker);
    const markers = document.querySelectorAll('.map-marker'); 

    markers.forEach(marker => {
        marker.addEventListener('mouseover', function(e) {
            position = {
                x: e.clientX + 30,
                y: e.clientY + 30
            }
            showToolTip(toolTip, position, marker);
        })

        marker.addEventListener('mousemove', function(e) {
            position = {
                x: e.clientX + 30,
                y: e.clientY + 30
            }
            showToolTip(toolTip, position, marker);
        });

        marker.addEventListener('mouseout', function() {
            position = {
                x: -999999,
                y: -999999
            }
            showToolTip(toolTip, position, marker);

            while(!toolTip.firstChild) {
                toolTip.remove(firstChild);
            }
        });
    });
});