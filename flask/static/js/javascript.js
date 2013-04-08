function createMarkersOn(map){
    var markers = new Array();
    $.getJSON("http://127.0.0.1:5000/rest/json/all",function(data){
        var obj = data;
        for(var i = 0;i < obj.length; i++){
                var marker = new google.maps.Marker({
                position: new google.maps.LatLng(obj[i]['lat'],obj[i]['lng']),
                map: map,
                title: obj[i]['name']
            });
        markers[i] = marker;
    }});
    return markers;
};
function initialize() {

    var mapOptions = {
      center: new google.maps.LatLng(-23.5000, -46.6167),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);

    createMarkersOn(map);
    /*        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-23.563882,-46.044922),
            map: map,
            title:"Hello World!"});

            var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h2 id="firstHeading" class="firstHeading">Testando a janela</h2>'+
            '<div id="bodyContent">'+
            '<p>Aqui dentro da pra colocar o que quiser. É basicamente um site aqui dentro... YUHULL!!!</p>'+
            '<p>Attribution: Teste, <a href="http://en.wikipedia.org/w/index.php?title=teste&oldid=297882194">'+
            'http://en.wikipedia.org/w/index.php?title=teste</a> (last visited June 22, 2012).</p>'+
            '</div>'+
            '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map,marker);
            });
    */
};
//Quase lá...

window.onload = function(){
	initialize();
	elem = document.getElementById('map_canvas');
	elem.style.height = (window.innerHeight - 100)+'px';
	elem2 = document.getElementById('col');
	elem2.style.height = (window.innerHeight - 100)+'px';
	window.onresize = function(){
		elem.style.height = (window.innerHeight - 100)+'px';
		elem2.style.height = (window.innerHeight - 100)+'px';
	};
};

