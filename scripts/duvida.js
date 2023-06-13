function prepareEmail(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  var form = document.getElementById("myForm")
  var name = form.elements["name"].value
  var email = form.elements["email"].value
  var mensagem = form.elements["mensagem"].value

  // Formata o corpo do e-mail
  var body = "Nome: " + name + "\n" +
             "E-mail: " + email + "\n" +
             "Mensagem: " + mensagem;

  // Abre o cliente de e-mail padrão com o corpo do e-mail preenchido
  window.location.href = "mailto:edsonbaierle@gmail.com?body=" + encodeURIComponent(body);
}