class FundsController < ApplicationController
  def index
    funds = Fund.all
    render json: funds
  end

  def show
    fund = Fund.last
    render json: fund
  end

  def create
    fund = Fund.find_or_create_by(fund_params)
    if fund
      render json: fund
    else
      render json: fund.errors
    end
  end

  def updateFunds
    fund = Fund.last
    currentAmnt = fund.amount.to_i
    deductAmnt = params[:price]
    amount = currentAmnt - deductAmnt.to_i
    Fund.create(amount: amount)
    render json: amount
  end

  private

  def fund_params
    params.require(:fund).permit(:amount, :id)
  end
end
