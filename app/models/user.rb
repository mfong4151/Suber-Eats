# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  name            :string           not null
#  phone_number    :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  validates :session_token, presence: true, uniqueness: true 
  validates :username, length: {minimum:3, maximum:30}, format: { without: URI::MailTo::EMAIL_REGEXP, message: "Can't be an email" }, uniqueness: true 
  validates :email, length: {minimum:3, maximum:255}, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
  validates :password, length: { in: 6..225}, allow_nil: true 
  validates :name , presence:true
  validates :phone_number, presence:true, uniqueness: true
  before_validation :ensure_session_token 

  has_many :reviews,
  foreign_key: :user_id,
  class_name: :Review

  has_one :cart,
  foreign_key: :user_id,
  class_name: :Cart

  

  has_many :cart_items,
  through: :cart,
  source: :carted_item




  has_many :reviewed_restaurants,
  through: :reviews,
  source: :reviewed_restaurant,
  dependent: :destroy

  has_many :transactions, 
  foreign_key: :user_id,
  class_name: :Transaction,
  dependent: :destroy



  def self.find_by_credentials(credential, password)
    if credential
      if credential.include?('@') 
        user = User.find_by(email: credential )
    
      elsif credential.count('-') == 2
        user = User.find_by(phone_number: credential )
      else 
        user = User.find_by(username: credential )
      end

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
