import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Inscrição realizada com sucesso! Verifique seu email.");
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fique por dentro das{" "}
            <span className="bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] bg-clip-text text-transparent">
              novidades
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receba histórias inspiradoras, dicas para atletas e oportunidades exclusivas diretamente no seu email
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            {/* Input */}
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-4 rounded-lg border border-gray-300 focus:border-[var(--color-roxo)] focus:ring-1 focus:ring-[var(--color-roxo)] transition-all duration-200 outline-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="sm:w-auto h-12 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] hover:opacity-90 transition-opacity duration-200"
            >
              Inscrever-se
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Não compartilhamos seus dados. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
