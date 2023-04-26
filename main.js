/*This code is creating a customer card for each customer in a list called "customers". 
It uses the moment library to format the date of birth and registration date of each 
customer. The customer card includes an image, name, email, street address, city, state, 
zip code, date of birth, and date of registration The customer card is then appended to 
an HTML element with the ID of "customerProfiles"..*/


let customerProfiles = document.querySelector("#customerProfiles")

for (let customer of customers) {
    let formattedDOB = moment(customer.dob.date).format("MMM Do, YYYY");
    let formattedCustDate = moment(customer.registered.date).format("MMM Do, YYYY");
    let customerCard = document.createElement('div');
    customerCard.classList.add('customerCard');
    
    // ADD CUSTOMER PICTURE 
    let customerPicture = document.createElement("img");
    customerPicture.src = customer.picture.large;
    customerCard.appendChild(customerPicture);
    
    // ADD CUSTOMER FULL NAME
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerCard.appendChild(customerName);

    // ADD CUSTOMER EMAIL
    let customerEmail = document.createElement('p');
    customerEmail.innerText = customer.email;
    customerCard.appendChild(customerEmail);


    // ADD CUSTOMER ADDRESS
    let customerStreetAddress = document.createElement('p');
    customerStreetAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    customerCard.appendChild(customerStreetAddress);

    let customerCityStateZip = document.createElement('p');
    customerCityStateZip.innerText = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`;
    customerCard.appendChild(customerCityStateZip);

    // ADD CUSTOMER DATE OF BIRTH DOB
    let customerDOB = document.createElement('p');
    customerDOB.innerText = `DOB: ${formattedDOB}`;
    customerCard.appendChild(customerDOB);

    let customerSince = document.createElement('p');
    customerSince.innerText = `Customer Since: ${formattedCustDate}`;
    customerCard.appendChild(customerSince);

    customerProfiles.appendChild(customerCard);
}





