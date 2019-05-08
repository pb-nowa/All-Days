class Api::ShoesController < ApplicationController
    
    def show
        @shoe = Shoe.find_by(id: params[:id])
        if @shoe
            render :show
        else 
            render json: ["Shoe not found"], status: 404
        end
    end
end
