class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:update]
  def index
    @users = User.all
    render json: @users
  end

  def new
    @user = User.new
  end

  def create
    @users = User.create(user_params)
    render json: @users
  end

  def update
    @note.update(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

  def find_user
    @user = User.find(params[:id])
  end
end
