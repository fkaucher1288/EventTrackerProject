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
	
	let portfolioDataDisplayButton = document.getElementById('portfolioDataButton');
	portfolioDataDisplayButton.addEventListener('click', function(event){
		event.preventDefault();
		getAllProperties();
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
				displayPortfolioData(properties);
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
	let updateButton = document.createElement('button');
	updateButton.textContent = 'Update Property';
	dataDiv.appendChild(updateButton);
	updateButton.addEventListener('click', function(event) {
		event.preventDefault();
		displayUpdatedPropertyForm(property);	
	});
	
	let deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete Property';
	dataDiv.appendChild(deleteButton);
	deleteButton.addEventListener('click', function(event) {
		event.preventDefault();
		deleteProperty(property);	
	});
}

function displayUpdatedPropertyForm(property) {
	let propertyFormData = document.getElementById('propertyData');
	propertyFormData.textContent = '';

	let updatePropertyFormTitle = document.createElement('h4');
	updatePropertyFormTitle.textContent = 'Update Property Form';
	propertyFormData.appendChild(updatePropertyFormTitle);

	let updatePropertyForm = document.createElement('form');
	updatePropertyForm.id = 'updatePropertyForm';
	updatePropertyForm.name = updatePropertyForm.id;
	propertyFormData.appendChild(updatePropertyForm);

	let addressLabel = document.createElement('label');
	addressLabel.for = 'addressField';
	addressLabel.textContent = 'Property Address: ';
	updatePropertyForm.appendChild(addressLabel);

	let addressInput = document.createElement('input');
	addressInput.class = 'updatePropertyFormInputFields';
	addressInput.type = 'text';
	addressInput.name = 'addressField';
	addressInput.value = property.address;
	updatePropertyForm.appendChild(addressInput);

	let addressBr = document.createElement('br');
	updatePropertyForm.appendChild(addressBr);

	let cityLabel = document.createElement('label');
	cityLabel.for = 'cityField';
	cityLabel.textContent = 'City: ';
	updatePropertyForm.appendChild(cityLabel);

	let cityInput = document.createElement('input');
	cityInput.class = 'updatePropertyFormInputFields';
	cityInput.type = 'text';
	cityInput.name = 'cityField';
	cityInput.value = property.city;
	updatePropertyForm.appendChild(cityInput);

	let cityBr = document.createElement('br');
	updatePropertyForm.appendChild(cityBr);

	let stateLabel = document.createElement('label');
	stateLabel.for = 'stateField';
	stateLabel.textContent = 'State: ';
	updatePropertyForm.appendChild(stateLabel);

	let stateInput = document.createElement('input');
	stateInput.class = 'updatePropertyFormInputFields';
	stateInput.type = 'text';
	stateInput.name = 'stateField';
	stateInput.value = property.state;
	updatePropertyForm.appendChild(stateInput);

	let stateBr = document.createElement('br');
	updatePropertyForm.appendChild(stateBr);

	let marketPriceLabel = document.createElement('label');
	marketPriceLabel.for = 'marketPriceField';
	marketPriceLabel.textContent = 'Market Price: ';
	updatePropertyForm.appendChild(marketPriceLabel);

	let marketPriceInput = document.createElement('input');
	marketPriceInput.class = 'updatePropertyFormInputFields';
	marketPriceInput.type = 'text';
	marketPriceInput.name = 'marketPriceField';
	marketPriceInput.value = property.marketPrice;
	updatePropertyForm.appendChild(marketPriceInput);

	let marketPriceBr = document.createElement('br');
	updatePropertyForm.appendChild(marketPriceBr);

	let expectedCashflowLabel = document.createElement('label');
	expectedCashflowLabel.for = 'expectedCashflowField';
	expectedCashflowLabel.textContent = 'Expected Cashflow: ';
	updatePropertyForm.appendChild(expectedCashflowLabel);

	let expectedCashflowInput = document.createElement('input');
	expectedCashflowInput.class = 'updatePropertyFormInputFields';
	expectedCashflowInput.type = 'text';
	expectedCashflowInput.name = 'expectedCashflowField';
	expectedCashflowInput.value = property.expectedCashflow;
	updatePropertyForm.appendChild(expectedCashflowInput);

	let expectedCashflowBr = document.createElement('br');
	updatePropertyForm.appendChild(expectedCashflowBr);

	let capRateLabel = document.createElement('label');
	capRateLabel.for = 'capRateField';
	capRateLabel.textContent = 'Cap Rate: ';
	updatePropertyForm.appendChild(capRateLabel);

	let capRateInput = document.createElement('input');
	capRateInput.class = 'updatePropertyFormInputFields';
	capRateInput.type = 'text';
	capRateInput.name = 'capRateField';
	capRateInput.value = property.capRate;
	updatePropertyForm.appendChild(capRateInput);

	let capRateBr = document.createElement('br');
	updatePropertyForm.appendChild(capRateBr);

	let propPhotoLabel = document.createElement('label');
	propPhotoLabel.for = 'propPhotoField';
	propPhotoLabel.textContent = 'Property Photo: ';
	updatePropertyForm.appendChild(propPhotoLabel);

	let propPhotoInput = document.createElement('input');
	propPhotoInput.class = 'updatePropertyFormInputFields';
	propPhotoInput.type = 'text';
	propPhotoInput.name = 'propPhotoField';
	propPhotoInput.value = property.propPhoto;
	updatePropertyForm.appendChild(propPhotoInput);

	let propPhotoBr = document.createElement('br');
	updatePropertyForm.appendChild(propPhotoBr);

	let updatePropertyButton = document.createElement('input');
	updatePropertyButton.type = 'submit';
	updatePropertyButton.name = 'updateProperty';
	updatePropertyButton.value = 'Update';

	updatePropertyForm.appendChild(updatePropertyButton);

	updatePropertyButton.addEventListener('click', function(e) {
		e.preventDefault();
		let pf = updatePropertyForm;

		property.address = pf.addressField.value;
		property.city = pf.cityField.value;
		property.state = pf.stateField.value;
		property.marketPrice = pf.marketPriceField.value;
		property.expectedCashflow = pf.expectedCashflowField.value;
		property.capRate = pf.capRateField.value;
		property.propPhoto = pf.propPhotoField.value;
		updateProperty(property);

	});

}

function deleteProperty(property) {
	let id = property.id;
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/properties/' + id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				console.log(property);
				console.log('Successfully Deleted');
			} else {
				console.error('Property failed to delete.');
			}
		}
	};
	xhr.send();
}

