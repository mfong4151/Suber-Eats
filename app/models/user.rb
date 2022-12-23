class User < ApplicationRecord
    has_secure_password
  
    validates :session_token, presence: true, uniqueness: true 
    validates :username, length: {minimum:3, maximum:30}, format: { without: URI::MailTo::EMAIL_REGEXP, message: "Can't be an email" }, uniqueness: true 
    validates :email, length: {minimum:3, maximum:255}, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    validates :password, length: { in: 6..225}, allow_nil: true 
    
  
    #S.P.I.R.E, has_secure_password gives us a password=
  
    before_validation :ensure_session_token 
  
    def self.find_by_credentials(credential, password)
      if credential.include?('@') 
        user = User.find_by(email: credential )
        return user if user && user.authenticate(password)
  
      else 
        user = User.find_by(username: credential )
        return user if user && user.authenticate(password)
      end 
      nil 
    end 
  
    def reset_session_token! 
      self.session_token = generate_unique_session_token
      self.save!
      self.session_token
    end 
  
    private 
  
    def ensure_session_token 
      self.session_token ||= generate_unique_session_token
    end 
  
    def generate_unique_session_token
       
      while true 
        token = SecureRandom::urlsafe_base64 
        return token unless User.exists?(session_token: token)
      end 
      
    end 
  end
  