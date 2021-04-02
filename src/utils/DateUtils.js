function getDatePresenterFormated() {
  const [day, month] = new Date().toLocaleDateString("pt-BR").split("/");

  return `${day}/${month}`;
}



export default getDatePresenterFormated;
