import React from "react";

const Contact = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="col-md-8 mx-auto">
          <form>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form4Example1"
                className="form-control"
                placeholder="Tu nombre"
                required
              />
              <label className="form-label" for="form4Example1"></label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="form4Example2"
                className="form-control"
                placeholder="Tu correo electrónico"
                required
              />
              <label className="form-label" for="form4Example2"></label>
            </div>

            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form4Example3"
                rows="4"
                placeholder="Escribe tu mensaje"
                required
              ></textarea>
              <label className="form-label" for="form4Example3"></label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
