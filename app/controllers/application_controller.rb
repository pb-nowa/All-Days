class ApplicationController < ActionController::Base
    
    helper_method :current_user, :logged_in?

    private

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        user.reset_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout!
        current_user.reset_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
        unless current_user
            render json: { errors: ["invalid credentials"] }, status: 401
        end
    end    
end
