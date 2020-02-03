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

  def deductFunds
    # current total funds is being grabbed, then we are duducting the price of the added gift to our total and creating a new entry with that amount
    currentAmnt = Fund.last.amount.to_i
    deductAmnt = params[:price]
    amount = currentAmnt - deductAmnt.to_i
    newFund = Fund.create(amount: amount)
    render json: newFund
  end

  def increaseFunds
    # when a gift is deleted from our bag, we add the price of that gift back into our funds total

    currentAmnt = Fund.last.amount.to_i
    increaseAmnt = params[:price].to_i
    newTotal = currentAmnt + increaseAmnt
    newFund = Fund.create(amount: newTotal)
    render json: newFund
  end

  private

  def fund_params
    params.require(:fund).permit(:amount, :id)
  end
end
