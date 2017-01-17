get '/score/:user_id' do
  @user = User.find(params[:user_id])
  @rounds = User.find(@user).games

  erb :round
  #¿Qué va en esta parte para obtener la puntuación de cada jugador (submarinos destruidos en cada ronda) y
  #número de juegos ganados?
  
end

post '/games' do
 @user = User.find(params[:user])
  oportunidades = params[:chances]
  score = params[:result]

  if score.to_i == 2
    result = "Winner"
    @user.increment!(:rounds, by =1)
  elsif score.to_i == 1
    result = "Almost"
  elsif score.to_i == 0
    result = "Failed"
  end
  #¿Qué va en esta parte para recibir la información del round actual, el score del jugador, el conteo de las
  @game = Game.new(chances: oportunidades, result: result, submarines: score)
   
  if @game.chances == 4
  @user.games << @game
  end
  #oportunidades de cada jugador, así como la sesión actual?
  #¿Qué va en esta parte para llevar el registro de las puntuaciones por ronda?
end

post '/new_game' do

  if session[:id] == nil
    redirect to '/signin'
  else
    redirect to '/secret'
  end
  #¿Qué va en esta parte para redirigir a secret?
 
end
