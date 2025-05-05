import React from "react";

export default function Home() {
  return (
    <div className="space-y-10 p-6">
      {/* Página Inicial */}
      <section className="bg-blue-900 text-white p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold">Empresa de Empréstimos Brasil</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Oferecendo soluções financeiras rápidas, seguras e acessíveis.
        </p>
        <button className="mt-6 bg-white text-blue-800 hover:bg-gray-200 px-4 py-2 rounded">
          Solicitar Empréstimo
        </button>
      </section>

      {/* Quem Somos */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quem Somos</h2>
        <div className="bg-white p-4 rounded shadow space-y-2">
          <p><strong>História:</strong> Atuando há mais de 10 anos no mercado financeiro.</p>
          <p><strong>Missão:</strong> Facilitar o acesso ao crédito de forma justa e transparente.</p>
          <p><strong>Visão:</strong> Ser referência nacional em soluções financeiras.</p>
          <p><strong>Valores:</strong> Ética, transparência, agilidade e respeito ao cliente.</p>
        </div>
      </section>

      {/* Serviços */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">Empréstimo Pessoal</div>
          <div className="bg-white p-4 rounded shadow">Empréstimo para Negativado</div>
          <div className="bg-white p-4 rounded shadow">Empréstimo com Garantia</div>
          <div className="bg-white p-4 rounded shadow">Empréstimo Consignado</div>
        </div>
      </section>

      {/* Clientes Satisfeitos */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Clientes Satisfeitos</h2>
        <div className="overflow-x-auto flex gap-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="min-w-[250px] bg-white p-4 rounded shadow">
              "Ótimo atendimento! Recomendo."
            </div>
          ))}
        </div>
      </section>

      {/* Solicitar Empréstimo */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Solicitar Empréstimo</h2>
        <form
          action="mailto:juridicareceita@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <input type="text" name="nome" placeholder="Nome completo" className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="E-mail" className="w-full p-2 border rounded" required />
          <input type="tel" name="telefone" placeholder="Telefone" className="w-full p-2 border rounded" required />
          <textarea name="mensagem" placeholder="Descreva sua necessidade" className="w-full p-2 border rounded" required></textarea>
          <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded">Enviar Solicitação</button>
        </form>
      </section>

      {/* Contato */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contato</h2>
        <p><strong>WhatsApp:</strong> (11) 95214-1001</p>
        <p><strong>Telefone Fixo:</strong> (11) 3123-4567</p>
        <p><strong>Email:</strong> juridicareceita@gmail.com</p>
        <p><strong>Endereço:</strong> Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</p>
        <iframe
          className="mt-4 w-full h-64 rounded"
          src="https://maps.google.com/maps?q=Av.%20Paulista,%201000&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
        ></iframe>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
        <div className="bg-white p-4 rounded shadow mb-2"><strong>Qual o prazo de liberação?</strong> Até 48 horas úteis após aprovação.</div>
        <div className="bg-white p-4 rounded shadow mb-2"><strong>Quais documentos são necessários?</strong> RG, CPF, comprovante de renda e residência.</div>
        <div className="bg-white p-4 rounded shadow mb-2"><strong>Posso solicitar com nome negativado?</strong> Sim, temos linhas específicas.</div>
      </section>

      {/* Rodapé */}
      <footer className="mt-10 border-t pt-6 text-sm text-center">
        <p><strong>Empresa de Empréstimos Brasil</strong> | CNPJ: 12.345.678/0001-99</p>
        <p>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</p>
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
// Copie e cole aqui o conteúdo do projeto React fornecido anteriormente
// Este arquivo deve conter o conteúdo JSX da landing page da empresa
