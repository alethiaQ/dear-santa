class GiftsController < ApplicationController
  before_action :set_gift, only: [:show, :update, :destroy]

  def index
    gifts = Gift.all
    render json: gifts
  end

  def show
    render json: @gift.slice(:id, :title, :priority, :category, :due, :amount, :description)
  end

  def create
    @gift = Gift.find_or_create_by(gift_params)
    if @gift
      render json: @gift
    else
      render json: @gift.errors
    end
  end

  def update
    if @gift.update(gift_params)
      render json: @gift
    else
      render json: @gift.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @gift.destroy
  end

  private

  def set_gift
    @gift = Gift.find(params[:id])
  end

  def gift_params
    params.require(:gift).permit(:title, :priority, :category, :due, :amount, :description)
  end
end
