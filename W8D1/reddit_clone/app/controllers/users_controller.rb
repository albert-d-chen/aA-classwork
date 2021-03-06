class UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            redirect_to user_url(@user)
        else
            flash[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def show
        @user = User.find(params[:id]) 
        render :show
    end

    def destroy
        @user = User.find(params[:id]) 
        if current_user == @user
            @user.destroy
            redirect_to new_user_url
        end
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end
    
    def update
        @user = User.find(params[:id])
        if @user == current_user
            @user.update(user_params)
            redirect_to user_url(@user)
        else
            flash[:errors] = @user.errors.full_messages
            render :edit
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
