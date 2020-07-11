class FelinesController < ApplicationController
    def index 
        @felines = Feline.all 
        render :index 
    end 

    def show 
        @feline = Feline.find(params[:id])
        render :show 
    end

    def new 
        @feline = Feline.new
        render :new 
    end

    def edit
        @feline = Feline.find(params[:id])
        render :edit
    end

    def update
        @feline = Feline.find(params[:id])
        if @feline.update(feline_params)
            redirect_to feline_url(@feline)
        else
            render update: @feline.errors.full_messages
        end
    end

    
    def create
        @feline = Feline.new(feline_params)
        if @feline.save 
            redirect_to feline_url(@feline)
        else
            render create: @feline.errors.full_messages 
        end
    end

    private 

    def feline_params
        params.require(:feline).permit(:birth_date, :color, :name, :sex, :description)
    end
end
