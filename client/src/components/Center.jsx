import React from "react";
import img from "../image/amazon--img3.jpg";
import img2 from "../image/amazon--img4.jpeg";
import Products from "./Products";

export default function Center() {
  return (
    <div className="center--main">
      <div className="center--home">
        <div className="center--top--img">
          <img src={img} alt="image" className="center--amazon--img" />
        </div>
        <div className="pro1 mar-top">
          <Products
            id={1}
            img="https://m.media-amazon.com/images/I/71VbHaAqbML._SX679_.jpg"
            detail="Apple IPad Air 10th gen 256gb"
            price={83999}
            off="(10% off)"
            rating={4}
          />
          <Products
            id={2}
            img="https://m.media-amazon.com/images/I/61WFNqf8hVL._SX679_.jpg"
            detail="Sony WH-XB910N headphones"
            price={21999}
            off="(6% off)"
            rating={5}
          />
          <Products
            id={3}
            img="https://m.media-amazon.com/images/I/61nBzBREzGL._SX679_.jpg"
            detail="Samsung watch 4 "
            price={10999}
            off="(12% off)"
            rating={4}
          />
          <Products
            id={4}
            img="https://m.media-amazon.com/images/I/71zFRCcMS2L._SX679_.jpg"
            detail="Apple Iphone 15 plus"
            price={74999}
            off="(12% off)"
            rating={4}
          />
        </div>
        <img src={img2} alt="" className="center--img2" />
        <div className="pro1">
          <Products
            id={5}
            img="https://m.media-amazon.com/images/I/51Z8saviw1L._UX679_.jpg"
            detail="Puma T-shirt for men"
            price={899}
            off="(5% off)"
            rating={4}
          />
          <Products
            id={6}
            img="https://m.media-amazon.com/images/I/61S12C04P5L._UX679_.jpg"
            detail="Red Tape shirt for men"
            price={1100}
            off="(8% off)"
            rating={3}
          />
          <Products
            id={7}
            img="https://m.media-amazon.com/images/I/81N4UNEstQL._UY879_.jpg"
            detail="BIBA Women's Regular Kurta"
            price={2499}
            off="(11% off)"
            rating={5}
          />
          <Products
            id={8}
            img="https://m.media-amazon.com/images/I/71GD8wzJqNL._UX679_.jpg"
            detail="Women's sweat shirt"
            price={954}
            off="(18% off)"
            rating={4}
          />
        </div>
        <div className="pro1">
          <Products
            id={9}
            img="https://m.media-amazon.com/images/I/51xsyVSt8XL._UX679_.jpg"
            detail="Tommy Hilfiger Horizon Plus Laptop Backpack"
            price={1780}
            off="(9% off)"
            rating={4}
          />
          <Products
            id={10}
            img="https://m.media-amazon.com/images/I/51DzT463EWL._SX679_.jpg"
            detail="Borosil Coffeemate Insulated mug"
            price={681}
            off="(10% off)"
            rating={4}
          />
          <Products
            id={11}
            img="https://m.media-amazon.com/images/I/615YaAiA-ML._SX679_.jpg"
            detail="Oculus Quest 2 VR headset"
            price={41999}
            off="(2% off)"
            rating={5}
          />
        </div>
        <div className="pro1">
          <Products
            id={12}
            img="https://m.media-amazon.com/images/I/61sDAkpGhFL._UY695_.jpg"
            detail="Lacoste L001 Branded Trainers "
            price={14381}
            off="(5% off)"
            rating={4}
          />
          <Products
            id={13}
            img="https://m.media-amazon.com/images/I/51vs0bFk-FL._UY695_.jpg"
            detail="Lacoste Mid Leather Trainers"
            price={13679}
            off="(6% off)"
            rating={5}
          />
          <Products
            id={14}
            img="https://m.media-amazon.com/images/I/51vTZitEeoL._UX679_.jpg"
            detail="Puma regular track pants"
            price={1834}
            off="(12% off)"
            rating={4}
          />
          <Products
            id={15}
            img="https://m.media-amazon.com/images/I/61dExkzwWXL._UY879_.jpg"
            detail="Cotton Cargo Lower Track Pant"
            price={932}
            off="(15% off)"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}
