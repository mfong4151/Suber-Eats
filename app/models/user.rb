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
  validates :email, length: {minimum:3, maximum:255}, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
  validates :password, length: { in: 6..225}, allow_nil: true 
  validates :name , presence:true
  validates :phone_number, presence:true, uniqueness: true
  validates :latitude, presence:true
  validates :longitude, presence:true
  before_validation :ensure_session_token 
  before_validation :set_default_coordinates, on: :create

  has_many :reviews,
  foreign_key: :user_id,
  class_name: :Review

  has_many :carts,
  foreign_key: :user_id,
  class_name: :Cart,
  dependent: :destroy

  has_many :cart_items,
  through: :carts,  
  source: :carted_item

  has_many :reviewed_restaurants,
  through: :reviews,
  source: :reviewed_restaurant,
  dependent: :destroy

  has_many :transactions, 
  foreign_key: :user_id,
  class_name: :Transaction,
  dependent: :destroy

  has_many :transaction_partners,
  through: :transactions,
  source: :selling_restaurant


  def current_cart
      Cart
      .select(:item_name, :quantity, 'restaurants.name AS rest_name', :menu_item_id, :restaurant_id, :price, "price * quantity AS cart_sum", :address, :id)
      .joins(:carted_item)
      .joins(:cart_owner)
      .joins(:restaurant)
      .where('users.id = ?', self.id.to_s)
      
  end

  
  def self.find_by_credentials(credential, password)
      
      user = nil
  
      if credential && credential.include?('@') 
        user = User.find_by(email: credential )
    
      elsif credential.count('-') == 2
        user = User.find_by(phone_number: credential )
      
      end

      return user if user && user.authenticate(password)

  end 

  def reset_session_token! 
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end 

  private 

    def set_default_coordinates
      sf_lat, sf_long = 37.789739,  -122.408607
      self.latitude ||= sf_lat
      self.longitude ||= sf_long
    end

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
