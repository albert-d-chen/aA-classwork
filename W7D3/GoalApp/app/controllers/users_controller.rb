class UsersController < ApplicationController
    def index 
        @users = User.all 
        render :index 
    end

    def show 
        @user = User.find(params[:id])
        render :show 
    end

    def create 
        @user = User.new(params.require(:user).permit(:username, :password))
        if @user.save 
            redirect_to user_url(@user)
        else  
            flash.now[:errors] = @user.errors.full_messages
            render :new 
        end
    end
end