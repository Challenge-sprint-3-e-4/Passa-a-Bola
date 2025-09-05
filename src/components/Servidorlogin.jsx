// Servidor simulado sem dependências externas
export function ServidorLogin({ username, password }) {
  if (username === "admin" && password === "senha123") {
    // Gerar token simples (string aleatória ou base64)
    const token = btoa(`${username}:${Date.now()}`); 
    return { ok: true, token };
  } else {
    return { ok: false, message: "Credenciais inválidas." };
  }
}
