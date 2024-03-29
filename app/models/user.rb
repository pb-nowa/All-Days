class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true 
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token
    
    has_one :cart
    
    attr_reader :password 
    
    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            return @user
        end
        nil 
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64 
        save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token = SecureRandom.urlsafe_base64
    end
    




    
end
