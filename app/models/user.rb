class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :comments, through: :post
    

    validates :username, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :username, presence: true
    


end
