# GETS ============================================

get '/signin' do
	erb :signin
end

get '/logout' do
  session.clear
  redirect to '/'
  #¿Qué va en esta parte para cerrar la sesión?
	
end

# POSTS ============================================

post '/signin' do
  
  @email = params[:email]
  @password = params[:pass]
  if User.authenticate(@email, @password)
    @user = User.find_by(email: @email)
    session[:id] = @user.id
    redirect to '/secret'
  else
    redirect to '/signin'
  end

end

