console.log("script.js loaded");

window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	console.log('In init()');
	// setup event listeners for forms, etc.
	document.caprateForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var id = document.caprateForm.id.value;
		console.log(id);
		if (!isNaN(id) && id > 0) {
			getPropertyById(id);
		}

	});
	document.allPropertiesForm.lookup.addEventListener('click', function(event) {
		console.log("button clicked");
		event.preventDefault();
		getAllProperties();
	});
	
 document.newPropertyForm.addProperty.addEventListener('click', function(evt) {
	evt.preventDefault();
	let p = document.newPropertyForm;
	let newProperty = {
	address: p.address.value,
	city: p.city.value,
	state: p.state.value,
	marketPrice: p.marketPrice.value,
	expectedCashflow: p.expectedCashflow.value,
	capRate: p.capRate.value,
	propPhoto: p.propPhoto.value
	};
createProperty(newProperty);
});

document.updatePropertyForm.updateProperty.addEventListener('click', function(event) {
	event.preventDefault();
	let up = document.updatePropertyForm;
	let updatedProperty = {
	address: p.address.value,
	city: p.city.value,
	state: p.state.value,
	marketPrice: p.marketPrice.value,
	expectedCashflow: p.expectedCashflow.value,
	capRate: p.capRate.value,
	propPhoto: p.propPhoto.value
	};
	updateProperty(updatedProperty);
	
});
}
	function getPropertyById(id) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/properties/' + id);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					let property = JSON.parse(xhr.responseText);
					console.log(property);
					displayProperty(property);
				}
				else if (xhr.status === 404) {
					displayError("Property" + id + "not found.")
				}
			}
		}
		xhr.send();
	}

function getAllProperties() {
	let xhr = new XMLHttpRequest();
	console.log("get all properties");
	xhr.open('GET', 'api/properties');
	console.log('here?');
	
	xhr.onreadystatechange = function() {
		console.log('who');
		if (xhr.readyState === 4) {
			console.log('this');
			if (xhr.status === 200) {
				let properties = JSON.parse(xhr.responseText);
				console.log(properties);
				table(properties);
			}
			else if (xhr.status === 404) {
				displayError("Invalid entry")
			}
		}
	}
	xhr.send();
}


	function displayError(msg) {
		var dataDiv = document.getElementById('propertyData');
		dataDiv.textContent = msg;
	}

	function displayProperty(property) {
		var dataDiv = document.getElementById('propertyData');
		dataDiv.textContent = '';
		let address = document.createElement('h1');
		address.textContent = property.address;
		dataDiv.appendChild(address);
		let city = document.createElement('h1');
		city.textContent = property.city;
		dataDiv.appendChild(city);
		let state = document.createElement('h1');
		state.textContent = property.state;
		dataDiv.appendChild(state);
		let mp = document.createElement('h1');
		mp.textContent = property.marketPrice;
		dataDiv.appendChild(mp);
		let cr = document.createElement('h1');
		cr.textContent = property.capRate;
		dataDiv.appendChild(cr);
		let pp = document.createElement('h1');
		pp.textContent = property.propPhoto;
		dataDiv.appendChild(pp);
	}

	//function displayAllProperties(properties) {
	//	for (property in properties) {
	//		var dataDiv = document.getElementById('allPropertyData');
	//		dataDiv.textContent = '';
	//		let address = document.createElement('h1');
	//		address.textContent = property.address;
	//		dataDiv.appendChild(address);
	//		let city = document.createElement('h1');
	//		city.textContent = property.city;
	//		dataDiv.appendChild(city);
	//		let state = document.createElement('h1');
	//		state.textContent = property.state;
	//		dataDiv.appendChild(state);
	//		let mp = document.createElement('h1');
	//		mp.textContent = property.marketPrice;
	//		dataDiv.appendChild(mp);
	//		let cr = document.createElement('h1');
	//		cr.textContent = property.capRate;
	//		dataDiv.appendChild(cr);
	//		let pp = document.createElement('h1');
	//		pp.textContent = property.propPhoto;
	//		dataDiv.appendChild(pp);
	//	}
	//}

	function table(properties) {
	var table = document.createElement('table');
	document.body.appendChild(table);
	var thead = document.createElement('thead');
	table.appendChild(thead);
	var trow = document.createElement('tr');
	table.appendChild(trow);
	var th1 = document.createElement('th');
	th1.textContent = 'Property Address';
	thead.appendChild(th1);
	var th2 = document.createElement('th');
	th2.textContent = 'Property City';
	thead.appendChild(th2);
	var th3 = document.createElement('th');
	th3.textContent = 'Property State';
	thead.appendChild(th3);
	var th4 = document.createElement('th');
	th4.textContent = 'Market Price';
	thead.appendChild(th4);
	var th5 = document.createElement('th');
	th5.textContent = 'Expected Cashflow';
	thead.appendChild(th5);
	var th6 = document.createElement('th');
	th6.textContent = 'Cap Rate';
	thead.appendChild(th6);
	var th7 = document.createElement('th');
	th7.textContent = 'Property Photo';
	thead.appendChild(th7);
	var tbody = document.createElement('body');
	table.appendChild(tbody);
	
	for (let i = 0; i < properties.length; i++){
		var tr = document.createElement('tr');
		tbody.appendChild(tr);
		var td1 = document.createElement('td');
		td1.textContent = properties[i].address;
		tr.appendChild(td1);
		var td2 = document.createElement('td');
		td2.textContent = properties[i].city;
		tr.appendChild(td2);
		var td3 = document.createElement('td');
		td3.textContent = properties[i].state;
		tr.appendChild(td3);
		var td4 = document.createElement('td');
		td4.textContent = properties[i].marketPrice;
		tr.appendChild(td4);
		var td5 = document.createElement('td');
		td5.textContent = properties[i].expectedCashflow;
		tr.appendChild(td5);
		var td6 = document.createElement('td');
		td6.textContent = properties[i].capRate;
		tr.appendChild(td6);
		var td7 = document.createElement('td');
		td7.textContent = properties[i].propPhoto;
		tr.appendChild(td7);
	}
	

}

function createProperty(newProperty) {
	
	console.log(newProperty);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/properties/');
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200 || xhr.status === 201) {
				let property = JSON.parse(xhr.responseText);
				console.log(xhr.getResponseHeader('Location'));
				console.log(property);
				displayProperty(property);	
			}
			else{
				console.error('Property created failed with status :' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newProperty));
}

function updateProperty(updatedProperty) {
	console.log(updatedProperty);
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/properties/');
	xhr.onreadystatechange = function() {
		
	}
}

