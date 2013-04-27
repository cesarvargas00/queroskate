if(window.google&&window.google.maps){var GMaps=function(e){"use strict";var t=document;var n=function(n,r){var i;if("jQuery"in e&&r){i=$("#"+n.replace("#",""),r)[0]}else{i=t.getElementById(n.replace("#",""))}return i};var r=function(e){var i=this;var s=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"];var o=["mousemove","mouseout","mouseover"];window.context_menu={};if(typeof e.el==="string"||typeof e.div==="string"){this.el=n(e.el||e.div,e.context)}else{this.el=e.el||e.div}if(typeof this.el==="undefined"||this.el===null){throw"No element defined."}this.el.style.width=e.width||this.el.scrollWidth||this.el.offsetWidth;this.el.style.height=e.height||this.el.scrollHeight||this.el.offsetHeight;this.controls=[];this.overlays=[];this.layers=[];this.singleLayers={};this.markers=[];this.polylines=[];this.routes=[];this.polygons=[];this.infoWindow=null;this.overlay_el=null;this.zoom=e.zoom||15;this.registered_events={};var u=e.markerClusterer;var a;if(e.mapType){a=google.maps.MapTypeId[e.mapType.toUpperCase()]}else{a=google.maps.MapTypeId.ROADMAP}var f=new google.maps.LatLng(e.lat,e.lng);delete e.el;delete e.lat;delete e.lng;delete e.mapType;delete e.width;delete e.height;delete e.markerClusterer;var l=e.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"};var c=e.zoomControl||true,h=l.style||"DEFAULT",p=l.position||"TOP_LEFT",d=e.panControl||true,v=e.mapTypeControl||true,m=e.scaleControl||true,g=e.streetViewControl||true,y=y||true;var b={};var w={zoom:this.zoom,center:f,mapTypeId:a};var E={panControl:d,zoomControl:c,zoomControlOptions:{style:google.maps.ZoomControlStyle[h],position:google.maps.ControlPosition[p]},mapTypeControl:v,scaleControl:m,streetViewControl:g,overviewMapControl:y};if(e.disableDefaultUI!=true)w=extend_object(w,E);b=extend_object(w,e);for(var S=0;S<s.length;S++){delete b[s[S]]}for(var S=0;S<o.length;S++){delete b[o[S]]}this.map=new google.maps.Map(this.el,b);if(u){this.markerClusterer=u.apply(this,[this.map])}var x=function(e){var t=0;var n=0;if(e.offsetParent){do{t+=e.offsetLeft;n+=e.offsetTop}while(e=e.offsetParent)}return[t,n]};var T=function(e,t){var r="";var s=window.context_menu[e];for(var o in s){if(s.hasOwnProperty(o)){var u=s[o];r+='<li><a id="'+e+"_"+o+'" href="#">'+u.title+"</a></li>"}}if(!n("gmaps_context_menu"))return;var a=n("gmaps_context_menu");a.innerHTML=r;var f=a.getElementsByTagName("a");var l=f.length;for(var o=0;o<l;o++){var c=f[o];var h=function(n){n.preventDefault();s[this.id.replace(e+"_","")].action.apply(i,[t]);i.hideContextMenu()};google.maps.event.clearListeners(c,"click");google.maps.event.addDomListenerOnce(c,"click",h,false)}var p=x.apply(this,[i.el]);var d=p[0]+t.pixel.x-15;var v=p[1]+t.pixel.y-15;a.style.left=d+"px";a.style.top=v+"px";a.style.display="block"};var N=function(e,t){if(e==="marker"){t.pixel={};var n=new google.maps.OverlayView;n.setMap(i.map);n.draw=function(){var r=n.getProjection();var i=t.marker.getPosition();t.pixel=r.fromLatLngToContainerPixel(i);T(e,t)}}else{T(e,t)}};this.setContextMenu=function(e){window.context_menu[e.control]={};for(var r in e.options){if(e.options.hasOwnProperty(r)){var i=e.options[r];window.context_menu[e.control][i.name]={title:i.title,action:i.action}}}var s=t.createElement("ul");s.id="gmaps_context_menu";s.style.display="none";s.style.position="absolute";s.style.minWidth="100px";s.style.background="white";s.style.listStyle="none";s.style.padding="8px";s.style.boxShadow="2px 2px 6px #ccc";t.body.appendChild(s);var o=n("gmaps_context_menu");google.maps.event.addDomListener(o,"mouseout",function(e){if(!e.relatedTarget||!this.contains(e.relatedTarget)){window.setTimeout(function(){o.style.display="none"},400)}},false)};this.hideContextMenu=function(){var e=n("gmaps_context_menu");if(e)e.style.display="none"};var C=function(t,n){google.maps.event.addListener(t,n,function(t){if(t==undefined){t=this}e[n].apply(this,[t]);i.hideContextMenu()})};for(var k=0;k<s.length;k++){var L=s[k];if(L in e){C(this.map,L)}}for(var k=0;k<o.length;k++){var L=o[k];if(L in e){C(this.map,L)}}google.maps.event.addListener(this.map,"rightclick",function(t){if(e.rightclick){e.rightclick.apply(this,[t])}if(window.context_menu["map"]!=undefined){N("map",t)}});this.refresh=function(){google.maps.event.trigger(this.map,"resize")};this.fitZoom=function(){var e=[];var t=this.markers.length;for(var n=0;n<t;n++){e.push(this.markers[n].getPosition())}this.fitLatLngBounds(e)};this.fitLatLngBounds=function(e){var t=e.length;var n=new google.maps.LatLngBounds;for(var r=0;r<t;r++){n.extend(e[r])}this.map.fitBounds(n)};this.setCenter=function(e,t,n){this.map.panTo(new google.maps.LatLng(e,t));if(n){n()}};this.getElement=function(){return this.el};this.zoomIn=function(e){e=e||1;this.zoom=this.map.getZoom()+e;this.map.setZoom(this.zoom)};this.zoomOut=function(e){e=e||1;this.zoom=this.map.getZoom()-e;this.map.setZoom(this.zoom)};var A=[];for(var O in this.map){if(typeof this.map[O]=="function"&&!this[O]){A.push(O)}}for(var S=0;S<A.length;S++){(function(e,t,n){e[n]=function(){return t[n].apply(t,arguments)}})(this,this.map,A[S])}this.createControl=function(e){var n=t.createElement("div");n.style.cursor="pointer";n.style.fontFamily="Arial, sans-serif";n.style.fontSize="13px";n.style.boxShadow="rgba(0, 0, 0, 0.398438) 0px 2px 4px";for(var r in e.style)n.style[r]=e.style[r];if(e.id){n.id=e.id}if(e.classes){n.className=e.classes}if(e.content){n.innerHTML=e.content}for(var i in e.events){(function(t,n){google.maps.event.addDomListener(t,n,function(){e.events[n].apply(this,[this])})})(n,i)}n.index=1;return n};this.addControl=function(e){var t=google.maps.ControlPosition[e.position.toUpperCase()];delete e.position;var n=this.createControl(e);this.controls.push(n);this.map.controls[t].push(n);return n};this.createMarker=function(e){if(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position){var t=this;var n=e.details;var r=e.fences;var i=e.outside;var s={position:new google.maps.LatLng(e.lat,e.lng),map:null};delete e.lat;delete e.lng;delete e.fences;delete e.outside;var o=extend_object(s,e);var u=new google.maps.Marker(o);u.fences=r;if(e.infoWindow){u.infoWindow=new google.maps.InfoWindow(e.infoWindow);var a=["closeclick","content_changed","domready","position_changed","zindex_changed"];for(var f=0;f<a.length;f++){(function(t,n){if(e.infoWindow[n]){google.maps.event.addListener(t,n,function(t){e.infoWindow[n].apply(this,[t])})}})(u.infoWindow,a[f])}}var l=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"];var c=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(var f=0;f<l.length;f++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(){e[n].apply(this,[this])})}})(u,l[f])}for(var f=0;f<c.length;f++){(function(t,n,r){if(e[r]){google.maps.event.addListener(n,r,function(n){if(!n.pixel){n.pixel=t.getProjection().fromLatLngToPoint(n.latLng)}e[r].apply(this,[n])})}})(this.map,u,c[f])}google.maps.event.addListener(u,"click",function(){this.details=n;if(e.click){e.click.apply(this,[this])}if(u.infoWindow){t.hideInfoWindows();u.infoWindow.open(t.map,u)}});google.maps.event.addListener(u,"rightclick",function(t){t.marker=this;if(e.rightclick){e.rightclick.apply(this,[t])}if(window.context_menu["marker"]!=undefined){N("marker",t)}});if(u.fences){google.maps.event.addListener(u,"dragend",function(){t.checkMarkerGeofence(u,function(e,t){i(e,t)})})}return u}else{throw"No latitude or longitude defined."}};this.addMarker=function(e){var t;if(e.hasOwnProperty("gm_accessors_")){t=e}else{if(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position){t=this.createMarker(e)}else{throw"No latitude or longitude defined."}}t.setMap(this.map);if(this.markerClusterer){this.markerClusterer.addMarker(t)}this.markers.push(t);r.fire("marker_added",t,this);return t};this.addMarkers=function(e){for(var t=0,n;n=e[t];t++){this.addMarker(n)}return this.markers};this.hideInfoWindows=function(){for(var e=0,t;t=this.markers[e];e++){if(t.infoWindow){t.infoWindow.close()}}};this.removeMarker=function(e){for(var t=0;t<this.markers.length;t++){if(this.markers[t]===e){this.markers[t].setMap(null);this.markers.splice(t,1);r.fire("marker_removed",e,this);break}}return e};this.removeMarkers=function(e){var e=e||this.markers;for(var t=0;t<this.markers.length;t++){if(this.markers[t]===e[t])this.markers[t].setMap(null)}var n=[];for(var t=0;t<this.markers.length;t++){if(this.markers[t].getMap()!=null)n.push(this.markers[t])}this.markers=n};this.drawOverlay=function(e){var n=new google.maps.OverlayView;n.setMap(i.map);var r=true;if(e.auto_show!=null)r=e.auto_show;n.onAdd=function(){var r=t.createElement("div");r.style.borderStyle="none";r.style.borderWidth="0px";r.style.position="absolute";r.style.zIndex=100;r.innerHTML=e.content;n.el=r;var i=this.getPanes();if(!e.layer){e.layer="overlayLayer"}var s=i[e.layer];s.appendChild(r);var o=["contextmenu","DOMMouseScroll","dblclick","mousedown"];for(var u=0;u<o.length;u++){(function(e,t){google.maps.event.addDomListener(e,t,function(e){if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all){e.cancelBubble=true;e.returnValue=false}else{e.stopPropagation()}})})(r,o[u])}google.maps.event.trigger(this,"ready")};n.draw=function(){var t=this.getProjection();var i=t.fromLatLngToDivPixel(new google.maps.LatLng(e.lat,e.lng));e.horizontalOffset=e.horizontalOffset||0;e.verticalOffset=e.verticalOffset||0;var s=n.el;var o=s.children[0];var u=o.clientHeight;var a=o.clientWidth;switch(e.verticalAlign){case"top":s.style.top=i.y-u+e.verticalOffset+"px";break;default:case"middle":s.style.top=i.y-u/2+e.verticalOffset+"px";break;case"bottom":s.style.top=i.y+e.verticalOffset+"px";break}switch(e.horizontalAlign){case"left":s.style.left=i.x-a+e.horizontalOffset+"px";break;default:case"center":s.style.left=i.x-a/2+e.horizontalOffset+"px";break;case"right":s.style.left=i.x+e.horizontalOffset+"px";break}s.style.display=r?"block":"none";if(!r){e.show.apply(this,[s])}};n.onRemove=function(){var t=n.el;if(e.remove){e.remove.apply(this,[t])}else{n.el.parentNode.removeChild(n.el);n.el=null}};i.overlays.push(n);return n};this.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++){if(this.overlays[t]===e){this.overlays[t].setMap(null);this.overlays.splice(t,1);break}}};this.removeOverlays=function(){for(var e=0,t;t=i.overlays[e];e++){t.setMap(null)}i.overlays=[]};this.drawPolyline=function(e){var t=[];var n=e.path;if(n.length){if(n[0][0]===undefined){t=n}else{for(var i=0,s;s=n[i];i++){t.push(new google.maps.LatLng(s[0],s[1]))}}}var o={map:this.map,path:t,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,geodesic:e.geodesic,clickable:true,editable:false,visible:true};if(e.hasOwnProperty("clickable"))o.clickable=e.clickable;if(e.hasOwnProperty("editable"))o.editable=e.editable;if(e.hasOwnProperty("icons"))o.icons=e.icons;if(e.hasOwnProperty("zIndex"))o.zIndex=e.zIndex;var u=new google.maps.Polyline(o);var a=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var f=0;f<a.length;f++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})}})(u,a[f])}this.polylines.push(u);r.fire("polyline_added",u,this);return u};this.removePolyline=function(e){for(var t=0;t<this.polylines.length;t++){if(this.polylines[t]===e){this.polylines[t].setMap(null);this.polylines.splice(t,1);r.fire("polyline_removed",e,this);break}}};this.removePolylines=function(){for(var e=0,t;t=i.polylines[e];e++){t.setMap(null)}i.polylines=[]};this.drawCircle=function(e){e=extend_object({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e);delete e.lat;delete e.lng;var t=new google.maps.Circle(e);var n=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var r=0;r<n.length;r++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})}})(t,n[r])}this.polygons.push(t);return t};this.drawRectangle=function(e){e=extend_object({map:this.map},e);var t=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]));e.bounds=t;var n=new google.maps.Rectangle(e);var r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var i=0;i<r.length;i++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})}})(n,r[i])}this.polygons.push(n);return n};this.drawPolygon=function(e){var t=false;if(e.hasOwnProperty("useGeoJSON"))t=e.useGeoJSON;delete e.useGeoJSON;e=extend_object({map:this.map},e);if(t==false)e.paths=[e.paths.slice(0)];if(e.paths.length>0){if(e.paths[0].length>0){e.paths=array_flat(array_map(e.paths,arrayToLatLng,t))}}var n=new google.maps.Polygon(e);var i=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var s=0;s<i.length;s++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})}})(n,i[s])}this.polygons.push(n);r.fire("polygon_added",n,this);return n};this.removePolygon=function(e){for(var t=0;t<this.polygons.length;t++){if(this.polygons[t]===e){this.polygons[t].setMap(null);this.polygons.splice(t,1);r.fire("polygon_removed",e,this);break}}};this.removePolygons=function(){for(var e=0,t;t=i.polygons[e];e++){t.setMap(null)}i.polygons=[]};this.getFromFusionTables=function(e){var t=e.events;delete e.events;var n=e;var r=new google.maps.FusionTablesLayer(n);for(var i in t){(function(e,n){google.maps.event.addListener(e,n,function(e){t[n].apply(this,[e])})})(r,i)}this.layers.push(r);return r};this.loadFromFusionTables=function(e){var t=this.getFromFusionTables(e);t.setMap(this.map);return t};this.getFromKML=function(e){var t=e.url;var n=e.events;delete e.url;delete e.events;var r=e;var i=new google.maps.KmlLayer(t,r);for(var s in n){(function(e,t){google.maps.event.addListener(e,t,function(e){n[t].apply(this,[e])})})(i,s)}this.layers.push(i);return i};this.loadFromKML=function(e){var t=this.getFromKML(e);t.setMap(this.map);return t};var M,_;this.getRoutes=function(e){switch(e.travelMode){case"bicycling":M=google.maps.TravelMode.BICYCLING;break;case"transit":M=google.maps.TravelMode.TRANSIT;break;case"driving":M=google.maps.TravelMode.DRIVING;break;default:M=google.maps.TravelMode.WALKING;break}if(e.unitSystem==="imperial"){_=google.maps.UnitSystem.IMPERIAL}else{_=google.maps.UnitSystem.METRIC}var t={avoidHighways:false,avoidTolls:false,optimizeWaypoints:false,waypoints:[]};var n=extend_object(t,e);n.origin=/string/.test(typeof e.origin)?e.origin:new google.maps.LatLng(e.origin[0],e.origin[1]);n.destination=/string/.test(typeof e.destination)?e.destination:new google.maps.LatLng(e.destination[0],e.destination[1]);n.travelMode=M;n.unitSystem=_;delete n.callback;var r=this;var i=new google.maps.DirectionsService;i.route(n,function(t,n){if(n===google.maps.DirectionsStatus.OK){for(var i in t.routes){if(t.routes.hasOwnProperty(i)){r.routes.push(t.routes[i])}}}if(e.callback){e.callback(r.routes)}})};this.removeRoutes=function(){this.routes=[]};this.getElevations=function(e){e=extend_object({locations:[],path:false,samples:256},e);if(e.locations.length>0){if(e.locations[0].length>0){e.locations=array_flat(array_map([e.locations],arrayToLatLng,false))}}var t=e.callback;delete e.callback;var n=new google.maps.ElevationService;if(!e.path){delete e.path;delete e.samples;n.getElevationForLocations(e,function(e,n){if(t&&typeof t==="function"){t(e,n)}})}else{var r={path:e.locations,samples:e.samples};n.getElevationAlongPath(r,function(e,n){if(t&&typeof t==="function"){t(e,n)}})}};this.cleanRoute=this.removePolylines;this.drawRoute=function(e){var t=this;this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,callback:function(n){if(n.length>0){t.drawPolyline({path:n[n.length-1].overview_path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight});if(e.callback){e.callback(n[n.length-1])}}}})};this.travelRoute=function(e){if(e.origin&&e.destination){this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,callback:function(t){if(t.length>0&&e.start){e.start(t[t.length-1])}if(t.length>0&&e.step){var n=t[t.length-1];if(n.legs.length>0){var r=n.legs[0].steps;for(var i=0,s;s=r[i];i++){s.step_number=i;e.step(s,n.legs[0].steps.length-1)}}}if(t.length>0&&e.end){e.end(t[t.length-1])}}})}else if(e.route){if(e.route.legs.length>0){var t=e.route.legs[0].steps;for(var n=0,r;r=t[n];n++){r.step_number=n;e.step(r)}}}};this.drawSteppedRoute=function(e){if(e.origin&&e.destination){this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,callback:function(t){if(t.length>0&&e.start){e.start(t[t.length-1])}if(t.length>0&&e.step){var n=t[t.length-1];if(n.legs.length>0){var r=n.legs[0].steps;for(var s=0,o;o=r[s];s++){o.step_number=s;i.drawPolyline({path:o.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight});e.step(o,n.legs[0].steps.length-1)}}}if(t.length>0&&e.end){e.end(t[t.length-1])}}})}else if(e.route){if(e.route.legs.length>0){var t=e.route.legs[0].steps;for(var n=0,r;r=t[n];n++){r.step_number=n;i.drawPolyline({path:r.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight});e.step(r)}}}};this.checkGeofence=function(e,t,n){return n.containsLatLng(new google.maps.LatLng(e,t))};this.checkMarkerGeofence=function(e,t){if(e.fences){for(var n=0,r;r=e.fences[n];n++){var s=e.getPosition();if(!i.checkGeofence(s.lat(),s.lng(),r)){t(e,r)}}}};this.addLayer=function(e,t){t=t||{};var n;switch(e){case"weather":this.singleLayers.weather=n=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=n=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=n=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=n=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=n=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=n=new google.maps.panoramio.PanoramioLayer;n.setTag(t.filter);delete t.filter;if(t.click){google.maps.event.addListener(n,"click",function(e){t.click(e);delete t.click})}break;case"places":this.singleLayers.places=n=new google.maps.places.PlacesService(this.map);if(t.search||t.nearbySearch){var r={bounds:t.bounds||null,keyword:t.keyword||null,location:t.location||null,name:t.name||null,radius:t.radius||null,rankBy:t.rankBy||null,types:t.types||null};if(t.search){n.search(r,t.search)}if(t.nearbySearch){n.nearbySearch(r,t.nearbySearch)}}if(t.textSearch){var i={bounds:t.bounds||null,location:t.location||null,query:t.query||null,radius:t.radius||null};n.textSearch(i,t.textSearch)}break}if(n!==undefined){if(typeof n.setOptions=="function"){n.setOptions(t)}if(typeof n.setMap=="function"){n.setMap(this.map)}return n}};this.removeLayer=function(e){if(typeof e=="string"&&this.singleLayers[e]!==undefined){this.singleLayers[e].setMap(null);delete this.singleLayers[e]}else{for(var t=0;t<this.layers.length;t++){if(this.layers[t]===e){this.layers[t].setMap(null);this.layers.splice(t,1);break}}}};this.toImage=function(e){var e=e||{};var t={};t["size"]=e["size"]||[this.el.clientWidth,this.el.clientHeight];t["lat"]=this.getCenter().lat();t["lng"]=this.getCenter().lng();if(this.markers.length>0){t["markers"]=[];for(var n=0;n<this.markers.length;n++){t["markers"].push({lat:this.markers[n].getPosition().lat(),lng:this.markers[n].getPosition().lng()})}}if(this.polylines.length>0){var i=this.polylines[0];t["polyline"]={};t["polyline"]["path"]=google.maps.geometry.encoding.encodePath(i.getPath());t["polyline"]["strokeColor"]=i.strokeColor;t["polyline"]["strokeOpacity"]=i.strokeOpacity;t["polyline"]["strokeWeight"]=i.strokeWeight}return r.staticMapURL(t)};this.addMapType=function(e,t){if(t.hasOwnProperty("getTileUrl")&&typeof t["getTileUrl"]=="function"){t.tileSize=t.tileSize||new google.maps.Size(256,256);var n=new google.maps.ImageMapType(t);this.map.mapTypes.set(e,n)}else{throw"'getTileUrl' function required."}};this.addOverlayMapType=function(e){if(e.hasOwnProperty("getTile")&&typeof e["getTile"]=="function"){var t=e.index;delete e.index;this.map.overlayMapTypes.insertAt(t,e)}else{throw"'getTile' function required."}};this.removeOverlayMapType=function(e){this.map.overlayMapTypes.removeAt(e)};this.addStyle=function(e){var t=new google.maps.StyledMapType(e.styles,e.styledMapName);this.map.mapTypes.set(e.mapTypeId,t)};this.setStyle=function(e){this.map.setMapTypeId(e)};this.createPanorama=function(e){if(!e.hasOwnProperty("lat")||!e.hasOwnProperty("lng")){e.lat=this.getCenter().lat();e.lng=this.getCenter().lng()}this.panorama=r.createPanorama(e);this.map.setStreetView(this.panorama);return this.panorama};this.on=function(e,t){return r.on(e,this,t)};this.off=function(e){r.off(e,this)}};r.createPanorama=function(e){var t=n(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng);delete e.el;delete e.context;delete e.lat;delete e.lng;var r=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"];var i=extend_object({visible:true},e);for(var s=0;s<r.length;s++){delete i[r[s]]}var o=new google.maps.StreetViewPanorama(t,i);for(var s=0;s<r.length;s++){(function(t,n){if(e[n]){google.maps.event.addListener(t,n,function(){e[n].apply(this)})}})(o,r[s])}return o};r.Route=function(e){this.map=e.map;this.route=e.route;this.step_count=0;this.steps=this.route.legs[0].steps;this.steps_length=this.steps.length;this.polyline=this.map.drawPolyline({path:new google.maps.MVCArray,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}).getPath();this.back=function(){if(this.step_count>0){this.step_count--;var e=this.route.legs[0].steps[this.step_count].path;for(var t in e){if(e.hasOwnProperty(t)){this.polyline.pop()}}}};this.forward=function(){if(this.step_count<this.steps_length){var e=this.route.legs[0].steps[this.step_count].path;for(var t in e){if(e.hasOwnProperty(t)){this.polyline.push(e[t])}}this.step_count++}}};r.geolocate=function(e){var t=e.always||e.complete;if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(n){e.success(n);if(t){t()}},function(n){e.error(n);if(t){t()}},e.options)}else{e.not_supported();if(t){t()}}};r.geocode=function(e){this.geocoder=new google.maps.Geocoder;var t=e.callback;if(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")){e.latLng=new google.maps.LatLng(e.lat,e.lng)}delete e.lat;delete e.lng;delete e.callback;this.geocoder.geocode(e,function(e,n){t(e,n)})};r.staticMapURL=function(e){function p(e,t){if(e[0]==="#"){e=e.replace("#","0x");if(t){t=parseFloat(t);t=Math.min(1,Math.max(t,0));if(t===0){return"0x00000000"}t=(t*255).toString(16);if(t.length===1){t+=t}e=e.slice(0,8)+t}}return e}var t=[];var n;var r="http://maps.googleapis.com/maps/api/staticmap";if(e.url){r=e.url;delete e.url}r+="?";var i=e.markers;delete e.markers;if(!i&&e.marker){i=[e.marker];delete e.marker}var s=e.polyline;delete e.polyline;if(e.center){t.push("center="+e.center);delete e.center}else if(e.address){t.push("center="+e.address);delete e.address}else if(e.lat){t.push(["center=",e.lat,",",e.lng].join(""));delete e.lat;delete e.lng}else if(e.visible){var o=encodeURI(e.visible.join("|"));t.push("visible="+o)}var u=e.size;if(u){if(u.join){u=u.join("x")}delete e.size}else{u="630x300"}t.push("size="+u);if(!e.zoom){e.zoom=15}var a=e.hasOwnProperty("sensor")?!!e.sensor:true;delete e.sensor;t.push("sensor="+a);for(var f in e){if(e.hasOwnProperty(f)){t.push(f+"="+e[f])}}if(i){var l,c;for(var h=0;n=i[h];h++){l=[];if(n.size&&n.size!=="normal"){l.push("size:"+n.size)}else if(n.icon){l.push("icon:"+encodeURI(n.icon))}if(n.color){l.push("color:"+n.color.replace("#","0x"))}if(n.label){l.push("label:"+n.label[0].toUpperCase())}c=n.address?n.address:n.lat+","+n.lng;if(l.length||h===0){l.push(c);l=l.join("|");t.push("markers="+encodeURI(l))}else{l=t.pop()+encodeURI("|"+c);t.push(l)}}}if(s){n=s;s=[];if(n.strokeWeight){s.push("weight:"+parseInt(n.strokeWeight,10))}if(n.strokeColor){var d=p(n.strokeColor,n.strokeOpacity);s.push("color:"+d)}if(n.fillColor){var v=p(n.fillColor,n.fillOpacity);s.push("fillcolor:"+v)}var m=n.path;if(m.join){for(var g=0,y;y=m[g];g++){s.push(y.join(","))}}else{s.push("enc:"+m)}s=s.join("|");t.push("path="+encodeURI(s))}t=t.join("&");return r+t};r.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"];r.on=function(e,t,n){if(r.custom_events.indexOf(e)==-1){return google.maps.event.addListener(t,e,n)}else{var i={handler:n,eventName:e};t.registered_events[e]=t.registered_events[e]||[];t.registered_events[e].push(i);return i}};r.off=function(e,t){if(r.custom_events.indexOf(e)==-1){google.maps.event.clearListeners(t,e)}else{t.registered_events[e]=[]}};r.fire=function(e,t,n){if(r.custom_events.indexOf(e)==-1){google.maps.event.trigger(t,e,Array.prototype.slice.apply(arguments).slice(2))}else{if(e in n.registered_events){var i=n.registered_events[e];for(var s=0;s<i.length;s++){(function(e,t,n){e.apply(t,[n])})(i[s]["handler"],n,t)}}}};if(!google.maps.Polygon.prototype.getBounds){google.maps.Polygon.prototype.getBounds=function(e){var t=new google.maps.LatLngBounds;var n=this.getPaths();var r;for(var i=0;i<n.getLength();i++){r=n.getAt(i);for(var s=0;s<r.getLength();s++){t.extend(r.getAt(s))}}return t}}if(!google.maps.Polygon.prototype.containsLatLng){google.maps.Polygon.prototype.containsLatLng=function(e){var t=this.getBounds();if(t!==null&&!t.contains(e)){return false}var n=false;var r=this.getPaths().getLength();for(var i=0;i<r;i++){var s=this.getPaths().getAt(i);var o=s.getLength();var u=o-1;for(var a=0;a<o;a++){var f=s.getAt(a);var l=s.getAt(u);if(f.lng()<e.lng()&&l.lng()>=e.lng()||l.lng()<e.lng()&&f.lng()>=e.lng()){if(f.lat()+(e.lng()-f.lng())/(l.lng()-f.lng())*(l.lat()-f.lat())<e.lat()){n=!n}}u=a}}return n}}google.maps.LatLngBounds.prototype.containsLatLng=function(e){return this.contains(e)};google.maps.Marker.prototype.setFences=function(e){this.fences=e};google.maps.Marker.prototype.addFence=function(e){this.fences.push(e)};return r}(this);var coordsToLatLngs=function(e,t){var n=e[0];var r=e[1];if(t){n=e[1];r=e[0]}return new google.maps.LatLng(n,r)};var arrayToLatLng=function(e,t){for(var n=0;n<e.length;n++){if(e[n].length>0&&typeof e[n][0]!="number"){e[n]=arrayToLatLng(e[n],t)}else{e[n]=coordsToLatLngs(e[n],t)}}return e};var extend_object=function(e,t){if(e===t)return e;for(var n in t){e[n]=t[n]}return e};var replace_object=function(e,t){if(e===t)return e;for(var n in t){if(e[n]!=undefined)e[n]=t[n]}return e};var array_map=function(e,t){var n=Array.prototype.slice.call(arguments,2);if(Array.prototype.map&&e.map===Array.prototype.map){return Array.prototype.map.call(e,function(e){callback_params=n;callback_params.splice(0,0,e);return t.apply(this,callback_params)})}else{var r=[];var i=e.length;for(var s=0;s<i;s++){callback_params=n;callback_params=callback_params.splice(0,0,e[s]);r.push(t.apply(this,callback_params))}return r}};var array_flat=function(e){new_array=[];for(var t=0;t<e.length;t++){new_array=new_array.concat(e[t])}return new_array}}else{throw"Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true."}