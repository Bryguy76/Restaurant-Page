export function contactContent(contentArea) {
  const telephone = document.createElement('p');
  const number = document.createTextNode('(303) 123-1223');
  telephone.appendChild(number);
  contentArea.appendChild(telephone);
  const email = document.createElement('p');
  const emailAddress = document.createTextNode('help@bourgeois.com');
  email.appendChild(emailAddress);
  contentArea.appendChild(email);
  const address = document.createElement('p');
  const street = document.createTextNode('123 S Main St, Denver, CO, 80217');
  address.appendChild(street);
  contentArea.appendChild(address);
}
