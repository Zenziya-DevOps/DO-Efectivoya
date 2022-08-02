import React from "react";
import './style.css'

const Card = () => {
  return (
    <section className="card-total">
      <div className="card-img-box">
        <img
          src="https://i.ibb.co/PcdrPRR/depositphotos-12196477-stock-photo-smiling-men-isolated-on-the.jpg"
          alt=""
        />
      </div>
      <div className="footer-text">
        <p>
        "Excelente servicio saque un prestamo y no me movi de mi casa. mucho mejor q el banco"
        </p>
      </div>
      <h2>-Kevin</h2>
      <p className="loun-text">Con su prestamo compro un nuevo celu</p>
    </section>
  );
};

export default Card;
