/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */


export default class UserTable {
  #appendRow(obj, tableElement) {
    let row = tableElement.insertRow(); // <tr>
    Object.values(obj).forEach((value) => {
      let cell = row.insertCell();
      cell.innerText = value;
    });
    let cell = row.insertCell(); // <td>
    let button = document.createElement("button");
    button.innerText = "X";
    cell.appendChild(button);

    button.onclick = (event) => {
      row.remove();
    };
  }
  constructor(rows) {
    // в конструкторе и сформируем таблицу, т.к. в конструкторе происходит инициализация всех компонентов класса
    this.elem = document.createElement("table");
    rows.forEach(obj => this.#appendRow(obj, this.elem));
  }
}
