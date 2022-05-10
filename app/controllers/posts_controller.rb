class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # skip_before_action :authorize, only: :create



    def index
        posts = Post.all
        render json: posts
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end
    
    def render_not_found_response
        render json: { error: "IDK" }, status: :not_found
      end
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    private

    def post_params
        params.permit(:user_id, :image_url, :description)
    end



end
