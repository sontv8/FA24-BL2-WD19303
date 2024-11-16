import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const data = [
  {
    id: "1",
    name: "Product 1",
    brand: "Brand 1",
    price: 1000,
    manufacture: "Vietnam",
    image: "https://picsum.photos/120/200",
  },
  {
    id: "2",
    name: "Product 2",
    brand: "Brand 2",
    price: 2000,
    manufacture: "England",
    image: "https://picsum.photos/120/200",
  },
  {
    id: "3",
    name: "Product 3",
    brand: "Brand 3",
    price: 3000,
    manufacture: "America",
    image: "https://picsum.photos/120/200",
  },
];

function App() {
  const [products, setProducts] = useState(data);
  console.log(products);

  return (
    <>
      <h1>Danh sách sản phẩm</h1>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ảnh sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Thương hiệu</th>
            <th>Nhà sản xuất</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
