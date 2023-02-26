export function homeContent(contentArea) {
  const para = document.createElement('p');
  const text = document.createTextNode(
    "Since 2017, Bourgeois' has been a staple of the Denver community. Specializing in the food that we know best."
  );
  para.appendChild(text);
  contentArea.appendChild(para);
}
