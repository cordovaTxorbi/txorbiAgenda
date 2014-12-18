/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
	
var contactos;
contactos = obtenerContactos();
console.log("Numero de contactos: " + contactos.length); 


var app = 
{
    // Application Constructor
    initialize: function() 
    {   	
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() 
    {
    	$(document).ready(function()
    	{
    		for (var i = 0; i < contactos.length; i++)
    		{
    			//$("#listaContactos").append("<li><a <a href='#' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>"+contactos[i].nombre+"</a></li>");
    			$("#listaContactos").append("<li id='"+contactos[i].id+"' class='ui-li-has-thumb ui-first-child'><a href='detalle.html' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><img src='img/logo.png'><h2>"+contactos[i].nombre+"</h2><p>"+contactos[i].telefono+"</p></a></li>");	
    		}  
    	});
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() 
    {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) 
    {
   
    }
};
app.initialize();