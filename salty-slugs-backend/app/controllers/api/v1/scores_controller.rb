class Api::V1::ScoresController < ApplicationController
  before_action :find_score, only: [:update]
  def index
    @scores = Score.all
    render json: @scores
  end

  def new
    @score = Score.new
  end

  def create
    @scores = Score.create(score_params)
    render json: @scores
  end

  def update
    @note.update(score_params)
    if @score.save
      render json: @score, status: :accepted
    else
      render json: { errors: @score.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def score_params
    params.permit(:score, :user_id)
  end

  def find_score
    @score = Score.find(params[:user_id])
  end
end
