class CommentsController < ApplicationController

    def create
        comment = Comment.new(params.require(:comment).permit(:artwork_id, :user_id, :body))
        if comment.save
            render json: comment 
        else 
            render json: comment.errors.full_messages, status: :unprocessable_entity
        end 
    end 

    def destroy
        comment = Comment.find(params[:id]) 
        comment.destroy 
        render json: comment 
    end 

    def index 

        if params[:user_id]
            comments = Comment.where(user_id: params[:user_id])
            render json: comments
        elsif params[:artwork_id]
            comments = Comment.where(artwork_id: params[:artwork_id])
            render json: comments
        else
            comments = Comment.all 
            render json: comments 
        end 
        
    end 
end
