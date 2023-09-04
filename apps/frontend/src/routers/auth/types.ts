
//Indicamos que el Token es un objeto para pasarlo al padre y a su children UsuarioPerfil
export type Token = {
    user: {
      user_metadata: {
        user_name: '',
      }
    }
  }
  
 export type PerfilToken = {
    token: Token | null;
  }