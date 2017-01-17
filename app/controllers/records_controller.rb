get '/records' do
  @users = User.all.order(rounds: :desc)
  erb :record
  #¿Qué va en esta parte para obtener la lista de ganadores (juegos ganados)? Ordenados en orden descendente
	
end