function displayPortfolioData(properties) {
	let portfolioDataDiv = document.getElementById('portfolioData');
	portfolioDataDiv.textContent = '';
	let portfolioDataTable = document.createElement('table');
	portfolioDataTable.id = 'portfolioTable';
	portfolioDataTable.name = portfolioDataTable.id;
	portfolioDataDiv.appendChild(portfolioDataTable);
	
	let thead = document.createElement('thead');
	portfolioDataTable.appendChild(thead);
	
	let trow = document.createElement('tr');
	thead.appendChild(trow);
	
	let totalProperties = document.createElement('th');
	totalProperties.textContent = "Properties";
	trow.appendChild(totalProperties);
	
	let totalValue = document.createElement('th');
	totalValue.textContent = "Total Portfolio Value";
	trow.appendChild(totalValue);
	
	let avgCapRate = document.createElement('th');
	avgCapRate.textContent = "Avg Portfolio Cap Rate";
	trow.appendChild(avgCapRate);
	
	
	let tBody = document.createElement('tbody');
	portfolioDataTable.appendChild(tBody);
	
	let row = document.createElement('tr');
	tBody.appendChild(row);
	
	let totalPropertiesCount = properties.length;
	
	let totalValueCount = 0;
	
	let avgCapRateCount = 0;
	
	let capRateTotal = 0;
	
	for(const property of properties) {
		totalValueCount += property.marketPrice;
		capRateTotal += property.capRate;
	}
		avgCapRateCount = Math.round((capRateTotal / totalPropertiesCount) * 100) / 100;
		
	let totalPropertiesNumber = document.createElement('td');
	totalPropertiesNumber.textContent = totalPropertiesCount;
	row.appendChild(totalPropertiesNumber);
	
	let totalValueNumber = document.createElement('td');
	totalValueNumber.textContent = totalValueCount;
	row.appendChild(totalValueNumber);
	
	let totalAvgCapRateNumber = document.createElement('td');
	totalAvgCapRateNumber.textContent = avgCapRateCount;
	row.appendChild(totalAvgCapRateNumber);
	
	
	
	
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

	for (let i = 0; i < properties.length; i++) {
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
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let property = JSON.parse(xhr.responseText);
				console.log(xhr.getResponseHeader('Location'));
				console.log(property);
				displayProperty(property);
			}
			else {
				console.error('Property created failed with status :' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newProperty));
}

function updateProperty(newProperty) {
	let id = newProperty.id;
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/properties/' + id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let property = JSON.parse(xhr.responseText);
				console.log(xhr.getResponseHeader('Location'));
				console.log(property);
				displayProperty(property);
			}
			else {
				console.error('Property created failed with status :' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newProperty));
}

