class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: :create

    def index
        user = User.all
        render json: user
    end

    def show
        user = User.find(session[:user_id])
        render json: user
      end

    def show
        render json: @current_user,  status: 200
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user,  status: :created
    end

    def profile
        profile = User.find_by_username(params[:username])
        render json: profile, serializer: UserSerializer, status: 200
    end

    private 

    def user_params
        params.permit(:username, :password, :profilePicUrl, :email)
    end

    def find_user
        User.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
      end
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
