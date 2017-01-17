# GETS ============================================

get '/signup' do
  
	erb :signup
end


# POSTS ============================================

post '/signup' do
 @user = User.new(name: params[:fullname], email: params[:email], password: params[:password] )
  @user.errors.full_messages#¿Qué va en esta parte para ingresar al juego?

  if @user.save
    puts "TRUE"
    puts @user.name
    session[:id] = @user.id
    redirect to "/secret"
  else
    puts "ERROR"
    erb :signin 
  end #¿Qué va en esta parte para registrar al jugador?
	
end



before '/secret'  do
  puts "*" * 50
  if session[:id] == nil
    redirect to '/signin'
  end
end

get '/secret' do
  @user = User.find(session[:id])
  erb :secret
end