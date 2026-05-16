export const loginData = {
  usuarioPadrao: {
    usuario: 'standard_user',
    senha: 'secret_sauce',
  },
  usuarioBloqueado: {
    usuario: 'locked_out_user',
    senha: 'secret_sauce',
  },
  senhaIncorreta: {
    usuario: 'standard_user',
    senha: 'wrong_password',
  },
  usuarioInexistente: {
    usuario: 'usuario_inexistente',
    senha: 'secret_sauce',
  },
};

export const mensagensErro = {
  usuarioBloqueado:    'Epic sadface: Sorry, this user has been locked out',
  camposVazios:        'Epic sadface: Username is required',
  credenciaisInvalidas: 'Epic sadface: Username and password do not match any user in this service',
};