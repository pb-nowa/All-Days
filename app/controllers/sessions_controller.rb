class SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:username], 
            params[:password]
        )
        if @user
            login!(@user)
            render "/"
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user 
            logout!
            render "/"
        else
            render json: ["There is no current user/frontend routes are not working properly"], status: 404
        end
    end
end
