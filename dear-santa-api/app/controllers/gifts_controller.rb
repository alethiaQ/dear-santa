class GiftsController < ApplicationController
  before_action :set_gift, only: [:show, :update, :destroy]
  #    get /gifts
  def index
    gifts = Gift.all
    render json: gifts, except: [:created_at, :updated_at]
  end

  #   get /gifts/:id
  def show
    render json: @gift.slice(:id, :name, :price, :category, :url, :img)
  end

  # patch gifts/:id
  def update
    if @gift.update(gift_params)
      render json: @gift
    else
      render json: @gift.errors, status: :unprocessable_entity
    end
  end

  # delete /gifts/:id
  def destroy
    @gift.destroy
  end

  private

  def set_gift
    @gift = Gift.find(params[:id])
  end

  def gift_params
    params.require(:gift).permit(:name, :category, :price, :url, :img, :user_id)
  end
end
