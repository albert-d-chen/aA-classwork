class UsersController < ApplicationController
    def show 
        render :show 
    end
    
    def new
        @user = User.new
        render :new 
    end

    def create 
        @user = User.create(user_params)
        
        if @user.save 
            login_user!(@user) 
            redirect_to user_url(@user)
        else 
            render :new
        end
    end


    def user_params
        params.require(:user).permit(:email, :session_token, :password)
    end
end
