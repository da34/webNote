"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://api.thecatapi.com/v1/images/search';
const button = document.querySelector('button');
const tableBody = document.querySelector('#table-body');
class Cat {
    constructor(id, url, width, height) {
        this.id = id;
        this.url = url;
        this.width = width;
        this.height = height;
    }
}
class WebDisplay {
    static addData(data) {
        const car = new Cat(data.id, data.url, data.width, data.height);
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
      <td>${car.id}</td>
      <td><img src="${car.url}" /></td>
      <td>高度${car.height}</td>
      <td>宽度${car.width}</td>
      <td>地址${car.url}</td>
      <td><a href="#">X</a></td>
    `;
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tableRow);
    }
    static deleteData(button) {
        const td = button.parentElement;
        const tr = td.parentElement;
        tr.remove();
    }
}
function getJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        const json = yield res.json();
        return json;
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const json = yield getJSON(url);
            const data = json[0];
            WebDisplay.addData(data);
            console.log(11111);
        }
        catch (err) {
            let message;
            if (err instanceof Error) {
                message = err.message;
            }
            else {
                message = String(err);
            }
            console.log(message);
        }
    });
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', getData);
tableBody === null || tableBody === void 0 ? void 0 : tableBody.addEventListener('click', function (ev) {
    WebDisplay.deleteData(ev.target);
});
