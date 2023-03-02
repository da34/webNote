const url: string = 'https://api.thecatapi.com/v1/images/search';

const button: HTMLButtonElement | null = document.querySelector('button');

const tableBody: HTMLTableElement | null =
  document.querySelector('#table-body');

interface CarType {
  id: string;
  url: string;
  width: number;
  height: number;
  test?: boolean;
}

class Cat implements CarType {
  id: string;
  url: string;
  width: number;
  height: number;
  constructor(id: string, url: string, width: number, height: number) {
    this.id = id;
    this.url = url;
    this.width = width;
    this.height = height;
  }
}

class WebDisplay {
  public static addData(data: CarType): void {
    const car: Cat = new Cat(data.id, data.url, data.width, data.height);
    const tableRow: HTMLTableRowElement = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${car.id}</td>
      <td><img src="${car.url}" /></td>
      <td>高度${car.height}</td>
      <td>宽度${car.width}</td>
      <td>地址${car.url}</td>
      <td><a href="#">X</a></td>
    `;
    tableBody?.appendChild(tableRow);
  }
  public static deleteData(button: HTMLAnchorElement) {
    const td = button.parentElement as HTMLTableCellElement;
    const tr = td.parentElement as HTMLTableRowElement;
    tr.remove();
  }
}

async function getJSON<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const json: Promise<T> = await res.json();
  return json;
}

async function getData(): Promise<void> {
  try {
    const json: CarType[] = await getJSON<CarType[]>(url);
    const data: CarType = json[0];
    WebDisplay.addData(data);
    console.log(11111);
  } catch (err: Error | unknown) {
    let message: string;
    if (err instanceof Error) {
      message = err.message;
    } else {
      message = String(err);
    }
    console.log(message);
  }
}
button?.addEventListener<'click'>('click', getData);

tableBody?.addEventListener<'click'>('click', function (ev: MouseEvent) {
  WebDisplay.deleteData(ev.target as HTMLAnchorElement);
});
