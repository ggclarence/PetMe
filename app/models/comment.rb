class Comment < ApplicationRecord
    belongs_to :post
    belongs_to :user

    

    validates :content, presence: true, length: {maximum:30}
    validates :user_id, presence: true
    validates :post_id, presence: true
end
