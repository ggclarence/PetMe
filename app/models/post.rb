class Post < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_many :posts , through: :comments
    has_many :likes

    validates :description, length: { maximum: 50}
    validates :image_url, presence: true
    validates :image_url, url: { accept_array: true }
    

    # validates :homepage, url: { accept_array: true }
    # https://github.com/perfectline/validates_url  - Validates URL
end
