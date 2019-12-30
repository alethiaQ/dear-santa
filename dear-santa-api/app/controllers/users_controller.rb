class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = set_user
    render json: { id: user.id, name: user.name, email: user.email, gifts: user.gifts.all }
  end

  def create
    user = User.find_or_create_by(email: params[:email])
    # if !user.gifts
    #   user.games.build(user: user)
    # end
    if user
      user.name = params[:name]
      # games = user.sort_games
      render json: { id: user.id, name: user.name, email: user.email, gifts: user.gifts.all }
    else
      render json: user.errors
    end
  end

  # def update
  #   user = User.find_by(id: params[:id])
  #   gift = user.gifts.find(id: params[:id])

  #   if gift.update(params)
  #     render json: user
  #   else
  #     render json: user.errors
  #   end
  # end

  # def destroy
  #   user.destroy
  # end

  private

  def user_params
    params.require(:user).permit(:name, :email, :gifts)
  end

  def set_user
    user = User.find(params[:id])
  end
end
