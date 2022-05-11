class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :image_url, :description
  belongs_to :user
  has_many :comments 
  has_many :likes






end

  # has_many :users, through: :comments

  # comments.user.username