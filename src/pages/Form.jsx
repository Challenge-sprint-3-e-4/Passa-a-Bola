import "../index.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Form() {
  const [formData, setFormData] = useState({
    clube: "",
    localizacao: "",
    contato: "",
  });

  // Atualiza os valores dos inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Quando enviar o formulário
  const handleSubmit = (e) => {
  e.preventDefault();

  Swal.fire({
    title: "Formulário enviado!",
    html: `
      <p style="font-size:14px; color:#555; margin-top:4px;">
        Entraremos em contato em breve!
      </p>
      <br/>
      <b>Nome do Clube:</b> ${formData.clube}<br/>
      <b>Localização:</b> ${formData.localizacao}<br/>
      <b>Contato:</b> ${formData.contato}
    `,
    icon: "success",
    confirmButtonText: "OK",
  });

  setFormData({ clube: "", localizacao: "", contato: "" });
};

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Solicitação de Parceria
        </h2>

        <label className="block mb-4">
          <span className="text-gray-700">Nome do clube:</span>
          <input
            type="text"
            name="clube"
            value={formData.clube}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Localização:</span>
          <input
            type="text"
            name="localizacao"
            value={formData.localizacao}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Meio de contato:</span>
          <input
            type="text"
            name="contato"
            value={formData.contato}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-green-500 text-white font-bold rounded-xl shadow-md hover:scale-105 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}